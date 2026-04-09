"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, Menu } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
]

export function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const pathname = usePathname()
    const { scrollY } = useScroll()
    
    // Border appears on scroll > 40px
    const borderOpacity = useTransform(scrollY, [0, 40], [0, 1])
    const backgroundColor = useTransform(scrollY, [0, 40], ["rgba(247, 247, 245, 0)", "rgba(247, 247, 245, 0.9)"])

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
                className="absolute inset-x-0 bottom-0 border-b border-brand"
            />
            
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-display font-bold text-[18px] tracking-[0.05em] text-prussian uppercase">
                        STRATUM
                    </span>
                    <motion.span 
                        animate={{ scale: [1, 1.4, 1] }} 
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[6px] h-[6px] rounded-full bg-signal"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "relative font-body text-[14px] font-medium text-text-secondary transition-colors hover:text-prussian group",
                                pathname === link.href && "text-prussian"
                            )}
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-[-2px] w-full h-[1.5px] bg-prussian origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100" />
                        </Link>
                    ))}
                    
                    <Link 
                        href="/contact"
                        className="bg-prussian text-white font-body text-[14px] font-medium px-5 py-2 rounded-full transition-all duration-200 hover:bg-prussian-hover hover:scale-[1.02]"
                    >
                        Get in Touch
                    </Link>
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
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 + i * 0.06 }}
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
                                    className="pt-4"
                                >
                                    <Link 
                                        href="/contact"
                                        className="inline-block bg-prussian text-white font-body text-[16px] font-medium px-8 py-3 rounded-full w-full text-center"
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
