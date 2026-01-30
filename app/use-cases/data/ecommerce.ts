import { UseCase } from "../types";

export const ecommerceUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "ecommerce",
    label: "E-commerce / DTC",
    headline: "From Fragmented Funnels to Coordinated Revenue Operations",
    magicMoment: "The moment a high-intent shopper gets instant, context-aware support — and your team sees a unified view of demand, conversion, and customer lifecycle.",
    problem: "E-commerce brands don't fail because of traffic — they fail because systems don't talk to each other. Ads, landing pages, checkout, post-purchase flows, support inboxes, and retention tools all operate in silos. High-intent shoppers abandon carts without follow-up. Support teams answer the same order-status and return questions repeatedly. Founders lack a single, real-time view of demand, conversion friction, and customer context. The result is wasted ad spend, reactive operations, and growth capped by tooling complexity rather than demand.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Brands Start",
        description: "Most DTC brands begin with the Foundation Package, which installs the private infrastructure required to run Operator locally while integrating cleanly with the existing commerce stack.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer common pre-purchase and post-purchase questions",
            "Capture customer intent and issue type (pre-sale, support, retention)",
            "Route inquiries to the appropriate channel or team with context"
        ],
        notIncluded: "Deep funnel optimization logic, cross-channel attribution or media intelligence, automated lifecycle or retention orchestration, or SKU-level and cohort-aware decisioning. The Foundation Package establishes ownership, privacy, and baseline responsiveness — it is the on-ramp, not the growth engine.",
        notIncludedHeader: "What It Intentionally Does NOT Include"
    },
        deploymentSwarm: {
        architecture: [
            {
                name: "Intake Specialist",
                role: "Voice HQ",
                capabilities: ["Call Qualification", "Inquiry Triage", "After-Hours Coverage"]
            },
            {
                name: "Routing Manager",
                role: "Ops HQ",
                capabilities: ["Task Prioritization", "Resource Allocation", "Context Handover"]
            },
            {
                name: "Engagement Lead",
                role: "Marketing HQ",
                capabilities: ["Follow-Up Sequences", "Review Generation", "Client Updates"]
            },
            {
                name: "Policy Expert",
                role: "Knowledge HQ",
                capabilities: ["SOP Retrieval", "Compliance Checks", "Staff Guidance"]
            }
        ],
        flow: {
            trigger: "Inbound inquiry received via phone or web",
            steps: [
                { agent: "Intake Specialist", action: "Qualifies intent and gathers core requirements." },
                { agent: "Policy Expert", action: "Checks internal SOPs for case-specific compliance." },
                { agent: "Routing Manager", action: "Assigns to appropriate department with full context." },
                { agent: "Engagement Lead", action: "Schedules automated follow-up sequence." }
            ]
        }
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Commerce-Aware Templates",
            description: "HQ Pro for E-commerce is a templated, commerce-aware operating system built around common DTC workflows.",
            highlighted: true,
            expansionBullets: [
                "Funnel-aware intake logic (pre-purchase vs post-purchase vs churn risk)",
                "SKU and order-context awareness",
                "Standardized refund, exchange, and escalation paths",
                "Basic lifecycle triggers tied to customer behavior"
            ],
            additionalText: "HQ Pro reflects how modern DTC brands operate day to day, but remains standardized rather than bespoke."
        },
        {
            tier: "Operator HQ",
            label: "Revenue-Aware Operating System",
            description: "Operator HQ unifies the Core Stack into a single coordinated system:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            expansionBullets: [
                "Customer context persists across the entire lifecycle",
                "Actions are coordinated across marketing, sales, and support",
                "Operator functions as a revenue-aware operating system"
            ]
        },
        {
            tier: "Custom Operator",
            label: "Enterprise & Complex Scale",
            description: "Custom Operator is designed for brands with complex scale, compliance, or data requirements — including high-AOV or subscription-heavy brands, multi-store or multi-region operations, and brands with proprietary data models.",
            expansionBullets: [
                "Bespoke lifecycle and retention logic",
                "Deep integrations with analytics, attribution, and ad platforms",
                "Custom compliance and data-handling configurations",
                "Extended discovery and system design sessions"
            ],
            additionalText: "This is not a template — it is a system built around how that brand actually grows."
        }
    ],
    bridgeLine: "Every tier reduces operational friction — higher tiers add commerce intelligence, lifecycle coordination, and ultimately full revenue-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "E-commerce brands deploying Operator often experience:",
        items: [
            "Fewer abandoned conversations and support tickets",
            "Faster customer response times",
            "Reduced support overhead",
            "Improved visibility into customer intent",
            "Better continuity across the customer lifecycle"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator supports operational coordination and customer communication. It does not provide legal, financial, or tax advice, and does not guarantee performance outcomes.",
    accordionIntro: "The following examples illustrate what e-commerce and DTC brands can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "e-commerce and DTC brands",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, consistency, and basic customer intent capture.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Pre-purchase questions answered in real time (shipping, returns, sizing, materials)",
                "Post-purchase status inquiries handled (order status, tracking links, delivery windows)",
                "Customer intent captured and routed (support issue vs purchase question vs wholesale inquiry)"
            ],
            footer: "This tier reduces basic demand leakage, but does not yet coordinate systems or optimize revenue flow."
        },
        {
            tier: "HQ Pro",
            label: "Commerce-Aware Logic",
            description: "HQ Pro for E-commerce applies templated, commerce-specific intelligence aligned to how DTC brands operate.",
            highlighted: true,
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "Journey-Aware Support Routing",
                    bullets: [
                        "Pre-purchase, post-purchase, and returns inquiries follow different flows",
                        "Refund-risk conversations are flagged earlier",
                        "High-value customers receive differentiated handling"
                    ]
                },
                {
                    title: "Product & Offer Context",
                    bullets: [
                        "Operator understands SKU attributes, variants, and bundles",
                        "Complementary products may be suggested during support conversations",
                        "Promotions and policies are explained consistently"
                    ]
                },
                {
                    title: "Churn & Friction Signals",
                    bullets: [
                        "Repeated complaints or delays are detected",
                        "Potential churn scenarios are surfaced for human intervention",
                        "Support teams act proactively instead of reactively"
                    ]
                }
            ],
            footer: "HQ Pro reflects common DTC operating patterns, but remains a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Full Revenue Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single coordinated system across demand, support, and operations.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "Unified Customer Memory",
                    bullets: [
                        "Prior purchases, conversations, and issues are remembered",
                        "Customers are handled with context, not scripts",
                        "Brand voice remains consistent across channels"
                    ]
                },
                {
                    title: "Demand-to-Support Coordination",
                    bullets: [
                        "Marketing activity informs intake priority",
                        "Campaign-driven spikes are handled intelligently",
                        "Support responses align with active offers and inventory context"
                    ]
                },
                {
                    title: "Creative Signal Coordination (Light)",
                    bullets: [
                        "Performance or fatigue signals are surfaced internally",
                        "Structured creative briefs may be generated for review",
                        "Creative refresh needs are coordinated, not produced autonomously"
                    ]
                }
            ],
            footer: "At this level, Operator coordinates revenue operations end-to-end."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities requiring deep customization, proprietary data access, or multi-agent orchestration.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "Advanced Retention & Lifecycle Systems",
                    bullets: [
                        "Purchase-cycle aware outreach",
                        "Subscription or replenishment logic",
                        "Custom loyalty or VIP workflows"
                    ]
                },
                {
                    title: "Private Creative & Media Pipelines",
                    bullets: [
                        "Brand-aligned creative generation workflows",
                        "Human-in-the-loop review gates",
                        "Performance feedback loops into creative iteration"
                    ]
                },
                {
                    title: "AI Avatar & Content Frameworks",
                    bullets: [
                        "Brand-specific AI personas for content or ads",
                        "Controlled tone, visuals, and usage scope",
                        "Integrated into marketing and testing workflows"
                    ]
                }
            ],
            footer: "Custom Operator is built around the brand's exact operating DNA — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
