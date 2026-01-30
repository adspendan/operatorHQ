import { UseCase } from "../types";

export const mentalhealthCommunityUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "mentalhealth-community",
    label: "Mental Health Overlay — Community / Nonprofit (Admin Only)",
    headline: "From Access Uncertainty to Eligibility-Ready Routing",
    magicMoment: "The moment a community member seeking services is acknowledged, screened for program eligibility, and routed to the appropriate resource — with certainty and dignity. This is Access Certainty for underserved populations.",
    problem: "Community mental health organizations and nonprofits don't struggle because of mission — they struggle in the Access Certainty Gap. Vulnerable populations reach out but face confusing eligibility requirements, capacity constraints, and fragmented resource coordination. Intake teams are overwhelmed by crisis routing, eligibility screening, and program capacity management simultaneously. Without a system to capture Eligibility DNA at the point of entry, organizations scale uncertainty instead of access certainty.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Community Organizations Start",
        description: "Community mental health organizations begin with the Foundation Package, installing OperatorHQ as a Private Access Front Door that runs fully on-premise — ensuring sensitive eligibility data and personal information never leave the organization's physical control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Voice HQ for inbound calls 24/7, or Chat / Intake HQ for web-based access)"
        ],
        capabilities: [
            "Acknowledge 100% of service inquiries 24/7 — no silence for vulnerable populations",
            "Capture Eligibility DNA: income level indicators, residence/jurisdiction, insurance or uninsured status, program interest, urgency indicators (non-clinical)",
            "Route Eligibility-Ready Briefs: deliver structured summaries to intake coordinators for program matching"
        ],
        notIncluded: "What it explicitly does NOT include: Therapy, counseling, or clinical conversation. Eligibility determination (OperatorHQ captures, humans decide). Crisis counseling or intervention (OperatorHQ routes, humans respond). All clinical and eligibility decisions remain human-led."
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
            label: "Community Access Logic",
            description: "HQ Pro applies community organization-specific administrative rules: program fit routing (mental health vs substance use vs housing support), eligibility gating (documentation requirements by program), and crisis routing (handoff only — immediate escalation to humans).",
            additionalText: "OperatorHQ never handles crisis — only routes it immediately. Clinical and eligibility decisions remain human-led.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Community Access",
            description: "The Core Stack shares memory and context:",
            hqBadges: ["Voice HQ", "Comms HQ", "Ops HQ", "Data HQ", "Access HQ"],
            additionalText: "Identifies program capacity constraints. Detects crisis inquiry spikes. Flags access bottlenecks for leadership."
        },
        {
            tier: "Custom Operator",
            label: "Multi-Program / Network Layer",
            description: "Custom Operator is designed for community health networks, nonprofit coalitions, or multi-program organizations requiring maximum coordination.",
            additionalText: "Policy RAG (eligibility rules by program). Multi-program siloing. Audit-ready logs. Inter-org warm handoffs."
        }
    ],
    bridgeLine: "Every tier reduces access uncertainty — higher tiers add eligibility routing, capacity management, and ultimately unified community access operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero silent intakes — every inquiry acknowledged with dignity 24/7",
            "Reduced intake overwhelm — eligibility captured before coordinator engagement",
            "Access certainty — vulnerable populations know where they are in the process",
            "Capacity visibility — leadership sees program constraints in real-time",
            "Crisis routing confidence — immediate human handoff when indicators present",
            "HIPAA-first, ethics-first posture — sensitive data never leaves on-premise hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts organizations from access uncertainty to eligibility-ready operations."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): OperatorHQ supports administrative operations only. This system does NOT provide therapy, diagnosis, treatment, eligibility determination, or clinical decision-making. All clinical and eligibility decisions remain human-led. Crisis response is always human-led.",
    accordionIntro: "The following examples illustrate what community mental health organizations can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are administrative only.",
    accordionIntroSubject: "community mental health organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Access Acknowledgment + Eligibility Capture",
            description: "At the Foundation level, Operator provides 24/7 acknowledgment with dignity and baseline eligibility capture for community service inquiries.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Acknowledgment with Dignity",
                    bullets: [
                        "Every service inquiry acknowledged immediately with calm, respectful tone for vulnerable populations"
                    ]
                },
                {
                    title: "Eligibility Screening (Non-Determination)",
                    bullets: [
                        "Income level indicators (not verification)",
                        "Residence and jurisdiction for program matching",
                        "Insurance status or uninsured indication",
                        "Program interest (non-clinical categorization)"
                    ]
                },
                {
                    title: "Structured Eligibility Brief",
                    bullets: [
                        "Converts inquiries into admin-ready summaries for intake coordinators"
                    ]
                },
                {
                    title: "Program Transparency",
                    bullets: [
                        "Provides general program descriptions and waitlist expectations"
                    ]
                }
            ],
            footer: "Does NOT include: eligibility determination, clinical screening, or crisis response. All eligibility decisions remain human-led."
        },
        {
            tier: "HQ Pro",
            label: "Community Access + Resource Coordination Logic",
            description: "HQ Pro applies community organization-specific access rules while maintaining strict boundaries.",
            highlighted: true,
            subsections: [
                {
                    title: "Program-Fit Branching",
                    bullets: [
                        "Routes inquiries to correct admin queue (mental health, substance use, housing) based on declared interest"
                    ]
                },
                {
                    title: "Crisis Routing (Handoff Only)",
                    bullets: [
                        "Detects predefined high-risk keywords and immediately hands off to humans or crisis partners"
                    ]
                },
                {
                    title: "Eligibility Gating",
                    bullets: [
                        "Documents what's needed per program requirements (humans make all determinations)"
                    ]
                },
                {
                    title: "Resource Coordination",
                    bullets: [
                        "Routes to appropriate admin queues for partner organization referrals (non-clinical)"
                    ]
                }
            ],
            footer: "Does NOT include: eligibility determination, crisis management, or clinical decision-making."
        },
        {
            tier: "Operator HQ",
            label: "Unified Community Access Intelligence",
            description: "Operator HQ provides unified access intelligence across all programs and locations.",
            subsections: [
                {
                    title: "Capacity Constraint Detection",
                    bullets: [
                        "Real-time visibility into program capacity limits"
                    ]
                },
                {
                    title: "Crisis Inquiry Spike Detection",
                    bullets: [
                        "Alerts leadership to increases in crisis-related contacts"
                    ]
                },
                {
                    title: "Access Bottleneck Detection",
                    bullets: [
                        "Identifies where individuals stall in the intake process"
                    ]
                },
                {
                    title: "Cross-Program Memory",
                    bullets: [
                        "Previously captured admin data available across all programs"
                    ]
                }
            ],
            footer: "Does NOT include: eligibility scoring, clinical matching, or automated program placement."
        },
        {
            tier: "Custom Operator",
            label: "Multi-Program / Network Governance",
            description: "Custom Operator enables enterprise governance for community health networks or nonprofit coalitions.",
            subsections: [
                {
                    title: "Program-Specific Policy RAG",
                    bullets: [
                        "Private retrieval over program-specific eligibility rules and documentation requirements"
                    ]
                },
                {
                    title: "Multi-Program Data Siloing",
                    bullets: [
                        "Enforces strict separation between program data"
                    ]
                },
                {
                    title: "Inter-Org Warm Handoffs",
                    bullets: [
                        "Creates structured, consent-aware handoffs to partner organizations and crisis resources"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Maintains timestamped, encrypted records for grant reporting and compliance"
                    ]
                }
            ],
            footer: "Does NOT include: eligibility determination, clinical documentation, or automated program assignment."
        }
    ],
    accordionDisclaimer: "All examples describe administrative capabilities only. All tiers exclude therapy, diagnosis, treatment, and eligibility determination. OperatorHQ acts as a Private Access Layer, not a provider of care. Each tier increases access certainty for underserved populations while never crossing into clinical or eligibility determination authority. Crisis response is always human-led."
};
