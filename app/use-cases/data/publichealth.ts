import { UseCase } from "../types";

export const publichealthUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "publichealth",
    label: "Public Health Departments (Administrative + Intake)",
    headline: "From Program Confusion to Structured Health Access",
    magicMoment: "The moment a citizen inquiry about clinic hours or vaccination schedules is captured with program context and routed to the right health division — without tying up staff who should be serving patients.",
    problem: "Public health departments face constant public demand for program information, eligibility questions, clinic schedules, and service requests. Phone lines stay busy, front-desk staff answer the same questions repeatedly, and citizens struggle to navigate complex program requirements. Without a system to capture Request Context and route to the correct health division, departments scale confusion instead of access.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Health Departments Start",
        description: "Most public health departments begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring citizen inquiries and internal workflows remain under department control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Handle public health inquiries 24/7: clinic hours, vaccination schedules, program eligibility",
            "Intake of complaints, reports, and service requests",
            "Route requests to appropriate health division with a structured summary"
        ],
        notIncluded: "Diagnosis, medical advice, or treatment decisions. Operator strictly supports administrative intake, routing, and public communication — it does not replace healthcare providers or clinical staff."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Public Health-Specific",
            description: "HQ Pro applies health-program-aware intake logic. Includes program branching (environmental health, communicable disease, maternal/child services), eligibility pre-screening, and compliance language control.",
            additionalText: "Ensures applicants meet basic program criteria before staff review.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ enables community health coordination. The Core Stack operate as a coordinated system:",
            hqBadges: ["Voice HQ", "Services HQ", "Ops HQ", "Data HQ", "Comms HQ"],
            additionalText: "Trend awareness, outreach coordination, and unified intake memory across programs."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Public Health Intelligence Layer' — for departments requiring policy retrieval, multi-department coordination, or leadership reporting.",
            additionalText: "Aggregate dashboards for public officials."
        }
    ],
    bridgeLine: "Every tier reduces public confusion — higher tiers add program routing, eligibility pre-screening, and ultimately community health coordination.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Reduced phone and front-desk congestion",
            "Faster acknowledgment of service requests",
            "Citizens arriving prepared with correct documentation",
            "Consistent program messaging across channels",
            "Staff focused on service delivery, not routing"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide medical advice, diagnose conditions, or make treatment decisions. It strictly supports administrative intake, routing, and public communication.",
    accordionIntro: "The following examples illustrate what public health departments can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "public health departments",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Public Access & Intake",
            description: "At the Foundation level, Operator ensures consistent public access to health department information.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "24/7 handling of public health inquiries: clinic hours, vaccination schedules, program eligibility",
                "Intake of complaints, reports, and service requests",
                "Routing to appropriate health division"
            ],
            footer: "This tier prevents phone overload and reduces repetitive FAQs."
        },
        {
            tier: "HQ Pro",
            label: "Program-Aware Logic",
            description: "HQ Pro applies health-program-aware intake logic.",
            highlighted: true,
            subsections: [
                {
                    title: "Program Branching",
                    bullets: [
                        "Environmental health",
                        "Communicable disease reporting",
                        "Maternal/child services"
                    ]
                },
                {
                    title: "Eligibility Pre-Screening",
                    bullets: [
                        "Ensuring applicants meet basic program criteria",
                        "Reduces incomplete applications reaching staff"
                    ]
                },
                {
                    title: "Compliance Language Control",
                    bullets: [
                        "Approved messaging only"
                    ]
                }
            ],
            footer: "HQ Pro reflects real health department workflows while remaining standardized."
        },
        {
            tier: "Operator HQ",
            label: "Community Health Coordination",
            description: "Operator HQ enables coordination across health programs and community outreach.",
            subsections: [
                {
                    title: "Trend Awareness",
                    bullets: [
                        "Identifying spikes in complaints or service demand",
                        "Flags trends for departmental review"
                    ]
                },
                {
                    title: "Outreach Coordination",
                    bullets: [
                        "Triggering public education messages",
                        "Approved language only"
                    ]
                },
                {
                    title: "Unified Intake Memory",
                    bullets: [
                        "Repeat reports tied to the same address or issue"
                    ]
                }
            ],
            footer: "At this level, Operator supports community health awareness, not clinical decisions."
        },
        {
            tier: "Custom Operator",
            label: "Public Health Intelligence Layer",
            description: "Custom Operator enables advanced capabilities requiring policy review and formal approval.",
            subsections: [
                {
                    title: "Policy & Guideline Retrieval",
                    bullets: [
                        "Private RAG over public health regulations",
                        "Answers procedural questions only"
                    ]
                },
                {
                    title: "Multi-Department Coordination",
                    bullets: [
                        "Linking intake between health, housing, and safety"
                    ]
                },
                {
                    title: "Leadership Reporting",
                    bullets: [
                        "Aggregate dashboards for public officials"
                    ]
                }
            ],
            footer: "Custom Operator is designed around public health governance and community accountability."
        }
    ],
    accordionDisclaimer: "Operator does not provide medical advice, diagnose conditions, or make treatment decisions. Capabilities vary by deployment. All examples are administrative, additive, and governance-aligned by design."
};
