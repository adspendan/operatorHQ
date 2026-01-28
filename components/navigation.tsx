"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

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

        <Button asChild>
          <a href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">Get Started</a>
        </Button>
      </nav>
    </header>
  )
}
