import { UseCase } from "../types";

export const saasUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "saas",
    label: "SaaS / B2B Services",
    headline: "Turn Inbound Interest Into Qualified Pipeline — Without Manual Follow-Up",
    magicMoment: "The moment a qualified demo request is booked and confirmed — before an SDR ever touches it.",
    problem: "SaaS and B2B service companies don't lose deals because of weak products — they lose them because speed, qualification, and follow-through break down. Demo requests arrive after hours, inbound leads sit unworked for days, SDRs chase unqualified prospects, and context is lost between marketing, sales, and onboarding. Every handoff introduces friction. The result is bloated pipelines, low show rates, long sales cycles, and revenue that leaks before it ever reaches a close.",
    foundationPackage: {
        badgeLabel: "Entry Point",
        title: "Where Most SaaS Teams Start",
        description: "Most SaaS and B2B teams begin with the Foundation Package, which installs the core infrastructure required to run Operator inside the business.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Respond to inbound demo requests and inquiries 24/7",
            "Capture structured lead context (company size, role, use case, urgency)",
            "Route qualified inquiries to the correct next step (calendar booking, form, or SDR review)"
        ],
        notIncluded: "Deal-stage logic or forecasting, sales qualification frameworks, multi-touch follow-up orchestration, or marketing attribution or lifecycle automation. The Foundation Package establishes availability and structured intake — it stops inbound demand from going dark, but does not yet optimize conversion."
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
            label: "SaaS / B2B-Specific",
            description: "HQ Pro applies templated, niche-specific logic based on common SaaS and B2B sales motions. This includes ICP-aware intake flows (company size, role, tech stack), qualification paths for inbound vs outbound vs referral leads, standardized demo and follow-up sequences, and guardrails aligned to typical SaaS or service sales cycles.",
            additionalText: "HQ Pro is built from proven patterns across similar companies. It is standardized by design — reliable, but not bespoke.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the full system operating as one coordinated unit. For SaaS and B2B teams, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "At this level, all HQs share context, actions are coordinated automatically, and Operator functions as a true revenue operations layer."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is designed for SaaS and B2B organizations with complex or non-standard sales motions — multi-product SaaS companies, usage-based or enterprise pricing models, long or multi-stakeholder sales cycles, or custom onboarding or implementation workflows.",
            additionalText: "This includes deep workflow excavation, bespoke system architecture, custom qualification and routing logic, and advanced reporting and internal controls. This is not a template — it is built around how that business actually sells and delivers."
        }
    ],
    bridgeLine: "Every tier reduces pipeline leakage — higher tiers add qualification, coordination, and ultimately full revenue operations control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Faster response to inbound demand",
            "Higher demo show rates",
            "Cleaner qualification before sales engagement",
            "Reduced SDR and AE administrative load",
            "Improved continuity from first touch to close"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide legal, financial, or business advice. Capabilities depend on configuration, integrations, and internal processes.",
    optionalExpansion: {
        sectionTitle: "Optional Expansion: We Don't Just Operate Your SaaS — We Can Build It",
        sectionIntro: "For SaaS and B2B teams, Operator can go beyond running sales and operations. At higher tiers, OperatorHQ can become the foundation of the product itself. This is designed for teams that want more than tooling — they want a proprietary SaaS asset.",
        subsections: [
            {
                title: "Building the Product Layer (SaaS-as-Infrastructure)",
                description: "At this stage, Operator is no longer just coordinating intake and revenue. It becomes the core operating layer behind your software product.",
                bullets: [
                    "A custom SaaS application built on top of Operator OS",
                    "Private, on-prem or hybrid infrastructure (Mac Studio + cloud edge)",
                    "Internal and customer-facing dashboards powered by Operator memory",
                    "Embedded AI agents that act as product features, not support tools"
                ]
            },
            {
                title: "How This Fits Into the Tiers",
                description: "Operator HQ (Advanced Use): Internal tools become modular, product-ready components. Operator manages onboarding, support, usage signals, and retention. Early-stage product logic is standardized and reusable.",
                bullets: [
                    "Custom Operator (Full SaaS Build): Bespoke product architecture designed around your business model",
                    "AI agents become first-class product features",
                    "Custom permissions, billing logic, and workflows",
                    "Private models or RAG systems trained on your proprietary data",
                    "The SaaS becomes an owned asset — not a wrapper around third-party tools"
                ]
            },
            {
                title: "What This Is — and Is Not",
                description: "This is a custom-built SaaS, powered by OperatorHQ — designed for long-term ownership and leverage, built around your workflows, data, and customers.",
                bullets: [
                    "This is NOT a no-code app builder",
                    "This is NOT a generic AI wrapper",
                    "This is NOT a templated SaaS with light branding",
                    "Each build is scoped independently and designed as a durable product"
                ]
            }
        ],
        disclaimer: "Product builds vary by scope and deployment. Examples illustrate what becomes possible when Operator expands from operations into product infrastructure."
    },
    accordionIntro: "The following examples illustrate what SaaS and B2B teams can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "SaaS and B2B teams",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on speed-to-lead, availability, and consistent qualification.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound demo requests answered 24/7 via chat or voice",
                "Basic qualification questions captured (role, company size, use case)",
                "Leads routed to the correct booking link or SDR inbox",
                "Structured intake notes attached to each lead for follow-up"
            ],
            footer: "This tier reduces response-time leakage, but does not yet coordinate sales motion or pipeline logic."
        },
        {
            tier: "HQ Pro",
            label: "Sales-Motion–Aware Logic",
            description: "HQ Pro for SaaS applies templated, niche-specific intelligence aligned to common B2B sales motions.",
            highlighted: true,
            subsections: [
                {
                    title: "ICP-Aware Qualification",
                    bullets: [
                        "Leads screened against ICP criteria (company size, role, stack)",
                        "High-fit leads follow accelerated paths",
                        "Low-fit leads are handled differently without manual review"
                    ]
                },
                {
                    title: "Sales Framework Application",
                    bullets: [
                        "Standardized qualification flows (e.g., BANT-style questions)",
                        "Context captured before human interaction",
                        "Sales teams enter calls with clearer intent signals"
                    ]
                },
                {
                    title: "PLG vs. SLG Routing",
                    bullets: [
                        "Operator adapts intake based on motion type",
                        "Self-serve users routed differently than enterprise buyers",
                        "Follow-up patterns reflect the chosen growth model"
                    ]
                }
            ],
            footer: "HQ Pro reflects how SaaS and B2B sales teams operate, but remains a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Full Revenue Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single coordinated system.",
            subsections: [
                {
                    title: "Lifecycle Signal Coordination",
                    bullets: [
                        "Marketing activity, website behavior, and intake signals shared",
                        "High-intent actions (pricing views, repeat visits) surface to Sales",
                        "Follow-ups initiated with full context"
                    ]
                },
                {
                    title: "Unified Account Memory",
                    bullets: [
                        "Operator remembers prior conversations, downloads, and demos",
                        "Returning prospects are greeted with historical context",
                        "Handoffs between SDR, AE, and Success are cleaner"
                    ]
                },
                {
                    title: "Demand-to-Sales Alignment",
                    bullets: [
                        "Marketing campaigns inform intake priority",
                        "Sales outreach aligns with funnel stage",
                        "The GTM system behaves as one unit instead of silos"
                    ]
                }
            ],
            footer: "At this level, Operator does not just assist — it actively coordinates revenue flow."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities that require deep customization, bespoke logic, or product-level integration.",
            subsections: [
                {
                    title: "Multi-Stakeholder Sales Logic",
                    bullets: [
                        "Routing adapts to buying committees",
                        "Different stakeholders receive tailored messaging",
                        "Account-level context persists across conversations"
                    ]
                },
                {
                    title: "Internal Playbook Intelligence",
                    bullets: [
                        "Private RAG over sales scripts, enablement docs, and case studies",
                        "Consistent messaging across teams",
                        "Faster ramp for new hires"
                    ]
                },
                {
                    title: "SaaS-as-Infrastructure",
                    bullets: [
                        "Operator OS used as the backbone of your own product",
                        "AI agents become customer-facing features",
                        "Internal command center evolves into an external SaaS asset"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific business — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
