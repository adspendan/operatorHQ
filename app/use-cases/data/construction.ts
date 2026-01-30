import { UseCase } from "../types";

export const constructionUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "construction",
    label: "Construction / General Contractor",
    headline: "Turn Project Inquiries Into Booked Estimates — Without Missed Calls or Phone Tag",
    magicMoment: "The moment a homeowner or property manager calls about a project — and within seconds has a confirmed site visit, clear next steps, and the right estimator looped in, without the owner scrambling between jobsites.",
    problem: "Construction businesses and general contractors don't lose projects because of pricing alone — they lose them in the Response Gap. Prospects call during active jobs, after-hours, or weekends when crews are busy. Voicemails pile up, web forms sit unanswered, and high-intent leads go cold before anyone responds. Owners and office staff are buried in repetitive questions: 'Do you do this type of work?' 'What's your availability?' 'Can you come look at it?' Without a system to instantly capture project scope, qualify fit, and route the inquiry correctly, contractors waste estimator time on unqualified leads while high-fit projects move on to competitors.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Contractors Start",
        description: "Most construction businesses and general contractors begin with the Foundation Package, which installs the core private infrastructure required to run Operator locally — keeping project data on your hardware, not scattered across cloud tools.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound calls and messages 24/7 during jobsite hours and after",
            "Capture Project DNA: project type (repair, remodel, addition, new build), property type (residential/commercial), service address",
            "Route inquiries to the owner or office with a structured summary",
            "Send confirmations and next-step guidance"
        ],
        notIncluded: "Automated pricing, scope guarantees, or code compliance claims. Real-time crew scheduling unless integrated and configured. The Foundation Package stops demand leakage and ensures availability — it is the on-ramp, not the estimating engine."
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
            label: "Construction-Specific",
            description: "HQ Pro for Construction applies niche-aware logic: scope-aware routing, budget fit guardrails, and trade-specific intake for remodel, roofing, or specialty work.",
            additionalText: "HQ Pro is built from proven contractor workflows, guardrailed for reliability, and not bespoke.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents full company coordination. Voice, Sales, Ops, Data, and Marketing HQs share context. For contractors, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Estimate follow-up, project memory, and intake priority are coordinated automatically with shared context."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is designed for multi-crew contractors, multi-location operations, or specialty trades with unique workflows.",
            additionalText: "This includes custom routing, pre-estimate media intake, private knowledge layers, and deep integration into existing systems. This is not a template — it is built around how that contractor actually operates."
        }
    ],
    bridgeLine: "Every tier reduces the Response Gap — higher tiers add scope awareness, coordination, and ultimately full-company control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Fewer missed calls and unanswered inquiries",
            "Higher estimate-to-close rates",
            "Reduced owner interruption during active jobs",
            "Faster response to high-intent project leads",
            "Cleaner visibility into inbound demand"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide pricing, scope guarantees, code compliance advice, or professional construction recommendations. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what construction and general contracting businesses can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "construction and general contracting businesses",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, responsiveness, and clean project intake.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound calls and web inquiries answered during jobsite hours, after-hours, or while crews are active",
                "Basic project intake captured: project type (repair, remodel, addition, new build), property type (residential / commercial), service address and general location",
                "Structured summaries sent to the owner or office for follow-up"
            ],
            footer: "This tier ensures the contractor stops leaking demand, but does not yet optimize qualification or scheduling."
        },
        {
            tier: "HQ Pro",
            label: "Scope-Aware & Trade-Specific Logic",
            description: "HQ Pro for Construction applies templated, niche-specific intelligence aligned to how contractors actually operate.",
            highlighted: true,
            subsections: [
                {
                    title: "Scope-Aware Routing",
                    bullets: [
                        "Emergency repairs (active leaks, safety issues) routed differently than planned projects",
                        "Small service jobs vs multi-week projects follow different intake paths"
                    ]
                },
                {
                    title: "Budget & Fit Guardrails",
                    bullets: [
                        "Intake flows capture budget range language when volunteered",
                        "Projects outside configured minimums flagged before estimator time is spent"
                    ]
                },
                {
                    title: "Trade-Specific Intake",
                    bullets: [
                        "Remodel vs roofing vs specialty trade logic",
                        "Different discovery questions based on project type (non-advisory)"
                    ]
                }
            ],
            footer: "HQ Pro reflects real construction workflows, but remains standardized rather than bespoke."
        },
        {
            tier: "Operator HQ",
            label: "Full Company Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a coordinated system.",
            subsections: [
                {
                    title: "Estimate Follow-Up & Recovery Loop",
                    bullets: [
                        "Operator tracks issued estimates",
                        "Follow-ups initiated when no response is detected within a defined window",
                        "Messaging remains consistent across voice, SMS, and web"
                    ]
                },
                {
                    title: "Unified Project Memory",
                    bullets: [
                        "Operator remembers prior jobs, estimates, and conversations",
                        "Returning customers are recognized and contextualized"
                    ]
                },
                {
                    title: "Demand-to-Intake Alignment",
                    bullets: [
                        "Marketing-driven inquiries prioritized differently from referrals or repeat clients",
                        "Intake behavior adapts based on prior engagement history"
                    ]
                }
            ],
            footer: "At this level, Operator does not just assist — it actively coordinates intake and follow-through."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities that require deep customization, specialized workflows, or multi-crew coordination.",
            subsections: [
                {
                    title: "Pre-Estimate Media Intake",
                    bullets: [
                        "Customers upload photos or videos of the project area",
                        "Structured 'visual brief' generated for estimator review",
                        "No automated pricing or guarantees implied"
                    ]
                },
                {
                    title: "Multi-Crew / Multi-Location Coordination",
                    bullets: [
                        "Location-aware routing and reporting",
                        "Performance visibility by crew or region"
                    ]
                },
                {
                    title: "Private Knowledge Layer",
                    bullets: [
                        "Retrieval over approved internal docs (SOPs, proposal templates, scope definitions)",
                        "Guardrailed responses to avoid advisory or code-compliance claims"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific contractor — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
