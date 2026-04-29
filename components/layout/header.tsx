"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, Menu } from "lucide-react"
import { motion, AnimatePresence, Variants } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { services as servicesData } from "@/lib/services-data"

const services = servicesData.filter(s => !s.parentService).map(s => ({
    name: s.title,
    href: `/services/${s.slug}`,
    isComingSoon: s.status === 'coming-soon'
}))

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 60)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    React.useEffect(() => { setMobileOpen(false) }, [pathname])

    // Prevent body scroll when mobile menu is open
    React.useEffect(() => {
        if (mobileOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "unset"
        return () => { document.body.style.overflow = "unset" }
    }, [mobileOpen])

    const mobileMenuVariants: Variants = {
        closed: { x: "100%", transition: { type: "tween", duration: 0.3 } },
        open: { 
            x: 0, 
            transition: { 
                type: "tween", 
                duration: 0.3,
                staggerChildren: 0.06,
                delayChildren: 0.1
            } 
        }
    }

    const mobileLinkVariants: Variants = {
        closed: { x: 20, opacity: 0 },
        open: { x: 0, opacity: 1, transition: { type: "spring", bounce: 0 } }
    }

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                "bg-base/80 backdrop-blur-md",
                isScrolled ? "border-b border-border backdrop-blur-lg" : "border-b-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center">
                    <span className="font-display font-bold text-xl tracking-tight flex items-baseline text-text-primary">
                        STRATUM
                        <motion.span 
                            animate={{ scale: [1, 1.3, 1] }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full bg-accent inline-block ml-1"
                        />
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-7 lg:gap-9 text-sm">
                    <Link
                        href="/"
                        className={cn("hover-underline-animation transition-colors py-1", pathname === "/" ? "text-accent" : "text-text-muted hover:text-text-primary")}
                    >
                        Home
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className={cn("hover-underline-animation transition-colors py-1 flex items-center gap-1 focus:outline-none", pathname.includes("/services") ? "text-accent" : "text-text-muted hover:text-text-primary")}>
                            Services
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-64 bg-surface-raised border-border text-text-primary">
                            {services.map((service) => (
                                <DropdownMenuItem key={service.href} asChild className="focus:bg-border focus:text-accent cursor-pointer">
                                    <Link href={service.href} className="flex items-center justify-between w-full">
                                        <span>{service.name}</span>
                                        {service.isComingSoon && (
                                            <Badge variant="outline" className="ml-2 text-[10px] border-accent/20 text-accent bg-accent/5">Coming Soon</Badge>
                                        )}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/portfolio" className={cn("hover-underline-animation transition-colors py-1", pathname === "/portfolio" ? "text-accent" : "text-text-muted hover:text-text-primary")}>
                        Portfolio
                    </Link>
                    <Link href="/blog" className={cn("hover-underline-animation transition-colors py-1", pathname === "/blog" ? "text-accent" : "text-text-muted hover:text-text-primary")}>
                        Blog
                    </Link>
                    <Link href="/contact" className={cn("hover-underline-animation transition-colors py-1", pathname === "/contact" ? "text-accent" : "text-text-muted hover:text-text-primary")}>
                        Contact
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <Button 
                        asChild 
                        className="rounded-full bg-accent text-base font-semibold hover:bg-accent hover:shadow-[0_0_20px_var(--color-accent-glow)] transition-all duration-300"
                    >
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>

                {/* Mobile: Animated Menu / X toggle */}
                <button
                    onClick={() => setMobileOpen((o) => !o)}
                    className="md:hidden relative h-10 w-10 flex items-center justify-center rounded-md text-text-primary hover:bg-surface-raised transition-colors z-[60]"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {mobileOpen ? (
                            <motion.span
                                key="x"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                className="absolute"
                            >
                                <X className="h-6 w-6" />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.18 }}
                                className="absolute"
                            >
                                <Menu className="h-6 w-6" />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Slide-in Panel */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] md:hidden"
                        />
                        <motion.div
                            key="mobile-menu"
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed inset-y-0 right-0 w-[300px] border-l border-border bg-surface/95 backdrop-blur-xl shadow-2xl z-[55] md:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
                        >
                            <div className="flex flex-col gap-6">
                                <motion.div variants={mobileLinkVariants}>
                                    <Link href="/" className="text-xl font-display font-medium text-text-primary hover:text-accent transition-colors">Home</Link>
                                </motion.div>

                                <motion.div variants={mobileLinkVariants} className="flex flex-col gap-3">
                                    <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">Services</span>
                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="flex items-center justify-between text-base text-text-muted hover:text-accent transition-colors"
                                        >
                                            <span>{service.name}</span>
                                            {service.isComingSoon && (
                                                <Badge variant="outline" className="text-[10px] border-accent/20 text-accent bg-accent/5">Soon</Badge>
                                            )}
                                        </Link>
                                    ))}
                                </motion.div>

                                <motion.div variants={mobileLinkVariants}>
                                    <Link href="/portfolio" className="text-xl font-display font-medium text-text-primary hover:text-accent transition-colors">Portfolio</Link>
                                </motion.div>
                                <motion.div variants={mobileLinkVariants}>
                                    <Link href="/blog" className="text-xl font-display font-medium text-text-primary hover:text-accent transition-colors">Blog</Link>
                                </motion.div>
                                <motion.div variants={mobileLinkVariants}>
                                    <Link href="/contact" className="text-xl font-display font-medium text-text-primary hover:text-accent transition-colors">Contact</Link>
                                </motion.div>

                                <motion.div variants={mobileLinkVariants} className="flex items-center justify-between pt-6 border-t border-border">
                                    <span className="text-sm text-text-muted">Theme</span>
                                    <ThemeToggle />
                                </motion.div>

                                <motion.div variants={mobileLinkVariants} className="mt-8">
                                    <Button asChild className="w-full rounded-full bg-accent text-base hover:bg-accent hover:shadow-[0_0_20px_var(--color-accent-glow)] transition-all">
                                        <Link href="/contact">Get in Touch</Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
