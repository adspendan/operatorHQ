import { UseCase } from "../types";

export const nonprofitUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "nonprofit",
    label: "Non-Profit / Foundations",
    headline: "From Donor & Program Chaos to Coordinated Mission Operations",
    magicMoment: "The moment a donor, grantee, volunteer, or beneficiary inquiry is captured with the right intent, urgency, and documentation — and routed to the correct person with a clear, respectful brief — without staff scrambling or sensitive data leaking into third-party clouds.",
    problem: "Non-profits and foundations don't fail because of a lack of mission — they fail in the 'Capacity Gap.' Every organization is trying to serve more people, steward donor trust, and comply with oversight requirements using overstretched staff and fragmented tools. Calls, emails, grant inquiries, volunteer requests, and beneficiary needs arrive constantly — often after hours or during peak program activity. Staff spend 40–60% of their time acting as Human Routers: donor questions bounced between finance and development, grant inquiries lost in inboxes, program eligibility calls answered repeatedly, volunteers unsure where to sign up or who to contact. Without a system to capture Intent + Context at the point of entry, non-profits burn goodwill, miss funding opportunities, and exhaust their teams.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Non-Profits Start",
        description: "Most non-profits begin with the Foundation Package, which installs Operator as a private, on-prem administrative front door — ensuring donor data, beneficiary information, and internal processes remain under organizational control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of inbound inquiries 24/7",
            "Capture Request DNA: donor vs volunteer vs program applicant vs general inquiry, purpose (donation, grant, services, partnership, media), urgency and preferred follow-up method",
            "Route Mission-Ready Summaries to staff or board liaisons instead of raw messages"
        ],
        notIncluded: "Automated donation processing or financial decisions. Grant approvals, eligibility rulings, or program acceptance decisions. Legal, tax, or compliance determinations. Public disclosure or reporting automation. The Foundation Package stops the 'missed mission moment' without changing how decisions are made."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Non-Profit Specific",
            description: "HQ Pro applies niche-aware logic for foundations vs service providers vs advocacy organizations, individual donors vs institutional funders, and ongoing programs vs emergency relief. Includes Required-Field Enforcement and Sensitivity-Aware Routing.",
            additionalText: "Crisis-related outreach escalated appropriately. Media or partnership requests routed separately from beneficiaries.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ represents Full Mission Synchronization. The Core Stack operate as a coordinated system:",
            hqBadges: ["Voice HQ", "Services HQ", "Ops HQ", "Data HQ", "Comms HQ"],
            additionalText: "Cross-channel continuity, identification of repeat donors or returning beneficiaries, pattern detection (e.g., spike in housing assistance requests in one ZIP code), unified internal summaries for leadership."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Stewardship & Impact Layer' — for large non-profits, foundations, or federated organizations requiring policy retrieval, fund-specific routing, or audit-friendly intake logs.",
            additionalText: "Private RAG over internal guidelines and grant rules. Multi-program segmentation ensuring youth services, housing aid, and education programs stay siloed. Board-ready summaries without exposing personal data."
        }
    ],
    bridgeLine: "Every tier reduces mission friction — higher tiers add eligibility screening, sensitivity-aware routing, and ultimately full stewardship coordination.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every donor, volunteer, and beneficiary acknowledged",
            "Staff capacity recovery — 10–20 hours/week reclaimed from routing and follow-ups",
            "Improved donor trust — professional, timely responses without cloud data risk",
            "Program clarity — better eligibility screening before staff involvement",
            "Mission integrity — technology supports, not replaces, human judgment"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not process donations, approve grants, make eligibility determinations, or issue legal/tax guidance. It strictly supports intake, routing, and mission-ready case preparation — it does not replace organizational authority.",
    accordionIntro: "The following examples illustrate what non-profits and foundations can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "non-profits and foundations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Acknowledgment, Categorization, and Clean Handoff",
            description: "At the Foundation level, Operator focuses on 24/7 acknowledgment of donor, volunteer, and beneficiary inquiries across phone and web.",
            exampleCapabilitiesLabel: "Illustrative capabilities:",
            subsections: [
                {
                    title: "Structured Capture of Mission DNA",
                    bullets: [
                        "Inquiry type (Donor / Volunteer / Beneficiary / Partner)",
                        "Purpose (Donation, Grant Inquiry, Services, Event, General Info)",
                        "Self-reported urgency"
                    ]
                },
                {
                    title: "Mission-Ready Summary for Staff",
                    bullets: [
                        "Who contacted the organization",
                        "Why they reached out",
                        "What follow-up they are requesting"
                    ]
                },
                {
                    title: "Intake Logging",
                    bullets: [
                        "Time-stamped intake logs stored locally for internal visibility"
                    ]
                }
            ],
            footer: "Explicitly out of scope: Donation execution or financial decisions. Grant approvals or beneficiary determinations. Automated disclosures or compliance rulings."
        },
        {
            tier: "HQ Pro",
            label: "Sensitivity-Aware Triage and Workload Protection",
            description: "HQ Pro applies non-profit-specific logic for triage and staff protection.",
            highlighted: true,
            subsections: [
                {
                    title: "Sensitivity-Aware Routing",
                    bullets: [
                        "Crisis-related beneficiary outreach flagged for immediate human attention",
                        "Major donor inquiries routed separately from general donations"
                    ]
                },
                {
                    title: "Required-Field Enforcement",
                    bullets: [
                        "Grant inquiries held until required documentation is provided",
                        "Program requests paused until eligibility basics are captured"
                    ]
                },
                {
                    title: "Intent-Based Prioritization",
                    bullets: [
                        "Emergency services > scheduled services > informational requests",
                        "Staff receive ready-to-review cases, not partial requests"
                    ]
                }
            ],
            footer: "Explicitly out of scope: Clinical, legal, or eligibility decisions. Automated prioritization that replaces staff judgment."
        },
        {
            tier: "Operator HQ",
            label: "Cross-Channel Continuity and Organizational Awareness",
            description: "Operator HQ enables unified memory across HQs so repeat interactions are recognized.",
            subsections: [
                {
                    title: "Continuity & Context",
                    bullets: [
                        "Unified memory across HQs so repeat interactions are recognized",
                        "Household-level context awareness (e.g., donor + volunteer from same family)"
                    ]
                },
                {
                    title: "Pattern Recognition",
                    bullets: [
                        "Spikes in assistance requests by geography or program",
                        "Repeated donor questions indicating unclear messaging"
                    ]
                },
                {
                    title: "Leadership Support",
                    bullets: [
                        "Internal summaries surfaced for leadership without exposing raw PII",
                        "Coordinated internal handoffs between development, programs, and operations"
                    ]
                }
            ],
            footer: "Explicitly out of scope: Predictive funding decisions. Automated resource reallocation without leadership approval."
        },
        {
            tier: "Custom Operator",
            label: "Stewardship, Governance Support, and Scale",
            description: "Custom Operator enables capabilities for large non-profits, foundations, or federated organizations.",
            subsections: [
                {
                    title: "Stewardship Vault (Private RAG)",
                    bullets: [
                        "Retrieval over internal policies, grant rules, and program criteria",
                        "Citation-backed answers: 'Is this donor contribution considered restricted?' 'Does this program serve this ZIP code?'"
                    ]
                },
                {
                    title: "Program Segmentation",
                    bullets: [
                        "Data siloing between programs (e.g., Youth, Housing, Relief)",
                        "Role-based visibility controls for staff and volunteers"
                    ]
                },
                {
                    title: "Audit-Ready Interaction Logs",
                    bullets: [
                        "Structured intake records supporting board review and compliance audits"
                    ]
                },
                {
                    title: "Leadership Dashboards",
                    bullets: [
                        "Aggregated trends (volume, urgency, categories) without exposing identities"
                    ]
                }
            ],
            footer: "Explicitly out of scope: Financial audits or compliance certifications. Replacement of board oversight or fiduciary responsibility."
        }
    ],
    accordionDisclaimer: "All examples are illustrative. Final scope depends on deployment configuration, organizational policies, and leadership approval."
};
