import Link from "next/link"
import { Zap, Github, Twitter, Linkedin, MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { services as servicesData } from "@/lib/services-data"

export function Footer() {
    return (
        <footer className="border-t bg-background text-foreground">
            <div className="container py-12 md:py-16 lg:py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: About */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Zap className="h-6 w-6 text-primary" />
                            <span className="font-bold text-xl tracking-tight">LIGHTSPEED</span>
                        </Link>
                        <p className="text-muted-foreground text-sm">
                            Complete Infrastructure Solutions. We build the foundation for your digital success.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">Services</h3>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            {servicesData.slice(0, 6).map((service) => (
                                <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-primary transition-colors">
                                    {service.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Company */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">Company</h3>
                        <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link>
                            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
                            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                            <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
                        </nav>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold">Contact</h3>
                        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <p>
                                <span className="block font-medium text-foreground">Email</span>
                                <a href="mailto:omoshofcourse@gmail.com" className="hover:text-primary transition-colors">omoshofcourse@gmail.com</a>
                            </p>
                            <p>
                                <span className="block font-medium text-foreground">Phone</span>
                                <a href="tel:+254750285341" className="hover:text-primary transition-colors">+254 750 285 341</a>
                                <span className="block text-muted-foreground mt-1">
                                    <a href="tel:+254115217699" className="hover:text-primary transition-colors">+254 115 217 699</a>
                                </span>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="block font-medium text-foreground">WhatsApp</span>
                                <a
                                    href="https://wa.me/254115217699?text=Hi!%20I%27m%20interested%20in%20Lightspeed%20services.%20I%27d%20like%20to%20discuss:"
                                    className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                                >
                                    <MessageCircle className="h-4 w-4" style={{ color: '#25D366' }} />
                                    <span>0115 217 699</span>
                                </a>
                            </p>
                            <p>
                                <span className="block font-medium text-foreground">Office</span>
                                Busia, Busia County, Kenya
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 lg:mt-20 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2024 Lightspeed. All rights reserved.</p>
                    <nav className="flex gap-6">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
