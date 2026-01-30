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

  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/modules", label: "HQ Modules" },
    { href: "/pricing", label: "Pricing" },
    { href: "/use-cases", label: "Use Cases" },
    { href: "/about", label: "About" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* Icon for mobile */}
          <Image
            src="/logo-icon.png"
            alt="Operator HQ"
            width={32}
            height={32}
            className="md:hidden"
          />
          {/* Wordmark for desktop */}
          <Image
            src="/logo-wordmark.png"
            alt="Operator HQ"
            width={140}
            height={28}
            className="hidden md:block"
          />
        </Link>

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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                  onClick={() => setIsMenuOpen(false)}
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
