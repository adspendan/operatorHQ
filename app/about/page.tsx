import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "About | Operator HQ",
  description: "Why owner-controlled AI matters. Why local matters. Why Operator exists.",
}

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6 text-balance sm:text-5xl">About Operator HQ</h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            This is where our thinking lives. Why Operator exists, what we believe, and what we're building toward.
          </p>
        </div>
      </section>

      {/* Why Owner-Controlled AI Matters */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-balance sm:text-4xl">
              Why Owner-Controlled AI Matters
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Every business automation wave — email, CRM, cloud software — followed the same pattern: tools became
                services, services became platforms, platforms became landlords.
              </p>

              <p>
                You don't own your customer data. You don't control your workflows. You don't decide when features
                change or prices increase. You rent access to systems that run your business, and you hope they keep
                working.
              </p>

              <p>
                AI will be worse. Not because the technology is worse, but because the incentives are worse. Cloud AI
                platforms want your data to train their models. They want dependency, not ownership. They want monthly
                recurring revenue from you forever.
              </p>

              <p>
                <span className="font-semibold text-foreground">Operator exists to break that pattern.</span>
              </p>

              <p>
                We build AI operating systems you own. On hardware you control. Running logic you define. Your data
                never leaves your infrastructure. No vendor can turn off your business because you stopped paying rent.
              </p>

              <p>This isn't anti-cloud dogma. It's about who controls the foundation your business runs on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-balance sm:text-4xl">Why Local Matters</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Most AI tools are built for tech companies in San Francisco. They assume you have engineers, flexible
                workflows, and infinite cloud budgets. They assume you want to "move fast and break things."
              </p>

              <p>
                That's not how real businesses work. Roofing companies, dental practices, legal firms, agencies —
                they're local, they're regulated, they're accountable to customers who live down the street.
              </p>

              <p>
                <span className="font-semibold text-foreground">
                  Local businesses need systems that respect their reality:
                </span>
              </p>

              <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Data that can't leave their control (regulatory, ethical, competitive reasons)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Systems tailored to their specific workflows, not generic templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Infrastructure they own, not rent from distant platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>AI that assists operators, not replaces them</span>
                </li>
              </ul>

              <p>
                Operator is built for businesses that serve their communities, employ local teams, and need technology
                that strengthens their position — not makes them dependent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Operator Exists */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-balance sm:text-4xl">Why Operator Exists</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>We started building Operator after seeing the same problem across dozens of businesses:</p>

              <p className="font-semibold text-foreground text-lg">
                They were drowning in tools, but starving for coordination.
              </p>

              <p>
                CRM for sales. Scheduling software for ops. Email automation for marketing. Project management for
                teams. Every tool soloed. Every workflow duct-taped. Every handoff manual.
              </p>

              <p>
                The problem wasn't lack of AI. The problem was lack of system thinking. Businesses don't need more point
                solutions. They need an operating system.
              </p>

              <p className="font-semibold text-foreground">Operator is that system.</p>

              <p>It sits beneath your business operations and coordinates everything:</p>

              <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Voice interfaces that understand context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Data layers that maintain memory across all interactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Logic engines that make routine decisions and escalate complex ones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Modular HQs that handle specialized functions but talk to each other</span>
                </li>
              </ul>

              <p>
                Not a chatbot. Not a workflow tool. Not another app. An infrastructure layer that turns disconnected
                tools into a coordinated system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center text-balance sm:text-4xl">
              Our Principles
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-8 bg-card">
                <h3 className="text-xl font-semibold mb-3">Infrastructure, not software</h3>
                <p className="text-sm text-muted-foreground">
                  You wouldn't rent your building or your servers. Why rent the AI that runs your business?
                </p>
              </Card>

              <Card className="p-8 bg-card">
                <h3 className="text-xl font-semibold mb-3">Ownership, not subscription</h3>
                <p className="text-sm text-muted-foreground">
                  You install it, you own it. If you stop paying us, your Operator keeps running.
                </p>
              </Card>

              <Card className="p-8 bg-card">
                <h3 className="text-xl font-semibold mb-3">Coordination, not automation</h3>
                <p className="text-sm text-muted-foreground">
                  We don't just automate tasks. We coordinate systems, teams, and decisions.
                </p>
              </Card>

              <Card className="p-8 bg-card">
                <h3 className="text-xl font-semibold mb-3">Context, not prompts</h3>
                <p className="text-sm text-muted-foreground">
                  Every interaction builds on the last. Memory and continuity are non-negotiable.
                </p>
              </Card>

              <Card className="p-8 bg-card">
                <h3 className="text-xl font-semibold mb-3">Assistance, not replacement</h3>
                <p className="text-sm text-muted-foreground">
                  AI handles coordination. Humans handle judgment. You remain the operator.
                </p>
              </Card>

              <Card className="p-8 bg-card">
                <h3 className="text-xl font-semibold mb-3">Built for real businesses</h3>
                <p className="text-sm text-muted-foreground">
                  Not startups, not tech companies. Businesses that serve communities and need systems that respect
                  that.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We're Building Toward */}
      <section className="border-t border-border bg-muted/30 py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-balance sm:text-4xl">
              What We're Building Toward
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In 10 years, we believe every serious business will run on an AI operating system. Not rented from a
                platform. Installed, owned, tailored.
              </p>

              <p>
                Just like businesses today wouldn't operate without email, servers, and networks — they won't operate
                without an AI layer coordinating operations.
              </p>

              <p className="font-semibold text-foreground">The question is: who will control that layer?</p>

              <p>
                If we don't build owner-controlled AI now, businesses will sleepwalk into a future where a handful of
                platforms own the infrastructure layer of every company. Where turning off your subscription means your
                business stops running.
              </p>

              <p>Operator is our answer. Infrastructure you own. Systems that strengthen your position.</p>

              <p>
                We're building for business owners who want control. Who understand that infrastructure isn't rented,
                it's owned. Who see AI not as magic, but as the next layer of their operational foundation.
              </p>

              <p className="text-foreground font-semibold text-lg">If that's you, we should talk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-balance sm:text-4xl">
              Ready to Build Your Operator?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              If our philosophy resonates, let's discuss how Operator would work for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/pricing">
                  View Pricing & Deployment
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/how-it-works">Explore How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
