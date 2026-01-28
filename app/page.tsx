"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, X } from "lucide-react"

// Reusable animated section component
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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

// Staggered list items
function StaggeredList({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.ul
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.ul>
  )
}

function StaggeredItem({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.li>
  )
}

export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      {/* HERO — Apple-style centered with parallax */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[90vh] flex items-center justify-center"
      >
        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6 text-sm font-medium tracking-widest uppercase text-accent"
            >
              Private AI Infrastructure
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
            >
              Install an AI Operating System<br />
              <span className="text-muted-foreground">in Your Business</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-6 text-xl md:text-2xl font-medium text-foreground/80"
            >
              Most businesses run on scattered tools.<br />
              OperatorHQ installs a system.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mb-12 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              OperatorOS + Operator Node deployed on-prem. Private. Owner-controlled. Built for real operations — not SaaS subscriptions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="text-base px-8 h-14 rounded-full" asChild>
                <a href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-14 rounded-full" asChild>
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* THE PROBLEM */}
      <AnimatedSection className="py-32 md:py-40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
              The Problem
            </p>
            <h2 className="mb-16 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Why AI Tools Fail<br />
              <span className="text-muted-foreground">Businesses</span>
            </h2>

            <StaggeredList className="space-y-6 mb-16 text-left max-w-xl mx-auto">
              {[
                "Too many disconnected tools that don't talk to each other",
                "Data scattered across platforms you don't own",
                "Manual handoffs, missed follow-ups, and lost context",
                "AI bolted on as \"features\" instead of built into operations",
              ].map((item, i) => (
                <StaggeredItem key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                    <X className="size-3.5 text-destructive" />
                  </span>
                  <span className="text-lg text-muted-foreground">{item}</span>
                </StaggeredItem>
              ))}
            </StaggeredList>

            <div className="pt-8 border-t border-border/50">
              <p className="text-lg text-muted-foreground mb-4">
                This is why businesses leak revenue, drop leads, and burn out teams.
              </p>
              <p className="text-2xl font-medium">
                They don't need more tools.<br />
                <span className="text-accent">They need a system.</span>
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* WHAT IS OPERATOR HQ */}
      <AnimatedSection className="py-32 md:py-40 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
              The Solution
            </p>
            <h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Operator HQ
            </h2>
            <p className="mb-6 text-xl md:text-2xl text-foreground/80">
              <strong>Installed infrastructure</strong>, not software you rent.
            </p>
            <p className="mb-16 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Think of it like an operating system for your business — not an app.
              Apps come and go. The OS coordinates everything underneath.
            </p>

            <StaggeredList className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
              {[
                "Voice & Inbound Agents",
                "Internal Knowledge & Policy",
                "Lead Qualification & Sales",
                "Operational Routing",
                "Marketing & Attribution",
                "Data Sovereignty",
              ].map((item, i) => (
                <StaggeredItem
                  key={i}
                  className="flex items-center gap-3 p-5 rounded-2xl bg-background border border-border/50"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="size-4 text-accent" />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </StaggeredItem>
              ))}
            </StaggeredList>
          </div>
        </div>
      </AnimatedSection>

      {/* HOW IT WORKS */}
      <AnimatedSection id="how-it-works" className="py-32 md:py-40">
        <div className="container">
          <div className="text-center mb-20">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
              System Architecture
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The Pulse of Your Business
            </h2>
          </div>

          <div className="max-w-[1240px] mx-auto">
            <StaggeredList className="grid md:grid-cols-5 gap-4 md:gap-6 text-center">
              {[
                { step: "01", title: "Signal Capture", desc: "Voice HQ & Marketing HQ ingest every signal — calls, leads, reviews, and market data." },
                { step: "02", title: "Decision Engine", desc: "OperatorOS analyzes intent against your unique business rules (HQ Pro & Bespoke Logic)." },
                { step: "03", title: "Orchestration", desc: "Work is instantly routed to the right layer — autonomous agents for speed, or humans for high-touch." },
                { step: "04", title: "Enforcement", desc: "Knowledge HQ guides staff, enforces SOPs, and ensures no protocol is skipped." },
                { step: "05", title: "Optimization", desc: "Outcomes are verified. Data feeds back into the OS. The business gets smarter every day." },
              ].map((item, i) => (
                <StaggeredItem key={i} className="flex flex-col items-center">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-accent text-accent-foreground font-mono text-sm font-bold shadow-lg shadow-accent/20">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed px-2">{item.desc}</p>
                </StaggeredItem>
              ))}
            </StaggeredList>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-20 text-center"
          >
            <p className="text-xl font-medium">
              This isn't just a funnel.<br />
              <span className="text-accent">It's an autonomous operating system running your entire company.</span>
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* WHO IT'S FOR */}
      <AnimatedSection className="py-32 md:py-40 bg-muted/30">
        <div className="container">
          <div className="text-center mb-20">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Built For
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Real Businesses
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <StaggeredList className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { title: "Local & Service Businesses", desc: "$1M–$50M revenue. High inbound volume. Real operations." },
                { title: "Agencies & Operators", desc: "Managing clients, teams, and performance across systems." },
                { title: "Multi-Location Businesses", desc: "Scheduling, staffing, and data consistency challenges." },
                { title: "Regulated Industries", desc: "Legal, medical, financial, or privacy-focused operations." },
              ].map((item, i) => (
                <StaggeredItem key={i}>
                  <div className="h-full p-8 rounded-3xl bg-background border border-border/50 transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredList>

            <div className="text-center p-6 rounded-2xl border border-dashed border-muted-foreground/20">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Not for:</strong> Hobbyists, "AI experimenters," or businesses looking for cheap SaaS tools.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* DEPLOYMENT */}
      <AnimatedSection className="py-32 md:py-40">
        <div className="container">
          <div className="text-center mb-20">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Installation
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              How It's Deployed
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <StaggeredList className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { step: "1", title: "Map", desc: "We map how your business actually runs. Not theory. Real workflows." },
                { step: "2", title: "Install", desc: "Operator infrastructure is installed on-premise or private cloud." },
                { step: "3", title: "Deploy", desc: "Foundation (Voice or Knowledge) is deployed first. Modules added as you grow." },
              ].map((item, i) => (
                <StaggeredItem key={i} className="flex flex-col items-center">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-accent text-accent-foreground font-bold text-2xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </StaggeredItem>
              ))}
            </StaggeredList>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center text-lg text-muted-foreground"
            >
              Operator grows with your business instead of being replaced.
            </motion.p>
          </div>
        </div>
      </AnimatedSection>

      {/* OWNERSHIP */}
      <AnimatedSection className="py-32 md:py-40 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
              True Ownership
            </p>
            <h2 className="mb-16 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              You Own the System
            </h2>

            <StaggeredList className="flex flex-col md:flex-row justify-center gap-8 mb-16">
              {["The infrastructure", "The data", "The logic and workflows"].map((item, i) => (
                <StaggeredItem key={i} className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="size-4 text-accent" />
                  </span>
                  <span className="text-lg font-medium">{item}</span>
                </StaggeredItem>
              ))}
            </StaggeredList>

            <div className="pt-8 border-t border-border/50">
              <p className="text-lg text-muted-foreground mb-6">
                If support ends, Operator keeps running.
              </p>
              <p className="text-2xl md:text-3xl font-medium leading-snug">
                This is not subscription software.<br />
                <span className="text-accent">This is business infrastructure.</span>
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* USE CASES */}
      <AnimatedSection className="py-32 md:py-40">
        <div className="container">
          <div className="text-center mb-16">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Industries
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Operator Works Across
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <StaggeredList className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {["Roofing & Home Services", "Dental & Medical", "Legal Firms", "Agencies"].map((item, i) => (
                <StaggeredItem key={i}>
                  <div className="p-6 rounded-2xl bg-muted/50 border border-border/50 text-center transition-all duration-300 hover:border-accent/30">
                    <p className="font-medium">{item}</p>
                  </div>
                </StaggeredItem>
              ))}
            </StaggeredList>

            <div className="text-center">
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link href="/use-cases">
                  See Real Use Cases
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FINAL CTA */}
      <section id="contact" className="relative py-40 md:py-52 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Ready to Install Operator?
            </h2>
            <p className="mb-12 text-xl text-muted-foreground leading-relaxed">
              Schedule a consultation to map your operations<br className="hidden md:block" />
              and determine the right deployment.
            </p>
            <Button size="lg" className="text-base px-10 h-14 rounded-full" asChild>
              <a href="https://form.typeform.com/to/k78KP734?utm_source=xxxxx&typeform-source=operatorai.agency" target="_blank" rel="noopener noreferrer">
                Book a Strategy Call
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
