"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Zap, Menu, Twitter, Github, Linkedin } from "lucide-react"

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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { services as servicesData } from "@/lib/services-data"

const services = servicesData.map(s => ({
    name: s.title,
    href: `/services/${s.slug}`,
    isComingSoon: s.status === 'coming-soon'
}))

const STORAGE_KEY = 'lightspeed-snowfall'

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [snowfallEnabled, setSnowfallEnabled] = React.useState<boolean | null>(null)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Load snowfall preference
    React.useEffect(() => {
        const savedPreference = localStorage.getItem(STORAGE_KEY)
        if (savedPreference === null) {
            setSnowfallEnabled(true) // Default: ON
        } else {
            setSnowfallEnabled(savedPreference === 'true')
        }
    }, [])

    // Listen for storage changes
    React.useEffect(() => {
        const handleStorageChange = () => {
            const savedPreference = localStorage.getItem(STORAGE_KEY)
            setSnowfallEnabled(savedPreference === 'true')
        }
        window.addEventListener('storage', handleStorageChange)
        window.addEventListener('snowfall-toggle', handleStorageChange)
        return () => {
            window.removeEventListener('storage', handleStorageChange)
            window.removeEventListener('snowfall-toggle', handleStorageChange)
        }
    }, [])

    const toggleSnowfall = () => {
        const newValue = !snowfallEnabled
        setSnowfallEnabled(newValue)
        localStorage.setItem(STORAGE_KEY, String(newValue))
        // Dispatch custom event for same-tab updates
        window.dispatchEvent(new Event('snowfall-toggle'))
    }

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
                isScrolled
                    ? "border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl tracking-tight">LIGHTSPEED</span>
                </Link>

                {/* Desktop Navigation */}
                <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link
                        href="/"
                        className={cn(
                            "transition-colors hover:text-primary",
                            pathname === "/" ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        Home
                    </Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-primary focus:outline-none text-muted-foreground data-[state=open]:text-primary">
                            Services
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-64">
                            {services.map((service) => (
                                <DropdownMenuItem key={service.href} asChild>
                                    <Link href={service.href} className="cursor-pointer flex items-center justify-between w-full">
                                        <span>{service.name}</span>
                                        {service.isComingSoon && (
                                            <Badge variant="outline" className="ml-2 text-xs">
                                                Coming Soon
                                            </Badge>
                                        )}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link
                        href="/portfolio"
                        className={cn(
                            "transition-colors hover:text-primary",
                            pathname === "/portfolio" ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/blog"
                        className={cn(
                            "transition-colors hover:text-primary",
                            pathname === "/blog" ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/contact"
                        className={cn(
                            "transition-colors hover:text-primary",
                            pathname === "/contact" ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        Contact
                    </Link>
                </nav>

                <div className="hidden md:flex items-center gap-3">
                    {snowfallEnabled !== null && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleSnowfall}
                            className="h-9 w-9"
                            aria-label={snowfallEnabled ? "Disable snowfall" : "Enable snowfall"}
                            title={snowfallEnabled ? "Disable snowfall" : "Enable snowfall"}
                        >
                            <span className="text-lg">{snowfallEnabled ? "❄️" : "🌨️"}</span>
                        </Button>
                    )}

                    <ThemeToggle />
                    <Button asChild size="sm" className="rounded-full">
                        <Link href="/contact">Book Consultation</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            aria-label="Open Mobile Menu"
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="pl-0 pr-0">
                        <div className="flex flex-col space-y-4 px-7 py-6">
                            <Link href="/" className="flex items-center space-x-2 mb-8">
                                <Zap className="h-6 w-6 text-primary" />
                                <span className="font-bold">LIGHTSPEED</span>
                            </Link>
                            <nav className="flex flex-col space-y-4">
                                <Link
                                    href="/"
                                    className="block text-lg font-medium transition-colors hover:text-primary"
                                >
                                    Home
                                </Link>
                                <div className="flex flex-col space-y-3 pt-2 pb-4 border-b">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                                        Services
                                    </span>
                                    {services.map((service) => (
                                        <Link
                                            key={service.href}
                                            href={service.href}
                                            className="flex items-center justify-between text-base text-muted-foreground transition-colors hover:text-primary pl-2"
                                        >
                                            <span>{service.name}</span>
                                            {service.isComingSoon && (
                                                <Badge variant="outline" className="text-xs">
                                                    Coming Soon
                                                </Badge>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                                <Link
                                    href="/portfolio"
                                    className="block text-lg font-medium transition-colors hover:text-primary"
                                >
                                    Portfolio
                                </Link>
                                <Link
                                    href="/blog"
                                    className="block text-lg font-medium transition-colors hover:text-primary"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block text-lg font-medium transition-colors hover:text-primary"
                                >
                                    Contact
                                </Link>
                            </nav>

                            {/* Theme Toggle in Mobile Menu */}
                            <div className="flex items-center justify-between pt-6 border-t">
                                <span className="text-sm font-medium text-muted-foreground">Theme</span>
                                <ThemeToggle />
                            </div>

                            {/* Snowfall Toggle in Mobile Menu */}
                            {snowfallEnabled !== null && (
                                <div className="flex items-center justify-between pt-4 border-t">
                                    <span className="text-sm font-medium text-muted-foreground">Snowfall</span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={toggleSnowfall}
                                        className="h-8"
                                        aria-label={snowfallEnabled ? "Disable snowfall" : "Enable snowfall"}
                                    >
                                        <span className="text-base">{snowfallEnabled ? "❄️" : "🌨️"}</span>
                                    </Button>
                                </div>
                            )}

                            <div className="pt-4">
                                <Button asChild className="w-full rounded-full">
                                    <Link href="/contact">Book Consultation</Link>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
