import { NextResponse } from "next/server"

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

        const apiKey = process.env.ANTHROPIC_API_KEY
        if (!apiKey) {
            console.error("ANTHROPIC_API_KEY is missing")
            return new NextResponse("Internal Server Error", { status: 500 })
        }

        // Call Anthropic API
        const response = await fetch("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
                "x-api-key": apiKey,
                "anthropic-version": "2023-06-01",
                "content-type": "application/json",
            },
            body: JSON.stringify({
                model: "claude-3-5-sonnet-20240620",
                max_tokens: 1024,
                system: SYSTEM_PROMPT,
                messages: messages.map((m: any) => ({
                    role: m.sender === "bot" ? "assistant" : "user",
                    content: m.text,
                })),
            }),
        })

        if (!response.ok) {
            const error = await response.text()
            console.error("Anthropic API Error:", error)
            return new NextResponse("Error calling AI provider", { status: 500 })
        }

        const data = await response.json()
        const aiMessage = data.content[0].text

        return NextResponse.json({ message: aiMessage })
    } catch (error) {
        console.error("[CHAT_ERROR]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}
