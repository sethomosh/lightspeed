import Link from "next/link"
import { Github, Twitter, Linkedin, MapPin } from "lucide-react"

import { services as servicesData } from "@/lib/services-data"

export function Footer() {
    return (
        <footer className="border-t border-brand bg-base text-text-primary z-10 relative py-16">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Column 1: Info */}
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <Link href="/" className="inline-flex items-center gap-3 group">
                                    {/* Inline mark */}
                                    <svg
                                        width="36" height="33"
                                        viewBox="0 0 36 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="shrink-0"
                                    >
                                        <rect x="0" y="0" width="36" height="7" rx="3.5" fill="#1B3A6B" className="dark:fill-white"/>
                                        <rect x="0" y="13" width="28" height="7" rx="3.5" fill="#1B3A6B" className="dark:fill-white"/>
                                        <rect x="0" y="26" width="20" height="7" rx="3.5" fill="#E8420A"/>
                                    </svg>
                                    {/* Wordmark */}
                                    <span className="font-display font-bold text-[20px] tracking-[-0.02em] text-prussian dark:text-[#F0F0EE]" style={{ fontVariationSettings: "'wdth' 125" }}>
                                        stratum
                                    </span>
                                </Link>
                            </div>
                        <p className="text-text-muted-brand font-body text-[14px] leading-relaxed">
                            Systems that don&apos;t need babysitting.
                        </p>
                        <div className="flex items-center gap-2 font-body text-[13px] font-500 text-prussian mt-4">
                            <MapPin className="h-[14px] w-[14px] text-prussian" />
                            Nairobi, Kenya
                        </div>
                        
                        <div className="flex gap-3 mt-6">
                            {[
                                { icon: Linkedin, label: "LinkedIn", href: "#" },
                                { icon: Twitter, label: "Twitter", href: "#" },
                                { icon: Github, label: "GitHub", href: "#" },
                            ].map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="h-9 w-9 flex items-center justify-center rounded-full border border-brand bg-surface-raised text-text-secondary hover:border-prussian/40 hover:text-prussian transition-all duration-200"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-4 w-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-[11px] font-700 uppercase tracking-widest text-text-muted-brand">
                            Services
                        </h3>
                        <nav className="flex flex-col gap-3">
                            {servicesData.filter(s => !s.parentService).slice(0, 6).map((service) => (
                                <Link 
                                    key={service.slug} 
                                    href={`/services/${service.slug}`} 
                                    className="font-body text-[14px] text-text-secondary hover:text-prussian transition-colors duration-150"
                                >
                                    {service.title}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Company */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-[11px] font-700 uppercase tracking-widest text-text-muted-brand">
                            Company
                        </h3>
                        <nav className="flex flex-col gap-3">
                            {[
                                { name: "About Us", href: "/#about" },
                                { name: "Our Work", href: "/portfolio" },
                                { name: "Blog", href: "/blog" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    className="font-body text-[14px] text-text-secondary hover:text-prussian transition-colors duration-150"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-display text-[11px] font-700 uppercase tracking-widest text-text-muted-brand">
                            Contact
                        </h3>
                        <div className="flex flex-col gap-3 font-body text-[14px] text-text-secondary">
                            <p>
                                <span className="block font-medium text-prussian mb-1">Email</span>
                                <a href="mailto:stratumsystemsandsolutions@gmail.com" className="hover:text-prussian transition-colors">
                                    stratumsystemsandsolutions@gmail.com
                                </a>
                            </p>
                            <div>
                                <span className="block font-medium text-prussian mb-1">WhatsApp</span>
                                <div className="flex flex-col gap-1">
                                    <a href="https://wa.me/254115217699" className="hover:text-prussian transition-colors">
                                        +254 115 217 699 (Primary)
                                    </a>
                                    <a href="https://wa.me/254750285341" className="hover:text-prussian transition-colors">
                                        +254 750 285 341 (Secondary)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-brand flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] font-body text-text-subtle">
                    <p>© {new Date().getFullYear()} Stratum Systems</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-prussian transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-prussian transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
