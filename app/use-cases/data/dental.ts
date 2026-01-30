import { UseCase } from "../types";

export const dentalUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "dental",
    label: "Dental Practice",
    headline: "From Missed Calls to Coordinated Care",
    magicMoment: "The moment a new patient books their first appointment without ever reaching the front desk.",
    problem: "Most dental practices lose revenue not because of a lack of demand, but because of operational friction: missed calls during busy hours, front-desk overload, repetitive insurance and procedure questions, inconsistent follow-ups, and no centralized memory of patient interactions. The practice relies heavily on people and disconnected tools to manage intake, scheduling, and patient communication.",
    foundationPackage: {
        badgeLabel: "Entry Point",
        title: "Where Most Practices Start",
        description: "Most dental practices begin with the Foundation Package, which installs the core infrastructure required to run Operator inside the business.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound calls or website questions",
            "Provide basic information (hours, location, services)",
            "Capture patient intent and route appropriately"
        ],
        notIncluded: "What it intentionally does NOT include: Deep automation, multi-system coordination, vertical-specific dental logic, or advanced workflows. The Foundation Package establishes ownership, privacy, and local execution — it is the on-ramp, not the full system."
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
            label: "Dental-Specific",
            description: "HQ Pro for Dental is a templated, niche-specific operating system designed around common dental workflows. This includes pre-wired dental intake logic, procedure-aware routing, insurance and billing context, scheduling constraints based on staff and chair availability, and standardized follow-up patterns.",
            additionalText: "HQ Pro is built from proven patterns across similar practices. It's cookie-cutter by design and guardrailed to ensure reliability. Customization is limited, but the system now reflects how dental practices actually operate.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the full system working as one coordinated unit. For dental practices, this includes the Core Stack:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "All HQs share memory, actions are coordinated across the practice, and Operator functions as a true operating system — not a collection of tools."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is designed for dental practices with complex or unique requirements — multi-location practices, specialty clinics, compliance-heavy environments, or practices with custom internal workflows.",
            additionalText: "This includes deep workflow excavation through multiple long-form sessions, bespoke system architecture, custom integration layers, compliance-specific configurations, and extended team training. This is not a template — it is a system built specifically around how that practice operates."
        }
    ],
    bridgeLine: "Every tier reduces operational leakage — higher tiers add coordination, niche intelligence, and ultimately full-system control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "May reduce missed calls",
            "May improve booking consistency",
            "May reduce front-desk pressure",
            "May speed up response times",
            "May improve continuity across interactions",
            "May shift from reactive intake to coordinated operations"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts practices from reactive intake to coordinated operations."
    },
    accordionIntro: "The following examples illustrate what dental practices can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "dental practices",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability and consistency.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Inbound calls answered during lunch, after-hours, or busy periods",
                "Website chat answers basic patient questions (hours, services, location)",
                "Call intent captured and routed for follow-up"
            ],
            footer: "This tier ensures the practice stops leaking demand, but does not yet optimize operations."
        },
        {
            tier: "HQ Pro",
            label: "Clinical & Practice-Aware Logic",
            description: "HQ Pro for Dental applies templated, niche-specific intelligence.",
            highlighted: true,
            subsections: [
                {
                    title: "Treatment Plan Follow-Up",
                    bullets: [
                        "Operator scans for unscheduled treatment plans",
                        "Patients receive personalized, context-aware follow-ups",
                        "Front desk focuses on confirmed bookings instead of chasing leads"
                    ]
                },
                {
                    title: "Insurance Context Awareness",
                    bullets: [
                        "Operator understands common dental insurance flows",
                        "Coverage questions are answered consistently",
                        "Out-of-pocket expectations are flagged early"
                    ]
                },
                {
                    title: "Procedure-Aware Routing",
                    bullets: [
                        "Calls are routed based on procedure type and staff availability",
                        "Hygiene, cosmetic, and emergency inquiries follow different paths"
                    ]
                }
            ],
            footer: "HQ Pro reflects how dental practices operate, but remains a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Full Practice Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single system.",
            subsections: [
                {
                    title: "No-Show & Cancellation Recovery Loop",
                    bullets: [
                        "A cancellation is detected",
                        "Open chair time is identified",
                        "Nearby overdue patients are contacted automatically",
                        "Empty chairs are actively refilled"
                    ]
                },
                {
                    title: "Unified Patient Memory",
                    bullets: [
                        "Operator remembers prior visits, procedures, and conversations",
                        "Patients are greeted with context, not generic scripts"
                    ]
                },
                {
                    title: "Demand-to-Intake Coordination",
                    bullets: [
                        "Marketing activity informs intake priority",
                        "High-intent leads receive faster responses",
                        "The practice operates as one coordinated system"
                    ]
                }
            ],
            footer: "At this level, Operator does not just assist — it actively manages operational flow."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities that require deep customization, specialized models, or unique workflows.",
            subsections: [
                {
                    title: "Advanced Imaging & Diagnostics Support",
                    bullets: [
                        "X-rays or scans processed locally",
                        "Patient-friendly explanations generated automatically",
                        "Imaging data never leaves the office"
                    ]
                },
                {
                    title: "Multi-Location Command Center",
                    bullets: [
                        "Performance compared across locations",
                        "Call-to-booking ratios analyzed",
                        "Best-performing workflows replicated system-wide"
                    ]
                },
                {
                    title: "Custom Compliance & Training Systems",
                    bullets: [
                        "Tailored logic for regulatory requirements",
                        "Internal staff training workflows built into Operator"
                    ]
                }
            ],
            footer: "Custom Operator is built around the specific practice — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
