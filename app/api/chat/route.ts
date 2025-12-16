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
        const ip = req.headers.get("x-forwarded-for") || "unknown"
        if (!checkRateLimit(ip)) {
            return new NextResponse("Too Many Requests", { status: 429 })
        }

        const body = await req.json()
        const { messages } = body

        if (!messages || !Array.isArray(messages)) {
            return new NextResponse("Invalid request body", { status: 400 })
        }

        const apiKey = process.env.HUGGINGFACE_API_KEY
        if (!apiKey) {
            console.error("HUGGINGFACE_API_KEY is missing")
            return new NextResponse("Internal Server Error configuration", { status: 500 })
        }

        const hf = new HfInference(apiKey)

        // Construct formatting for DialoGPT/Conversational models
        // Prepend system prompt to the conversation context
        let prompt = `System: ${SYSTEM_PROMPT}\n\n`

        for (const m of messages) {
            const role = m.sender === "bot" ? "Assistant" : "User"
            prompt += `${role}: ${m.text}\n`
        }
        prompt += "Assistant:"

        // Call Hugging Face API
        // Using microsoft/DialoGPT-large as requested, though Mistral-7B might follow instructions better.
        // Handling rate limits and errors
        try {
            const response = await hf.textGeneration({
                model: 'microsoft/DialoGPT-large',
                inputs: prompt,
                parameters: {
                    max_new_tokens: 200,
                    temperature: 0.7,
                    return_full_text: false
                }
            })

            return NextResponse.json({ message: response.generated_text })

        } catch (apiError: any) {
            console.error("Hugging Face API Error:", apiError)

            // Check for rate limit error (often 429 or 503 if loading)
            if (apiError.message?.includes("Rate limit reached") || apiError.statusCode === 429) {
                return NextResponse.json(
                    { message: "I'm receiving too many messages right now. Please try again in an hour." },
                    { status: 429 }
                )
            }

            // Check for model loading error (503)
            if (apiError.statusCode === 503) {
                return NextResponse.json(
                    { message: "I'm waking up from sleep mode. Please try again in 30 seconds." },
                    { status: 503 }
                )
            }

            throw apiError
        }

    } catch (error) {
        console.error("[CHAT_ERROR]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
