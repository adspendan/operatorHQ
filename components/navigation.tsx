"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isAiPage = pathname === "/ai-assistant"

  // Animation States
  const [isDesktopHovered, setIsDesktopHovered] = useState(false)
  const [mobileLogoState, setMobileLogoState] = useState<"logo" | "flipping" | "peace">("logo")
  const [hamburgerState, setHamburgerState] = useState<"idle" | "smashing" | "operator" | "menu">("idle")

  const handleMobileLogoClick = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (mobileLogoState !== "logo") return

    // 1. Flip to Peace
    setMobileLogoState("flipping")
    await new Promise(r => setTimeout(r, 200)) // Wait for half spin
    setMobileLogoState("peace")

    // 2. Hold Peace
    await new Promise(r => setTimeout(r, 1500))

    // 3. Flip back
    setMobileLogoState("flipping")
    await new Promise(r => setTimeout(r, 200))
    setMobileLogoState("logo")

    // 4. Navigate (if needed, or just reload if on home)
    window.location.href = "/"
  }

  const handleHamburgerClick = async () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      setHamburgerState("idle")
      return
    }

    // Smash Sequence
    setHamburgerState("smashing") // Icon shrinks
    await new Promise(r => setTimeout(r, 300))

    setHamburgerState("operator") // Operator pops up
    await new Promise(r => setTimeout(r, 1000)) // Wave/Interaction

    setHamburgerState("menu") // Menu opens
    setIsMenuOpen(true)
  }

  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/modules", label: "HQ Modules" },
    { href: "/pricing", label: "Pricing" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      isAiPage
        ? "bg-[#050810]/80 backdrop-blur-md border-transparent"
        : "border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    )}>
      <nav className="container flex h-16 items-center justify-between">

        {/* LOGO SECTION */}
        <div className="flex items-center relative">

          {/* Desktop: Peeking Operator */}
          <AnimatePresence>
            {isDesktopHovered && (
              <motion.div
                initial={{ x: 0, opacity: 0, rotate: -20, scale: 0.8 }}
                animate={{ x: -25, opacity: 1, rotate: -10, scale: 1 }}
                exit={{ x: 0, opacity: 0, rotate: -20, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-12 h-12 hidden md:block pointer-events-none z-0"
              >
                <Image
                  src="/operator-avatar-stand.png"
                  alt="Operator"
                  width={48}
                  height={48}
                  className="object-contain drop-shadow-[0_0_10px_rgba(135,242,7,0.5)]"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <Link
            href="/"
            className="flex items-center relative z-10"
            onMouseEnter={() => setIsDesktopHovered(true)}
            onMouseLeave={() => setIsDesktopHovered(false)}
            onClick={(e) => {
              // Only intercept on mobile
              if (window.innerWidth < 768) {
                handleMobileLogoClick(e)
              }
            }}
          >
            {/* Mobile: 3D Flip Logo */}
            <div className="md:hidden relative w-8 h-8 perspective-1000">
              <motion.div
                animate={{ rotateY: mobileLogoState === "peace" ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="w-full h-full relative preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front: Logo Icon */}
                <div className="absolute inset-0 backface-hidden" style={{ backfaceVisibility: "hidden" }}>
                  <Image
                    src="/logo-icon.png"
                    alt="Operator HQ"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Back: Peace Sign Operator */}
                <div
                  className="absolute inset-0 backface-hidden"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <Image
                    src="/operator-avatar-peace.jpg"
                    alt="Peace"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Desktop: Standard Wordmark */}
            <Image
              src="/logo-wordmark.png"
              alt="Operator HQ"
              width={140}
              height={28}
              className="hidden md:block transition-transform duration-300 origin-left"
              style={{ transform: isDesktopHovered ? "translateX(25px)" : "translateX(0)" }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <a href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">Get Started</a>
          </Button>

          {/* Mobile Menu Toggle (Hamburger Smash) */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground relative w-10 h-10 flex items-center justify-center"
            onClick={handleHamburgerClick}
          >
            <AnimatePresence mode="wait">
              {hamburgerState === "idle" && (
                <motion.div key="menu-icon" layoutId="menu-btn">
                  <Menu size={24} />
                </motion.div>
              )}
              {hamburgerState === "smashing" && (
                <motion.div
                  key="smash"
                  initial={{ scale: 1 }}
                  animate={{ scale: 0.1, opacity: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
              {hamburgerState === "operator" && (
                <motion.div
                  key="operator-head"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1.2, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="w-8 h-8 relative"
                >
                  <Image
                    src="/operator-avatar-stand.png"
                    alt="Operator"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              )}
              {hamburgerState === "menu" && (
                <motion.div key="close-icon" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                  <X size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border/40 bg-background"
          >
            <div className="container flex flex-col gap-4 py-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => { setIsMenuOpen(false); setHamburgerState("idle"); }}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-foreground",
                    pathname === link.href ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <a href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">Get Started</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
