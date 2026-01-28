import { UseCase } from "../types";

export const medspaUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "medspa",
    label: "Med Spa",
    headline: "From Inquiries to Confident Bookings",
    magicMoment: "The moment a curious, slightly nervous prospect feels informed and reassured — while your team receives a clean, structured lead without having to \"sell.\"",
    problem: "Most med spas don't struggle with demand — they struggle with coordination and education. Calls and form fills arrive while staff are with clients. Prospects ask the same questions about downtime, pricing ranges, eligibility, and \"will this work for me?\" Consults are booked without proper context, no-shows increase, and providers walk into rooms without understanding the client's goals or concerns. There is no unified memory across inquiry → consult → treatment → follow-up. Promises are repeated, expectations drift, and the \"white-glove\" experience that drives high lifetime value becomes inconsistent. The result is operational leakage: missed bookings, underutilized calendars, stressed staff, and lost retention.",
    foundationPackage: {
        badgeLabel: "Entry Point",
        title: "Where Most Med Spas Start",
        description: "Most med spas begin with the Foundation Package, which installs the core infrastructure required to run Operator inside the business.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound calls and website inquiries during business hours, after-hours, or peak periods",
            "Provide approved, non-clinical information (services offered, hours, general pricing ranges)",
            "Capture inquiry intent (treatment category, timeline, first-time vs returning)",
            "Route inquiries for follow-up or consult scheduling"
        ],
        notIncluded: "What it intentionally does NOT include: Treatment-specific contraindication screening, provider- or room-aware scheduling logic, lifecycle follow-ups, memberships, or retention orchestration, or cross-system coordination. The Foundation Package establishes ownership, privacy, and local execution — it is the on-ramp, not the full system."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Treatment-Aware Intake",
            description: "HQ Pro for Med Spa is a templated, niche-specific operating system designed around common aesthetic workflows. It introduces treatment-category-aware intake flows, standardized pre-consult question sets, expectation framing around consult flow and preparation (non-clinical), provider and room constraints reflected in scheduling suggestions, and consistent post-consult follow-up patterns.",
            additionalText: "HQ Pro is built from proven patterns across similar med spas. It is standardized by design and guardrailed for reliability. Customization is limited, but intake now behaves like a system instead of ad-hoc conversations.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full Client Lifecycle Coordination",
            description: "Operator HQ represents the full system working as one coordinated unit. For med spas, this includes the Core Stack:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "All HQs share memory. Inquiries, consults, treatments, and follow-ups become a coordinated lifecycle. Operator functions as a true operating system — not a collection of tools."
        },
        {
            tier: "Custom Operator",
            label: "Retention & Growth Engine",
            description: "Custom Operator is designed for med spas with complex or high-growth requirements — multi-location operations, membership and package logic, advanced retention and rebooking workflows, or custom integrations with EMR, POS, or booking systems.",
            additionalText: "This includes deep workflow excavation and bespoke system architecture. This is not a template — it is a system built specifically around how that med spa operates."
        }
    ],
    bridgeLine: "Every tier reduces operational leakage — higher tiers add coordination, niche intelligence, and ultimately full-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Fewer missed inquiries",
            "Higher consult show rates",
            "Better-prepared consults",
            "Reduced front-desk load",
            "More consistent client experience",
            "Shift from reactive booking to coordinated client lifecycle"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts med spas from fragmented intake to coordinated operations."
    },
    accordionIntro: "The following examples illustrate what med spas can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "med spas",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability and clean intake capture.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inquiries answered after-hours and during treatment blocks",
                "Website chat handles common questions (services, pricing ranges, downtime expectations)",
                "Inquiry intent captured and routed for follow-up"
            ],
            footer: "This tier reduces missed opportunities, but does not yet optimize bookings or retention."
        },
        {
            tier: "HQ Pro",
            label: "Education-Based Screening",
            description: "HQ Pro applies templated, med-spa-aware intake logic.",
            highlighted: true,
            subsections: [
                {
                    title: "Intake Intelligence",
                    bullets: [
                        "Intake flows adapt by treatment category",
                        "Standardized pre-consult education questions",
                        "Expectation-setting around consult flow",
                        "Provider and room constraints reflected in scheduling"
                    ]
                }
            ],
            footer: "HQ Pro functions like a standardized intake coordinator, but remains a template system."
        },
        {
            tier: "Operator HQ",
            label: "Lifecycle Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single system.",
            subsections: [
                {
                    title: "End-to-End Coordination",
                    bullets: [
                        "Inquiry → consult → treatment coordination",
                        "Unified client memory across interactions",
                        "Follow-up timing aligned to treatment category",
                        "Retention signals based on visit history and timing"
                    ]
                }
            ],
            footer: "At this level, Operator coordinates operations end-to-end."
        },
        {
            tier: "Custom Operator",
            label: "Advanced Retention & Experience",
            description: "Custom Operator enables workflows requiring deep customization.",
            subsections: [
                {
                    title: "Growth Engine",
                    bullets: [
                        "Membership and package orchestration",
                        "Automated rebooking based on treatment cadence",
                        "Multi-location command views",
                        "Bespoke upsell and lifecycle logic"
                    ]
                }
            ],
            footer: "Custom Operator is built around the med spa's exact workflows — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth.",
    sectionClassName: "bg-muted/30"
};
