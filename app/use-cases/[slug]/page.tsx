import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCases } from "../data"
import { UseCaseSection } from "../components/UseCaseSection"

// Generate static params for all use cases
export async function generateStaticParams() {
    return useCases.map((useCase) => ({
        slug: useCase.id,
    }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const useCase = useCases.find((uc) => uc.id === slug)

    if (!useCase) {
        return {
            title: "Use Case Not Found | OperatorHQ",
        }
    }

    const categoryLabel = useCase.useCaseCategory === "profile"
        ? "Operator Profile"
        : useCase.useCaseCategory === "capability"
            ? "Capability Layer"
            : "Industry Solution"

    return {
        title: `${useCase.label} | ${categoryLabel} | OperatorHQ`,
        description: useCase.magicMoment,
        openGraph: {
            title: `${useCase.label} | OperatorHQ`,
            description: useCase.headline,
            type: "website",
        },
    }
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const useCase = useCases.find((uc) => uc.id === slug)

    if (!useCase) {
        notFound()
    }

    // Find adjacent use cases for navigation
    const currentIndex = useCases.findIndex((uc) => uc.id === slug)
    const prevUseCase = currentIndex > 0 ? useCases[currentIndex - 1] : null
    const nextUseCase = currentIndex < useCases.length - 1 ? useCases[currentIndex + 1] : null

    // Category label for display
    const categoryLabel = useCase.useCaseCategory === "profile"
        ? "Operator Profile"
        : useCase.useCaseCategory === "capability"
            ? "Capability Layer"
            : "Industry Vertical"

    return (
        <main className="flex flex-col">
            {/* Breadcrumb Navigation */}
            <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-16 z-40">
                <div className="container py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Link href="/use-cases" className="hover:text-foreground transition-colors">
                                Use Cases
                            </Link>
                            <span>/</span>
                            <span className="text-muted-foreground/60">{categoryLabel}</span>
                            <span>/</span>
                            <span className="text-foreground font-medium">{useCase.label}</span>
                        </div>
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/use-cases">
                                <ArrowLeft className="mr-2 size-4" />
                                All Use Cases
                            </Link>
                        </Button>
                    </div>
                </div>
            </nav>

            {/* Use Case Content */}
            <UseCaseSection useCase={useCase} isStandalonePage />

            {/* Navigation Footer */}
            <section className="border-t border-border py-12">
                <div className="container">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        {prevUseCase ? (
                            <Link href={`/use-cases/${prevUseCase.id}`} className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                                <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
                                <div className="text-left">
                                    <p className="text-xs uppercase tracking-wider opacity-60">Previous</p>
                                    <p className="font-medium">{prevUseCase.label}</p>
                                </div>
                            </Link>
                        ) : <div />}

                        {nextUseCase ? (
                            <Link href={`/use-cases/${nextUseCase.id}`} className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                                <div className="text-right">
                                    <p className="text-xs uppercase tracking-wider opacity-60">Next</p>
                                    <p className="font-medium">{nextUseCase.label}</p>
                                </div>
                                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        ) : <div />}
                    </div>
                </div>
            </section>

            {/* Internal Links - Hub, Pricing, How It Works */}
            <section className="py-16 bg-muted/30">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold tracking-tight mb-6">Ready to Deploy?</h2>
                        <p className="text-muted-foreground mb-8">
                            See how OperatorHQ can work for your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="rounded-full px-8">
                                <Link href="/pricing">
                                    View Pricing
                                    <ArrowRight className="ml-2 size-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                                <Link href="/use-cases">Browse All Use Cases</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
