"use client"

import type React from "react"

import { useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cpu, Layers, Zap, Server, Settings, Plus, ChevronDown } from "lucide-react"

const sections = [
  {
    id: "foundation",
    label: "Foundation",
    subtitle: "$10K",
    icon: Cpu,
  },
  {
    id: "core-vitals",
    label: "Core Vitals",
    subtitle: "+$15K",
    icon: Layers,
  },
  {
    id: "hq-pro",
    label: "HQ Pro",
    subtitle: "NICHE",
    icon: Zap,
  },
  {
    id: "operator-hq",
    label: "Operator HQ",
    subtitle: "$69K+",
    icon: Server,
  },
  {
    id: "custom",
    label: "Custom",
    subtitle: "ENTERPRISE",
    icon: Settings,
  },
]


function IconWithBorderTrace({
  section,
  progress,
  index,
}: {
  section: (typeof sections)[0]
  progress: number
  index: number
}) {
  const Icon = section.icon

  const isLastSection = index === sections.length - 1
  const sectionStart = index * 0.2
  // Last section completes at 0.85 instead of 1.0 for cleaner finish
  const sectionEnd = isLastSection ? 0.85 : (index + 1) * 0.2

  // Calculate local progress within this section (0 to 1)
  const sectionDuration = isLastSection ? 0.05 : 0.2
  const localProgress = Math.max(0, Math.min(1, (progress - sectionStart) / sectionDuration))

  // Border trace: 0-0.5 traces the border, 0.5-1 stays complete
  const borderProgress = Math.min(1, localProgress * 2)

  // Icon is "complete" once we've scrolled past it
  const isComplete = progress > sectionEnd
  const isActive = progress >= sectionStart && progress < sectionEnd
  const isPending = progress < sectionStart

  // SVG path for border (starts left-center, goes up around top, and down around bottom, meets on right)
  // Box is 44x44, with 8px border radius
  const boxSize = 44
  const r = 8

  // Total perimeter for stroke-dasharray calculation
  const perimeter = (boxSize - 2 * r) * 4 + 2 * Math.PI * r

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <motion.div
          className="absolute -inset-1 rounded-xl bg-lime-500/30 blur-md"
          animate={{
            opacity: isComplete ? 0.3 : isActive ? 0.5 : 0,
          }}
          transition={{ duration: 0.5 }}
        />

        {/* Icon container */}
        <div className="relative w-11 h-11">
          {/* Background box */}
          <div
            className={`absolute inset-0 rounded-lg border transition-all duration-500 ${isComplete || isActive ? "border-lime-500/40 bg-lime-500/10" : "border-white/10 bg-white/5"
              }`}
          />

          {/* SVG border trace overlay */}
          <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${boxSize} ${boxSize}`} fill="none">
            {/* Top path: left-center → top-left corner → top-right corner → right-center */}
            <path
              d={`M 0 ${boxSize / 2} 
                  L 0 ${r} 
                  Q 0 0 ${r} 0 
                  L ${boxSize - r} 0 
                  Q ${boxSize} 0 ${boxSize} ${r} 
                  L ${boxSize} ${boxSize / 2}`}
              stroke="rgb(34, 211, 238)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: perimeter / 2,
                strokeDashoffset: (perimeter / 2) * (1 - borderProgress),
                transition: "stroke-dashoffset 0.3s ease-out",
                opacity: isPending ? 0 : 1,
              }}
            />
            {/* Bottom path: left-center → bottom-left corner → bottom-right corner → right-center */}
            <path
              d={`M 0 ${boxSize / 2} 
                  L 0 ${boxSize - r} 
                  Q 0 ${boxSize} ${r} ${boxSize} 
                  L ${boxSize - r} ${boxSize} 
                  Q ${boxSize} ${boxSize} ${boxSize} ${boxSize - r} 
                  L ${boxSize} ${boxSize / 2}`}
              stroke="rgb(34, 211, 238)"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              style={{
                strokeDasharray: perimeter / 2,
                strokeDashoffset: (perimeter / 2) * (1 - borderProgress),
                transition: "stroke-dashoffset 0.3s ease-out",
                opacity: isPending ? 0 : 1,
              }}
            />
          </svg>

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon
              className={`w-5 h-5 transition-colors duration-500 ${isComplete || isActive ? "text-lime-400" : "text-white/30"
                }`}
            />
          </div>
        </div>

        {/* Active indicator dot */}
        <motion.div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-lime-400"
          animate={{
            opacity: isActive ? 1 : isComplete ? 0.5 : 0,
            scale: isActive ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Label */}
      <div className="text-center mt-1">
        <div
          className={`text-[11px] font-medium transition-colors duration-500 ${isComplete || isActive ? "text-foreground" : "text-white/40"
            }`}
        >
          {section.label}
        </div>
        <div
          className={`text-[9px] font-mono tracking-wider transition-colors duration-500 ${isComplete || isActive ? "text-muted-foreground" : "text-white/20"
            }`}
        >
          {section.subtitle}
        </div>
      </div>
    </div>
  )
}

function ConnectingLine({ progress, fromIndex }: { progress: number; fromIndex: number }) {
  // Line should fill when we're in or past the next section
  const nextSectionStart = (fromIndex + 1) * 0.2
  const lineProgress = Math.max(0, Math.min(1, (progress - (fromIndex * 0.2 + 0.1)) / 0.1))

  return (
    <div className="flex-1 flex items-center mx-1 h-11">
      <div className="relative w-full h-px">
        {/* Background track */}
        <div className="absolute inset-0 bg-white/10" />
        {/* Progress fill */}
        <motion.div
          className="absolute inset-y-0 left-0 bg-lime-500/60"
          style={{ width: `${lineProgress * 100}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        {/* Node at start */}
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full border transition-all duration-500 ${lineProgress > 0 ? "border-lime-500 bg-lime-500" : "border-white/20 bg-background"
            }`}
        />
        {/* Node at end */}
        <div
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full border transition-all duration-500 ${lineProgress >= 1 ? "border-lime-500 bg-lime-500" : "border-white/20 bg-background"
            }`}
        />
      </div>
    </div>
  )
}

function TimelineProgress({ progress }: { progress: number }) {
  return (
    <motion.div
      className="fixed top-16 left-0 right-0 z-40 pointer-events-none bg-background border-b border-white/5"
      initial={{ opacity: 0, y: -30 }}
      animate={{
        opacity: progress > 0.05 ? 1 : 0,
        y: progress > 0.05 ? 0 : -30,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-start justify-center">
          {sections.map((section, index) => (
            <div key={section.id} className="contents">
              <a href={`#${section.id}`} className="pointer-events-auto hover:scale-105 transition-transform">
                <IconWithBorderTrace section={section} progress={progress} index={index} />
              </a>
              {index < sections.length - 1 && <ConnectingLine progress={progress} fromIndex={index} />}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ScrollSection({
  id,
  index,
  children,
  featured = false,
}: {
  id: string
  index: number
  children: React.ReactNode
  featured?: boolean
}) {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60])

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen flex items-center justify-center py-32 ${featured ? "bg-gradient-to-b from-transparent via-lime-950/5 to-transparent" : ""}`}
      style={{ opacity }}
    >
      <motion.div className="container max-w-4xl text-center" style={{ y }}>
        {children}
      </motion.div>
    </motion.section>
  )
}

export default function PricingClientPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  })

  const [progress, setProgress] = useState(0)

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setProgress(latest)
  })

  return (
    <main ref={containerRef} className="relative">
      <TimelineProgress progress={progress} />

      {/* Hero Section - Clean without timeline */}
      <section className="min-h-[70vh] flex items-center justify-center py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-mono text-xs text-muted-foreground tracking-widest"
            >
              ON-PREM AI AGENTS + OPERATOROS
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight mb-6 text-balance sm:text-5xl lg:text-6xl"
            >
              Infrastructure Install
              <br />
              <span className="text-muted-foreground">Not Software Subscription</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto"
            >
              OperatorHQ installs a business operating system with on-prem AI agents — including AI voice agents, workflow routing, and CRM integration. Operator Node + OperatorOS deployed. You own it.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Summary - Quick Reference */}
      <section className="py-16 border-y border-white/5 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-lg font-semibold mb-8"
            >
              Pricing Summary
            </motion.h2>
            <div className="grid gap-3">
              {[
                { tier: "Foundation Package", price: "$10,000", desc: "Operator Node + OperatorOS + Voice OR Knowledge HQ", href: "#foundation" },
                { tier: "Core Vitals", price: "+$15,000", desc: "Connect multiple HQs via OperatorOS", href: "#core-vitals" },
                { tier: "HQ Pro (Industry-Specific)", price: "$25k–$100k+", desc: "Industry templates (dental, legal, roofing, etc.)", href: "#hq-pro" },
                { tier: "Operator HQ", price: "starting $69k", desc: "Bespoke build + deep integrations", href: "#operator-hq" },
                { tier: "Custom Operator", price: "enterprise", desc: "Enterprise governance + security + scale (often $250k–$1M+)", href: "#custom" },
              ].map((item, i) => (
                <motion.a
                  key={item.tier}
                  href={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex items-center justify-between p-4 rounded-lg border border-white/5 bg-card/50 hover:border-lime-500/30 hover:bg-lime-500/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-lime-400/60 w-6">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <span className="font-medium group-hover:text-lime-400 transition-colors">{item.tier}</span>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-lime-400">{item.price}</span>
                </motion.a>
              ))}
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center text-xs text-muted-foreground/60 mt-6"
            >
              Scroll down for full details on each tier, or <ChevronDown className="inline size-3" /> jump to a section above.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 1 — FOUNDATION PACKAGE */}
      <ScrollSection id="foundation" index={0}>
        <div className="mb-12">
          <div className="mb-3 font-mono text-xs text-lime-400/80 tracking-widest">01 / INFRASTRUCTURE</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Foundation Package</h2>
          <div className="text-4xl font-bold text-lime-400 mb-4">$10,000</div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Infrastructure activation + one working deployment loop. The machine exists, one loop runs.
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2 max-w-xl mx-auto">
            Example loop: <Link href="/modules#voice" className="text-lime-400/80 hover:underline">Voice</Link> → capture intent → log to OperatorOS → route → follow-up.
          </p>
        </div>

        <Card className="border-lime-500/10 bg-white/[0.02] backdrop-blur-sm p-8 text-left max-w-2xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold">What's Included</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-lime-400/60">—</span>
                  <span>Operator Node (Mac Studio) — on-prem runtime (as scoped)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400/60">—</span>
                  <span>OperatorOS activated (control plane)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400/60">—</span>
                  <span>Core coordination layer enabled (routing + context + handoffs) (as scoped)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400/60">—</span>
                  <span>Choose 1 <Link href="/modules" className="text-lime-400/80 hover:underline">Foundation HQ</Link>: <Link href="/modules#voice" className="text-lime-400/80 hover:underline">Voice HQ</Link> (Front Desk) OR <Link href="/modules#knowledge" className="text-lime-400/80 hover:underline">Knowledge HQ</Link> (Internal Expert)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <div className="mb-2 font-mono text-[10px] text-lime-400/60 tracking-widest">DEPLOYMENT</div>
                <div className="text-lg font-semibold">~5 business days</div>
              </div>
              <div>
                <div className="mb-2 font-mono text-[10px] text-lime-400/60 tracking-widest">BEST FOR</div>
                <div className="text-sm text-muted-foreground">
                  Businesses that want a real first system live. Add the second HQ for +$2,500.
                </div>
              </div>
            </div>
          </div>
        </Card>
      </ScrollSection>

      {/* SECTION 2 — CORE VITALS */}
      <ScrollSection id="core-vitals" index={1}>
        <div className="mb-12">
          <div className="mb-3 font-mono text-xs text-lime-400/80 tracking-widest">02 / ORCHESTRATION</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Core Vitals</h2>
          <div className="text-4xl font-bold text-lime-400 mb-4">+$15,000</div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Core Vitals connects multiple Starter HQs into a unified operational system through OperatorOS (as scoped).
          </p>
        </div>

        <Card className="border-lime-500/10 bg-white/[0.02] backdrop-blur-sm p-8 text-left max-w-2xl mx-auto">
          <h3 className="mb-6 text-lg font-semibold">Multi-Loop Orchestration</h3>
          <div className="space-y-3 mb-8">
            {[
              "Cross-HQ routing",
              "Shared objects (Customer, Lead, Appointment, Work Order) (as scoped)",
              "Unified notifications/escalations",
              "Shared audit trail + approval gates (as scoped)",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-muted-foreground">
                <span className="text-lime-400/60">—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 pt-6 border-t border-white/5">
            <div>
              <div className="mb-2 font-mono text-[10px] text-lime-400/60 tracking-widest">TYPICAL SCOPE</div>
              <div className="text-sm text-muted-foreground">Deploys 3–5 Starter HQs and connects them via OperatorOS</div>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10px] text-lime-400/60 tracking-widest">DEPLOYMENT</div>
              <div className="text-sm text-muted-foreground">1–2 weeks (as scoped)</div>
            </div>
          </div>
        </Card>
      </ScrollSection>

      {/* SECTION 3 — HQ PRO */}
      <ScrollSection id="hq-pro" index={2}>
        <div className="mb-12">
          <div className="mb-3 font-mono text-xs text-lime-400/80 tracking-widest">03 / INDUSTRY TEMPLATES</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">HQ Pro (Industry-Specific)</h2>
          <div className="text-4xl font-bold text-lime-400 mb-4">$25,000–$100,000+</div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Industry-specific templates built on top of Core Vitals. Pre-configured for common workflows in your vertical. <Link href="/use-cases" className="text-lime-400/80 hover:underline">Browse all use cases →</Link>
          </p>
        </div>

        <Card className="border-lime-500/10 bg-white/[0.02] backdrop-blur-sm p-8 text-left max-w-2xl mx-auto">
          <h3 className="mb-6 text-lg font-semibold">Industry Templates</h3>
          <div className="space-y-3 mb-8">
            {[
              { name: "Dental / Medical", desc: "Procedure-aware routing, insurance context, clinical follow-ups" },
              { name: "Home Services", desc: "Dispatch logic, job completion tracking, review automation" },
              { name: "Legal / Professional", desc: "Intake qualification, matter routing, retainer workflows" },
              { name: "Agency / Creative", desc: "Project intake, client coordination, capacity management" },
            ].map((cap) => (
              <div key={cap.name} className="rounded-lg border border-lime-500/10 bg-lime-500/[0.03] p-4">
                <div className="font-mono text-sm text-lime-400/80">{cap.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{cap.desc}</div>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-white/5">
            <div className="mb-2 font-mono text-[10px] text-lime-400/60 tracking-widest">PREREQUISITE</div>
            <div className="text-sm text-muted-foreground">
              Requires Foundation + Core Vitals as baseline. Templates layer on top. Pricing is scope-based.
            </div>
          </div>
        </Card>
      </ScrollSection>

      {/* SECTION 4 — OPERATOR HQ */}
      <ScrollSection id="operator-hq" index={3} featured>
        <div className="mb-12">
          <div className="mb-3 font-mono text-xs text-lime-400/80 tracking-widest">04 / BESPOKE BUILD</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Operator HQ</h2>
          <div className="text-4xl font-bold text-lime-400 mb-4">Starting at $69,000</div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Bespoke build for your business. Includes the equivalent of <Link href="#core-vitals" className="text-lime-400/80 hover:underline">Core Vitals</Link> system orchestration + custom architecture, deeper integrations, and governance/approvals (as scoped). See <Link href="/how-it-works" className="text-lime-400/80 hover:underline">how it works →</Link>
          </p>
        </div>

        <Card className="border-lime-500/20 bg-white/[0.03] backdrop-blur-sm p-8 text-left max-w-2xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Bespoke System</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-lime-400/60">—</span>
                  <span>Core Vitals system orchestration baseline (as scoped)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400/60">—</span>
                  <span>Deep workflow excavation sessions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400/60">—</span>
                  <span>Custom integration layer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400/60">—</span>
                  <span>Bespoke routing + decision logic</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime-400/60">—</span>
                  <span>Multi-team routing + governance/approvals</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <div className="mb-2 font-mono text-[10px] text-lime-400/60 tracking-widest">DEPLOYMENT</div>
                <div className="text-lg font-semibold">3–4 weeks</div>
              </div>
              <div>
                <div className="mb-2 font-mono text-[10px] text-lime-400/60 tracking-widest">BEST FOR</div>
                <div className="text-sm text-muted-foreground">
                  Businesses ready to install Operator as the core operating system (as scoped).
                </div>
              </div>
            </div>
          </div>
        </Card>
      </ScrollSection>

      {/* SECTION 5 — CUSTOM OPERATOR */}
      <ScrollSection id="custom" index={4}>
        <div className="mb-12">
          <div className="mb-3 font-mono text-xs text-lime-400/80 tracking-widest">05 / ENTERPRISE</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Custom Operator</h2>
          <p className="text-lg font-medium text-lime-400/80 mb-4">Enterprise custom pricing (can exceed $250k / $1M+)</p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Enterprise-grade bespoke infrastructure. Strict governance/security/scale, proprietary integrations, complex deployments.
          </p>
        </div>

        <Card className="border-lime-500/10 bg-white/[0.02] backdrop-blur-sm p-8 text-left max-w-2xl mx-auto">
          <h3 className="mb-6 text-lg font-semibold">Custom Builds Include</h3>
          <div className="space-y-3 mb-8">
            {[
              "Specialized system architecture",
              "Proprietary integrations",
              "Strict governance/security configurations",
              "Extended team training + documentation",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-muted-foreground">
                <span className="text-lime-400/60">—</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 pt-6 border-t border-white/5">
            <div>
              <div className="mb-2 font-mono text-[10px] text-lime-400/60 tracking-widest">DEPLOYMENT</div>
              <div className="text-lg font-semibold">Scoped per engagement</div>
            </div>
            <div>
              <div className="mb-2 font-mono text-[10px] text-lime-400/60 tracking-widest">CONTACT</div>
              <Button
                variant="outline"
                size="sm"
                className="border-lime-500/20 hover:bg-lime-500/5 bg-transparent text-foreground"
                asChild
              >
                <a href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">
                  Request Scope Call
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </ScrollSection>

      {/* OWNERSHIP SECTION */}
      <section className="py-32 border-t border-white/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Ownership & Support</h2>
              <p className="text-xl text-muted-foreground">You own the system. Support is optional.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
              <Card className="p-8 border-white/5 bg-white/[0.02] text-left">
                <h3 className="text-lg font-semibold mb-4">What You Own</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-lime-400/60">—</span>
                    <span>All Operator code + configurations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lime-400/60">—</span>
                    <span>All business data + context memory</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lime-400/60">—</span>
                    <span>All workflows + routing logic</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lime-400/60">—</span>
                    <span>Deployment infrastructure</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-white/5 bg-white/[0.02] text-left">
                <h3 className="text-lg font-semibold mb-4">Support (Optional)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-lime-400/60">—</span>
                    <span>$2,000/month retainer</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lime-400/60">—</span>
                    <span>Priority response + system updates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lime-400/60">—</span>
                    <span>Cancel anytime — system keeps running</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-lime-400/60">—</span>
                    <span>No vendor lock-in</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-4">Ready to Install?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start with Foundation, expand when ready. No commitments beyond the install.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-black" asChild>
                  <a href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">
                    Start Foundation Install
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 bg-transparent" asChild>
                  <a href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">
                    Schedule Scope Call
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS SECTION */}
      <section id="integrations" className="py-24 border-t border-white/5 bg-muted/10">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Connects to Your Stack (as scoped)</h2>
              <p className="text-muted-foreground">OperatorOS integrates with the tools you already use.</p>
            </motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { category: "CRM", examples: "HubSpot, Salesforce, Pipedrive, Close" },
                { category: "Calendars", examples: "Google Calendar, Outlook, Calendly" },
                { category: "Phone / Voice", examples: "Twilio, Vonage, RingCentral, VAPI" },
                { category: "Email / SMS", examples: "SendGrid, Mailgun, Twilio SMS" },
                { category: "Ticketing / Helpdesk", examples: "Zendesk, Freshdesk, Intercom" },
                { category: "Docs / Payments", examples: "Google Docs, Stripe, QuickBooks" },
              ].map((item) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg border border-white/5 bg-card/50"
                >
                  <div className="font-mono text-sm text-lime-400/80 mb-1">{item.category}</div>
                  <div className="text-sm text-muted-foreground">{item.examples}</div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground/60 mt-8">
              Custom integrations available in Operator HQ and Custom Operator builds.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 border-t border-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Common questions about OperatorHQ pricing and deployment.</p>
            </motion.div>
            <div className="space-y-6">
              {[
                {
                  q: "What is an Operator Node?",
                  a: "An Operator Node is an on-prem Mac Studio that runs OperatorOS and your deployed HQs. It sits inside your business — your data never leaves your premises unless you configure external integrations."
                },
                {
                  q: "What is OperatorOS?",
                  a: "OperatorOS is the control plane that coordinates your AI agents. It handles routing, context sharing, handoffs, audit trails, and approvals across all deployed HQs."
                },
                {
                  q: "What determines which HQ I start with?",
                  a: "You choose based on your immediate need: Voice HQ handles inbound calls/sales, Knowledge HQ handles internal staff queries/policy. You can add the other for +$2,500.",
                },
                {
                  q: "Is OperatorHQ on-prem or cloud?",
                  a: "On-prem by default. Your Operator Node runs locally. Cloud or hybrid configurations are available in Custom Operator builds (as scoped)."
                },
                {
                  q: "Do I need ongoing support?",
                  a: "No. The system runs without us after deployment. Optional support ($2,000/month) provides priority response and updates — cancel anytime, system keeps running."
                },
                {
                  q: "What's included in Foundation?",
                  a: "Operator Node (Mac Studio), OperatorOS activation, core coordination layer, and Choice of Voice HQ OR Knowledge HQ."
                },
                {
                  q: "What systems can you integrate with?",
                  a: "CRMs (HubSpot, Salesforce), calendars (Google, Outlook), phone systems (Twilio, VAPI), email/SMS providers, ticketing systems, and payment processors — scoped per deployment."
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-white/5 pb-6"
                >
                  <h3 className="font-semibold mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
