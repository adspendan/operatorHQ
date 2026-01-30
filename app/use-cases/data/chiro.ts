import { UseCase } from "../types";

export const chiroUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "chiro",
    label: "Chiropractic / Physical Therapy",
    headline: "Turn New Patient Interest Into Booked Visits — Without Phone Tag",
    magicMoment: "The moment a 'Do you take my insurance?' or 'Can you help my back/knee?' inquiry becomes a booked first visit with the right intake details captured (pain area, urgency, insurance/self-pay, availability) — without your front desk getting buried.",
    problem: "Chiropractic and PT clinics don't lose revenue because people don't need care — they lose it because intake friction slows everything down. Calls come in during treatments, voicemail piles up, and web form leads wait hours (or days) for a response. Staff repeatedly answers the same questions (insurance, pricing ranges, what to expect, paperwork), while high-intent prospects go elsewhere. Meanwhile, missed confirmations and weak reminders increase no-shows, and the clinic stays stuck in a cycle of reactive scheduling instead of predictable patient flow.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Clinics Start",
        description: "Most clinics start with the Foundation Package, which installs the private, local infrastructure required to run Operator — so your intake patterns and clinic knowledge can stay controlled inside the business.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Respond to new patient inquiries 24/7 (calls, texts, web chat)",
            "Capture Patient Intent: new vs returning, issue type (back/neck/knee/post-op), urgency, availability",
            "Handle common questions (hours, location, what to bring, basic pricing/insurance workflow info if you provide it)",
            "Route to the correct next step (book request, callback request, intake form link)"
        ],
        notIncluded: "Medical diagnosis, treatment recommendations, or clinical decisions. Insurance eligibility verification, benefits confirmation, or prior auth automation. Guaranteed outcomes, pain relief promises, or compliance claims. Real-time EHR scheduling unless integrated and configured. The Foundation Package stops 'missed inquiry' leakage — it is the on-ramp, not the full engine."
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
            label: "Chiro / PT-Specific",
            description: "HQ Pro for Chiropractic and PT applies niche-aware logic: distinct flows for Chiro vs PT, plus patient-type branching — acute pain vs chronic, sports injury vs post-op rehab, insurance vs self-pay (routing and required info capture).",
            additionalText: "Higher-quality intake before humans spend time; cleaner handoffs and fewer wasted callbacks.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents full clinic sync. Voice, Sales, Ops, Data, Marketing operate as one system. For clinics, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Unified memory across calls/texts/forms; consistent follow-up; staff sees a complete intake timeline."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is designed for multi-provider clinics, multi-location groups, specialty rehab programs, or complex intake and referral sources.",
            additionalText: "This includes bespoke workflows, deeper integrations, custom dashboards, and admin controls. This is not a template — it is built around how that clinic actually operates."
        }
    ],
    bridgeLine: "Every tier reduces intake friction — higher tiers add coordination, niche intelligence, and ultimately full-clinic control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Faster responses to new patient inquiries",
            "More booked first visits from the same lead volume",
            "Reduced front-desk interruption during patient care",
            "Improved show rates via consistent confirmations/reminders",
            "Cleaner intake context for providers before first contact"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide medical diagnosis, treatment recommendations, or clinical decisions. Insurance eligibility, benefits confirmation, and prior authorization are not automated unless explicitly integrated and configured.",
    accordionIntro: "The following examples illustrate what chiropractic and PT clinics can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "chiropractic and PT clinics",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "What this tier is for: immediate responsiveness + clean intake capture.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Answer inbound calls/texts/web inquiries 24/7 and capture the request without waiting on a callback",
                "Capture Patient DNA: pain area (e.g., back/neck/knee), broad context (acute vs chronic), and preferred contact method",
                "Explain the clinic's intake process at a high level (what happens on the first visit, what to bring, how scheduling works) using clinic-approved wording",
                "Route the inquiry to the correct front-desk lane (new patient vs returning; chiro vs PT) based on the patient's stated intent",
                "Generate a basic intake summary for staff review (what they asked, urgency signals, availability window)"
            ],
            footer: "What it does not imply: medical diagnosis, treatment prescriptions, real-time insurance eligibility verification, prior-auth completion, or EMR deep-sync unless integrated and explicitly configured."
        },
        {
            tier: "HQ Pro",
            label: "Clinic-Specific Logic",
            description: "What this tier is for: niche-aware branching (Chiro vs PT) + higher-quality qualification before humans spend time.",
            highlighted: true,
            subsections: [
                {
                    title: "Symptom-Aware Branching (Non-Diagnostic)",
                    bullets: [
                        "Route based on broad, non-diagnostic categories (e.g., 'post-op rehab,' 'sports injury,' 'chronic pain,' 'maintenance visit') to the appropriate intake path",
                        "Adjust intake questions by visit type (PT evaluation vs chiro adjustment vs consult) using clinic-approved scripts",
                        "Escalate urgent language to staff (e.g., 'severe pain,' 'can't walk,' 'recent accident') for human review, without making clinical claims"
                    ]
                },
                {
                    title: "Insurance / Self-Pay Intake Triage (Non-Verifying)",
                    bullets: [
                        "Collect basic payer context (self-pay vs insurance, plan name if volunteered) and guide the patient to the clinic's standard next step",
                        "Enable optional 'insurance card upload' intake (photo capture) for staff prep without claiming eligibility verification",
                        "Keep the process consistent so the front desk isn't re-asking the same questions repeatedly"
                    ]
                },
                {
                    title: "Higher-Quality First Visit Preparation",
                    bullets: [
                        "Create a cleaner 'first visit brief' for staff: patient intent, key constraints, preferred time windows, and any uploaded docs",
                        "Reduce repeated intake questioning and shorten admin back-and-forth"
                    ]
                }
            ],
            footer: "What it does not imply: diagnosing conditions, recommending exercises, providing medical advice, or guaranteeing outcomes."
        },
        {
            tier: "Operator HQ",
            label: "Full Clinic Synchronization",
            description: "What this tier is for: coordinated system behavior across Voice, Sales, Ops, Data, Marketing with shared context and memory.",
            subsections: [
                {
                    title: "Care Continuity Loop (Configured)",
                    bullets: [
                        "Identify 'dropped-off' scenarios using configured signals (e.g., missed appointment, long gap since last scheduled visit) and trigger an allowed follow-up workflow",
                        "Send clinic-approved check-ins and route replies back to staff when the patient needs human handling",
                        "Keep follow-up consistent across channels (voice, SMS, web chat) using shared context"
                    ]
                },
                {
                    title: "Unified Patient Interaction Timeline",
                    bullets: [
                        "Maintain a structured history of inquiries, booking attempts, reminders, and outcomes within configured data boundaries",
                        "Present staff with a context timeline so patients aren't forced to repeat themselves across channels"
                    ]
                },
                {
                    title: "Demand-to-Intake Alignment",
                    bullets: [
                        "Use configured intent signals to prioritize staff callbacks (e.g., 'ready to book,' 'acute pain,' 'post-op referral') without promising response-time guarantees",
                        "Coordinate messaging so the patient experience remains consistent from first contact through follow-up"
                    ]
                }
            ],
            footer: "What it does not imply: outbound marketing without permissions, automatic clinical decisions, or guaranteed adherence improvements."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "What this tier is for: unique workflows, multi-location groups, specialty case types, deep integrations, and specialized UX.",
            subsections: [
                {
                    title: "Multi-Location / Multi-Provider Coordination",
                    bullets: [
                        "Location-aware routing based on configured capability rules (e.g., PT vs chiro availability, specialty providers, languages)",
                        "Centralized reporting views scoped to agreed metrics (lead-to-book, show rate tracking) with appropriate access controls"
                    ]
                },
                {
                    title: "Referral Guardian (Optional Build)",
                    bullets: [
                        "Generate structured, clinic-approved 'status update briefs' for referring providers (MD, surgeon, PI attorney workflows) based on intake + visit milestones",
                        "Coordinate internal reminders to request/update referral documents, without claiming medical conclusions"
                    ]
                },
                {
                    title: "Private Knowledge Layer (Optional Build)",
                    bullets: [
                        "Private retrieval over approved internal docs (clinic FAQs, care-plan policies, paperwork instructions, rehab protocol summaries where appropriate)",
                        "Guardrails to avoid hallucinations, avoid advisory claims, and keep responses aligned to the clinic's approved language"
                    ]
                },
                {
                    title: "Specialty Intake (Optional Build)",
                    bullets: [
                        "Bespoke intake flows for PI / Workers' Comp / post-op rehab programs, scoped per build",
                        "Custom document collection workflows and staff review queues (human-in-the-loop)"
                    ]
                }
            ],
            footer: "What it does not imply: replacing licensed professionals, automated medical judgments, guaranteed claim outcomes, or compliance guarantees."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples illustrate what may become possible as Operator expands in scope and configuration. Nothing above is a promise of results, clinical outcomes, or specific operational gains."
};
