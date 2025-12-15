"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Zap, Menu, Twitter, Github, Linkedin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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

export function Header() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

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

                <div className="hidden md:flex items-center gap-4">
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
                            <div className="pt-6">
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
