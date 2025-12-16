"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional().refine((val) => {
        if (!val) return true
        // Basic Kenya phone validation (start with +254 or 07 or 01)
        return /^(\+254|0)[17]\d{8}$/.test(val.replace(/\s/g, ""))
    }, { message: "Please enter a valid Kenyan phone number." }),
    service: z.string().min(1, { message: "Please select a service." }),
    message: z.string().min(20, {
        message: "Message must be at least 20 characters.",
    }).max(1000, {
        message: "Message cannot exceed 1000 characters.",
    }),
    _honey: z.string().optional(),
})

const SERVICES = [
    "Network Infrastructure",
    "Smart Home Automation",
    "Security Systems",
    "Business Solutions",
    "Computer Services",
    "Network Consulting",
    "Not Sure"
]

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
            _honey: "",
        },
        mode: "onBlur",
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                throw new Error("Failed to submit form")
            }

            // Improve User Experience with artificial delay if request is too fast
            await new Promise(resolve => setTimeout(resolve, 1000))

            setIsSuccess(true)
            form.reset()

            // Reset success state after 5 seconds
            setTimeout(() => {
                setIsSuccess(false)
            }, 5000)

        } catch (err) {
            console.error(err)
            setError("Something went wrong. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center p-8 bg-green-50/10 border border-green-500/20 rounded-xl text-center space-y-4"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center"
                >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-green-500">Message Sent!</h3>
                <p className="text-muted-foreground">
                    Thanks for reaching out! We&apos;ve received your message and will respond within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                    Send another message
                </Button>
            </motion.div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {error && (
                    <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <motion.div whileFocus={{ scale: 1.01 }}>
                                    <Input placeholder="John Doe" {...field} className="h-11 transition-all focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                                </motion.div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <motion.div whileFocus={{ scale: 1.01 }}>
                                        <Input type="email" placeholder="john@example.com" {...field} className="h-11 transition-all focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                                    </motion.div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone Number (Optional)</FormLabel>
                                <FormControl>
                                    <motion.div whileFocus={{ scale: 1.01 }}>
                                        <Input placeholder="+254 712 345 678" {...field} className="h-11 transition-all focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                                    </motion.div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Service Interested In <span className="text-red-500">*</span></FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="h-11">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {SERVICES.map((service) => (
                                        <SelectItem key={service} value={service}>
                                            {service}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message <span className="text-red-500">*</span></FormLabel>
                            <FormControl>
                                <motion.div whileFocus={{ scale: 1.01 }}>
                                    <Textarea
                                        placeholder="Tell us about your project..."
                                        className="min-h-[120px] transition-all focus:ring-2 focus:ring-primary/50 focus:border-primary"
                                        {...field}
                                    />
                                </motion.div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="_honey"
                    render={({ field }) => (
                        <FormItem className="hidden">
                            <FormControl>
                                <Input {...field} tabIndex={-1} autoComplete="off" />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full"
                    disabled={!form.formState.isValid || isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        "Send Message"
                    )}
                </Button>
            </form>
        </Form >
    )
}
