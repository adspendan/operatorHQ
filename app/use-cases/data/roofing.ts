import { UseCase } from "../types";

export const roofingUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "roofing",
    label: "Roofing Company",
    headline: "From Storm Chaos to Controlled Pipeline",
    magicMoment: "The moment a storm-panicked homeowner gets a calm, immediate response — while your team gets a structured lead without chasing voicemails.",
    problem: "Roofing companies don't lose jobs because of bad work — they lose them in the chaos between the call and the close. Storm-driven call spikes overwhelm the office. Leads repeat their story across calls, texts, and voicemails. Slow follow-up means lost jobs. Insurance questions go unanswered. Scheduling and dispatch friction slows down crews. And there's no unified memory across intake → inspection → estimate → claim → production. The result: operational leakage at every stage.",
    foundationPackage: {
        badgeLabel: "Entry Point",
        title: "Where Most Companies Start",
        description: "Most roofing companies begin with the Foundation Package, which installs the core infrastructure required to run Operator inside the business.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer calls after-hours and during storm surges",
            "Capture job type, urgency, address, and insurance intent",
            "Route to correct next step (inspection booking, callback, or message)"
        ],
        notIncluded: "What it intentionally does NOT include: Storm-mode triage logic, insurance claim workflows, dispatch coordination, or multi-system integration. The Foundation Package establishes ownership, privacy, and local execution — it is the on-ramp, not the full system."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Roofing-Specific",
            description: "HQ Pro for Roofing is a templated, niche-specific operating system designed around common roofing intake workflows. It introduces storm-mode triage, claim-aware intake logic, service-area constraints, crew availability awareness, and standardized follow-up patterns — so intake starts behaving like a system instead of a scramble.",
            additionalText: "HQ Pro is built from proven patterns across similar companies. It's cookie-cutter by design and guardrailed to ensure reliability. Customization is limited, but the system now reflects how roofing companies actually run intake.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the full system working as one coordinated unit. For roofing companies, this includes the Core Stack:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "All HQs share memory across the lead lifecycle, intake becomes a coordinated pipeline, and Operator functions as a true operating system — not a collection of tools."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is designed for roofing companies with complex or unique requirements — multi-location operations, high-volume storm response, complex insurance claim workflows, or bespoke dispatch and crew coordination needs.",
            additionalText: "This includes deep workflow excavation through multiple long-form sessions, bespoke system architecture, custom integrations with CRM, estimating, call tracking, and dispatch tools, and extended team training. This is not a template — it is a system built specifically around how that company operates."
        }
    ],
    bridgeLine: "Every tier reduces operational leakage — higher tiers add coordination, niche intelligence, and ultimately full-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "May reduce missed storm calls",
            "May improve speed-to-lead",
            "May improve inspection booking consistency",
            "May reduce admin load",
            "May improve handoff continuity",
            "May shift from reactive intake to coordinated operations"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts companies from reactive intake to coordinated operations."
    },
    accordionIntro: "The following examples illustrate what roofing companies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "roofing companies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, speed-to-lead, and clean intake capture during volatile demand periods.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound calls answered after-hours or during high-volume storm events",
                "Website chat handles common inquiries (service area, emergency vs non-emergency, next steps)",
                "Structured intake captures job type (repair vs replacement), urgency, address, and insurance intent"
            ],
            footer: "This tier reduces missed opportunities during storms, but does not yet coordinate inspections or production workflows."
        },
        {
            tier: "HQ Pro",
            label: "Storm-Aware Intake & Job Lifecycle Logic",
            description: "HQ Pro for Roofing applies templated, niche-specific logic aligned to how roofing companies actually operate during storm and non-storm periods.",
            highlighted: true,
            subsections: [
                {
                    title: "Storm-Mode Intake Routing",
                    bullets: [
                        "Intake logic adapts during storm events",
                        "Urgent leak scenarios follow a different escalation path than routine repairs",
                        "Repeat callers during active weather are recognized and routed consistently"
                    ]
                },
                {
                    title: "Claim-Aware Intake Context",
                    bullets: [
                        "Operator captures claim-related details without adjudicating or advising",
                        "Information is structured for internal review and follow-up",
                        "Common insurance questions are handled consistently"
                    ]
                },
                {
                    title: "Service Area & Crew Constraint Awareness",
                    bullets: [
                        "Intake is routed based on service zones and availability",
                        "Overbooking and unrealistic scheduling expectations are reduced"
                    ]
                }
            ],
            footer: "HQ Pro makes intake behave like a system instead of a series of one-off conversations, while remaining a standardized template."
        },
        {
            tier: "Operator HQ",
            label: "Coordinated Job Pipeline",
            description: "Operator HQ enables the Core Stack to operate as a single coordinated system across the roofing operation.",
            subsections: [
                {
                    title: "Lead → Inspection → Estimate Coordination",
                    bullets: [
                        "Intake context flows into inspection scheduling",
                        "Inspection outcomes inform next steps automatically",
                        "Handoffs are consistent across teams"
                    ]
                },
                {
                    title: "Unified Job Memory",
                    bullets: [
                        "Inspectors see exactly what the homeowner reported",
                        "Sales and ops teams share the same operational context",
                        "Fewer details are lost between calls, texts, and site visits"
                    ]
                },
                {
                    title: "Demand-Aware Operations",
                    bullets: [
                        "Marketing activity informs intake prioritization",
                        "High-intent leads receive faster follow-up",
                        "The business operates from a single operational view"
                    ]
                }
            ],
            footer: "At this level, Operator doesn't just capture leads — it coordinates the flow of work across the company."
        },
        {
            tier: "Custom Operator",
            label: "High-Volume, Multi-Location, and Advanced Workflows",
            description: "Custom Operator enables workflows that require deep customization, specialized integrations, or unique operational logic.",
            subsections: [
                {
                    title: "Photo & Document Intake Workflows",
                    bullets: [
                        "Homeowners upload damage photos or documents",
                        "Operator extracts structured details and flags missing items",
                        "Teams receive clean checklists instead of loose attachments"
                    ]
                },
                {
                    title: "High-Volume Storm Intake Automation",
                    bullets: [
                        "Large lead volumes are categorized by urgency and location",
                        "Escalation paths are built for complex or high-value jobs"
                    ]
                },
                {
                    title: "Multi-Location Command Views",
                    bullets: [
                        "Intake and performance compared across locations",
                        "Best-performing workflows identified and replicated"
                    ]
                }
            ],
            footer: "Custom Operator is built around the company's exact operating reality — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
