import { UseCase } from "../types";

export const seniorcareUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "seniorcare",
    label: "Senior Care / Assisted Living (Admin Only)",
    headline: "From Inquiry Overload to Coordinated Resident Access",
    magicMoment: "The moment a worried family inquiry becomes a structured administrative brief — care level interest, timeline, payer type, decision-maker, documents needed — before a human ever returns the call. This is the Placement-Ready Intake.",
    problem: "Senior care organizations don't lose families because of care quality — they lose them in the 'Decision Friction Window.' Families reach out during emotionally charged moments: a fall, cognitive decline, hospital discharge, or caregiver burnout. These inquiries often arrive after hours or during peak intake periods, when staff are already overwhelmed. Administrators become 'Human Routers': re-answering the same questions about levels of care, chasing missing documents (insurance, POA, physician notes), coordinating between residents, adult children, hospitals, and referral partners. Without a system to capture Care Access DNA at first contact, organizations scale missed opportunities, staff burnout, and family frustration — instead of occupancy and continuity.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Senior Care Organizations Start",
        description: "Most senior care organizations begin with the Foundation Package, installing OperatorHQ as a Private Intake & Access Layer that runs on-premise — ensuring resident and family data stays under facility control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Voice HQ for inbound family and referral calls, or Chat / Intake HQ embedded on community and placement pages)"
        ],
        capabilities: [
            "Acknowledge 100% of inquiries 24/7 — capture late-night family calls and weekend placement searches with immediate confirmation",
            "Capture Care Access DNA: inquiry source (family, hospital, social worker, resident), care type interest (Independent / Assisted / Memory Care / Skilled Nursing), time horizon (Immediate / 30–60 days / Researching), payer type (Private pay / LTC insurance / Medicaid inquiry)",
            "Route Placement-Ready Summaries: deliver clean administrative briefs to admissions staff instead of raw voicemails"
        ],
        notIncluded: "What it explicitly does NOT include: Medical assessments or care recommendations. Clinical eligibility determinations. Medication, diagnosis, or treatment guidance. Emergency response beyond human handoff. All clinical decisions remain human-led."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Senior Care–Aware Logic",
            description: "HQ Pro protects admissions and care staff time: care-level routing logic (Memory Care inquiries routed separately from Independent Living or Skilled Nursing), decision-maker identification (flags who holds POA or financial authority), urgency flagging (hospital discharge, caregiver unavailable, temporary placement needed), and payer-type branching (private-pay vs Medicaid routing).",
            additionalText: "Administrative routing, not clinical matching. OperatorHQ routes, humans decide.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Community Access Brain",
            description: "The Core Stack shares memory and context:",
            hqBadges: ["Voice HQ", "Comms HQ", "Ops HQ", "Data HQ", "Access HQ"],
            additionalText: "Household memory (adult child chat + phone call linked). Drop-off detection (where families disengage). Occupancy intelligence (admin-level inquiry volume correlation). Cross-channel continuity."
        },
        {
            tier: "Custom Operator",
            label: "The 'Care Network' Layer",
            description: "Custom Operator is designed for multi-facility organizations, regional care networks, or enterprise senior living operators requiring maximum governance and separation.",
            additionalText: "Multi-community siloing. Policy & SOP RAG (administrative). Hospital & partner intake portals. Audit-ready logs."
        }
    ],
    bridgeLine: "Every tier increases family clarity and staff capacity — higher tiers add care-level routing, household memory, and ultimately unified community access operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Inquiry response time from hours/days → under 60 seconds",
            "10–20 hours/week reclaimed from admin chasing for admissions staff",
            "Improved tour show rates via readiness and expectation setting",
            "100% on-premise data, zero cloud exposure for sensitive family information",
            "Calm, structured, repeat-free intake experience for families",
            "Protected staff capacity — admissions focus on placement, not routing"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts organizations from inquiry overload to coordinated resident access."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): OperatorHQ supports administrative intake, routing, and coordination only. It improves speed, clarity, and staff capacity. It NEVER replaces clinical judgment. It NEVER provides medical or care advice. It NEVER automates placement or eligibility decisions. All clinical and care decisions remain human-led.",
    accordionIntro: "The following examples illustrate what senior care organizations can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are administrative only.",
    accordionIntroSubject: "senior care organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "24/7 Acknowledgment + Baseline Administrative Triage",
            description: "At the Foundation level, Operator provides receipt certainty and baseline care access capture.",
            exampleCapabilitiesLabel: "Example potential capabilities (additive):",
            subsections: [
                {
                    title: "Receipt Certainty (24/7)",
                    bullets: [
                        "Can acknowledge inquiries after-hours with calm, pre-approved tone",
                        "Can capture callback preference for admissions follow-up"
                    ]
                },
                {
                    title: "Care Access DNA Capture",
                    bullets: [
                        "Can capture inquiry source: adult child, spouse, self, hospital/social worker, attorney/POA",
                        "Can capture care interest: Independent / Assisted / Memory Care / Skilled Nursing inquiry",
                        "Can capture general timing: urgent / soon / future planning",
                        "Can capture contact + location basics (city, preferred community)"
                    ]
                },
                {
                    title: "Placement-Ready Brief Routing",
                    bullets: [
                        "Can convert voicemail or chat into short administrative brief for admissions staff",
                        "What they want, by when, who decides"
                    ]
                },
                {
                    title: "Baseline Boundaries & Safe Language",
                    bullets: [
                        "Can consistently communicate that clinical questions are routed to staff",
                        "Can provide pre-approved 'next steps' without offering care guidance"
                    ]
                }
            ],
            footer: "Not included at this tier: clinical screening, medical advice, eligibility determinations, payments, or automated placement decisions."
        },
        {
            tier: "HQ Pro",
            label: "Smart Routing + Decision-Maker Mapping + Payer-Path Logic",
            description: "HQ Pro applies senior care–aware administrative logic while maintaining strict clinical boundaries.",
            highlighted: true,
            subsections: [
                {
                    title: "Decision-Maker Mapping",
                    bullets: [
                        "Can capture whether caller is decision-maker, influencer, or acting POA",
                        "Can route accordingly for correct follow-up"
                    ]
                },
                {
                    title: "Payer-Path Branching (Administrative)",
                    bullets: [
                        "Can route based on payer intent: private pay, long-term care insurance, Medicaid inquiry",
                        "Routes to right financial/admin coordinator"
                    ]
                },
                {
                    title: "Level-of-Care Branching (Non-Clinical)",
                    bullets: [
                        "Can separate Memory Care inquiries from Assisted Living inquiries",
                        "Correct team handles process and expectations"
                    ]
                },
                {
                    title: "Hospital-to-Home Intake Lane",
                    bullets: [
                        "Can collect discharge timeline, partner contact, documentation requirements",
                        "Helps staff act quickly without making placement claims"
                    ]
                },
                {
                    title: "Required-Field Enforcement (Admin)",
                    bullets: [
                        "Can hold intake from escalation until minimum admin fields captured: contact, timeline, care interest, decision-maker"
                    ]
                }
            ],
            footer: "Not included at this tier: clinical matching, care assessments, eligibility determinations, or medical guidance."
        },
        {
            tier: "Operator HQ",
            label: "Unified Community Access Brain + Cross-Channel Memory + System Intelligence",
            description: "Operator HQ provides unified memory across channels and operational intelligence signals.",
            subsections: [
                {
                    title: "Household Memory / Shared Intake Thread",
                    bullets: [
                        "Can recognize when multiple family members reach out about same prospective resident",
                        "Can keep one cohesive intake event"
                    ]
                },
                {
                    title: "Cross-Channel Continuity",
                    bullets: [
                        "Can preserve context between Voice, Chat, and Form submissions",
                        "Families don't repeat basic info"
                    ]
                },
                {
                    title: "Friction Analysis Signals",
                    bullets: [
                        "Can surface patterns like 'drop-off often happens after step X' (after tour scheduling, after document request)"
                    ]
                },
                {
                    title: "Occupancy Demand Signals (Admin-Level)",
                    bullets: [
                        "Can detect spikes in certain inquiry types (e.g., Memory Care urgency)",
                        "Can prompt staff to manage waitlists or staffing coverage"
                    ]
                },
                {
                    title: "Internal Handoff Clarity",
                    bullets: [
                        "Can standardize internal notes so admissions, finance, and admin teams see same summarized intake context"
                    ]
                }
            ],
            footer: "Not included at this tier: care outcome tracking, clinical metrics, automated placement decisions, or predictive care modeling."
        },
        {
            tier: "Custom Operator",
            label: "Multi-Facility Command + Partner Portals + Private Policy Retrieval",
            description: "Custom Operator enables multi-facility governance for regional care networks or enterprise senior living operators.",
            subsections: [
                {
                    title: "Multi-Community Siloing",
                    bullets: [
                        "Can partition intake data across facilities and care types (Independent vs Memory Care)",
                        "Role-based access practices"
                    ]
                },
                {
                    title: "Discharge Planner Portal (Partner Intake)",
                    bullets: [
                        "Can provide private portal for hospital partners to submit structured placement requests",
                        "Timeline, contact, documents"
                    ]
                },
                {
                    title: "Policy & SOP Retrieval (Administrative 'Oracle')",
                    bullets: [
                        "Can answer staff questions using internal policies (respite process, touring rules, required forms)",
                        "With citations — based on what's loaded locally"
                    ]
                },
                {
                    title: "Audit-Ready Logs (Admin Interactions)",
                    bullets: [
                        "Can maintain timestamped records of intake, routing, follow-ups, and document requests",
                        "Supports compliance workflows"
                    ]
                },
                {
                    title: "Custom Routing & Governance",
                    bullets: [
                        "Can implement organization-specific escalation and routing rules aligned to leadership-approved procedures"
                    ]
                }
            ],
            footer: "Not included at this tier: clinical documentation, care planning, automated placement authority, or medical decision-making."
        }
    ],
    accordionDisclaimer: "All examples are additive, non-promissory, and explicitly tier-scoped. OperatorHQ supports administrative intake, eligibility screening (non-clinical), scheduling coordination, document readiness, and routing. It does NOT provide medical advice, diagnosis, treatment recommendations, medication guidance, or clinical determinations. Emergency/crisis handling is handoff-only to approved human channels and existing protocols. Resident and family data remains on-premise under facility control."
};
