import { UseCase } from "../types";

export const propertyUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "property",
    label: "Property Management",
    headline: "From Reactive Maintenance to Coordinated Tenant Operations",
    magicMoment: "The moment a tenant maintenance request is captured, classified by urgency, and routed to the right queue — before the property manager finishes their unit tour.",
    problem: "Property management companies don't lose money because of rent prices — they lose it in the 'Operational Noise Layer.' Inbound tenant requests arrive constantly: maintenance issues, lease questions, move-ins, move-outs, parking, utilities, emergencies. Calls come in while managers are touring units, vendors are on-site, or after-hours when no one is available. Tenants get frustrated when issues feel ignored, while property managers drown in repetitive communication that pulls them away from higher-value work. Without a system to capture, classify, and route tenant intent, maintenance issues escalate, vendors are misassigned, response times slip, and tenant satisfaction drops — even when the underlying service is solid. The result: burned-out managers, angry tenants, and avoidable churn.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Property Managers Start",
        description: "Most property management companies begin with the Foundation Package, which installs the private infrastructure required to run Operator locally — keeping tenant communications, unit details, and operational data off third-party clouds.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer tenant inquiries 24/7, including after-hours and weekends",
            "Capture Tenant Request DNA: unit number/property, issue type (maintenance, billing, lease, general), urgency (routine vs urgent)",
            "Route requests to the appropriate internal queue (maintenance, leasing, admin)",
            "Send confirmation messages so tenants know their request was received"
        ],
        notIncluded: "Automated maintenance dispatch or vendor scheduling. Real-time property management software (PMS) sync. Rent processing, payment handling, or legal notices. The Foundation Package stops missed requests and restores basic responsiveness — it is the on-ramp, not full operations automation."
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
            label: "Property Management-Specific",
            description: "HQ Pro applies niche-aware logic designed specifically for residential and mixed-use property operations. Includes Issue-Type Branching: emergency maintenance vs routine, lease questions vs billing vs move-out requests.",
            additionalText: "Prevents urgent issues from being buried in general inboxes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Full Portfolio Sync. The Core Stack operate as one system. For property managers, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Data HQ recognizes repeat maintenance patterns. Ops HQ tracks open vs resolved request volume. The system begins managing flow, not just messages."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Multi-Property Command Center' — built for large portfolios, multi-city property managers, or mixed residential + commercial operations.",
            additionalText: "This includes vendor coordination workflows, property-level reporting dashboards, and private RAG over SOPs, house rules, and maintenance standards. This is not a template — it is built around the portfolio."
        }
    ],
    bridgeLine: "Every tier reduces the Operational Noise Layer — higher tiers add issue classification, coordination, and ultimately full-portfolio control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed tenant requests — every issue acknowledged immediately",
            "Faster response times — requests routed correctly the first time",
            "Reduced manager burnout — less inbox chaos, fewer interruptions",
            "Tenant satisfaction gains — clear communication without overpromising",
            "Data sovereignty — tenant communications stay on your Mac Studio"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not dispatch vendors, process rent payments, issue legal notices, or make decisions requiring property manager judgment. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what property management companies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "property management companies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, acknowledgment, and clean intake.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Tenant calls and portal inquiries answered 24/7, including nights and weekends",
                "Structured capture of Request DNA: property and unit number, issue category (maintenance, leasing, billing, general), self-reported urgency",
                "Immediate confirmation sent to the tenant so requests never feel ignored",
                "Clean, readable summaries delivered to property management staff"
            ],
            footer: "This tier ensures no request is missed, but does not yet prioritize or coordinate resolution."
        },
        {
            tier: "HQ Pro",
            label: "Portfolio-Aware Logic",
            description: "HQ Pro applies templated, property-management-specific intelligence aligned to how managers actually operate.",
            highlighted: true,
            subsections: [
                {
                    title: "Emergency vs Routine Triage",
                    bullets: [
                        "Requests like 'no heat,' 'active leak,' or 'power outage' flagged for immediate attention",
                        "Routine issues routed to standard maintenance queues"
                    ]
                },
                {
                    title: "Unit & Building Context",
                    bullets: [
                        "Requests grouped by property and building",
                        "Staff can see if multiple units are reporting similar issues"
                    ]
                },
                {
                    title: "Clear Escalation Signals",
                    bullets: [
                        "Requests missing key details (unit number, access notes) are flagged for clarification",
                        "Reduces back-and-forth before action can begin"
                    ]
                }
            ],
            footer: "HQ Pro improves decision clarity, but does not automate vendor dispatch or repairs."
        },
        {
            tier: "Operator HQ",
            label: "Full Portfolio Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a coordinated system across the portfolio.",
            subsections: [
                {
                    title: "Pattern Awareness",
                    bullets: [
                        "Operator recognizes repeated issues tied to a specific building or system",
                        "Management gains visibility into emerging asset risks"
                    ]
                },
                {
                    title: "Cancellation & Availability Recovery",
                    bullets: [
                        "When maintenance slots open, queued requests are surfaced intelligently",
                        "Response time improves without manual juggling"
                    ]
                },
                {
                    title: "Unified Tenant Memory",
                    bullets: [
                        "Prior interactions are remembered within configured data boundaries",
                        "Tenants are responded to with context, not generic scripts"
                    ]
                }
            ],
            footer: "At this level, Operator actively manages operational flow — not just intake."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables workflows that require deep customization, integrations, or scale.",
            subsections: [
                {
                    title: "Vendor Coordination Workflows",
                    bullets: [
                        "Intake summaries transformed into structured work-order briefs",
                        "Vendors receive consistent, pre-qualified information (scope, access, urgency)"
                    ]
                },
                {
                    title: "Owner & Asset Reporting",
                    bullets: [
                        "Custom dashboards showing request volume, response times, and repeat issues",
                        "Property-level insights without exposing tenant PII externally"
                    ]
                },
                {
                    title: "Private Knowledge Layer",
                    bullets: [
                        "Retrieval over approved documents (house rules, bylaws, maintenance standards)",
                        "Guardrailed responses that avoid legal or policy misstatements"
                    ]
                }
            ],
            footer: "Custom Operator is built around the portfolio and operating model — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
