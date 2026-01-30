import { UseCase } from "../types";

export const hrUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "hr",
    label: "Human Resources / Staffing / Recruiting",
    headline: "From Inbox Chaos to Structured Talent Flow",
    magicMoment: "The moment a candidate inquiry is transformed into a structured, role-aligned brief (role, experience level, work authorization, urgency) before a recruiter ever opens their inbox. This is the 'Interview-Ready Profile.'",
    problem: "HR departments and staffing agencies don't struggle with effort — they struggle with the 'Intake Explosion.' Applicants submit incomplete resumes. Hiring managers submit vague requests. Staffing agencies chase missing details. Compliance steps happen after conversations instead of before. Recruiters spend up to 50% of their time on repetitive clarification: 'What role are you applying for?' 'Are you authorized to work?' 'Is this full-time or contract?' Without a system to capture Candidate DNA and Role Context at the point of entry, hiring becomes reactive, inconsistent, and slow.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most HR Teams Start",
        description: "Most HR teams or staffing firms begin with the Foundation Package, which installs Operator as a private, on-premise intake layer — ensuring resumes, applicant data, and internal hiring logic remain under company control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ (Chat / Intake for applicant inquiries or Voice for staffing firm candidate calls)"
        ],
        capabilities: [
            "Acknowledge 100% of candidate and employer inquiries 24/7",
            "Capture Candidate DNA: role applied for, experience range, employment type (FT/Contract/Temp), location/remote eligibility",
            "Capture Employer DNA (for agencies): role urgency, required skills, timeline",
            "Route Interview-Ready Briefs to recruiters instead of raw resumes"
        ],
        notIncluded: "Automated hiring decisions or candidate ranking. Resume scoring or AI-based 'fit judgments.' Offer generation or compensation negotiation. Legal or compliance determinations (EEO, background checks). The Foundation Package establishes control and consistency — it stops the intake bleed without altering hiring authority."
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
            label: "HR/Staffing-Specific",
            description: "HQ Pro applies Role-Aware Logic based on org type: internal HR vs staffing agency, permanent vs contract roles, executive vs entry-level. Executive search routed differently than volume hiring.",
            additionalText: "Recruiters only see qualified, structured, ready-to-advance profiles.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents the Unified Talent System. The Core Stack operate as a coordinated system:",
            hqBadges: ["Voice HQ", "Client HQ", "Ops HQ", "Data HQ", "Comms HQ"],
            additionalText: "Data HQ detects repeated drop-offs. Ops HQ flags bottlenecks. Comms HQ standardizes candidate communication. Hiring becomes a managed pipeline, not a guessing game."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Enterprise Talent System' — for large orgs, staffing networks, or multi-region employers requiring private RAG over job frameworks, multi-region intake logic, or candidate re-engagement.",
            additionalText: "Secure document collection (certifications, licenses). All running on-premise, under HR's control."
        }
    ],
    bridgeLine: "Every tier reduces intake chaos — higher tiers add role-aware logic, compliance screening, and ultimately full talent pipeline coordination.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero lost candidates — every inquiry acknowledged",
            "Faster time-to-interview — clean intake before recruiter review",
            "Recruiter focus — less admin, more human judgment",
            "Compliance safety — applicant data stays on local hardware",
            "Scalable hiring — volume increases without chaos"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not make hiring decisions, rank candidates, score resumes, or handle EEO/background check determinations. It strictly supports intake, routing, and interview-ready case preparation — it does not replace recruiter or HR authority.",
    accordionIntro: "The following examples illustrate what HR teams and staffing firms can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "HR teams and staffing firms",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Baseline Intake & Acknowledgment",
            description: "At the Foundation level, Operator focuses on availability, acknowledgment, and intake consistency.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "All candidate and hiring-manager inquiries acknowledged 24/7",
                "Applicants receive immediate confirmation their information was received",
                "Core Candidate DNA captured: role applied for, employment type (FT/Contract/Temp), experience band, location eligibility",
                "Recruiters receive structured intake summaries instead of raw resumes or voicemails"
            ],
            footer: "This tier ensures no candidate or role request disappears, but does not yet optimize hiring workflows."
        },
        {
            tier: "HQ Pro",
            label: "Role- & Sensitivity-Aware Logic",
            description: "HQ Pro applies templated, niche-aware intelligence specific to HR and recruiting workflows.",
            highlighted: true,
            subsections: [
                {
                    title: "Role-Aware Routing",
                    bullets: [
                        "Executive search inquiries routed differently than volume hiring",
                        "Contract roles capture rate expectations and availability upfront"
                    ]
                },
                {
                    title: "Compliance-Aware Intake",
                    bullets: [
                        "Work authorization and region-specific requirements captured early",
                        "Recruiters avoid late-stage disqualifications"
                    ]
                },
                {
                    title: "Candidate Intent Differentiation",
                    bullets: [
                        "Passive candidates handled differently than active job seekers",
                        "Internal referrals flagged with higher priority"
                    ]
                }
            ],
            footer: "HQ Pro reflects how real recruiting teams operate, while remaining standardized and policy-aligned."
        },
        {
            tier: "Operator HQ",
            label: "Unified Talent Operations System",
            description: "Operator HQ enables the Core Stack to operate as one coordinated talent system.",
            subsections: [
                {
                    title: "Drop-Off Detection",
                    bullets: [
                        "Operator identifies stages where candidates disengage",
                        "Patterns summarized for HR leadership review"
                    ]
                },
                {
                    title: "Cross-Role Memory",
                    bullets: [
                        "Candidate history remembered across applications",
                        "Repeat applicants receive context-aware responses"
                    ]
                },
                {
                    title: "Hiring Velocity Intelligence",
                    bullets: [
                        "Role requests, candidate flow, and recruiter load visible as a system",
                        "Bottlenecks surfaced before requisitions stall"
                    ]
                }
            ],
            footer: "At this level, Operator does not replace recruiters — it actively manages flow and signal quality."
        },
        {
            tier: "Custom Operator",
            label: "Enterprise & High-Compliance Builds",
            description: "Custom Operator enables bespoke capabilities that require deep customization, private models, or advanced compliance handling.",
            subsections: [
                {
                    title: "Private Job Framework RAG",
                    bullets: [
                        "Internal leveling guides, role definitions, and pay bands queried locally",
                        "Hiring managers receive policy-aligned answers instantly"
                    ]
                },
                {
                    title: "Multi-Region Compliance Handling",
                    bullets: [
                        "Different intake logic for GDPR, EEO, and regional labor rules",
                        "All workflows executed on-premise"
                    ]
                },
                {
                    title: "Silver-Medalist Re-Engagement",
                    bullets: [
                        "Past high-fit candidates identified for new roles",
                        "Recruiters receive curated re-engagement briefs"
                    ]
                }
            ],
            footer: "Custom Operator is built around the organization's people philosophy and compliance posture, not templates."
        }
    ],
    accordionDisclaimer: "Capabilities vary by deployment. Examples shown illustrate what becomes possible as Operator expands in scope, intelligence, and integration."
};
