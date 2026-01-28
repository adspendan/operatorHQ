"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Megaphone, ArrowRight, Monitor, Brain, Check, Database, Layers } from "lucide-react"
import Lenis from "lenis"

// ============================================
// SMOOTH SCROLL
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
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
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

// HQ Card with mesh reveal on hover
function HQCard({
  icon: Icon,
  title,
  subtitle,
  description,
  includes,
  artifact,
  workflow,
  reversed = false,
  id
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
  description: string
  includes: string
  artifact: string
  workflow: string[]
  reversed?: boolean
  id: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <AnimatedSection id={id} className={`py-24 scroll-mt-20 ${reversed ? "" : "border-t border-border bg-muted/30"}`}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className={`grid gap-12 md:grid-cols-2 items-center ${reversed ? "" : ""}`}>
            <div className={reversed ? "order-2 md:order-1" : ""}>
              {!reversed ? (
                <>
                  <motion.div
                    className="mb-4 inline-flex rounded-lg bg-accent/10 p-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="size-8 text-accent" />
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
                  <p className="text-sm text-accent mb-4 font-medium">{subtitle}</p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{description}</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">What's included:</h3>
                      <p className="text-sm text-muted-foreground">{includes}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Operational artifact:</h3>
                      <p className="text-sm text-muted-foreground">{artifact}</p>
                    </div>
                  </div>
                </>
              ) : (
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Card className="p-8 bg-card/80 backdrop-blur-sm overflow-hidden relative">
                    {/* Mesh background on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 0.08 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            radial-gradient(circle at 20% 30%, hsl(var(--accent)) 1px, transparent 1px),
                            radial-gradient(circle at 80% 70%, hsl(var(--accent)) 1px, transparent 1px)
                          `,
                          backgroundSize: '40px 40px, 60px 60px'
                        }}
                      />
                    </motion.div>
                    <h3 className="font-semibold mb-4 relative z-10">Example Workflow:</h3>
                    <ol className="space-y-3 text-sm relative z-10">
                      {workflow.map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </Card>
                </motion.div>
              )}
            </div>

            <div className={reversed ? "order-1 md:order-2" : ""}>
              {reversed ? (
                <>
                  <motion.div
                    className="mb-4 inline-flex rounded-lg bg-accent/10 p-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="size-8 text-accent" />
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
                  <p className="text-sm text-accent mb-4 font-medium">{subtitle}</p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{description}</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">What's included:</h3>
                      <p className="text-sm text-muted-foreground">{includes}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Operational artifact:</h3>
                      <p className="text-sm text-muted-foreground">{artifact}</p>
                    </div>
                  </div>
                </>
              ) : (
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Card className="p-8 bg-card/80 backdrop-blur-sm overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isHovered ? 0.08 : 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            radial-gradient(circle at 20% 30%, hsl(var(--accent)) 1px, transparent 1px),
                            radial-gradient(circle at 80% 70%, hsl(var(--accent)) 1px, transparent 1px)
                          `,
                          backgroundSize: '40px 40px, 60px 60px'
                        }}
                      />
                    </motion.div>
                    <h3 className="font-semibold mb-4 relative z-10">Example Workflow:</h3>
                    <ol className="space-y-3 text-sm relative z-10">
                      {workflow.map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
                            {i + 1}
                          </span>
                          <span className="text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

// ============================================
// MAIN PAGE
// ============================================

export default function ModulesPage() {
  useSmoothScroll()

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <AnimatedSection className="container py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight mb-6 text-balance sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            HQ Modules
          </motion.h1>
          <motion.p
            className="text-xl text-muted-foreground text-pretty leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A modular operating system for business. Your Foundation includes your choice of <span className="text-foreground font-medium">Voice HQ</span> or <span className="text-foreground font-medium">Knowledge HQ</span>.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* ==================== OPERATOROS OPERATING SYSTEM ==================== */}
      <AnimatedSection className="border-t border-border bg-accent/5 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="inline-flex rounded-lg bg-accent/10 p-3"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Monitor className="size-8 text-accent" />
              </motion.div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight">OperatorOS (Operating System)</h2>
                <p className="text-sm text-muted-foreground">The fabric HQs run on — included with every Foundation deployment</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              OperatorOS governs and coordinates all HQ activity. It synchronizes state across HQs, enforces routing logic, and provides mission control for your business (as scoped).
            </p>
            <p className="text-sm text-muted-foreground/70 mb-6">
              Deployed at <span className="text-accent font-medium">operator.adspend.agency</span> and available as a desktop app on Operator Node (Mac Studio).
            </p>
            <StaggeredList className="flex flex-wrap gap-2">
              {["Mission Control", "State Sync", "Approval Gates", "Audit Trail", "Override Controls"].map((badge) => (
                <StaggeredItem key={badge}>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {badge}
                  </span>
                </StaggeredItem>
              ))}
            </StaggeredList>
          </div>
        </div>
      </AnimatedSection>

      {/* ==================== STARTER HQS HEADER ==================== */}
      <AnimatedSection className="container pt-24 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Foundation Modules</p>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Choice of Entry Point</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every Foundation deployment includes one of these core HQs. You can add the second for +$2,500.
          </p>
        </div>
      </AnimatedSection>

      {/* Voice HQ */}
      <HQCard
        id="voice"
        icon={Phone}
        title="Voice HQ"
        subtitle="The Front Desk & Sales Engine"
        description="Autonomous AI voice agent for inbound calls. Answers 24/7, captures intent, qualifies leads, schedules appointments, and routes complex issues. It is your front desk, intake coordinator, and SDR in one."
        includes="24/7 Call Answering, Intent Classification, Lead Qualification, Live Calendar Booking, Warm Transfer Routing, SMS Follow-Up, CRM Sync."
        artifact="&quot;Call Record&quot; object + transcript + booked appointment stored in OperatorOS"
        workflow={[
          "Customer calls: \"I need a quote for a new roof.\"",
          "Voice HQ answers immediately, verifies service area.",
          "Qualifies the lead (timeline, budget, insurance).",
          "Books an on-site estimate directly to your calendar.",
          "Sends confirmation text and logs deal in OperatorOS."
        ]}
      />

      {/* Knowledge HQ */}
      <HQCard
        id="knowledge"
        icon={Brain}
        title="Knowledge HQ"
        subtitle="The Internal Expert & Policy Oracle"
        description="RAG-based chat agent connected to your business's entire knowledge base (handbooks, policies, SOPs, past projects). Staff can query it for instant answers, drafting documents, or policy checks."
        includes="Vector Database Setup, Document Ingestion (PDF/Doc/Notion), Citation-Backed RAG Chat, Policy Enforcement, Drafting Assistant."
        artifact="&quot;Knowledge Session&quot; log + cited sources stored in OperatorOS"
        workflow={[
          "Employee asks: \"What is the protocol for a Level 3 escalation?\"",
          "Knowledge HQ scans 500+ pages of handbooks/SOPs.",
          "Returns exact step-by-step ANSWER with citations.",
          "Drafts the required email response for the employee.",
          "Logs the query for training gaps."
        ]}
        reversed
      />

      {/* ==================== CORE CAPABILITY LAYERS ==================== */}
      <AnimatedSection className="container py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Infrastructure</p>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Core Capability Layers</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              These layers power Starter HQs and Core Vitals. They're assembled differently by deployment (as scoped). Enabled with OperatorOS — not sold separately.
            </p>
          </div>

          <StaggeredList className="grid gap-6 md:grid-cols-2">
            <StaggeredItem>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Card className="p-6 bg-card/50 border-dashed h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex rounded-lg bg-muted p-2">
                      <Database className="size-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold">Data/Context Layer</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground ml-auto">Enabled</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Shared backbone — customer history, product data, transaction records. Provides context for every decision every HQ makes.
                  </p>
                </Card>
              </motion.div>
            </StaggeredItem>

            <StaggeredItem>
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Card className="p-6 bg-card/50 border-dashed h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex rounded-lg bg-muted p-2">
                      <Layers className="size-5 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold">Routing/Workflow Layer</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground ml-auto">Enabled</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Decision-making engine — rules, approvals, escalation, handoffs. Connects HQs together through shared routing logic.
                  </p>
                </Card>
              </motion.div>
            </StaggeredItem>
          </StaggeredList>
        </div>
      </AnimatedSection>

      {/* ==================== GROWTH MODULES ==================== */}
      <AnimatedSection className="border-t border-border bg-muted/30 py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">Powered by Adspend</p>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Growth Module</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Available exclusively when running growth with Adspend Agency.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="inline-flex rounded-lg bg-accent/10 p-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Megaphone className="size-8 text-accent" />
                  </motion.div>
                  <motion.span
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
                    whileHover={{ scale: 1.05 }}
                  >
                    Partner Exclusive
                  </motion.span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Marketing HQ</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Customer lifecycle management. Handles reviews, referrals, re-engagement, and attribution. Turns customers into advocates and feeds conversion data back to your ad campaigns.
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">What it unlocks:</h3>
                    <p className="text-sm text-muted-foreground">
                      Automated reputation building, intelligent segmentation, referral generation, lifetime value optimization, attribution tracking
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Who it's for:</h3>
                    <p className="text-sm text-muted-foreground">
                      Partner businesses running active growth campaigns with Adspend.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.01, y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Card className="p-8 bg-card/80 backdrop-blur-sm">
                  <h3 className="font-semibold mb-4">Example Workflow:</h3>
                  <ol className="space-y-3 text-sm">
                    {[
                      "Customer completes job (tracked in OperatorOS)",
                      "Marketing HQ sends review request at optimal time",
                      "Identifies referral opportunities based on satisfaction",
                      "Segments for re-engagement campaigns",
                      "Feeds conversion data back to Adspend"
                    ].map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How HQs Work Together */}
      <AnimatedSection className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-balance sm:text-4xl">How HQs Work Together</h2>
            <p className="text-lg text-muted-foreground mb-4 text-pretty">
              Each HQ is powerful alone. Together, they form a coordinated operating system.
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              OperatorOS orchestrates state between Voice, Knowledge, and your Applications — ensuring shared context across the entire business.
            </p>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 bg-card text-left">
                <p className="text-sm text-muted-foreground mb-4 italic">Example: New customer inquiry flow</p>
                <StaggeredList className="space-y-4 text-sm">
                  {[
                    { hq: "Voice HQ", action: "answers call, qualifies lead, checks schedule availability" },
                    { hq: "OperatorOS", action: "syncs customer data, checks existing records" },
                    { hq: "Voice HQ", action: "books appointment and sends confirmation SMS" },
                    { hq: "Knowledge HQ", action: "provides technician with specific job protocols via chat" },
                    { hq: "Marketing HQ", action: "requests review after job completion", badge: "(Adspend)" }
                  ].map((item, i) => (
                    <StaggeredItem key={i}>
                      <p>
                        <span className="font-semibold">{item.hq}</span> {item.action}
                        {item.badge && <span className="text-accent ml-1">{item.badge}</span>}
                      </p>
                    </StaggeredItem>
                  ))}
                </StaggeredList>
                <p className="text-sm text-muted-foreground mt-6">
                  All of this happens automatically, in coordination, without manual handoffs.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="border-t border-border bg-muted/30 py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-balance sm:text-4xl">
              Choose Your Starting Point
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Foundation ($10k) includes your choice of Voice HQ or Knowledge HQ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg">
                  <Link href="/pricing">
                    View Pricing & Deployment
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" variant="outline">
                  <Link href="/use-cases">See Real Use Cases</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
