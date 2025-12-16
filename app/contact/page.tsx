import type { Metadata } from 'next'
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/contact/ContactForm'

export const metadata: Metadata = {
    title: 'Contact Us | Lightspeed',
    description: 'Get in touch with Lightspeed for infrastructure, security, and business solutions. We are ready to help you scale.',
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary/5 py-24 md:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                            Get in Touch
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground md:text-xl">
                            Have a project in mind or need technical support?
                            We&apos;d love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container px-4 md:px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">

                    {/* Left Column - Contact Info (40% roughly, using grid col span) */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Let&apos;s Talk</h2>
                            <p className="text-muted-foreground mb-8">
                                Fill out the form or use one of the contact methods below.
                                We typically respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a
                                href="mailto:omoshofcourse@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-muted/50 transition-colors group"
                            >
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Email Us</p>
                                    <p className="text-sm text-muted-foreground">omoshofcourse@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+254750285341"
                                className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-muted/50 transition-colors group"
                            >
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Call Us</p>
                                    <p className="text-sm text-muted-foreground">+254 750 285 341</p>
                                    <p className="text-sm text-muted-foreground">+254 115 217 699</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 p-4 rounded-xl border bg-card/50">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium">Visit Us</p>
                                    <p className="text-sm text-muted-foreground">Busia, Busia County, Kenya</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t">
                            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-muted-foreground">Connect</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                                <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                                    <Twitter className="h-5 w-5" />
                                    <span className="sr-only">Twitter</span>
                                </a>
                                <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://calendly.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button size="lg" className="w-full gap-2" variant="outline">
                                    Book a Call <ExternalLink className="h-4 w-4" />
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Form (60% roughly) */}
                    <div className="lg:col-span-3">
                        <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
                            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
