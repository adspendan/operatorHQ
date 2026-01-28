"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, Database, Brain, Users, Lock, ArrowRight, Phone, Layers, Cog, Server, Settings, Zap } from "lucide-react"
import Lenis from "lenis"

// ============================================
// LENIS SMOOTH SCROLL PROVIDER
// ============================================
function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
}

// ============================================
// ANIMATED COMPONENTS
// ============================================

function AnimatedSection({
  children,
  className = "",
  delay = 0,
  id
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

function StaggeredList({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function StaggeredItem({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Parallax wrapper for scroll-linked movement
function ParallaxSection({
  children,
  className = "",
  offset = 50
}: {
  children: React.ReactNode
  className?: string
  offset?: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 })

  return (
    <motion.div ref={ref} style={{ y: smoothY }} className={className}>
      {children}
    </motion.div>
  )
}

// Subtle hover card
function TiltCard({
  children,
  className = ""
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        scale: 1.01,
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" }
      }}
    >
      {children}
    </motion.div>
  )
}

// Capability card with mesh reveal on hover
function CapabilityCard({
  icon: Icon,
  title,
  desc,
  meshPattern
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  desc: string
  meshPattern: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.01, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="p-8 bg-card/80 backdrop-blur-sm h-full transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden relative group">
        {/* Mesh/Matrix background that reveals on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.08 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Subtle grid mesh */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, hsl(var(--accent)) 1px, transparent 1px),
                radial-gradient(circle at 80% 70%, hsl(var(--accent)) 1px, transparent 1px),
                radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0.5px, transparent 0.5px)
              `,
              backgroundSize: '40px 40px, 60px 60px, 20px 20px'
            }}
          />
          {/* Gradient overlay with brand green */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10" />
        </motion.div>

        {/* Dynamic mesh pattern SVG */}
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id={`mesh-${meshPattern}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="hsl(var(--accent))" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#mesh-${meshPattern})`} />
            {/* Connecting lines */}
            <motion.path
              d="M 0,100 Q 50,80 100,100 T 200,100"
              stroke="hsl(var(--accent))"
              strokeWidth="0.5"
              fill="none"
              opacity="0.2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isHovered ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </svg>
        </motion.div>

        <div className="relative z-10">
          <motion.div
            className="mb-4 inline-flex rounded-2xl bg-accent/10 p-4 group-hover:bg-accent/20 transition-colors duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="size-7 text-accent" />
          </motion.div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
        </div>
      </Card>
    </motion.div>
  )
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function HowItWorksPage() {
  useSmoothScroll()

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  // Core Vitals modal state
  const [showCoreVitalsModal, setShowCoreVitalsModal] = useState(false)

  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      {/* ==================== HERO ==================== */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative min-h-[90vh] flex items-center justify-center"
      >
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/8 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]"
            animate={{
              x: [0, 50, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px]"
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Hero badge - no star icon, better copy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8"
            >
              <span className="inline-flex px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30 text-sm font-medium tracking-widest uppercase text-accent">
                Under the Hood
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                How Operator Works
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-16 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Operator is not software you install on your laptop.<br />
              <span className="text-foreground font-medium">It's infrastructure that runs your business.</span>
            </motion.p>

            {/* CLARITY BLOCK - CENTERED */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
            >
              {[
                { label: "OperatorOS", desc: "your personalized control center" },
                { label: "Operator Node", desc: "on-premise runtime (Mac Studio, as scoped)" },
                { label: "Core HQ Stack", desc: "the core AI infrastructure you need to get started" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                  className="flex-1 max-w-xs"
                >
                  <div className="p-4 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/30 transition-all duration-300 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="size-2 rounded-full bg-accent" />
                      <strong className="text-foreground text-sm">{item.label}</strong>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-3 bg-accent rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ==================== THE DIFFERENCE ==================== */}
      <AnimatedSection className="py-32 md:py-40 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.p
              className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The Difference
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-center">
              On-Premise vs Cloud
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              Ownership and control vary based on connected tools, data sources, and deployment scope.
            </p>

            <ParallaxSection offset={30}>
              <StaggeredList className="overflow-x-auto">
                <TiltCard>
                  <Card className="p-0 overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="text-left py-5 px-6 font-semibold text-foreground">Capability</th>
                          <th className="text-center py-5 px-6 font-semibold text-muted-foreground">Cloud SaaS</th>
                          <th className="text-center py-5 px-6 font-semibold text-accent">Operator Node (On-Prem)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { feature: "Data ownership (as scoped)", cloud: false, operator: true },
                          { feature: "System customization", cloud: false, operator: true },
                          { feature: "Memory & continuity (configurable)", cloud: false, operator: true },
                          { feature: "Cross-system coordination", cloud: false, operator: true },
                          { feature: "Vendor lock-in", cloud: true, operator: false },
                          { feature: "Subscription required to run", cloud: true, operator: false },
                        ].map((row, i) => (
                          <motion.tr
                            key={i}
                            className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                          >
                            <td className="py-4 px-6 text-muted-foreground">{row.feature}</td>
                            <td className="text-center py-4 px-6">
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                              >
                                {row.cloud ? (
                                  <Check className="inline-block size-5 text-green-500" />
                                ) : (
                                  <X className="inline-block size-5 text-destructive/70" />
                                )}
                              </motion.div>
                            </td>
                            <td className="text-center py-4 px-6">
                              <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3, type: "spring" }}
                              >
                                {row.operator ? (
                                  <Check className="inline-block size-5 text-accent" />
                                ) : (
                                  <X className="inline-block size-5 text-destructive/70" />
                                )}
                              </motion.div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </Card>
                </TiltCard>
              </StaggeredList>
            </ParallaxSection>
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== CORE CAPABILITIES ==================== */}
      <AnimatedSection className="py-32 md:py-40">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground text-center">
              Core Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 text-center">
              What Makes It Work
            </h2>

            <StaggeredList className="grid gap-6 md:grid-cols-2">
              <StaggeredItem>
                <CapabilityCard
                  icon={Database}
                  title="Memory & Continuity"
                  desc="OperatorOS can retain context across interactions (as scoped), so repeat issues don't reset to zero. Memory policies can be configured — retention, redaction, and approval gates."
                  meshPattern="memory"
                />
              </StaggeredItem>
              <StaggeredItem>
                <CapabilityCard
                  icon={Brain}
                  title="Intelligent Coordination"
                  desc="Voice talks to Sales. Sales talks to Ops. Ops talks to Marketing. Your Operator coordinates across every function, helping ensure nothing falls through the cracks."
                  meshPattern="coordination"
                />
              </StaggeredItem>
              <StaggeredItem>
                <CapabilityCard
                  icon={Users}
                  title="Human-in-the-Loop Controls"
                  desc="You're always in control. Set approval thresholds, review decisions, and adjust logic. Operator assists, doesn't replace. You remain the operator."
                  meshPattern="human"
                />
              </StaggeredItem>
              <StaggeredItem>
                <CapabilityCard
                  icon={Lock}
                  title="Privacy-Leaning by Design"
                  desc="Can be configured to keep sensitive data on your Operator Node (as scoped). May support privacy-leaning deployments with minimized third-party exposure."
                  meshPattern="privacy"
                />
              </StaggeredItem>
            </StaggeredList>
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== THE OPERATOR STACK ==================== */}
      <AnimatedSection className="py-32 md:py-40 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground text-center">
              The Stack
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-center">
              The Operator Stack
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              How OperatorOS runs your business.
            </p>

            {/* OperatorOS — The Anchor/Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <Card className="p-8 bg-accent/5 border-2 border-accent/30 backdrop-blur-sm relative overflow-hidden">
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="flex size-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-lg shadow-accent/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Cog className="size-8" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold">OperatorOS</h3>
                      <p className="text-accent font-medium">Business Operating System</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
                    The operating system that governs and coordinates everything below. Synchronizes state across HQs. Enforces routing logic. Provides mission control — dashboards, approvals, audit trails, and override controls. You're always in command.
                  </p>
                  <p className="text-sm text-muted-foreground/70 italic">
                    If HQs are applications, OperatorOS is the operating system they run on.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Visual "contains" indicator */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
              <span className="text-xs font-mono text-accent/60 tracking-widest">RUNS INSIDE OPERATOROS</span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
            </div>

            {/* Subsystem Layers — exist INSIDE OperatorOS */}
            <div className="relative pl-4 md:pl-8 border-l-2 border-accent/20">
              <StaggeredList className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: "Entry Interfaces",
                    desc: "Where customers, staff, and systems interact. Calls answered, forms submitted, messages received, events triggered. Input flows in — OperatorOS takes it from there.",
                  },
                  {
                    icon: Database,
                    title: "Memory & Context",
                    desc: "Where Operator remembers everything. Customer history, product data, transaction records, prior conversations. Shared context means repeat issues don't reset to zero.",
                  },
                  {
                    icon: Brain,
                    title: "Decision & Enforcement",
                    desc: "Where rules, approvals, and escalation live. What runs automatically. What pauses for human review. What escalates when thresholds are hit. You define the logic — OperatorOS enforces it.",
                  },
                  {
                    icon: Layers,
                    title: "HQ Modules",
                    desc: "Where work gets done. Voice HQ answers calls. Intake HQ captures leads. Sales HQ qualifies. Ops HQ tracks completion. Applications running on OperatorOS.",
                  },
                ].map((layer, i) => (
                  <StaggeredItem key={i}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card className="p-5 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-card/80 group">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                          >
                            <layer.icon className="size-5" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-base font-semibold mb-1 group-hover:text-accent transition-colors">{layer.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">{layer.desc}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </StaggeredItem>
                ))}
              </StaggeredList>
            </div>

            {/* Core Vitals callout */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 pt-6 border-t border-white/5 text-center"
            >
              <p className="text-sm text-muted-foreground">
                <span className="text-accent font-medium">Core Vitals</span> enables multi-HQ orchestration inside OperatorOS — shared state, routing, and audit logic across workloads.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== PROBLEMS WE SOLVE ==================== */}
      <AnimatedSection className="py-32 md:py-40 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground text-center">
              Operational Systems
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">
              Problems We Solve
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
              Each Foundation HQ is a deployed operational system. Together, they coordinate across your entire operation — powered by AI agents under OperatorOS.
            </p>

            <StaggeredList className="space-y-4">
              {[
                {
                  problem: "Missed calls losing revenue",
                  system: "Voice HQ",
                  desc: "Answers 24/7, captures intent, qualifies, books or routes — never misses a lead."
                },
                {
                  problem: "Inbox chaos, no structured intake",
                  system: "Intake HQ",
                  desc: "Multi-channel ingestion (web, SMS, email, DM) — creates structured records automatically."
                },
                {
                  problem: "Leads booking but never showing",
                  system: "Scheduling HQ",
                  desc: "Handles booking, confirmations, reminders, reschedules — reduces no-shows systematically."
                },
                {
                  problem: "Qualified leads falling through cracks",
                  system: "Sales HQ",
                  desc: "Qualifies, nurtures, and hands off with context — no lead left behind."
                },
                {
                  problem: "Jobs confirmed but execution messy",
                  system: "Ops HQ",
                  desc: "Assigns, tracks, and follows up — ensures completion and review."
                }
              ].map((item, i) => (
                <StaggeredItem key={i}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="p-6 bg-card/80 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 group">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground mb-1">When you have...</p>
                          <p className="font-semibold text-lg group-hover:text-accent transition-colors">{item.problem}</p>
                        </div>
                        <div className="hidden md:block text-muted-foreground/30">→</div>
                        <div className="flex-1">
                          <p className="text-sm text-accent font-medium mb-1">{item.system}</p>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </StaggeredItem>
              ))}
            </StaggeredList>

            <motion.p
              className="text-center text-sm text-muted-foreground/70 mt-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              OperatorHQ is a multi-agent operating system — specialized AI agents working in coordination, with human oversight gates, deployed on your own infrastructure.
            </motion.p>
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== DEPLOYMENT PATHS ==================== */}
      <AnimatedSection className="py-32 md:py-40">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground text-center">
              Deployment Options
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">
              Choose Your Path
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
              Start with one system. Add more when the first one is proven.
            </p>

            <StaggeredList className="grid gap-6">
              {/* 1. Foundation Package — $10,000 */}
              <StaggeredItem>
                <TiltCard>
                  <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-border/50 hover:border-accent/60 transition-all duration-300 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="flex size-12 items-center justify-center rounded-xl bg-accent/10"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Server className="size-6 text-accent" />
                          </motion.div>
                          <h3 className="text-xl font-semibold">Foundation Package</h3>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-accent">$10,000</span>
                          <p className="text-xs text-muted-foreground">Infrastructure</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Operator Node (Mac Studio) + OperatorOS activated. Core coordination layer enabled (routing + context + handoffs) (as scoped). Choose 1 Foundation HQ to deploy first: <Link href="/modules#voice" className="text-accent hover:underline">Voice HQ</Link> (Front Desk) OR <Link href="/modules#knowledge" className="text-accent hover:underline">Knowledge HQ</Link> (Internal Expert).
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-muted-foreground/70">Best for businesses that want a real first system live without rebuilding everything.</p>
                        <button
                          onClick={() => setShowCoreVitalsModal(true)}
                          className="text-xs font-medium text-accent hover:underline cursor-pointer whitespace-nowrap ml-4"
                        >
                          Add Core Vitals (+$15,000) →
                        </button>
                      </div>
                    </div>
                  </Card>
                </TiltCard>
              </StaggeredItem>

              {/* 2. HQ Pro (Industry-Specific) — Prices Vary */}
              <StaggeredItem>
                <TiltCard>
                  <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-accent/50 hover:border-accent transition-all duration-300 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="flex size-12 items-center justify-center rounded-xl bg-accent/20"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Zap className="size-6 text-accent" />
                          </motion.div>
                          <h3 className="text-xl font-semibold">HQ Pro (Industry-Specific)</h3>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-semibold text-accent">$25k–$100k+</span>
                          <p className="text-xs text-muted-foreground">Industry Templates</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Templated vertical-specific deployments (dental, roofing, legal, real estate, and more). Industry workflows and integrations, not “more modules.” Built on Core Vitals (as scoped).
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        <Link href="/use-cases" className="text-accent hover:underline">Browse Use Cases →</Link>
                      </p>
                    </div>
                  </Card>
                </TiltCard>
              </StaggeredItem>

              {/* 3. Operator HQ — $69,000+ Featured */}
              <StaggeredItem>
                <TiltCard>
                  <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-accent hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="flex size-12 items-center justify-center rounded-xl bg-accent"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Cog className="size-6 text-accent-foreground" />
                          </motion.div>
                          <h3 className="text-xl font-semibold">Operator HQ</h3>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-accent">$69,000+</span>
                          <p className="text-xs text-muted-foreground">Bespoke Build</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Bespoke build for your business. Includes the equivalent of Core Vitals system orchestration + custom architecture, deeper integrations, governance/approvals, and multi-team routing (as scoped).
                      </p>
                      <p className="text-xs text-muted-foreground/70">Scoped via Architecture Decision Records (ADRs).</p>
                    </div>
                  </Card>
                </TiltCard>
              </StaggeredItem>

              {/* 4. Custom Operator — Enterprise */}
              <StaggeredItem>
                <TiltCard>
                  <Card className="p-8 bg-gradient-to-br from-card via-card to-muted/20 backdrop-blur-sm border-2 border-foreground/20 hover:border-foreground/40 transition-all duration-500 relative overflow-hidden group">
                    {/* Premium subtle shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.div
                            className="flex size-12 items-center justify-center rounded-xl bg-foreground/10 border border-foreground/20"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Settings className="size-6 text-foreground" />
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-semibold">Custom Operator</h3>
                            <p className="text-xs text-muted-foreground">Bespoke Infrastructure</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-medium text-foreground/80 bg-foreground/10 px-3 py-1.5 rounded-full border border-foreground/20">
                            Enterprise
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Custom architecture for complex requirements: proprietary integrations, advanced AI models, multi-entity operations, strict governance/security constraints, and large-scale deployments (as scoped).
                      </p>
                      <p className="text-xs text-muted-foreground/70">Custom pricing. Larger deployments can exceed $1M.</p>
                    </div>
                  </Card>
                </TiltCard>
              </StaggeredItem>
            </StaggeredList>

            <motion.p
              className="text-center text-sm text-muted-foreground mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Need help choosing? <Link href="https://form.typeform.com/to/k78KP734" className="text-accent hover:underline">Book a strategy call</Link> to map your operations.
            </motion.p>

            {/* SEO-friendly description paragraph */}
            <p className="text-center text-xs text-muted-foreground/50 mt-12 max-w-2xl mx-auto leading-relaxed">
              OperatorHQ provides on-premise AI infrastructure for businesses, including an AI voice receptionist, customer intake automation, scheduling and dispatch, sales qualification, and operations coordination through OperatorOS and an Operator Node (Mac Studio) deployment (as scoped).
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative py-40 md:py-52 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Ready to See It{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/60">
                In Action?
              </span>
            </motion.h2>
            <motion.p
              className="mb-12 text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Schedule a consultation to map your operations<br className="hidden md:block" />
              and determine the right deployment.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button size="lg" className="text-base px-10 h-14 rounded-full group" asChild>
                <a href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="size-5" />
                  </motion.span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-10 h-14 rounded-full" asChild>
                <Link href="/modules">Explore HQ Modules</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== CORE VITALS MODAL ==================== */}
      {showCoreVitalsModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowCoreVitalsModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-lg w-full bg-card border border-white/10 rounded-2xl p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowCoreVitalsModal(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <p className="text-sm font-medium tracking-widest uppercase text-accent mb-2">+$15,000 Add-On</p>
              <h3 className="text-2xl font-bold mb-2">Core Vitals</h3>
              <p className="text-muted-foreground">Multi-HQ Orchestration via OperatorOS</p>
            </div>

            {/* What It Enables */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3">What It Enables</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Check className="size-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Shared state across all deployed HQs</span>
                </li>
                <li className="flex gap-2">
                  <Check className="size-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Cross-HQ routing and handoffs</span>
                </li>
                <li className="flex gap-2">
                  <Check className="size-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Unified notifications and escalations</span>
                </li>
                <li className="flex gap-2">
                  <Check className="size-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>Common audit trail and approval gates</span>
                </li>
              </ul>
            </div>

            {/* The Shift */}
            <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-white/5">
              <p className="text-sm font-semibold mb-3">The Architectural Shift</p>
              <div className="grid gap-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-0.5">Foundation</span>
                  <span className="text-muted-foreground">OperatorOS + one HQ running</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-0.5">Core Vitals</span>
                  <span className="text-foreground font-medium">OperatorOS coordinating multiple HQs as a single system</span>
                </div>
              </div>
            </div>

            {/* Bottom note */}
            <p className="text-xs text-muted-foreground/70">
              Core Vitals connects multiple Foundation HQs (as scoped). Not a bundle — an orchestration layer.
            </p>

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <a href="https://form.typeform.com/to/k78KP734?utm_source=how-it-works&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">
                  Discuss Core Vitals Deployment
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main >
  )
}
