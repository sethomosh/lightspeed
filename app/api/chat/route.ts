import { NextResponse } from "next/server"
import { HfInference } from "@huggingface/inference"

// Simple in-memory rate limiter
const rateLimit = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 10

function checkRateLimit(ip: string): boolean {
    const now = Date.now()
    const requests = rateLimit.get(ip) || []

    // Clean up old requests
    const recentRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW)

    if (recentRequests.length >= MAX_REQUESTS) {
        return false
    }

    recentRequests.push(now)
    rateLimit.set(ip, recentRequests)
    return true
}

const SYSTEM_PROMPT = `
You are a helpful assistant for Lightspeed, a technical services company in Kenya.

Services offered:
1. Network Infrastructure - design, installation, optimization
2. Smart Home Automation - automation systems, smart devices
3. Security Systems - CCTV, alarms, access control
4. Business Solutions - web apps, automation, CTO consulting
5. Computer Services - setup, installation, support
6. Network Consulting - WiFi, troubleshooting, optimization

Your role:
- Understand what the customer needs
- Ask clarifying questions if needed
- Suggest the relevant service(s)
- Be friendly, professional, and concise
- Collect: problem description, location, timeline, budget range
- After gathering info, encourage booking a consultation

Guidelines:
- Keep responses under 150 words
- Be conversational, not robotic
- Show enthusiasm about solving their problem
- Don't make promises about pricing (say "depends on requirements")
- If unsure, recommend consultation call

Current date: ${new Date().toLocaleDateString()}
`

export async function POST(req: Request) {
    try {
        // Rate Limiting
        const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
        if (!checkRateLimit(ip)) {
            return NextResponse.json(
                { message: "Too many requests. Please try again later." },
                { status: 429 }
            )
        }

        let body
        try {
            body = await req.json()
        } catch (parseError) {
            console.error("[CHAT_ERROR] Failed to parse request body:", parseError)
            return NextResponse.json(
                { message: "Invalid request format. Please try again." },
                { status: 400 }
            )
        }

        const { messages } = body

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { message: "Invalid request body. Messages array is required." },
                { status: 400 }
            )
        }

        const apiKey = process.env.HUGGINGFACE_API_KEY
        if (!apiKey) {
            console.error("[CHAT_ERROR] HUGGINGFACE_API_KEY is missing from environment variables")
            return NextResponse.json(
                { message: "Chat service is currently unavailable. Please contact us at hello@lightspeed.tech." },
                { status: 500 }
            )
        }

        let hf
        try {
            hf = new HfInference(apiKey)
        } catch (initError: any) {
            console.error("[CHAT_ERROR] Failed to initialize HfInference:", initError)
            return NextResponse.json(
                { message: "Chat service initialization failed. Please contact us at hello@lightspeed.tech." },
                { status: 500 }
            )
        }

        // Construct formatting for DialoGPT/Conversational models
        // Prepend system prompt to the conversation context
        let prompt = `System: ${SYSTEM_PROMPT}\n\n`

        for (const m of messages) {
            const role = m.sender === "bot" ? "Assistant" : "User"
            prompt += `${role}: ${m.text}\n`
        }
        prompt += "Assistant:"

        // Call Hugging Face API
        // Try simpler, more reliable models that are commonly available
        // Note: Some models may require specific access or may be rate-limited
        const modelsToTry = [
            'gpt2', // Simple, always available model for testing
            'microsoft/DialoGPT-medium', // Smaller than large, more likely to be available
            'microsoft/DialoGPT-large' // Fallback
        ]
        
        let lastError: any = null
        
        for (const modelName of modelsToTry) {
            try {
                console.log(`[CHAT_DEBUG] Trying model: ${modelName}`)
                console.log("[CHAT_DEBUG] Prompt length:", prompt.length)
                
                // Use the standard prompt format for all models
                // Most Hugging Face models work with simple text prompts
                const response = await hf.textGeneration({
                    model: modelName,
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: 150, // Reduced for faster response
                        temperature: 0.7,
                        return_full_text: false,
                        do_sample: true
                    }
                })
                
                console.log(`[CHAT_DEBUG] Raw response from ${modelName}:`, response)

                console.log(`[CHAT_DEBUG] Success with model: ${modelName}`)
                console.log("[CHAT_DEBUG] Hugging Face API Response:", {
                    hasGeneratedText: !!response.generated_text,
                    responseType: typeof response,
                    responseKeys: Object.keys(response)
                })

                // Clean up the response text
                let generatedText = response.generated_text?.trim() || ""
                // Remove any trailing "Assistant:" or model-specific markers if present
                generatedText = generatedText
                    .replace(/^Assistant:\s*/i, "")
                    .replace(/<\|assistant\|>\s*/gi, "")
                    .replace(/<\|end\|>\s*/gi, "")
                    .trim()
                
                if (!generatedText) {
                    console.error(`[CHAT_ERROR] Empty response from model ${modelName}. Full response:`, response)
                    throw new Error("Empty response from API")
                }

                return NextResponse.json({ message: generatedText })
                
            } catch (modelError: any) {
                // Log the full error structure to understand what's happening
                console.error(`[CHAT_ERROR] Model ${modelName} failed:`)
                console.error(`[CHAT_ERROR] Error message:`, modelError?.message)
                console.error(`[CHAT_ERROR] Error status:`, modelError?.status)
                console.error(`[CHAT_ERROR] Error statusCode:`, modelError?.statusCode)
                console.error(`[CHAT_ERROR] Error response:`, modelError?.response)
                console.error(`[CHAT_ERROR] Full error object:`, JSON.stringify(modelError, Object.getOwnPropertyNames(modelError), 2))
                
                lastError = modelError
                // Try next model
                continue
            }
        }
        
        // If we get here, all models failed
        console.error("[CHAT_ERROR] All models failed, using last error:", lastError)
        throw lastError || new Error("All models failed")

    } catch (apiError: any) {
        // Extract error details from various possible structures
        // The Hugging Face SDK might wrap errors differently
        const errorMessage = apiError?.message || 
                            apiError?.error?.message || 
                            apiError?.error || 
                            apiError?.response?.error || 
                            apiError?.data?.error ||
                            String(apiError)
        
        const statusCode = apiError?.statusCode || 
                          apiError?.status || 
                          apiError?.response?.status || 
                          apiError?.response?.statusCode ||
                          apiError?.error?.status ||
                          apiError?.data?.status
        
        const status = apiError?.status || statusCode
        
        // Try to stringify the error for logging - check multiple possible structures
        let errorString = "Unknown error"
        try {
            // Try to get the full error object
            const errorToLog = apiError?.response || apiError?.error || apiError?.data || apiError
            errorString = JSON.stringify(errorToLog, Object.getOwnPropertyNames(errorToLog), 2)
        } catch (e) {
            errorString = String(apiError)
        }
        
        // Log the raw error first
        console.error("[CHAT_ERROR] Raw Hugging Face API Error Object:", apiError)
        console.error("[CHAT_ERROR] Hugging Face API Error Details:", {
            message: errorMessage,
            statusCode,
            status,
            error: apiError,
            errorString,
            errorType: typeof apiError,
            errorConstructor: apiError?.constructor?.name,
            hasResponse: !!apiError?.response,
            hasError: !!apiError?.error,
            hasData: !!apiError?.data,
            stack: apiError?.stack
        })

        // Check for rate limit error (often 429 or 503 if loading)
        if (errorMessage?.includes("Rate limit") || 
            errorMessage?.includes("rate limit") ||
            statusCode === 429 || 
            status === 429) {
            return NextResponse.json(
                { message: "I'm receiving too many messages right now. Please try again in a few minutes." },
                { status: 429 }
            )
        }

        // Check for model loading error (503) - this is common with Hugging Face Inference API
        // Check multiple possible error structures
        const is503 = statusCode === 503 || 
                     status === 503 ||
                     apiError?.response?.status === 503 ||
                     apiError?.response?.statusCode === 503 ||
                     errorMessage?.includes("503") ||
                     errorMessage?.includes("Service Unavailable") ||
                     errorMessage?.includes("service unavailable") ||
                     errorMessage?.includes("model is currently loading") ||
                     errorMessage?.includes("loading") ||
                     errorMessage?.toLowerCase().includes("unavailable")
        
        if (is503) {
            console.error("[CHAT_ERROR] Model is loading (503) - this is normal for cold starts")
            console.error("[CHAT_ERROR] 503 Error details:", {
                statusCode,
                status,
                responseStatus: apiError?.response?.status,
                errorMessage
            })
            return NextResponse.json(
                { message: "I'm waking up from sleep mode. Please try again in 30-60 seconds." },
                { status: 503 }
            )
        }

        // Check for authentication errors
        if (statusCode === 401 || status === 401 || 
            errorMessage?.includes("Unauthorized") ||
            errorMessage?.includes("authentication") ||
            errorMessage?.includes("401")) {
            console.error("[CHAT_ERROR] Authentication failed - check HUGGINGFACE_API_KEY")
            return NextResponse.json(
                { message: "Chat service configuration error. Please contact us at hello@lightspeed.tech." },
                { status: 500 }
            )
        }

        // Check for model not found or unavailable
        if (errorMessage?.includes("Model") && errorMessage?.includes("not found")) {
            return NextResponse.json(
                { message: "The chat model is currently unavailable. Please try again later or contact us at hello@lightspeed.tech." },
                { status: 503 }
            )
        }

        // Check for network errors
        if (errorMessage?.includes("fetch") || errorMessage?.includes("network") || errorMessage?.includes("ECONNREFUSED")) {
            return NextResponse.json(
                { message: "Unable to connect to the chat service. Please check your connection and try again." },
                { status: 503 }
            )
        }

        // Check for timeout errors
        if (errorMessage?.includes("timeout") || errorMessage?.includes("ETIMEDOUT")) {
            return NextResponse.json(
                { message: "The chat service took too long to respond. Please try again." },
                { status: 504 }
            )
        }

        // For any other API error, return a user-friendly message instead of rethrowing
        console.error("[CHAT_ERROR] Unhandled Hugging Face API error - returning generic error")
        return NextResponse.json(
            { message: "I'm having trouble processing your request. The AI service may be temporarily unavailable. Please try again in a moment or contact us at hello@lightspeed.tech." },
            { status: 503 }
        )
    }
}
