"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function InteractiveAvatar() {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="flex flex-col items-center justify-center pointer-events-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)} // Handle tap on mobile
        >
            <div className="relative mb-6">
                {/* Blue Glow on Hover - Reduced intensity for mobile/blockiness fix */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1.2 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 bg-cyan-500/30 blur-[30px] rounded-full -z-10"
                        />
                    )}
                </AnimatePresence>

                {/* Avatar */}
                <motion.div
                    animate={isHovered ? {
                        y: [0, -2, 2, -2, 2, 0], // Subtle Shiver (Reduced from 5)
                        rotate: [0, -2, 2, 0]    // Subtle Rotate (Reduced from 5)
                    } : {
                        y: [0, -15, 0] // Gentle Float
                    }}
                    transition={isHovered ? {
                        duration: 0.4,
                        repeat: Infinity
                    } : {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="relative z-10 w-32 h-32 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20 shadow-[0_0_30px_rgba(220,38,38,0.3)] bg-black/40 backdrop-blur-sm"
                >
                    <Image
                        src="/clawdbot.svg"
                        alt="ClawdBot"
                        width={80}
                        height={80}
                        className="object-contain"
                    />
                </motion.div>
            </div>

            {/* Dynamic Text */}
            <div className="h-8 relative flex items-center justify-center overflow-visible">
                <AnimatePresence mode="wait">
                    {isHovered ? (
                        <motion.span
                            key="exfoliate"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                x: [-1, 1, -1, 1, 0]
                            }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                                x: {
                                    duration: 0.2,
                                    repeat: Infinity, // Continuous Shiver
                                    repeatType: "mirror"
                                },
                                opacity: { duration: 0.2 }
                            }}
                            className="text-cyan-400 font-bold text-xl md:text-2xl tracking-widest uppercase glow-cyan"
                            style={{ textShadow: "0 0 20px rgba(6,182,212,0.8)" }}
                        >
                            EXFOLIATE! EXFOLIATE!
                        </motion.span>
                    ) : (
                        <motion.span
                            key="tagline"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="text-red-500 font-medium text-lg md:text-xl"
                        >
                            The AI that actually does things.
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
