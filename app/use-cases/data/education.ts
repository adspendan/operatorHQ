import { UseCase } from "../types";

export const educationUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "education",
    label: "Education / Private Schools / Training Programs",
    headline: "From Inquiry Overload to Structured Enrollment Flow",
    magicMoment: "The moment a parent, student, or professional inquiry is captured, qualified for fit, and guided to the right next step — before the admissions office even opens.",
    problem: "Educational organizations don't lose students because of curriculum quality — they lose them in the Enrollment Friction Gap. Parents, students, and professionals reach out with high intent, but inquiries arrive outside office hours, during classes, or while admissions teams are overwhelmed. Emails go unanswered, calls roll to voicemail, and follow-ups happen days too late. Admissions teams spend an outsized amount of time repeating the same explanations: 'What grades do you accept?' 'What does tuition look like?' 'Is this program right for my situation?' Without a system to capture Enrollment Intent, qualify Fit, and guide prospects through next steps immediately, schools and training programs lose qualified applicants, increase admin burnout, and cap growth artificially.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Education Organizations Start",
        description: "Most education organizations begin with the Foundation Package, installing the core private infrastructure required to run Operator locally — ensuring applicant data, family conversations, and enrollment workflows stay under institutional control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Respond to admissions inquiries 24/7",
            "Capture Applicant DNA: program of interest, age/grade level or professional background, enrollment timeframe",
            "Route qualified inquiries to admissions with a structured summary"
        ],
        notIncluded: "Admissions decisions or acceptance guarantees. Tuition calculations, financial aid approvals, or compliance determinations. SIS/LMS deep integrations. The Foundation Package stops inquiry leakage and establishes responsiveness — it is the on-ramp, not the enrollment engine."
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
            label: "Education-Specific",
            description: "HQ Pro applies niche-aware logic tailored to private K–12 schools, vocational/trade programs, and online or cohort-based training. Includes Fit-Based Routing: differentiates early-stage interest from ready-to-apply candidates.",
            additionalText: "Routes parents, students, and enterprise learners into appropriate flows.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents Full Enrollment Synchronization. Voice, Sales, Ops, Data, and Marketing operate as one system. For education organizations, this typically includes:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Marketing signals inform admissions prioritization. Drop-off points are detected and re-engaged. Enrollment operates as a coordinated funnel."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Education Platform Brain' — designed for multi-campus schools, franchised training programs, or large cohort-based academies.",
            additionalText: "This includes application-state tracking logic, private RAG over syllabi, policies, and handbooks, and custom dashboards for enrollment forecasting. This is not a template — it is built around the institution."
        }
    ],
    bridgeLine: "Every tier reduces the Enrollment Friction Gap — higher tiers add fit qualification, coordination, and ultimately full-enrollment control.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Higher inquiry-to-application conversion",
            "Faster response times during peak enrollment periods",
            "Reduced admissions staff burnout",
            "Clear visibility into enrollment demand",
            "Stronger first impression for families and learners"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not make admissions decisions, approve financial aid, calculate tuition, or provide compliance determinations. Capabilities depend on deployment, configuration, and existing systems.",
    accordionIntro: "The following examples illustrate what education organizations can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "education organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Coverage",
            description: "At the Foundation level, Operator focuses on availability, consistency, and structured intake.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "Admissions calls and inquiries answered after hours and during busy school days",
                "Website chat responds to common questions (programs offered, age/grade ranges, start dates)",
                "Applicant intent captured (program interest, age/grade, enrollment timeframe) and routed for follow-up"
            ],
            footer: "This tier ensures inquiry capture and responsiveness, but does not yet optimize enrollment outcomes."
        },
        {
            tier: "HQ Pro",
            label: "Program-Aware Enrollment Logic",
            description: "HQ Pro for Education applies templated, niche-specific intelligence aligned to how schools and training programs actually enroll students.",
            highlighted: true,
            subsections: [
                {
                    title: "Fit-Based Branching",
                    bullets: [
                        "Differentiates early-stage interest from enrollment-ready applicants",
                        "Routes parents, adult learners, and enterprise candidates into appropriate flows"
                    ]
                },
                {
                    title: "Program-Specific Intake",
                    bullets: [
                        "Captures prerequisite signals (age range, grade level, background experience) as non-decisional intake",
                        "Flags potential fit issues before admissions interviews"
                    ]
                },
                {
                    title: "Enrollment Priority Signals",
                    bullets: [
                        "Identifies applicants with clear timelines or high engagement",
                        "Helps admissions teams focus time where it matters most"
                    ]
                }
            ],
            footer: "HQ Pro improves enrollment quality while remaining a standardized system."
        },
        {
            tier: "Operator HQ",
            label: "Full Enrollment Synchronization",
            description: "Operator HQ enables the Core Stack to operate as a single coordinated enrollment system.",
            subsections: [
                {
                    title: "Incomplete Application Recovery Loop",
                    bullets: [
                        "Detects stalled applications",
                        "Initiates personalized, compliant follow-ups",
                        "Offers assistance instead of pressure"
                    ]
                },
                {
                    title: "Unified Applicant Memory",
                    bullets: [
                        "Operator remembers prior conversations, questions, and visits",
                        "Families and learners are not asked the same questions repeatedly"
                    ]
                },
                {
                    title: "Demand-to-Admissions Coordination",
                    bullets: [
                        "Marketing activity informs admissions prioritization",
                        "High-intent applicants receive faster, more contextual responses"
                    ]
                }
            ],
            footer: "At this level, Operator actively manages enrollment flow instead of simply assisting staff."
        },
        {
            tier: "Custom Operator",
            label: "Advanced & Bespoke Capabilities",
            description: "Custom Operator enables capabilities requiring deep customization, institutional policy awareness, or multi-campus complexity.",
            subsections: [
                {
                    title: "Multi-Campus Enrollment Coordination",
                    bullets: [
                        "Shared enrollment logic across campuses",
                        "Centralized visibility with local execution"
                    ]
                },
                {
                    title: "Policy & Handbook Knowledge Layer",
                    bullets: [
                        "Private retrieval over institutional handbooks and policies",
                        "Consistent, institution-approved answers only"
                    ]
                },
                {
                    title: "Custom Enrollment Dashboards",
                    bullets: [
                        "Visibility into inquiry-to-enrollment trends",
                        "Forecasting based on real intake behavior"
                    ]
                }
            ],
            footer: "Custom Operator is built around the institution — not a template."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope and depth."
};
