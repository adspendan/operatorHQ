import { UseCase } from "../types";

export const mentalhealthTherapyUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "mentalhealth-therapy",
    label: "Mental Health Overlay — Therapy Practices (Admin Only)",
    headline: "From Intake Overwhelm to Therapist-Fit Routing",
    magicMoment: "The moment a new patient inquiry is acknowledged, screened for administrative fit, and routed to the appropriate therapist's availability — without clinical interpretation. This is Therapist-Fit Routing.",
    problem: "Therapy practices don't struggle because of clinical skill — they struggle in the Administrative Matching Gap. Patients reach out seeking help but face voicemail, slow responses, and repeated intake questioning. Front desks juggle insurance verification, availability matching, and new patient screening while therapists wait for appropriate referrals. Without a system to capture Therapy Access DNA at the point of entry, practices scale frustration instead of connection.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Therapy Practices Start",
        description: "Therapy practices begin with the Foundation Package, installing OperatorHQ as a Private Access Front Door that runs fully on-premise — ensuring patient intent and personal information never leave the practice's physical control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Voice HQ for inbound calls 24/7, or Chat / Intake HQ for web-based access)"
        ],
        capabilities: [
            "Acknowledge 100% of new patient inquiries 24/7",
            "Capture Therapy Admin DNA: new vs returning, insurance type or self-pay, session format preference (individual, couples, family), availability windows, general concern category (non-clinical)",
            "Route Availability-Ready Briefs: deliver structured summaries to admin staff for therapist matching"
        ],
        notIncluded: "What it explicitly does NOT include: Therapy or counseling conversation. Clinical assessment or treatment recommendation. Therapist-patient matching based on clinical factors. Crisis counseling (OperatorHQ routes, humans respond). All clinical actions remain therapist-led."
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
            label: "Therapy Admin Logic",
            description: "HQ Pro applies therapy practice-specific administrative rules: availability-based routing (match patient windows to therapist openings), insurance routing (in-network vs self-pay paths), and session type routing (individual vs couples vs family administrative categorization).",
            additionalText: "No clinical matching or therapeutic interpretation — administrative fit only.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Practice Access",
            description: "The Core Stack shares memory and context:",
            hqBadges: ["Voice HQ", "Comms HQ", "Ops HQ", "Data HQ", "Access HQ"],
            additionalText: "Identifies scheduling bottlenecks. Detects no-show patterns. Flags therapist capacity concerns."
        },
        {
            tier: "Custom Operator",
            label: "Multi-Therapist Practice Layer",
            description: "Custom Operator is designed for group practices, counseling centers, or multi-location therapy organizations.",
            additionalText: "Policy RAG (practice intake rules). Multi-therapist siloing. Audit-ready intake logs. Cross-location routing."
        }
    ],
    bridgeLine: "Every tier reduces access friction — higher tiers add availability matching, insurance routing, and ultimately unified practice access operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero silent inquiries — every patient acknowledged 24/7",
            "Reduced no-shows — prepared, confirmed patients arrive ready",
            "Faster matching — availability-based routing without clinical interpretation",
            "Front desk relief — insurance and intake prep handled before human engagement",
            "Therapist focus — clinical time protected from administrative burden"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts practices from intake overwhelm to therapist-ready operations."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): OperatorHQ supports administrative operations only. This system does NOT provide therapy, counseling, clinical assessment, or treatment recommendations. All clinical actions remain therapist-led. Crisis response is always human-led.",
    accordionIntro: "The following examples illustrate what therapy practices can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are administrative only.",
    accordionIntroSubject: "therapy practices",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Access Acknowledgment + New-Client Intake Capture",
            description: "At the Foundation level, Operator provides 24/7 acknowledgment and baseline intake capture for new therapy inquiries.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Acknowledgment",
                    bullets: [
                        "Every new patient inquiry acknowledged immediately with warm, professional tone"
                    ]
                },
                {
                    title: "New-Client Intake Screening (Non-Clinical)",
                    bullets: [
                        "New patient vs returning patient status",
                        "Insurance type or self-pay indication",
                        "Session format preference: individual, couples, family",
                        "Availability windows (non-clinical categorization)"
                    ]
                },
                {
                    title: "Structured Intake Brief",
                    bullets: [
                        "Converts inquiries into admin-ready summaries for staff review"
                    ]
                },
                {
                    title: "Office Transparency",
                    bullets: [
                        "Provides hours, locations, and general availability information"
                    ]
                }
            ],
            footer: "Does NOT include: clinical screening, therapeutic fit assessment, or scheduling decisions."
        },
        {
            tier: "HQ Pro",
            label: "Therapist Availability Routing Logic",
            description: "HQ Pro applies therapy practice-specific administrative rules while maintaining strict clinical boundaries.",
            highlighted: true,
            subsections: [
                {
                    title: "Therapist Availability Routing",
                    bullets: [
                        "Routes only to admin queues associated with therapists accepting new patients (no clinical matching)"
                    ]
                },
                {
                    title: "Insurance Path Routing",
                    bullets: [
                        "In-network vs out-of-network vs self-pay routed to appropriate billing flow"
                    ]
                },
                {
                    title: "Session Type Routing",
                    bullets: [
                        "Individual vs couples vs family flagged for appropriate scheduling queues (non-clinical)"
                    ]
                },
                {
                    title: "Crisis Keyword Detection (Handoff Only)",
                    bullets: [
                        "Detects predefined high-risk keywords and immediately hands off to humans"
                    ]
                }
            ],
            footer: "Does NOT include: therapeutic fit assessment, clinical matching, or crisis management."
        },
        {
            tier: "Operator HQ",
            label: "Unified Practice Access Intelligence",
            description: "Operator HQ provides unified access intelligence across the therapy practice.",
            subsections: [
                {
                    title: "Scheduling Bottleneck Detection",
                    bullets: [
                        "Identifies where patients stall in the booking process"
                    ]
                },
                {
                    title: "No-Show Pattern Detection",
                    bullets: [
                        "Identifies high no-show risk factors (administrative) and flags for enhanced outreach"
                    ]
                },
                {
                    title: "Cross-Therapist Capacity Visibility",
                    bullets: [
                        "Leadership visibility into availability across all therapists"
                    ]
                },
                {
                    title: "Duplicate Inquiry Resolution",
                    bullets: [
                        "Recognizes repeat contacts and consolidates into single administrative record"
                    ]
                }
            ],
            footer: "Does NOT include: therapist performance scoring, clinical matching, or automated scheduling."
        },
        {
            tier: "Custom Operator",
            label: "Multi-Therapist Practice Governance",
            description: "Custom Operator enables enterprise governance for group practices or counseling centers.",
            subsections: [
                {
                    title: "Practice Policy RAG",
                    bullets: [
                        "Private retrieval over practice-specific intake rules and insurance policies"
                    ]
                },
                {
                    title: "Multi-Therapist Data Siloing",
                    bullets: [
                        "Enforces strict separation between therapist caseload data"
                    ]
                },
                {
                    title: "Cross-Location Routing",
                    bullets: [
                        "Routes inquiries appropriately for multi-location practices"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Maintains timestamped, encrypted records of all intake interactions"
                    ]
                }
            ],
            footer: "Does NOT include: clinical documentation, treatment planning, or automated determinations."
        }
    ],
    accordionDisclaimer: "All examples describe administrative capabilities only. All tiers exclude therapy, counseling, clinical assessment, and treatment recommendations. OperatorHQ acts as a Private Access Layer, not a provider of care. Each tier increases scheduling efficiency and patient access while never crossing into clinical responsibility."
};
