import { UseCase } from "../types";

export const policefireUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "policefire",
    label: "Police / Fire (Administrative Only)",
    headline: "From Public Friction to Structured Administrative Access",
    magicMoment: "The moment a non-emergency administrative inquiry is captured, categorized, and routed to the correct department — without interrupting dispatchers or sworn personnel.",
    problem: "Police and Fire departments receive constant inbound requests from the public — not all of which require emergency response. Non-emergency administrative calls about records requests, permits, inspections, community programs, and general information often tie up phone lines, distract front-desk staff, and occasionally misdirect to emergency channels. Without a system to capture Request Context and route appropriately, departments scale administrative friction instead of public access.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Departments Start",
        description: "Most Police and Fire departments begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring citizen inquiries and internal workflows remain under departmental control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer non-emergency administrative calls 24/7",
            "Capture request type: records, permits, inspections, community programs, general information",
            "Route requests to appropriate administrative unit with a structured summary"
        ],
        notIncluded: "911 dispatch, active incident response, enforcement decisions, investigations, or operational command. Operator strictly supports administrative intake, routing, and public communication — it does not replace sworn personnel, dispatchers, or command authority."
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
            label: "Public Safety Admin-Specific",
            description: "HQ Pro applies public-safety-aware administrative logic. Includes request-type branching (Police: records, permits, outreach; Fire: inspections, prevention, hydrant issues) and non-emergency guardrails.",
            additionalText: "Explicit redirection to 911 when keywords indicate risk.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ enables coordination across administrative units (not field operations). The Core Stack operate as a coordinated system:",
            hqBadges: ["Voice HQ", "Services HQ", "Ops HQ", "Data HQ", "Comms HQ"],
            additionalText: "Unified administrative memory, volume awareness, and consistent public messaging across channels."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Administrative Command Layer' — for departments requiring policy retrieval, FOIA/public records support, or multi-station coordination.",
            additionalText: "Designed around oversight, auditability, and public accountability — not automation of operational authority."
        }
    ],
    bridgeLine: "Every tier reduces administrative friction — higher tiers add request tracking, compliance-aware intake, and ultimately cross-unit coordination while preserving public safety authority.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Police and Fire departments deploying Operator for administrative functions may experience:",
        items: [
            "Reduced misdirected calls to emergency lines",
            "Faster acknowledgment of records and permit requests",
            "Lower front-desk interruptions",
            "Consistent public messaging across channels",
            "Administrative staff focused on processing, not routing"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not dispatch emergency services, provide tactical advice, make enforcement decisions, or replace sworn personnel. It strictly supports administrative intake, routing, and communication.",
    accordionIntro: "The following examples illustrate what Police and Fire departments can unlock at higher tiers of Operator for administrative workflows only. They are not guarantees and not included by default — they demonstrate what becomes possible while preserving public safety authority.",
    accordionIntroSubject: "Police and Fire departments",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Non-Emergency Access & Call Defense",
            description: "At the Foundation level, Operator focuses on protecting emergency lines while ensuring the public is never left without answers.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "24/7 answering of non-emergency administrative calls",
                "Website chat for common questions: accident report requests, fire inspection scheduling, burn permit rules, station hours and locations",
                "Call intent captured and routed to: Records division, Fire prevention, Administrative desk"
            ],
            footer: "This tier prevents emergency lines from being clogged by informational calls."
        },
        {
            tier: "HQ Pro",
            label: "Process-Aware Logic",
            description: "HQ Pro applies public-safety-specific guardrails.",
            highlighted: true,
            subsections: [
                {
                    title: "Non-Emergency Filtering",
                    bullets: [
                        "Detects emergency language and immediately redirects to 911",
                        "Ensures Operator never processes emergencies"
                    ]
                },
                {
                    title: "Request-Type Branching",
                    bullets: [
                        "Accident records vs. background checks",
                        "Fire inspections vs. community education requests"
                    ]
                },
                {
                    title: "Form Readiness Enforcement",
                    bullets: [
                        "Requests are not passed to staff until required fields are complete"
                    ]
                }
            ],
            footer: "HQ Pro ensures staff only see ready-to-process administrative work."
        },
        {
            tier: "Operator HQ",
            label: "Department-Wide Administrative Coordination",
            description: "Operator HQ synchronizes administrative operations across divisions.",
            subsections: [
                {
                    title: "Unified Request Memory",
                    bullets: [
                        "Repeat inquiries tied to the same incident or permit"
                    ]
                },
                {
                    title: "Volume Awareness",
                    bullets: [
                        "Identifies spikes in non-emergency calls during events or storms"
                    ]
                },
                {
                    title: "Public Messaging Consistency",
                    bullets: [
                        "Approved language across phone, chat, and email"
                    ]
                }
            ],
            footer: "At this level, Operator manages the flow of administrative demand, not just intake."
        },
        {
            tier: "Custom Operator",
            label: "Institutional Intelligence Layer",
            description: "Custom Operator enables advanced, jurisdiction-specific capabilities.",
            subsections: [
                {
                    title: "Policy & Ordinance Retrieval",
                    bullets: [
                        "Private RAG over fire codes, ordinances, and admin policies"
                    ]
                },
                {
                    title: "Inter-Department Handoffs",
                    bullets: [
                        "Secure routing between Police Admin, Fire Prevention, and City Clerk"
                    ]
                },
                {
                    title: "Audit & Compliance Tracking",
                    bullets: [
                        "Logged intake for records, FOIA, and public accountability"
                    ]
                }
            ],
            footer: "Custom Operator is built around the department's governance model — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. All examples are administrative, additive, and explicitly non-operational by design."
};
