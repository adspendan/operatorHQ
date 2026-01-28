import { UseCase } from "../types";

export const mentalhealthPsychiatryUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "mentalhealth-psychiatry",
    label: "Mental Health Overlay — Psychiatry (Admin Only)",
    headline: "From Referral Chaos to Underwrite-Ready Intake",
    magicMoment: "The moment a psychiatry referral is validated, insurance authorization confirmed, and waitlist position communicated — before the psychiatrist ever reviews the case. This is the Underwrite-Ready Intake.",
    problem: "Psychiatric practices don't struggle because of clinical expertise — they struggle in the Administrative Authorization Gap. Referrals arrive incomplete, insurance authorizations are unclear, and waitlists balloon while staff chase documentation. Psychiatrists are shielded but underutilized because intake isn't ready. Without a system to capture Authorization DNA at the point of entry, practices scale administrative burden instead of patient access.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Psychiatry Practices Start",
        description: "Psychiatry practices begin with the Foundation Package, installing OperatorHQ as a Private Authorization Front Door that runs fully on-premise — ensuring referral data, insurance information, and patient intent never leave the practice's physical control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Voice HQ for inbound calls 24/7, or Chat / Intake HQ for web-based access)"
        ],
        capabilities: [
            "Acknowledge 100% of referral and patient inquiries 24/7",
            "Capture Psychiatry Admin DNA: referral source and documentation, insurance type and authorization status, medication management vs evaluation intent (non-clinical), preferred timing and urgency indicators",
            "Route Authorization-Ready Briefs: deliver structured summaries to admin staff before psychiatrist review"
        ],
        notIncluded: "What it explicitly does NOT include: Psychiatric evaluation or diagnosis. Medication prescribing or guidance. Clinical assessment or treatment planning. Crisis intervention (OperatorHQ routes, humans respond). All clinical actions remain psychiatrist-led."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Psychiatry Admin Logic",
            description: "HQ Pro applies psychiatry-specific administrative rules: referral enforcement (won't escalate without complete referral), authorization gating (insurance status confirmed before scheduling), and appointment type routing (evaluation vs medication management).",
            additionalText: "Administrative crisis indicators trigger immediate human handoff. OperatorHQ never handles clinical urgency.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Psychiatry Access",
            description: "The Core Stack shares memory and context:",
            hqBadges: ["Voice HQ", "Comms HQ", "Ops HQ", "Data HQ", "Access HQ"],
            additionalText: "Identifies referral source patterns. Detects authorization bottlenecks. Flags waitlist capacity concerns."
        },
        {
            tier: "Custom Operator",
            label: "Enterprise Psychiatry Layer",
            description: "Custom Operator is designed for hospital psychiatry departments, multi-provider practices, or health system integrations.",
            additionalText: "Policy RAG (authorization rules). Multi-provider siloing. Audit-ready intake logs. Inter-system referral handoffs."
        }
    ],
    bridgeLine: "Every tier reduces authorization friction — higher tiers add referral enforcement, insurance gating, and ultimately unified psychiatry access operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero silent referrals — every inquiry acknowledged 24/7",
            "Reduced authorization chasing — documentation validated before psychiatrist review",
            "Higher show rates — fully prepared patients reach appointments",
            "Cleaner waitlists — only authorized, complete cases advance",
            "Psychiatrist focus — clinical time protected from administrative burden"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts practices from referral chaos to underwrite-ready operations."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): OperatorHQ supports administrative operations only. This system does NOT provide psychiatric evaluation, diagnosis, medication guidance, or clinical decision-making. All clinical actions remain psychiatrist-led. Crisis response is always human-led.",
    accordionIntro: "The following examples illustrate what psychiatry practices can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are administrative only.",
    accordionIntroSubject: "psychiatry practices",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Access Acknowledgment + Referral Capture",
            description: "At the Foundation level, Operator provides 24/7 referral acknowledgment and baseline authorization intake.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Referral Acknowledgment",
                    bullets: [
                        "Every referral and patient inquiry acknowledged immediately with calm, professional tone"
                    ]
                },
                {
                    title: "Psychiatry Admin DNA Capture",
                    bullets: [
                        "Referral source and documentation status",
                        "Insurance type and authorization indicators",
                        "Appointment type intent: evaluation vs medication management (non-clinical categorization)"
                    ]
                },
                {
                    title: "Structured Authorization Brief",
                    bullets: [
                        "Converts referrals into admin-ready summaries for staff review"
                    ]
                },
                {
                    title: "Waitlist Expectation Setting",
                    bullets: [
                        "Provides general timeline expectations for long waitlists"
                    ]
                }
            ],
            footer: "Does NOT include: eligibility decisions, clinical triage, or scheduling. Referral validation is informational only."
        },
        {
            tier: "HQ Pro",
            label: "Psychiatry Authorization Logic",
            description: "HQ Pro applies psychiatry-specific authorization rules while maintaining strict clinical boundaries.",
            highlighted: true,
            subsections: [
                {
                    title: "Referral Requirement Enforcement",
                    bullets: [
                        "Prevents escalation until required referral documentation is submitted"
                    ]
                },
                {
                    title: "Authorization Gating",
                    bullets: [
                        "Insurance status confirmed before scheduling slots are offered"
                    ]
                },
                {
                    title: "Admin Routing for Refills and Follow-ups",
                    bullets: [
                        "Routes medication refill scheduling requests to appropriate admin queue (non-clinical)"
                    ]
                },
                {
                    title: "Crisis Keyword Detection (Handoff Only)",
                    bullets: [
                        "Detects predefined high-risk keywords and immediately hands off to humans"
                    ]
                }
            ],
            footer: "Does NOT include: medication guidance, risk assessment, clinical triage, or crisis management."
        },
        {
            tier: "Operator HQ",
            label: "Unified Psychiatry Access Intelligence",
            description: "Operator HQ provides unified access intelligence across the psychiatry practice.",
            subsections: [
                {
                    title: "Referral Source Pattern Detection",
                    bullets: [
                        "Identifies high-volume referral sources and referral quality patterns"
                    ]
                },
                {
                    title: "Authorization Bottleneck Detection",
                    bullets: [
                        "Surfaces where authorizations stall in the intake process"
                    ]
                },
                {
                    title: "Cross-Provider Memory",
                    bullets: [
                        "Previously captured admin data available across all provider schedules"
                    ]
                },
                {
                    title: "Waitlist Capacity Visibility",
                    bullets: [
                        "Leadership visibility into long waitlist capacity constraints"
                    ]
                }
            ],
            footer: "Does NOT include: clinical matching, provider performance scoring, or automated scheduling."
        },
        {
            tier: "Custom Operator",
            label: "Enterprise Psychiatry Governance",
            description: "Custom Operator enables enterprise governance for hospital psychiatry departments or health system integrations.",
            subsections: [
                {
                    title: "Authorization Policy RAG",
                    bullets: [
                        "Private retrieval over practice-specific authorization rules and payer requirements"
                    ]
                },
                {
                    title: "Multi-Provider Data Siloing",
                    bullets: [
                        "Enforces strict separation between provider caseload data"
                    ]
                },
                {
                    title: "Inter-System Referral Handoff",
                    bullets: [
                        "Creates structured handoffs to external facilities or health system partners"
                    ]
                },
                {
                    title: "Audit-Ready Authorization Logs",
                    bullets: [
                        "Maintains timestamped, encrypted records of all authorization interactions"
                    ]
                }
            ],
            footer: "Does NOT include: clinical documentation, treatment planning, or automated determinations."
        }
    ],
    accordionDisclaimer: "All examples describe administrative capabilities only. All tiers exclude psychiatric evaluation, diagnosis, medication guidance, and clinical decision-making. OperatorHQ acts as a Private Authorization Layer, not a provider of care. Each tier increases authorization certainty while never crossing into clinical responsibility."
};
