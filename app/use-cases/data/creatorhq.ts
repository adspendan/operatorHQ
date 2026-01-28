import { UseCase } from "../types";

export const creatorhqUseCase: UseCase = {
    useCaseCategory: "profile",
    id: "creatorhq",
    label: "Creator HQ",
    headline: "From Content Chaos to Systematic Creative Production",
    magicMoment: "The moment a single creative idea flows through a structured system — planned, produced, repackaged, and prepared for distribution — without manual chaos or asset loss. This is the Creator Operating System.",
    problem: "Creators, educators, and media operators rely on fragmented tools for ideation, production, and distribution. Content scatters across platforms and folders. Repurposing is manual and inconsistent. Asset reuse is accidental rather than systematic. Platform-dependent workflows leave creators vulnerable to algorithm changes with no central control over their creative infrastructure.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Creators Start",
        description: "Most creators begin with the Foundation Package, installing Creator HQ as a private content operations hub on dedicated hardware — ensuring creative assets, editorial plans, and production history remain under owner control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ providing centralized access to content planning, production tracking, and asset organization"
        ],
        capabilities: [
            "Centralized content planning and editorial visibility",
            "Basic asset organization and project tracking",
            "Content cadence awareness and scheduling infrastructure",
            "Owner-controlled creative workspace"
        ],
        notIncluded: "What it explicitly does NOT include: Guaranteed audience growth or monetization. Automatic publishing without configuration. Platform-specific optimization guarantees. Creative judgment replacement. All creative decisions remain human-led."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Production Orchestration + Series Systems",
            description: "HQ Pro provides structured production pipelines: series and episode frameworks, batch production patterns, and performance labeling based on user-provided signals.",
            additionalText: "Complex content operations become systematic.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Creator Operating System",
            description: "All creator HQs share memory and context:",
            hqBadges: ["Planning HQ", "Production HQ", "Asset HQ", "Distribution HQ"],
            additionalText: "Fully unified creative infrastructure. Cross-format context sharing. Compounding creative intelligence over months and years."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Creator Infrastructure",
            description: "Custom Operator enables fully tailored creator systems — custom production pipelines, multi-brand content separation, and integration with existing tools.",
            additionalText: "Enterprise-grade creator control for media operators."
        }
    ],
    bridgeLine: "Every tier increases creative leverage — higher tiers add asset reuse, production orchestration, and ultimately a unified operating system for content.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Creators deploying Creator HQ may experience:",
        items: [
            "More consistent content production and reduced chaos",
            "Systematic asset reuse rather than accidental rediscovery",
            "Clear visibility into editorial pipeline and cadence",
            "Full ownership of creative infrastructure",
            "100% on-premise creative data — no platform dependency",
            "Compounding creative intelligence over time"
        ],
        footer: "Outcomes vary by usage patterns, but the system consistently shifts creators from content chaos to systematic creative production."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): Creator HQ is creative infrastructure. It does NOT guarantee audience growth or monetization. It does NOT replace creative judgment. It does NOT automatically publish without explicit configuration. It is NOT a social network or platform. All creative decisions remain human-led.",
    accordionIntro: "The following examples illustrate what creators can unlock at higher tiers of Creator HQ. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are infrastructure enablements.",
    accordionIntroSubject: "creators",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Content Planning + Asset Organization + Cadence Awareness",
            description: "At the Foundation level, Creator HQ provides basic creative infrastructure under owner control.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Content Planning Systems",
                    bullets: [
                        "Centralized visibility into content ideas, drafts, and published work",
                        "Simple editorial calendar structure"
                    ]
                },
                {
                    title: "Asset Organization",
                    bullets: [
                        "Creative assets organized by project, format, or theme",
                        "Basic tagging and retrieval"
                    ]
                },
                {
                    title: "Cadence Infrastructure",
                    bullets: [
                        "Publishing rhythm tracking and awareness",
                        "Simple production scheduling"
                    ]
                },
                {
                    title: "Owner-Controlled Environment",
                    bullets: [
                        "All creative data remains on-premise",
                        "No platform dependencies for core operations"
                    ]
                }
            ],
            footer: "Does not include automatic publishing, performance guarantees, or audience growth promises."
        },
        {
            tier: "HQ Pro",
            label: "Production Orchestration + Series Systems + Performance Labeling",
            description: "HQ Pro provides infrastructure for complex content operations.",
            highlighted: true,
            subsections: [
                {
                    title: "Series and Episode Frameworks",
                    bullets: [
                        "Recurring content series structures",
                        "Episode tracking and continuity"
                    ]
                },
                {
                    title: "Batch Production Patterns",
                    bullets: [
                        "Produce multiple content pieces in coordinated batches",
                        "Reduce production overhead through systematization"
                    ]
                },
                {
                    title: "Performance Labeling",
                    bullets: [
                        "Tag content with user-provided performance signals",
                        "Organize assets by what worked (based on your labels)"
                    ]
                },
                {
                    title: "Distribution Preparation",
                    bullets: [
                        "Platform-ready export packaging",
                        "Scheduling and staging infrastructure"
                    ]
                }
            ],
            footer: "Does not guarantee performance or automatically publish content."
        },
        {
            tier: "Operator HQ",
            label: "Unified Creator Operating System",
            description: "At the Operator HQ level, all creator systems operate as one coherent infrastructure.",
            subsections: [
                {
                    title: "Cross-Format Context",
                    bullets: [
                        "Video, audio, written, and visual content share context",
                        "No siloed creative environments"
                    ]
                },
                {
                    title: "Compounding Creative Intelligence",
                    bullets: [
                        "Patterns emerge over months of production",
                        "Creative knowledge becomes deeply interconnected"
                    ]
                },
                {
                    title: "Multi-Platform Coordination",
                    bullets: [
                        "Content flows prepared for multiple destinations",
                        "Unified view across distribution channels"
                    ]
                },
                {
                    title: "Creative Governance",
                    bullets: [
                        "Brand consistency enforcement",
                        "Collaborator access controls"
                    ]
                }
            ],
            footer: "Does not replace creative judgment or guarantee audience outcomes."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Creator Infrastructure",
            description: "Custom Operator enables fully tailored creator systems for unique requirements.",
            subsections: [
                {
                    title: "Custom Production Pipelines",
                    bullets: [
                        "Bespoke workflows for unique content types",
                        "Integration with specialized production tools"
                    ]
                },
                {
                    title: "Multi-Brand Separation",
                    bullets: [
                        "Isolated creative environments for different brands",
                        "Cross-brand asset sharing rules"
                    ]
                },
                {
                    title: "Team and Collaborator Systems",
                    bullets: [
                        "Role-based access for production teams",
                        "Contributor workflow coordination"
                    ]
                },
                {
                    title: "Archive and Legacy",
                    bullets: [
                        "Long-term creative asset preservation",
                        "Controlled access to historical work"
                    ]
                }
            ],
            footer: "Does not guarantee commercial success or replace creative leadership."
        }
    ],
    accordionDisclaimer: "Creator HQ is infrastructure for content planning, production, and organization. It does not guarantee audience growth, monetization, or creative success. It does not replace creative judgment or automatically publish without explicit configuration. All creative decisions remain the responsibility of the creator. Creative data remains on-premise under owner control."
};
