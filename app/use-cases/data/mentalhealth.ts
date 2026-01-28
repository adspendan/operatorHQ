import { UseCase } from "../types";

export const mentalhealthUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "mentalhealth",
    label: "Mental Health Organizations (Admin Only)",
    headline: "From Intake Overload to Structured Access & Care Routing",
    magicMoment: "The moment a distressed individual is acknowledged immediately, guided calmly, screened for administrative fit, and routed correctly — without being asked to explain their situation repeatedly. This is the Access-Ready Intake. Certainty replaces silence.",
    problem: "Mental health organizations do not struggle because of clinical quality — they struggle in the Access & Administrative Friction Layer. Patients reach out during moments of vulnerability, uncertainty, or crisis — often after hours. When calls go unanswered or inboxes overflow, trust erodes instantly. Front desks become overwhelmed by repetitive intake questions: 'Do you take my insurance?' 'Do I need a referral?' 'How long is the wait?' 'Is this urgent enough?' Administrative teams spend 60–70% of their time acting as Human Switchboards, chasing incomplete forms, clarifying eligibility, and redirecting misrouted inquiries — while clinicians remain shielded but underutilized. Without a system to capture Intent, Eligibility, and Urgency at the point of entry, organizations scale waitlists and burnout instead of access to care.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Mental Health Organizations Start",
        description: "Mental health organizations begin with the Foundation Package, installing OperatorHQ as a Private Administrative Front Door that runs fully on-premise — ensuring sensitive intent and personal information never leaves the organization's physical control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Voice HQ for inbound calls 24/7, or Chat / Intake HQ for web-based access)"
        ],
        capabilities: [
            "Acknowledge 100% of inquiries 24/7 — nights, weekends, holidays — no silence during vulnerable moments",
            "Capture Administrative Intake DNA: new vs returning, insurance type / self-pay, referral requirement, general reason category (non-clinical), preferred timing / urgency flag",
            "Route Intake-Ready Briefs: deliver structured summaries to admin staff — no raw voicemails, no repeated questioning"
        ],
        notIncluded: "What it explicitly does NOT include: Therapy, counseling, or clinical conversation. Psychiatric evaluation or diagnosis. Medication guidance. Risk assessment beyond handoff-only routing. Crisis counseling (OperatorHQ routes, humans respond). All clinical actions remain human-led."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Mental Health Admin Logic",
            description: "HQ Pro applies admin-aware (non-clinical) routing: urgency-aware escalation (administrative crisis indicators trigger immediate human handoff), program fit filtering (psychiatry vs therapy vs community services), and referral enforcement (won't escalate unless required documentation exists).",
            additionalText: "Clinicians only see qualified, ready, appropriate cases. OperatorHQ never handles crisis — only routes it.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Access Brain",
            description: "The Core Stack shares memory and context:",
            hqBadges: ["Voice HQ", "Comms HQ", "Ops HQ", "Data HQ", "Access HQ"],
            additionalText: "Identifies recurring access bottlenecks. Detects spikes in crisis-related inquiries. Flags breakdowns in intake flow. OperatorHQ becomes the nervous system, not the provider."
        },
        {
            tier: "Custom Operator",
            label: "Enterprise / High-Trust Layer",
            description: "Custom Operator is designed for hospital systems, nonprofits, or multi-location clinics requiring maximum privacy, policy enforcement, and inter-organizational handoffs.",
            additionalText: "Policy RAG (internal intake rules). Multi-program siloing (psychiatry, therapy, outreach fully separated). Audit-ready logs. Inter-org handoff capabilities."
        }
    ],
    bridgeLine: "Every tier reduces access friction — higher tiers add admin-aware routing, eligibility enforcement, and ultimately unified care access operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero silent intakes — every inquiry acknowledged with calm, compliant tone",
            "Reduced front desk burnout — administrative teams freed from repetitive eligibility questions",
            "Higher show rates — intake preparedness reduces no-shows",
            "Cleaner waitlists — qualified, ready patients move forward",
            "Improved trust at first contact — certainty replaces silence",
            "HIPAA-First, Ethics-First posture — sensitive data never leaves on-premise hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts organizations from intake overload to structured access operations."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): OperatorHQ supports administrative operations only. This system does NOT provide therapy, diagnosis, treatment, medical advice, or clinical decision-making. All clinical actions remain human-led. OperatorHQ supports access to care — it does not deliver care. This is the line that makes the system scalable, ethical, and defensible.",
    accordionIntro: "The following examples illustrate what mental health organizations can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are administrative only.",
    accordionIntroSubject: "mental health organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Access Acknowledgment + Baseline Administrative Intake",
            description: "At the Foundation level, Operator provides 24/7 access acknowledgment and baseline administrative intake capture.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Intake Acknowledgment",
                    bullets: [
                        "Every inbound call or message is acknowledged immediately with a calm, pre-approved administrative tone"
                    ]
                },
                {
                    title: "Administrative Intake Capture",
                    bullets: [
                        "Captures non-clinical intake fields: new vs returning, insurance vs self-pay",
                        "General service category (therapy / psychiatry / community)",
                        "Preferred contact method"
                    ]
                },
                {
                    title: "Office & Process Transparency",
                    bullets: [
                        "Provides accurate information on hours, locations, telehealth availability",
                        "General waitlist expectations"
                    ]
                },
                {
                    title: "Structured Intake Brief",
                    bullets: [
                        "Converts unstructured voicemails or messages into a concise admin-ready summary for intake staff"
                    ]
                },
                {
                    title: "Channel Consistency",
                    bullets: [
                        "Ensures callers and web inquiries receive the same administrative information regardless of channel"
                    ]
                }
            ],
            footer: "Does NOT include: eligibility decisions, scheduling, urgency assessment beyond self-reported intent, or crisis handling."
        },
        {
            tier: "HQ Pro",
            label: "Eligibility Enforcement + Urgency-Aware Routing",
            description: "HQ Pro applies eligibility enforcement and urgency-aware routing (handoff only) while maintaining strict clinical boundaries.",
            highlighted: true,
            subsections: [
                {
                    title: "Program-Fit Branching",
                    bullets: [
                        "Routes inquiries to the correct administrative queue (psychiatry, therapy, nonprofit services) based on declared intent"
                    ]
                },
                {
                    title: "Referral Requirement Enforcement",
                    bullets: [
                        "Prevents escalation until required referral documentation is submitted (if applicable)"
                    ]
                },
                {
                    title: "Provider Availability Awareness",
                    bullets: [
                        "Routes only to admin queues associated with clinicians accepting new patients (no clinical matching)"
                    ]
                },
                {
                    title: "Crisis Keyword Detection (Handoff Only)",
                    bullets: [
                        "Detects predefined high-risk keywords and immediately hands off to approved human or external crisis resources"
                    ]
                },
                {
                    title: "Priority Flagging",
                    bullets: [
                        "Flags time-sensitive administrative cases (court-ordered evals, medication refill scheduling requests) for staff review"
                    ]
                }
            ],
            footer: "Does NOT include: risk assessment, counseling, de-escalation, or crisis management."
        },
        {
            tier: "Operator HQ",
            label: "Unified Access Intelligence + System-Level Visibility",
            description: "Operator HQ provides unified access intelligence and system-level visibility across all channels.",
            subsections: [
                {
                    title: "Cross-Channel Memory",
                    bullets: [
                        "Remembers previously captured admin data across voice, chat, and form interactions"
                    ]
                },
                {
                    title: "Intake Funnel Analysis",
                    bullets: [
                        "Identifies where prospective patients disengage during intake (forms, insurance disclosure, waitlist)"
                    ]
                },
                {
                    title: "Volume & Timing Insights",
                    bullets: [
                        "Detects inquiry surges by time/day to inform staffing decisions"
                    ]
                },
                {
                    title: "Duplicate Inquiry Resolution",
                    bullets: [
                        "Recognizes repeat contacts and consolidates them into a single administrative record"
                    ]
                },
                {
                    title: "Access Bottleneck Detection",
                    bullets: [
                        "Surfaces systemic issues (e.g., long waitlists tied to one program)"
                    ]
                }
            ],
            footer: "Does NOT include: performance scoring of clinicians or automated operational decisions."
        },
        {
            tier: "Custom Operator",
            label: "Enterprise Governance + Multi-Program Coordination",
            description: "Custom Operator enables enterprise governance and multi-program coordination for hospital systems, nonprofits, or multi-location clinics.",
            subsections: [
                {
                    title: "Policy & SOP RAG",
                    bullets: [
                        "Private retrieval over internal admin policies, eligibility rules, and escalation protocols"
                    ]
                },
                {
                    title: "Multi-Program Data Siloing",
                    bullets: [
                        "Enforces strict separation between psychiatry, therapy, and nonprofit program data"
                    ]
                },
                {
                    title: "Inter-Organization Admin Handoff",
                    bullets: [
                        "Creates structured, consent-aware handoffs to external facilities or agencies"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Maintains timestamped, encrypted records of all administrative interactions"
                    ]
                },
                {
                    title: "Custom Escalation Playbooks",
                    bullets: [
                        "Implements organization-specific administrative escalation rules (non-clinical)"
                    ]
                }
            ],
            footer: "Does NOT include: automated determinations, clinical documentation, or decision authority."
        }
    ],
    accordionDisclaimer: "All examples describe administrative capabilities only. All tiers exclude therapy, diagnosis, clinical judgment, and treatment. Capabilities are cumulative and expand in scope as the system matures. OperatorHQ acts as a Private Access Layer, not a provider of care. Each tier increases administrative certainty, staff efficiency, patient trust, and compliance defensibility — while never crossing into clinical responsibility. This boundary is the moat."
};
