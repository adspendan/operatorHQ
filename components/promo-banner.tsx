"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

export function PromoBanner() {
    const [isVisible, setIsVisible] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const pathname = usePathname()

    if (!isVisible || pathname === "/ai-assistant") return null

    return (
        <div className="relative z-50 bg-[#050810] text-white border-b border-white/10">
            <div className="container mx-auto px-4 h-12 flex items-center justify-center relative">
                <Link
                    href="/ai-assistant"
                    className="flex items-center gap-3 text-sm font-medium hover:text-cyan-400 transition-colors group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* ClawdBot Avatar Container */}
                    <div className="relative">
                        <motion.div
                            animate={isHovered ? { rotate: [0, -10, 10, -10, 10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-8 h-8 flex items-center justify-center"
                        >
                            <Image
                                src="/clawdbot.svg"
                                alt="ClawdBot"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </motion.div>

                        {/* Interaction Bubble */}
                        <AnimatePresence>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, y: -5 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, y: -5 }}
                                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-cyan-500 text-[#050810] text-[10px] font-bold px-2 py-0.5 rounded-full pointer-events-none z-[100]"
                                >
                                    EXFOLIATE!
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <span className="hidden md:inline">
                        Open-source ‘AI employee’ rollout (ClawdBot-style), installed for your business.
                    </span>
                    <span className="md:hidden">
                        Install Your AI Employee
                    </span>

                    <span className="text-[#87f207] group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                        →
                    </span>
                </Link>

                {/* Dismiss Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 text-white/40 hover:text-white"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}
