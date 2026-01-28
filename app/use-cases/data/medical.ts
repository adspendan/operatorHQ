import { UseCase } from "../types";

export const medicalUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "medical",
    label: "Medical (Primary Care, Specialty Clinics)",
    headline: "From Appointment Backlogs to Structured Patient Flow",
    magicMoment: "The moment a patient call is captured, qualified, and routed to the right staff member with a structured intake brief — before the front desk picks up the phone.",
    problem: "Primary care and specialty medical clinics do not lose patients because of poor care — they lose them in the Access & Intake Gap. Patients call when they are sick, anxious, or managing chronic conditions. Phones go unanswered during clinic hours, staff are overwhelmed by repetitive eligibility questions, and appointment requests stack up without clear prioritization. Front desks spend hours acting as human routers instead of supporting care delivery. Without a system to capture patient intent, verify fit, and structure follow-up, clinics experience: lost new patient opportunities, higher no-show rates, burned-out administrative staff, and fragmented patient experiences before the first visit even occurs.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Clinics Start",
        description: "Most primary care and specialty clinics begin with the Foundation Package, which installs the private infrastructure required to run Operator locally — ensuring sensitive patient communications remain on clinic-controlled hardware.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer inbound calls during lunch, after-hours, or high-volume periods",
            "Capture Patient Intent DNA: new patient vs existing, general reason for visit, preferred appointment window",
            "Route structured intake summaries to front desk or care coordination staff"
        ],
        notIncluded: "Medical advice, triage, or diagnostic guidance. Prescription or treatment recommendations. EHR integration or live scheduling unless explicitly configured. The Foundation Package stops missed patient opportunities — it does not provide clinical decision support."
    },
    deploymentSwarm: {
        architecture: [
            {
                name: "Front Desk Agent",
                role: "Voice HQ",
                capabilities: ["24/7 Phone Answering", "Empathy & Tone Matching", "Context Routing"]
            },
            {
                name: "Triage Nurse Agent",
                role: "Decision HQ",
                capabilities: ["Symptom Urgency Scoring", "Insurance Verification", "Pre-Visit Intake"]
            },
            {
                name: "Scheduling Agent",
                role: "Ops HQ",
                capabilities: ["Calendar Negotiation", "Waitlist Filling", "No-Show Recovery"]
            },
            {
                name: "Patient Prep Agent",
                role: "Knowledge HQ",
                capabilities: ["Pre-Op Instructions", "Dietary Restrictions", "SOP Enforcement"]
            }
        ],
        flow: {
            trigger: "Patient calls with acute symptoms at 2:00 AM",
            steps: [
                { agent: "Front Desk Agent", action: "Answers immediately, detects anxiety, and routes to Triage." },
                { agent: "Triage Nurse Agent", action: "Scores urgency (Red Flag), checks database for chronic conditions." },
                { agent: "Scheduling Agent", action: "identifies first open 'Acute' slot at 8:00 AM and books it." },
                { agent: "Patient Prep Agent", action: "Texts fasting instructions to patient for morning labs." }
            ]
        }
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Medical-Specific",
            description: "HQ Pro for Medical applies templated, medical-aware logic: new patient vs follow-up vs referral-based visits follow different intake paths. Specialty clinics capture required pre-visit context (referral present, prior imaging exists).",
            additionalText: "HQ Pro reflects how medical clinics actually operate, while remaining standardized and non-advisory.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents Full Clinic Synchronization. The Core Stack shares context. For clinics, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Unified patient memory, no-show recovery, and demand-to-intake alignment are coordinated automatically."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is designed for multi-location clinics, specialty practices with complex referral workflows, or clinics with specific compliance requirements.",
            additionalText: "This includes referral tracking, private knowledge layers over approved SOPs, and multi-location intake logic. This is not a template — it is built around how that clinic actually operates."
        }
    ],
    bridgeLine: "Every tier reduces the Access & Intake Gap — higher tiers add visit-type awareness, coordination, and ultimately full-clinic control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Fewer missed patient calls during peak hours",
            "Reduced front-desk administrative burden",
            "Higher appointment request capture rate",
            "Cleaner patient intake before the first visit",
            "Improved no-show recovery and waitlist utilization"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide medical advice, triage, diagnosis, or treatment recommendations. Capabilities depend on deployment, configuration, and existing systems. This is administrative intake support only.",
    accordionIntro: "The following examples illustrate what medical clinics can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "medical clinics",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Access & Intake Coverage",
            description: "At the Foundation level, Operator focuses on availability, consistency, and structured administrative intake.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Peak-Hours & After-Hours Coverage",
                    bullets: [
                        "Inbound calls answered during lunch, after-hours, or high-volume clinic periods",
                        "No more missed patient opportunities when front desk is overwhelmed"
                    ]
                },
                {
                    title: "Basic Patient Inquiries",
                    bullets: [
                        "Website or SMS chat handles basic questions (hours, location, accepted visit types)",
                        "Consistent responses without consuming staff time"
                    ]
                },
                {
                    title: "Patient Intent Capture",
                    bullets: [
                        "Intent captured (new vs returning, general reason for visit)",
                        "Structured intake summaries routed to front desk staff for follow-up"
                    ]
                },
                {
                    title: "Owner-Controlled Environment",
                    bullets: [
                        "All patient communications stored locally on clinic hardware",
                        "No third-party cloud dependencies for sensitive intake data"
                    ]
                }
            ],
            footer: "Does not include medical advice, triage, diagnosis, or visit prioritization."
        },
        {
            tier: "HQ Pro",
            label: "Visit-Type & Specialty-Aware Logic",
            description: "HQ Pro applies templated, medical-aware intelligence aligned to how primary care and specialty clinics operate.",
            highlighted: true,
            subsections: [
                {
                    title: "Visit-Type Branching",
                    bullets: [
                        "New patient, follow-up, and referral-based visits follow different intake paths",
                        "Prevents inappropriate or incomplete appointment requests"
                    ]
                },
                {
                    title: "Specialty Intake Guardrails",
                    bullets: [
                        "Specialty clinics capture required pre-visit context (e.g., referral present, prior imaging available)",
                        "Non-qualified requests are flagged before staff time is spent"
                    ]
                },
                {
                    title: "Urgency Context (Non-Diagnostic)",
                    bullets: [
                        "Patients self-identify urgency using structured language",
                        "Staff can prioritize callbacks without Operator making medical decisions"
                    ]
                }
            ],
            footer: "HQ Pro reflects real clinic workflows while remaining standardized and non-advisory."
        },
        {
            tier: "Operator HQ",
            label: "Full Clinic Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single coordinated system.",
            subsections: [
                {
                    title: "Unified Patient Memory",
                    bullets: [
                        "Operator remembers prior calls, messages, and appointment attempts",
                        "Reduces repeated questioning across touchpoints"
                    ]
                },
                {
                    title: "Waitlist & Cancellation Recovery",
                    bullets: [
                        "Same-day cancellations detected",
                        "Eligible patients in the queue are contacted automatically",
                        "Open slots are actively refilled"
                    ]
                },
                {
                    title: "Demand-to-Intake Alignment",
                    bullets: [
                        "Referral or marketing source context informs intake priority",
                        "High-intent patients receive faster administrative follow-up"
                    ]
                }
            ],
            footer: "At this level, Operator actively manages intake flow rather than simply responding."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Clinical Operations",
            description: "Custom Operator enables capabilities requiring deeper customization, compliance controls, or specialty-specific workflows.",
            subsections: [
                {
                    title: "Referral & Care Coordination Workflows",
                    bullets: [
                        "Track inbound referrals and required documentation",
                        "Notify staff when referral packets are incomplete"
                    ]
                },
                {
                    title: "Private Clinic Knowledge Layer",
                    bullets: [
                        "Retrieval over approved SOPs, visit instructions, and policy documents",
                        "Ensures consistent, compliant patient communication"
                    ]
                },
                {
                    title: "Multi-Location Clinic Coordination",
                    bullets: [
                        "Location-aware intake and routing",
                        "Centralized visibility without forcing uniform schedules"
                    ]
                }
            ],
            footer: "Custom Operator is built around the clinic's operational reality — not a generic healthcare chatbot."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
