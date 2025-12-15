import { NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiter (3 req/hour)
const rateLimit = new Map<string, { count: number; expiresAt: number }>()

// Validation schema matching the client, plus honeypot
const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    service: z.string(),
    message: z.string().min(20).max(1000),
    _honey: z.string().optional(), // Honeypot field
})

export async function POST(req: Request) {
    try {
        const ip = req.headers.get("x-forwarded-for") || "unknown"
        const now = Date.now()

        // --- 1. Strict Rate Limiting (3/hour) ---
        const limitData = rateLimit.get(ip)
        if (limitData && now < limitData.expiresAt) {
            if (limitData.count >= 3) {
                return NextResponse.json(
                    { error: "Too many requests. Please try again in an hour." },
                    { status: 429 }
                )
            }
            limitData.count++
        } else {
            rateLimit.set(ip, { count: 1, expiresAt: now + 60 * 60 * 1000 }) // 1 hour window
        }

        // Cleanup
        if (rateLimit.size > 1000) {
            Array.from(rateLimit.entries()).forEach(([key, value]) => {
                if (now > value.expiresAt) rateLimit.delete(key)
            })
        }

        // --- 2. Validation & Honeypot ---
        const body = await req.json()
        const result = contactSchema.safeParse(body)

        if (!result.success) {
            return NextResponse.json(
                { error: "Invalid form data" },
                { status: 400 }
            )
        }

        // Check honeypot - if filled, it's a bot. Fail silently (return success).
        if (result.data._honey) {
            console.log(`Spam detected from IP: ${ip}`)
            return NextResponse.json({ success: true, message: "Message sent" })
        }

        const { name, email, phone, service, message } = result.data

        // --- 3. Send Email via Resend ---
        if (!process.env.RESEND_API_KEY) {
            console.error("Missing RESEND_API_KEY")
            return NextResponse.json(
                { error: "Server configuration error" },
                { status: 500 }
            )
        }

        const emailContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: sans-serif; color: #333; line-height: 1.6; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; }
                    .header { background: #000; color: #fff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
                    .content { padding: 20px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #666; font-size: 0.9em; text-transform: uppercase; }
                    .value { margin-top: 5px; font-size: 1.1em; }
                    .footer { text-align: center; font-size: 0.8em; color: #999; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="margin:0;">New Inquiry</h1>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Name</div>
                            <div class="value">${name}</div>
                        </div>
                        <div class="field">
                            <div class="label">Email</div>
                            <div class="value"><a href="mailto:${email}">${email}</a></div>
                        </div>
                        <div class="field">
                            <div class="label">Phone</div>
                            <div class="value">${phone || "Not provided"}</div>
                        </div>
                        <div class="field">
                            <div class="label">Service</div>
                            <div class="value">${service}</div>
                        </div>
                        <div class="field">
                            <div class="label">Message</div>
                            <div class="value" style="white-space: pre-wrap;">${message}</div>
                        </div>
                    </div>
                    <div class="footer">
                        Sent from lightspeed.tech contact form • IP: ${ip}
                    </div>
                </div>
            </body>
            </html>
        `

        const data = await resend.emails.send({
            from: "Lightspeed Contact <onboarding@resend.dev>", // Or your verified domain
            to: ["omoshofcourse@gmail.com"],
            subject: `New Contact Form: ${service}`,
            html: emailContent,
            replyTo: email, // Allow direct reply
        })

        if (data.error) {
            console.error("Resend Error:", data.error)
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            )
        }

        return NextResponse.json({ success: true, message: "Message sent successfully" })

    } catch (error) {
        console.error("Contact API Error:", error)
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        )
    }
}
