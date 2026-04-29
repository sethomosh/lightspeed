"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, Menu } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { useTheme } from "next-themes"
import { ChevronDown, ChevronRight } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

const services = [
    { name: "Network Solutions", description: "Business & home network infrastructure", href: "/services/network-solutions" },
    { name: "Smart Home & Automation", description: "Intelligent home control systems", href: "/services/smart-home-automation" },
    { name: "Security Systems", description: "CCTV, NAS & access control", href: "/services/security-systems" },
    { name: "DevOps Consulting", description: "Infrastructure automation & CI/CD", href: "/services/devops-consulting" },
    { name: "Business Solutions", description: "Custom software & API integrations", href: "/services/business-solutions" },
    { name: "Computer Solutions", description: "Workstations, servers & storage", href: "/services/computer-solutions" },
]

export function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [mounted, setMounted] = React.useState(false)
    const pathname = usePathname()
    const { scrollY } = useScroll()
    const { theme, resolvedTheme } = useTheme()
    const currentTheme = theme === "system" ? resolvedTheme : theme
    const [servicesMobileOpen, setServicesMobileOpen] = React.useState(false)

    React.useEffect(() => setMounted(true), [])
    
    // Config for scroll bg based on theme
    const bgLight = "rgba(255, 255, 255, 0.9)"
    const bgDark = "rgba(17, 17, 16, 0.9)"
    const scrollBg = currentTheme === "dark" ? bgDark : bgLight
    
    // Border appears on scroll > 40px
    const borderOpacity = useTransform(scrollY, [0, 40], [0, 1])
    const backgroundColor = useTransform(scrollY, [0, 40], ["rgba(255, 255, 255, 0)", scrollBg])

    React.useEffect(() => { setMobileOpen(false) }, [pathname])

    React.useEffect(() => {
        if (mobileOpen) document.body.style.overflow = "hidden"
        else document.body.style.overflow = "unset"
        return () => { document.body.style.overflow = "unset" }
    }, [mobileOpen])

    return (
        <motion.header
            style={{ backgroundColor }}
            className={cn(
                "fixed top-0 z-50 w-full transition-colors duration-300 backdrop-blur-md",
            )}
        >
            <motion.div 
                style={{ opacity: borderOpacity }}
                className={cn(
                    "absolute inset-x-0 bottom-0 border-b",
                    currentTheme === "dark" ? "border-white/5" : "border-brand"
                )}
            />
            
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Inline mark — always renders, no font dependency */}
                    <svg
                        width="36" height="33"
                        viewBox="0 0 36 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <rect x="0" y="0" width="36" height="7" rx="3.5"
                            className={mounted && currentTheme === "dark" ? "fill-white" : "fill-[#1B3A6B]"}
                            fill={mounted && currentTheme === "dark" ? "#FFFFFF" : "#1B3A6B"}
                        />
                        <rect x="0" y="13" width="28" height="7" rx="3.5"
                            className={mounted && currentTheme === "dark" ? "fill-white" : "fill-[#1B3A6B]"}
                            fill={mounted && currentTheme === "dark" ? "#FFFFFF" : "#1B3A6B"}
                        />
                        <rect x="0" y="26" width="20" height="7" rx="3.5" fill="#E8420A"/>
                    </svg>
                    {/* Wordmark — uses the page's loaded Anybody font */}
                    <span className="font-display font-bold text-[22px] tracking-[-0.02em] text-prussian dark:text-[#F0F0EE]" style={{ fontVariationSettings: "'wdth' 125" }}>
                        stratum
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="/"
                        className={cn(
                            "relative font-body text-[14px] font-medium text-text-secondary transition-colors hover:text-prussian group",
                            pathname === "/" && "text-prussian"
                        )}
                    >
                        Home
                        <span className="absolute left-0 bottom-[-2px] w-full h-[1.5px] bg-signal origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                    </Link>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="h-auto p-0 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent font-body text-[14px] font-medium text-text-secondary hover:text-prussian group">
                                    <span className="relative">
                                        Services
                                        <span className="absolute left-0 bottom-[-2px] w-full h-[1.5px] bg-signal origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                                    </span>
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[500px] gap-3 p-4 grid-cols-2 bg-surface border border-brand rounded-xl shadow-lg mt-2">
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-surface-raised"
                                            >
                                                <div className="font-display text-[14px] font-600 leading-none text-primary group-hover:text-prussian transition-colors">
                                                    {service.name}
                                                </div>
                                                <p className="line-clamp-2 font-body text-[12px] leading-snug text-text-muted-brand mt-1.5">
                                                    {service.description}
                                                </p>
                                            </Link>
                                        ))}
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {navLinks.slice(1).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "relative font-body text-[14px] font-medium text-text-secondary transition-colors hover:text-prussian group",
                                pathname === link.href && "text-prussian"
                            )}
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-[-2px] w-full h-[1.5px] bg-signal origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                        </Link>
                    ))}
                    
                    <div className="flex items-center gap-4 border-l border-brand pl-8">
                        <ThemeToggle />
                        <Link 
                            href="/contact"
                            className="bg-prussian text-white font-body text-[14px] font-medium px-5 py-2 rounded-full transition-all duration-250 ease-out hover:bg-signal hover:scale-[1.02]"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden relative z-50 p-2 text-prussian"
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {mobileOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full max-w-[300px] bg-surface shadow-2xl z-40 flex flex-col pt-24 px-8 md:hidden"
                        >
                            <div className="flex flex-col gap-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Link
                                        href="/"
                                        className="font-body text-[18px] font-medium text-text-secondary hover:text-prussian transition-colors"
                                    >
                                        Home
                                    </Link>
                                </motion.div>

                                <div className="flex flex-col gap-4">
                                    <button
                                        onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
                                        className="flex items-center justify-between font-body text-[18px] font-medium text-text-secondary hover:text-prussian transition-colors text-left"
                                    >
                                        <span>Services</span>
                                        <ChevronDown className={cn("transition-transform duration-200", servicesMobileOpen && "rotate-180")} />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {servicesMobileOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden flex flex-col gap-3 pl-4"
                                            >
                                                {services.map((service, i) => (
                                                    <motion.div
                                                        key={service.name}
                                                        initial={{ x: -10, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: i * 0.04 }}
                                                    >
                                                        <Link
                                                            href={service.href}
                                                            className="flex items-center justify-between py-2 group"
                                                        >
                                                            <div className="flex flex-col">
                                                                <span className="font-body font-600 text-[15px] text-primary group-hover:text-prussian transition-colors">
                                                                    {service.name}
                                                                </span>
                                                                <span className="font-body text-[12px] text-text-muted-brand">
                                                                    {service.description}
                                                                </span>
                                                            </div>
                                                            <ChevronRight size={14} className="text-brand opacity-50" />
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {navLinks.slice(1).map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.06 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="font-body text-[18px] font-medium text-text-secondary hover:text-prussian transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + navLinks.length * 0.06 }}
                                    className="pt-6 border-t border-brand mt-2 flex flex-col gap-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-body text-[14px] text-text-secondary">Appearance</span>
                                        <ThemeToggle />
                                    </div>
                                    <Link 
                                        href="/contact"
                                        className="inline-block bg-prussian text-white font-body text-[16px] font-medium px-8 py-3 rounded-full w-full text-center hover:bg-signal transition-colors"
                                    >
                                        Get in Touch
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
