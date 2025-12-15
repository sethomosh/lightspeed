import { z } from "zod"

const envSchema = z.object({
    ANTHROPIC_API_KEY: z.string().min(1, "ANTHROPIC_API_KEY is required"),
    RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
    NEXT_PUBLIC_SITE_URL: z.string().url("NEXT_PUBLIC_SITE_URL must be a valid URL"),
    CALENDLY_URL: z.string().url("CALENDLY_URL must be a valid URL").optional(),
    CONTACT_EMAIL: z.string().email("CONTACT_EMAIL must be a valid email").optional(),
})

export const env = envSchema.parse({
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    CALENDLY_URL: process.env.CALENDLY_URL,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
})
