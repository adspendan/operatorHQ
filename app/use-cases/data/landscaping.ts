import { UseCase } from "../types";

export const landscapingUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "landscaping",
    label: "Landscaping / Outdoor Services",
    headline: "From Missed Estimates to Coordinated Outdoor Operations",
    magicMoment: "The moment an estimate request is captured with Project DNA — service type, property size, urgency, and budget — and routed to the right estimator while crews are still finishing their current job.",
    problem: "Landscaping and outdoor service businesses don't lose revenue because of poor workmanship — they lose it in the 'Estimate & Intake Gap.' Calls come in while crews are on-site, owners are driving between jobs, or weather shifts priorities in real time. High-intent homeowners don't leave voicemails; they call the next company. Meanwhile, owners waste hours each week driving to low-budget estimates, answering repetitive questions about pricing and availability, and manually chasing photos, addresses, and scope details. Without a system to capture Project DNA up front — service type, property size, urgency, and budget — landscaping businesses scale chaos instead of margin.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Landscaping Companies Start",
        description: "Most landscaping companies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring customer lists, property photos, and estimate logic stay on your hardware, not a third-party cloud.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inquiries 24/7, capturing after-hours and weekend demand",
            "Capture Project DNA: service type (Maintenance, Hardscape, Tree, Irrigation, Snow), property type (Residential, Commercial, HOA), address and timing",
            "Route 'Estimate-Ready' inquiries to owner or estimator with a structured summary"
        ],
        notIncluded: "Automated pricing or instant quote guarantees. Crew scheduling or route optimization. Payment processing or contract execution. Advanced photo or video analysis. The Foundation Package stops the missed-call revenue leak — it is the on-ramp, not the engine."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Landscaping-Specific",
            description: "HQ Pro applies niche-aware logic for Residential vs Commercial clients, Maintenance vs Design/Build projects, and Emergency vs Routine requests. Includes Scope & Budget Branching.",
            additionalText: "Emergency tree-down gets immediate escalation. Low-budget residential requests get deferred or filtered.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents Full Outdoor Operations Sync. The Core Stack operate as a single system. For landscaping companies, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Data HQ identifies repeat seasonal customers. Marketing HQ triggers spring/fall reactivation campaigns. Voice HQ handles inbound with full customer context."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Outdoor Services Command Center' — for multi-crew, multi-division, or regional operators.",
            additionalText: "This includes photo-based intake, multi-crew & division logic (lawn vs hardscape vs tree routing), and private SOP & capability RAG. This is bespoke, not templated."
        }
    ],
    bridgeLine: "Every tier reduces the Estimate & Intake Gap — higher tiers add scope qualification, seasonal coordination, and ultimately full outdoor operations control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed estimate requests — 24/7 capture",
            "Fewer low-value site visits — better upfront qualification",
            "Owner time recovery — fewer interruptions and calls",
            "Seasonal revenue stability — structured reactivation loops",
            "Data sovereignty — customer info and property photos stay local"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide instant quotes, schedule crews, or process payments. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what landscaping and outdoor service companies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "landscaping and outdoor service companies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Demand Capture & Intake Stability",
            description: "At the Foundation level, Operator focuses on availability, qualification, and interruption reduction.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound calls answered during jobsite work, driving, or after-hours",
                "Website or SMS inquiries captured with service type and address",
                "Basic project intent logged and routed for follow-up"
            ],
            footer: "This tier ensures the business stops leaking inbound demand, but does not yet optimize estimates, routing, or seasonal workflows."
        },
        {
            tier: "HQ Pro",
            label: "Scope & Priority Intelligence",
            description: "HQ Pro for Landscaping applies niche-aware logic specific to outdoor service operations.",
            highlighted: true,
            subsections: [
                {
                    title: "Scope-Based Routing",
                    bullets: [
                        "Emergency tree work escalated immediately",
                        "Routine maintenance queued appropriately",
                        "Design/build opportunities flagged for owner review"
                    ]
                },
                {
                    title: "Budget & Fit Filtering",
                    bullets: [
                        "Minimum job size enforced during intake",
                        "Out-of-area or low-fit requests filtered early"
                    ]
                },
                {
                    title: "Service-Type Awareness",
                    bullets: [
                        "Lawn maintenance, hardscape, irrigation, tree, and snow requests follow different paths",
                        "Each inquiry is handled according to operational reality"
                    ]
                }
            ],
            footer: "HQ Pro reflects how real landscaping companies operate, while remaining a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Full Outdoor Operations Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a coordinated system.",
            subsections: [
                {
                    title: "Seasonal Reactivation Loops",
                    bullets: [
                        "Past customers are identified by service history",
                        "Timely outreach triggered for repeat seasonal work (spring cleanup, blowouts, snow)"
                    ]
                },
                {
                    title: "Unified Customer Memory",
                    bullets: [
                        "Operator remembers prior jobs, property notes, and service preferences",
                        "Repeat customers are handled with context, not generic scripts"
                    ]
                },
                {
                    title: "Demand-to-Operations Coordination",
                    bullets: [
                        "Marketing activity informs intake priority",
                        "High-intent or repeat clients receive faster responses"
                    ]
                }
            ],
            footer: "At this level, Operator actively manages flow — not just messages."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities requiring deep customization, specialized workflows, or on-premise vision models.",
            subsections: [
                {
                    title: "Photo-Based Pre-Estimate Intelligence",
                    bullets: [
                        "Customers upload property photos",
                        "Operator generates a structured pre-visit brief for crews"
                    ]
                },
                {
                    title: "Weather-Triggered Operational Modes",
                    bullets: [
                        "Storm or snow events automatically change intake priority",
                        "Emergency services override routine requests"
                    ]
                },
                {
                    title: "Multi-Crew / Multi-Division Command Logic",
                    bullets: [
                        "Residential vs commercial",
                        "Maintenance vs build",
                        "Regional routing and escalation paths"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific business — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in depth, coordination, and domain awareness."
};
