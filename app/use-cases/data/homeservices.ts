import { UseCase } from "../types";

export const homeservicesUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "homeservices",
    label: "Home Services",
    headline: "From Missed Calls to Managed Dispatch",
    magicMoment: "The moment an urgent caller is triaged instantly — while your team receives a clean, dispatch-ready job brief without phone tag.",
    problem: "Home service businesses don't lose revenue because of bad work — they lose it in the gaps between calls, scheduling, dispatch, and follow-up. Peak-time call volume hits while techs are in the field. After-hours emergencies go to voicemail. Customers repeat details across calls and texts. Office staff is forced to guess urgency without consistent rules. No-shows, vague job descriptions, and poor handoffs lead to wasted trips and stressed teams. There is no unified memory across inquiry → schedule → dispatch → job notes → invoice → review request. The result is operational leakage: missed jobs, inefficient routing, admin overload, and slower growth without adding headcount.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Companies Start",
        description: "Most home service companies begin with the Foundation Package, which installs the core private infrastructure required to run Operator locally inside the business.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer calls after-hours and during peak periods",
            "Capture job type, urgency, address, and preferred time window",
            "Route the request for scheduling or dispatch follow-up"
        ],
        notIncluded: "No trade-specific diagnosis logic, no dispatch optimization, no multi-tech coordination, no inventory or parts logic, and no cross-system automation. The Foundation Package establishes ownership, privacy, and local execution — it is the on-ramp, not the full system.",
        notIncludedHeader: "What It Intentionally Does NOT Include"
    },
    deploymentSwarm: {
        architecture: [
            {
                name: "The Estimator",
                role: "Voice HQ",
                capabilities: ["Price Quoting", "Lead Qualification", "After-Hours Catch"]
            },
            {
                name: "Dispatch Agent",
                role: "Ops HQ",
                capabilities: ["Route Optimization", "Tech Assignment", "Arrival Windows"]
            },
            {
                name: "Review Manager",
                role: "Marketing HQ",
                capabilities: ["GMB Review Generation", "Negative Feedback Intercept", "Social Proof"]
            },
            {
                name: "Field Support",
                role: "Knowledge HQ",
                capabilities: ["Parts Lookup", "Installation SOPs", "Warranty Checks"]
            }
        ],
        flow: {
            trigger: "Customer calls for Emergency AC Repair",
            steps: [
                { agent: "The Estimator", action: "Quotes diagnosis fee and confirms 'No Cool' status." },
                { agent: "Dispatch Agent", action: "Identifies nearest tech (Bob) finishing job 2 miles away." },
                { agent: "Field Support", action: "Sends Bob the unit manual and warranty history." },
                { agent: "Review Manager", action: "Texts customer review link 1 hour after job completion." }
            ]
        }
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Trade-Specific Templates",
            description: "HQ Pro for Home Services introduces templated, niche-specific logic built around how service businesses actually run. These systems are standardized and guardrailed, not custom.",
            highlighted: true,
            tradeSpecificContent: {
                trades: [
                    {
                        name: "HVAC",
                        bullets: [
                            "Comfort and no-heat/no-cool triage",
                            "Seasonal surge routing",
                            "Maintenance vs repair intake pathways"
                        ]
                    },
                    {
                        name: "Plumbing",
                        bullets: [
                            "Leak and backup urgency categorization",
                            "Property-damage risk flags",
                            "On-site readiness questions captured"
                        ]
                    },
                    {
                        name: "Electrical",
                        bullets: [
                            "Outage vs safety concern categorization",
                            "Service call vs panel issue routing",
                            "Escalation paths for time-sensitive situations"
                        ]
                    }
                ]
            }
        },
        {
            tier: "Operator HQ",
            label: "Full Dispatch Coordination",
            description: "Operator HQ synchronizes the Core Stack into a single operating system:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "All interactions share memory. Scheduling, dispatch, follow-ups, and customer history operate as one coordinated system rather than disconnected tools."
        },
        {
            tier: "Custom Operator",
            label: "Multi-Crew, Multi-Location, Advanced Routing",
            description: "Custom Operator is designed for complex service operations: multi-location businesses, large fleets, high emergency volume, or bespoke dispatch rules.",
            additionalText: "This includes deep workflow excavation, custom routing logic, integrations with field service software, call tracking, invoicing systems, and extended team training. This is not a template — it is a system built around how the company actually operates."
        }
    ],
    bridgeLine: "Every tier reduces operational leakage — higher tiers add coordination, niche intelligence, and ultimately full-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Fewer missed after-hours jobs",
            "Faster speed-to-lead on urgent calls",
            "More consistent scheduling and dispatch handoffs",
            "Reduced office load from repetitive triage questions",
            "Better continuity from call → tech → invoice",
            "Shift from reactive phone answering to coordinated dispatch operations"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts companies from reactive phone answering to coordinated dispatch operations."
    },
    accordionIntro: "The following examples illustrate what home service businesses can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "home service businesses",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, speed-to-lead, and clean intake capture.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound calls answered after-hours or during peak demand periods",
                "Website chat handles basic inquiries (service area, hours, general services)",
                "Core dispatch data captured (job type, urgency, address) and routed for follow-up"
            ],
            footer: "This tier helps the business stop leaking urgent demand, but does not yet coordinate scheduling or dispatch."
        },
        {
            tier: "HQ Pro",
            label: "Trade-Aware Intake Logic",
            description: "HQ Pro for Home Services applies templated, niche-specific intelligence aligned to how service businesses operate.",
            highlighted: true,
            tradeSpecificContent: {
                trades: [
                    {
                        name: "HVAC",
                        bullets: [
                            "No-cool / no-heat scenarios routed differently than routine maintenance",
                            "Seasonal urgency reflected in intake prioritization",
                            "Equipment type and service history captured during intake"
                        ]
                    },
                    {
                        name: "Plumbing",
                        bullets: [
                            "Active leaks flagged as higher urgency than non-critical requests",
                            "Repeated callers recognized during ongoing issues",
                            "Job context captured before technician dispatch"
                        ]
                    },
                    {
                        name: "Electrical",
                        bullets: [
                            "Power loss or safety-related calls escalated appropriately",
                            "Panel or outlet issues differentiated from install requests",
                            "Intake flows adapted to safety-sensitive scenarios"
                        ]
                    }
                ]
            },
            footer: "HQ Pro standardizes intake and prioritization by trade, while remaining a templated system."
        },
        {
            tier: "Operator HQ",
            label: "Coordinated Dispatch & Job Lifecycle",
            description: "Operator HQ enables the Core Stack to operate as a single system.",
            subsections: [
                {
                    title: "Unified Customer & Job Memory",
                    bullets: [
                        "Prior jobs, notes, and service history surfaced during intake",
                        "Repeat callers recognized and handled with context"
                    ]
                },
                {
                    title: "Dispatch-Ready Briefs",
                    bullets: [
                        "Technicians receive structured summaries before arriving on site",
                        "Reduced on-site discovery and follow-up calls"
                    ]
                },
                {
                    title: "Demand-Aware Operations",
                    bullets: [
                        "Marketing activity informs intake prioritization",
                        "High-urgency calls receive faster internal routing"
                    ]
                }
            ],
            footer: "At this level, Operator coordinates intake, scheduling, and dispatch as one system."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables workflows requiring deep customization or specialized integrations.",
            subsections: [
                {
                    title: "Visual Intake & Job Context",
                    bullets: [
                        "Customers submit photos or videos during intake",
                        "Visual context attached to job records for technician review"
                    ]
                },
                {
                    title: "Multi-Location & Territory Coordination",
                    bullets: [
                        "Intake routed based on service zones or branch coverage",
                        "Performance patterns analyzed across locations"
                    ]
                },
                {
                    title: "Internal Knowledge & SOP Systems",
                    bullets: [
                        "Private RAG over internal manuals and procedures",
                        "Technician or dispatcher guidance generated from internal documentation"
                    ]
                }
            ],
            footer: "Custom Operator is built around the company's exact operational reality — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
