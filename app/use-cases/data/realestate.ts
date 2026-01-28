import { UseCase } from "../types";

export const realestateUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "realestate",
    label: "Real Estate",
    headline: "From Missed Opportunities to Coordinated Transactions",
    magicMoment: "The moment a new inquiry is captured, qualified, and routed with context — before the lead books a showing with another agent.",
    problem: "Real estate teams don't lose deals because of a lack of listings — they lose them in the gaps between inquiry, response, and follow-up. Calls and form fills arrive after hours, during showings, or while agents are driving. Lead information is scattered across inboxes, CRMs, and phones. Buyers and sellers repeat themselves, agents chase context, and high-intent inquiries cool off before meaningful contact is made. Without a unified intake and coordination system, opportunities leak at the top of the funnel and transactions become reactive rather than managed.",
    foundationPackage: {
        badgeLabel: "Entry Point",
        title: "Where Most Teams Start",
        description: "Most real estate teams begin with the Foundation Package, which installs the core infrastructure required to run Operator locally within the business.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound calls and web inquiries 24/7",
            "Capture lead intent (buyer, seller, renter, investor)",
            "Record property interest, timing, and basic qualification details",
            "Route the inquiry for agent follow-up"
        ],
        notIncluded: "MLS-aware logic or pricing analysis, automated follow-up sequencing, transaction-stage coordination, or agent performance and deal tracking. The Foundation Package establishes availability, ownership, and local execution — it is the on-ramp, not the full system.",
        notIncludedHeader: "What It Intentionally Does NOT Include"
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Transaction-Aware Templates",
            description: "HQ Pro for Real Estate is a templated, niche-specific operating system designed around common transaction workflows.",
            highlighted: true,
            expansionBullets: [
                "Buyer vs seller-aware intake logic",
                "Standardized qualification flows",
                "Routing based on timeline, urgency, and transaction type",
                "Consistent follow-up patterns aligned to real estate cycles"
            ],
            additionalText: "HQ Pro reflects how real estate teams operate, while remaining a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Full Transaction Coordination",
            description: "Operator HQ enables the Core Stack — Voice, Sales, Ops, Data, and Marketing — to operate as a single coordinated system.",
            expansionBullets: [
                "Intake, follow-up, scheduling, and context sharing are unified",
                "Agents receive structured briefs instead of raw messages",
                "Marketing activity and lead source inform prioritization"
            ],
            additionalText: "Operator functions as an operating system, not a collection of tools."
        },
        {
            tier: "Custom Operator",
            label: "Brokerage & Team Scaling",
            description: "Custom Operator is designed for brokerages or teams with complex structures, multiple agents, or specialized workflows.",
            expansionBullets: [
                "Deep workflow excavation through guided sessions",
                "Custom logic for team routing, lead ownership, or specialty roles",
                "Bespoke integrations with existing tools",
                "Internal training or operational guidance embedded into the system"
            ],
            additionalText: "Custom Operator is built around how the business actually runs — not a template."
        }
    ],
    bridgeLine: "Every tier reduces opportunity leakage — higher tiers add coordination, transaction intelligence, and ultimately full-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Fewer missed inquiries",
            "Faster response to high-intent leads",
            "Reduced agent administrative burden",
            "More consistent intake and follow-up",
            "Better continuity across buyer and seller interactions",
            "A shift from reactive lead handling to coordinated transaction flow"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently reduces leakage at the top of the funnel and improves operational clarity."
    },
    accordionIntro: "The following examples illustrate what real estate teams can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "real estate teams",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage + Lead Capture",
            description: "At the Foundation level, Operator focuses on responsiveness and clean lead capture.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Showing & After-Hours Coverage",
                    bullets: [
                        "Inbound calls answered during showings, after-hours, or weekends",
                        "No more missed buyer or seller inquiries when agents are in the field"
                    ]
                },
                {
                    title: "Website Inquiry Handling",
                    bullets: [
                        "Website chat responds to basic listing and office questions (hours, locations, service areas)",
                        "Consistent responses without agent involvement"
                    ]
                },
                {
                    title: "Lead Intent Capture",
                    bullets: [
                        "Lead intent captured (buyer, seller, renter, investor)",
                        "Inquiries routed for agent follow-up with clean context"
                    ]
                },
                {
                    title: "Owner-Controlled Environment",
                    bullets: [
                        "All lead communications stored locally on team hardware",
                        "No third-party cloud dependencies for sensitive client data"
                    ]
                }
            ],
            footer: "Does not include transaction-stage coordination, agent scheduling, or MLS integration."
        },
        {
            tier: "HQ Pro",
            label: "Transaction-Aware Intake Logic",
            description: "HQ Pro for Real Estate applies templated, niche-specific intelligence aligned to how agents actually work.",
            highlighted: true,
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "Buyer Qualification Logic",
                    bullets: [
                        "Operator distinguishes browsing vs. ready buyers",
                        "Pre-approval status and timeline are captured early",
                        "Agents focus on higher-intent conversations"
                    ]
                },
                {
                    title: "Seller Intake Standardization",
                    bullets: [
                        "Seller calls follow a consistent valuation-focused flow",
                        "Motivation, timing, and property context are captured upfront",
                        "Listing appointments begin with cleaner context"
                    ]
                },
                {
                    title: "Property-Aware Routing",
                    bullets: [
                        "Inquiries routed based on listing type or agent specialty",
                        "Luxury, investment, and residential flows differ",
                        "Teams avoid misaligned handoffs"
                    ]
                }
            ],
            footer: "HQ Pro reflects real estate transaction flow, while remaining a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Full Transaction Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single system.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "Unified Lead & Client Memory",
                    bullets: [
                        "Operator remembers prior inquiries, properties, and conversations",
                        "Returning callers are recognized and contextualized",
                        "Agents avoid \"starting from scratch\""
                    ]
                },
                {
                    title: "Demand-to-Agent Coordination",
                    bullets: [
                        "Marketing activity informs intake prioritization",
                        "High-intent listing or buyer leads are escalated faster",
                        "Response speed aligns with deal value"
                    ]
                },
                {
                    title: "Pipeline Visibility Loops",
                    bullets: [
                        "Stalled leads are identified",
                        "Gentle re-engagement is triggered automatically",
                        "Opportunities are recovered before going cold"
                    ]
                }
            ],
            footer: "At this level, Operator does not just assist — it coordinates the deal lifecycle."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables workflows that require deep customization or specialized data access.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "Private Listing Intelligence Systems",
                    bullets: [
                        "Operator trained on internal listing notes and preferences",
                        "Agents receive context-aware talking points",
                        "Sensitive deal data stays local"
                    ]
                },
                {
                    title: "Multi-Agent & Multi-Office Command Center",
                    bullets: [
                        "Performance compared across agents or offices",
                        "Lead-to-close patterns surfaced",
                        "High-performing workflows replicated internally"
                    ]
                },
                {
                    title: "Custom Compliance & Training Logic",
                    bullets: [
                        "Brokerage-specific rules embedded into intake flows",
                        "New agent onboarding guided by Operator",
                        "Internal standards reinforced consistently"
                    ]
                }
            ],
            footer: "Custom Operator is built around the brokerage's exact operating reality — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
