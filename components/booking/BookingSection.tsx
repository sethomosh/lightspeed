"use client"

import { useEffect, useState } from "react"
import { Loader2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BookingSectionProps {
    calendlyUrl: string
    theme?: 'light' | 'dark'
}

export function BookingSection({ calendlyUrl, theme = 'light' }: BookingSectionProps) {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true

        script.onload = () => {
            setIsLoading(false)
        }

        script.onerror = () => {
            setError(true)
            setIsLoading(false)
        }

        document.body.appendChild(script)

        return () => {
            // Cleanup script on unmount if requested, 
            // though usually we leave it as it might be used elsewhere or caught in cache
            if (document.body.contains(script)) {
                document.body.removeChild(script)
            }
        }
    }, [])

    return (
        <section className="py-20 bg-background border-t">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                        Book Your Free Consultation
                    </h2>
                    <p className="text-muted-foreground md:text-xl max-w-[600px] mx-auto">
                        Ready to upgrade your infrastructure? Schedule a 30-minute call to discuss your technical needs.
                    </p>
                </div>

                <div className="relative w-full min-h-[700px] bg-card rounded-xl border shadow-sm overflow-hidden">
                    {/* Loading State */}
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10">
                            <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                            <p className="text-muted-foreground">Loading calendar...</p>
                        </div>
                    )}

                    {/* Calendly Inline Widget */}
                    {!error && (
                        <div
                            className="calendly-inline-widget w-full h-[700px]"
                            data-url={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1${theme === 'dark' ? '&background_color=1a1a1a&text_color=ffffff&primary_color=3b82f6' : ''}`}
                        />
                    )}

                    {/* Error / Fallback State */}
                    {error && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10 p-6 text-center">
                            <Calendar className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Unable to load calendar</h3>
                            <p className="text-muted-foreground mb-6">
                                Please try refreshing the page or book directly via the link below.
                            </p>
                            <Button asChild size="lg">
                                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                                    Book on Calendly
                                </a>
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
