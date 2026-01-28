import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { UseCaseSection } from "./components/UseCaseSection"
import { useCases } from "./data"
import { Metadata } from "next"

// SEO Metadata for the hub page
export const metadata: Metadata = {
  title: "Use Cases | OperatorHQ",
  description: "Explore how businesses deploy OperatorHQ across industries, profiles, and capability layers. 63+ use cases spanning healthcare, legal, agency, personal infrastructure, and more.",
  openGraph: {
    title: "Use Cases | OperatorHQ",
    description: "Real scenarios showing how different businesses deploy OperatorHQ — from industry verticals to personal operating systems.",
    type: "website",
  },
}

// Categorize use cases
const verticals = useCases.filter(uc => uc.useCaseCategory === "vertical")
const profiles = useCases.filter(uc => uc.useCaseCategory === "profile")
const capabilities = useCases.filter(uc => uc.useCaseCategory === "capability")

// Anchor use case (most deployed)
const ANCHOR_USE_CASE_ID = "dental"

// Use case card for the index section
function UseCaseCard({ id, label, headline, isAnchor = false }: { id: string; label: string; headline: string; isAnchor?: boolean }) {
  return (
    <Link href={`/use-cases/${id}`} className="group">
      <Card className={`p-6 h-full transition-colors bg-card/50 hover:bg-card ${isAnchor ? "border-accent/30 hover:border-accent/60" : "hover:border-accent/50"}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {label}
              </span>
              {isAnchor && (
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground/70 bg-muted px-1.5 py-0.5 rounded">
                  Most Deployed
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2 group-hover:text-foreground transition-colors">
              {headline}
            </p>
          </div>
          <ArrowRight className="size-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0 mt-1" />
        </div>
      </Card>
    </Link>
  )
}

export default function UseCasesPage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="py-32 md:py-40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-6 text-sm font-medium tracking-widest uppercase text-muted-foreground">
              Use Cases
            </p>
            <h1 className="text-4xl font-bold tracking-tight mb-8 text-balance sm:text-5xl lg:text-6xl">
              How Businesses Deploy Operator
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Real scenarios showing how different businesses enter the Operator ecosystem — and how they grow.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation - Use Case Index */}
      <section className="border-t border-border py-16 bg-muted/20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="sr-only">Browse Use Cases by Category</h2>

            {/* 1️⃣ Industry Verticals - PRIMARY (Strongest visual weight) */}
            <div className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <h3 className="text-2xl font-bold tracking-tight">Industry Verticals</h3>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{verticals.length}</span>
              </div>
              <p className="text-base text-muted-foreground mb-10 max-w-2xl">
                Pre-built Operator systems for real businesses. Each vertical represents a proven deployment pattern built on the Operator platform.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {verticals.map(uc => (
                  <UseCaseCard
                    key={uc.id}
                    id={uc.id}
                    label={uc.label}
                    headline={uc.headline}
                    isAnchor={uc.id === ANCHOR_USE_CASE_ID}
                  />
                ))}
              </div>
            </div>

            {/* System Reveal Section */}
            <div className="border-t border-border/40 pt-16 pb-12 mb-12">
              <p className="text-center text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
                <span className="block text-foreground font-medium mb-2">One platform. Many deployments.</span>
                Every Operator system — whether for a dental practice, a creator, or a household — is built from the same underlying infrastructure. What changes is how it&apos;s assembled, governed, and scaled.
              </p>
            </div>

            {/* 2️⃣ Operator Profiles - SECONDARY (Reduced visual weight) */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-lg font-semibold text-foreground/90">Operator Profiles</h3>
                <span className="text-xs text-muted-foreground/60 italic">Individual &amp; Household Systems</span>
              </div>
              <p className="text-sm text-muted-foreground/80 mb-6 max-w-2xl">
                Operator isn&apos;t just for businesses. These standalone operating systems serve individuals, creators, and households — with paths to full Operator deployments.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {profiles.map(uc => (
                  <UseCaseCard key={uc.id} id={uc.id} label={uc.label} headline={uc.headline} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground/50 mt-5 italic">
                Additional profiles are assembled in Custom Operator deployments.
              </p>
            </div>

            {/* 3️⃣ Capability Layers - TERTIARY (Infrastructural / Under-the-hood feel) */}
            <div className="pt-8 border-t border-border/20">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-base font-medium text-muted-foreground">Core Capability Layers</h3>
              </div>
              <p className="text-sm text-muted-foreground/70 mb-6 max-w-2xl">
                Foundational capabilities that power every Operator system. These layers are combined differently depending on your industry, scale, and deployment.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {capabilities.map(uc => (
                  <UseCaseCard key={uc.id} id={uc.id} label={uc.label} headline={uc.headline} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground/50 mt-5 italic">
                Additional capabilities are assembled in Custom Operator deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Use Case Content - Verticals First */}

      {/* 1️⃣ Verticals - Full Content (Primary) */}
      <section className="border-t border-border" aria-labelledby="verticals-heading">
        <div className="container py-16">
          <h2 id="verticals-heading" className="text-2xl font-bold tracking-tight text-center mb-4">
            Industry Verticals
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Niche-specific deployments with templated intelligence for healthcare, legal, agency, and beyond.
          </p>
        </div>
        {verticals.map((useCase) => (
          <UseCaseSection key={useCase.id} useCase={useCase} />
        ))}
      </section>

      {/* 2️⃣ Profiles - Full Content */}
      <section className="border-t border-border" aria-labelledby="profiles-heading">
        <div className="container py-16">
          <h2 id="profiles-heading" className="text-2xl font-bold tracking-tight text-center mb-4">
            Operator Profiles
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Personal, creator, and household operating systems — standalone entry points with upgrade paths.
          </p>
        </div>
        {profiles.map((useCase) => (
          <UseCaseSection key={useCase.id} useCase={useCase} />
        ))}
      </section>

      {/* 3️⃣ Capabilities - Full Content */}
      <section className="border-t border-border" aria-labelledby="capabilities-heading">
        <div className="container py-16">
          <h2 id="capabilities-heading" className="text-2xl font-bold tracking-tight text-center mb-4">
            Core Capability Layers
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            These layers power Foundation HQs and Core Vitals. They're assembled differently by deployment (as scoped). Knowledge, decisions, automation, and communications across every Operator system.
          </p>
        </div>
        {capabilities.map((useCase) => (
          <UseCaseSection key={useCase.id} useCase={useCase} />
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-balance sm:text-4xl">
              See Your Business Here?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-pretty leading-relaxed">
              If this resonates, let&apos;s map how Operator would work for you — starting with the Foundation Package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/pricing">
                  View Pricing &amp; Deployment
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link href="/about">Learn Our Philosophy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
