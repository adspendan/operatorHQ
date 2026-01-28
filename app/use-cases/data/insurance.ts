import { UseCase } from "../types";

export const insuranceUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "insurance",
    label: "Insurance Agency",
    headline: "Turn Inbound Questions Into Bound Policies — Without Phone Tag or Lead Decay",
    magicMoment: "The moment a prospect calls about a quote request or coverage question — and within seconds has a confirmed next step, pre-qualification captured, and the right producer looped in, without front desk scrambling.",
    problem: "Insurance agencies don't lose business because of pricing — they lose it in the Response Gap. Prospects reach out when a life event creates urgency: buying a home, adding a teen driver, renewing a policy after a rate hike. Calls go to voicemail during appointments, emails sit unanswered, and web forms drop into CRMs with no immediate response. Meanwhile, the prospect gets quoted by two other agencies within the hour. Front desk staff and producers are buried in repetitive questions: 'Do you write in my state?' 'Can you beat my current rate?' 'Do you take high-risk drivers?' 'Is this for personal or commercial?' Without a system to instantly capture intent, pre-qualify risk, and route the inquiry correctly, agencies waste licensed time on unqualified leads while high-fit prospects move on.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Agencies Start",
        description: "Most insurance agencies begin with the Foundation Package, which installs the core private infrastructure required to run Operator locally — keeping prospect and policy data on your hardware, not scattered across cloud tools.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound inquiries 24/7 so no quote request waits overnight",
            "Capture Prospect DNA: Personal vs commercial, coverage type (Auto, Home, Life, Health, Commercial), state and basic eligibility signals",
            "Route inquiries to the correct internal lane (Personal Lines vs Commercial vs Life)",
            "Generate a clean intake summary for licensed staff to review"
        ],
        notIncluded: "Policy recommendations or coverage advice. Real-time carrier quoting or underwriting decisions. Claims handling or binding authority. The Foundation Package establishes availability and ownership. It stops the 'missed quote' problem — but it does not optimize conversion yet."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Insurance-Specific",
            description: "HQ Pro for Insurance applies niche-aware logic designed for insurance sales motions. This includes Risk-Aware Intake, separating standard vs non-standard risks, personal vs commercial exposures, and immediate bind requests vs exploratory quotes.",
            additionalText: "HQ Pro is built from proven insurance workflows, guardrailed for reliability, and not bespoke.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Full Agency Sync. Voice, Sales, Ops, Data, and Marketing HQs share context. For insurance agencies, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Marketing signals inform intake priority, Sales sees full prospect history, and Ops maintains clean handoffs without re-asking questions."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Agency Operating System' — designed for multi-state agencies, MGAs, or specialized verticals (construction, trucking, healthcare).",
            additionalText: "This includes bespoke workflows, private knowledge layers, and deep integration with internal agency processes. This is not a template — it is built around how that agency actually operates."
        }
    ],
    bridgeLine: "Every tier reduces the Response Gap — higher tiers add risk awareness, coordination, and ultimately full-agency control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inbound inquiries — every call, form, and message receives immediate response",
            "Higher quote-to-bind rates — producers speak only with pre-qualified prospects",
            "Licensed time protected — less time answering FAQs, more time closing policies",
            "Data sovereignty — prospect intake data stays on your Mac Studio",
            "Professional first impression — every interaction feels structured, responsive, and compliant"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide policy recommendations, coverage advice, underwriting decisions, or claims handling. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what insurance agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "insurance agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, responsiveness, and clean intake capture.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound calls and web inquiries answered 24/7 for personal and commercial insurance",
                "Basic Prospect DNA captured (coverage type, state, current carrier if provided)",
                "Calls and forms routed to the correct internal lane (Personal Lines vs Commercial Lines)",
                "Simple intake summaries generated for producer follow-up"
            ],
            footer: "This tier ensures the agency stops leaking quote requests, but does not yet optimize quoting or conversion."
        },
        {
            tier: "HQ Pro",
            label: "Agency-Aware Logic",
            description: "HQ Pro for Insurance applies templated, niche-specific intelligence aligned with how agencies actually operate.",
            highlighted: true,
            subsections: [
                {
                    title: "Appetite & Line-of-Business Triage",
                    bullets: [
                        "Personal vs Commercial vs Life/Health inquiries follow different intake paths",
                        "Standard vs non-standard risk signals flagged during intake",
                        "Commercial leads capture industry, size, and exposure indicators upfront"
                    ]
                },
                {
                    title: "Producer Fit Routing",
                    bullets: [
                        "Leads routed based on line of business and internal specialization",
                        "High-complexity accounts sent to senior producers automatically"
                    ]
                },
                {
                    title: "Qualification Guardrails",
                    bullets: [
                        "Incomplete or low-fit inquiries prompted for missing details",
                        "Producers spend time on quotable, aligned business"
                    ]
                }
            ],
            footer: "HQ Pro reflects real agency workflows, while remaining a standardized, non-bespoke system."
        },
        {
            tier: "Operator HQ",
            label: "Full Agency Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single coordinated system.",
            subsections: [
                {
                    title: "Unified Prospect & Client Memory",
                    bullets: [
                        "Operator remembers prior calls, quotes, and policy conversations",
                        "Returning clients are recognized with context, not generic scripts"
                    ]
                },
                {
                    title: "Cross-Sell & Lifecycle Coordination",
                    bullets: [
                        "Configured signals identify monoline clients eligible for bundling",
                        "Allowed follow-up workflows initiated at the right moment"
                    ]
                },
                {
                    title: "Demand-to-Intake Alignment",
                    bullets: [
                        "Marketing signals inform intake priority",
                        "High-intent prospects receive faster, more consistent responses",
                        "Sales, ops, and marketing operate from shared context"
                    ]
                }
            ],
            footer: "At this level, Operator does not just assist — it actively coordinates intake and follow-up flow."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities that require deep customization, specialized logic, or enterprise-scale workflows.",
            subsections: [
                {
                    title: "Private Knowledge & Appetite Systems",
                    bullets: [
                        "Internal SOPs and carrier guidelines indexed for non-binding reference",
                        "Producers receive instant guidance on internal writing preferences"
                    ]
                },
                {
                    title: "Multi-Location or MGA Coordination",
                    bullets: [
                        "Location-aware routing and centralized reporting",
                        "Custom dashboards for lead flow, conversion, and staff performance"
                    ]
                },
                {
                    title: "Advanced Intake & Media Workflows",
                    bullets: [
                        "Secure upload of property photos or documents for internal review",
                        "Structured pre-underwriting summaries created for human decision-making"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific agency — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
