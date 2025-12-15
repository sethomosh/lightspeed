"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const [isTooltipVisible, setIsTooltipVisible] = React.useState(false)

    // Prevent hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-border/50"
                aria-label="Loading theme toggle"
            >
                <Sun className="h-4 w-4" />
            </Button>
        )
    }

    // Cycle through: light → dark → system
    const cycleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else if (theme === "dark") {
            setTheme("system")
        } else {
            setTheme("light")
        }
    }

    // Determine which icon to show
    const currentTheme = theme === "system" ? systemTheme : theme

    // Get tooltip text
    const getTooltipText = () => {
        if (theme === "light") return "Switch to dark mode"
        if (theme === "dark") return "Switch to system mode"
        return "Switch to light mode"
    }

    // Icon animation variants
    const iconVariants = {
        initial: { rotate: -180, opacity: 0, scale: 0.5 },
        animate: { rotate: 0, opacity: 1, scale: 1 },
        exit: { rotate: 180, opacity: 0, scale: 0.5 }
    }

    return (
        <div className="relative">
            <Button
                variant="outline"
                size="icon"
                onClick={cycleTheme}
                onMouseEnter={() => setIsTooltipVisible(true)}
                onMouseLeave={() => setIsTooltipVisible(false)}
                onFocus={() => setIsTooltipVisible(true)}
                onBlur={() => setIsTooltipVisible(false)}
                className="h-9 w-9 rounded-full border-border/50 hover:border-primary/50 transition-colors relative overflow-hidden"
                aria-label={getTooltipText()}
            >
                <AnimatePresence mode="wait" initial={false}>
                    {theme === "light" && (
                        <motion.div
                            key="sun"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Sun className="h-4 w-4" />
                        </motion.div>
                    )}
                    {theme === "dark" && (
                        <motion.div
                            key="moon"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Moon className="h-4 w-4" />
                        </motion.div>
                    )}
                    {theme === "system" && (
                        <motion.div
                            key="monitor"
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Monitor className="h-4 w-4" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </Button>

            {/* Tooltip */}
            <AnimatePresence>
                {isTooltipVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
                    >
                        <div className="bg-popover text-popover-foreground px-3 py-1.5 text-xs font-medium rounded-md shadow-md border border-border/50 whitespace-nowrap">
                            {getTooltipText()}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-popover border-l border-t border-border/50 rotate-45" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
