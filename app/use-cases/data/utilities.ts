import { UseCase } from "../types";

export const utilitiesUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "utilities",
    label: "Utilities & Emergency Management (Non-Response)",
    headline: "From Outage Chaos to Structured Public Reporting",
    magicMoment: "The moment a power outage or water leak is reported with Incident DNA — address, utility type, severity — and routed to the correct department before the caller has to repeat themselves.",
    problem: "Utility departments and emergency management offices receive constant inbound reports from the public — outages, leaks, downed lines, and weather-related issues. Phone lines overflow during peak events, staff answer the same questions repeatedly, and residents feel ignored without status updates. Without a system to capture Incident Context and route appropriately, agencies scale frustration instead of responsiveness.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Utility Departments Start",
        description: "Most utility and emergency management departments begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring citizen reports and internal workflows remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "24/7 intake of power outages, water leaks, and downed streetlights",
            "Capture Incident DNA: address, utility type, self-reported severity",
            "Route reports to the correct utility department with a structured summary"
        ],
        notIncluded: "Live emergency response, dispatch, or grid-control systems. Operator strictly supports administrative intake, public reporting, and communication workflows — it does not control infrastructure or replace emergency responders."
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
            label: "Utility-Specific",
            description: "HQ Pro applies utility-aware intake logic. Includes incident classification (single-property vs. area-wide), weather-aware intake, and departmental routing (electric, water, gas, emergency management).",
            additionalText: "Storm-related spikes flagged for ops awareness.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ enables cross-agency awareness. The Core Stack operate as a coordinated system:",
            hqBadges: ["Voice HQ", "Services HQ", "Ops HQ", "Data HQ", "Comms HQ"],
            additionalText: "Pattern detection, public messaging sync, and preparedness coordination across departments."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Regional Utility Command Layer' — for agencies requiring inter-utility coordination, incident history retrieval, or leadership dashboards.",
            additionalText: "Aggregate reporting for mayors or emergency managers."
        }
    ],
    bridgeLine: "Every tier reduces public frustration during outages — higher tiers add incident classification, weather awareness, and ultimately cross-agency coordination.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Reduced phone overflow during outage events",
            "Faster acknowledgment of public reports",
            "Consistent status messaging across channels",
            "Pattern detection for cluster identification",
            "Staff focused on response, not phone routing"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not control grid systems, dispatch emergency responders, or make operational decisions. It strictly supports public intake, reporting workflows, and communication.",
    accordionIntro: "The following examples illustrate what utility and emergency management departments can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "utility and emergency management departments",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Public Reporting & Acknowledgment",
            description: "At the Foundation level, Operator ensures consistent public intake for utility issues.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "24/7 intake of power outages, water leaks, and downed streetlights",
                "Capture of Incident DNA: address, utility type, self-reported severity",
                "Routing to the correct utility department"
            ],
            footer: "This tier prevents phone overload during peak events."
        },
        {
            tier: "HQ Pro",
            label: "Infrastructure-Aware Logic",
            description: "HQ Pro applies utility-aware intake logic.",
            highlighted: true,
            subsections: [
                {
                    title: "Incident Classification",
                    bullets: [
                        "Single-property vs. area-wide reports differentiated",
                        "Supports prioritization without automating decisions"
                    ]
                },
                {
                    title: "Weather-Aware Intake",
                    bullets: [
                        "Flagging storm-related spikes for ops awareness",
                        "Seasonal patterns identified"
                    ]
                },
                {
                    title: "Departmental Routing",
                    bullets: [
                        "Electric vs. water vs. gas vs. emergency management",
                        "Right department receives right information"
                    ]
                }
            ],
            footer: "HQ Pro reflects utility operations while remaining standardized."
        },
        {
            tier: "Operator HQ",
            label: "Cross-Agency Awareness",
            description: "Operator HQ enables coordination across utility and emergency management functions.",
            subsections: [
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identifying clusters of reports in the same zone",
                        "Flags trends for operational review"
                    ]
                },
                {
                    title: "Public Messaging Sync",
                    bullets: [
                        "Ensuring consistent updates across channels",
                        "Approved language only"
                    ]
                },
                {
                    title: "Preparedness Coordination",
                    bullets: [
                        "Pre-storm or pre-event information distribution"
                    ]
                }
            ],
            footer: "At this level, Operator supports situational awareness, not operational control."
        },
        {
            tier: "Custom Operator",
            label: "Regional Coordination",
            description: "Custom Operator enables advanced capabilities requiring policy review and formal approval.",
            subsections: [
                {
                    title: "Inter-Utility Coordination",
                    bullets: [
                        "Sharing intake summaries between city and county utilities",
                        "Standardized reporting across agencies"
                    ]
                },
                {
                    title: "Incident History Retrieval",
                    bullets: [
                        "Private RAG over past outage patterns",
                        "Supports trend analysis without automated action"
                    ]
                },
                {
                    title: "Leadership Dashboards",
                    bullets: [
                        "Aggregate reporting for mayors or emergency managers"
                    ]
                }
            ],
            footer: "Custom Operator is designed around regional coordination and public accountability."
        }
    ],
    accordionDisclaimer: "Operator does not control grid systems, dispatch responders, or make operational decisions. Capabilities vary by deployment. Examples illustrate what becomes possible while preserving operational authority."
};
