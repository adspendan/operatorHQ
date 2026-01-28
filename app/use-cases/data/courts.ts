import { UseCase } from "../types";

export const courtsUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "courts",
    label: "Courts / Clerk of Court (Administrative Only)",
    headline: "From Counter Overload to Structured Judicial Access",
    magicMoment: "The moment a citizen inquiry about filing procedures is captured with case type, document needs, and routing — before they arrive at the counter unprepared.",
    problem: "Courts and Clerk of Court offices face constant public demand for information, filings, records, and procedural guidance. Phone lines stay busy, counter staff answer the same questions repeatedly, and citizens arrive unprepared for filings. Without a system to capture Request Context and route inquiries to the correct division, courts scale frustration instead of public access.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Courts Start",
        description: "Most courts begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring citizen inquiries and internal workflows remain under court control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Answer administrative court inquiries 24/7",
            "Capture request type: filings, records, payments, hearing information, jury duty",
            "Route requests to appropriate division with a structured summary"
        ],
        notIncluded: "Judicial decision-making, legal advice, case adjudication, or sealed matters. Operator strictly supports administrative intake, routing, and public communication — it does not replace judges, clerks, or legal counsel."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Court-Specific",
            description: "HQ Pro applies court-aware administrative logic. Includes case-type branching (civil, criminal, traffic, family, probate), form readiness checks, and language/accessibility routing.",
            additionalText: "Ensures required fields are complete before clerk review.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Full System",
            description: "Operator HQ enables coordination across court divisions. The Core Stack operate as a coordinated system:",
            hqBadges: ["Voice HQ", "Services HQ", "Ops HQ", "Data HQ", "Comms HQ"],
            additionalText: "Unified case inquiry memory, volume awareness, and consistent public messaging across channels."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Build",
            description: "Custom Operator is the 'Judicial Administrative Layer' — for courts requiring rule retrieval, public records tracking, or multi-court coordination.",
            additionalText: "Designed around governance, compliance, and public accountability."
        }
    ],
    bridgeLine: "Every tier reduces counter and phone overload — higher tiers add case-type routing, form readiness, and ultimately cross-division coordination while preserving judicial authority.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Courts and Clerk of Court offices deploying Operator for administrative functions may experience:",
        items: [
            "Reduced front counter and phone congestion",
            "Faster acknowledgment of records and transcript requests",
            "Citizens arriving prepared with correct forms and documents",
            "Consistent public messaging across channels",
            "Clerks focused on processing, not routing"
        ],
        footer: "Outcomes vary by deployment level and configuration."
    },
    complianceNote: "Operator does not provide legal advice, make judicial determinations, or access sealed matters. It strictly supports administrative intake, routing, and public communication.",
    accordionIntro: "The following examples illustrate what courts can unlock at higher tiers of Operator for administrative workflows only. They are not guarantees and not included by default — they demonstrate what becomes possible while preserving judicial authority.",
    accordionIntroSubject: "courts and Clerk of Court offices",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Public Access & Call Deflection",
            description: "At the Foundation level, Operator ensures consistent public access to court information.",
            exampleCapabilitiesLabel: "Example capabilities:",
            bullets: [
                "24/7 answering of administrative court inquiries",
                "Website chat for FAQs: court hours, filing locations, payment methods, hearing types (informational only)",
                "Call intent captured and routed to: Clerk of Court, Records, Jury Administration"
            ],
            footer: "This tier prevents overload of front counters and phone lines."
        },
        {
            tier: "HQ Pro",
            label: "Process-Aware Logic",
            description: "HQ Pro applies court-aware administrative logic.",
            highlighted: true,
            subsections: [
                {
                    title: "Case-Type Branching",
                    bullets: [
                        "Civil, criminal, traffic, family, probate follow distinct intake paths",
                        "Right division receives right information"
                    ]
                },
                {
                    title: "Form Readiness Checks",
                    bullets: [
                        "Ensures required fields are complete before clerk review",
                        "Prevents incomplete filings reaching staff"
                    ]
                },
                {
                    title: "Language & Accessibility Routing",
                    bullets: [
                        "Directing requests to translation or ADA services"
                    ]
                }
            ],
            footer: "HQ Pro reflects real court workflows while remaining standardized."
        },
        {
            tier: "Operator HQ",
            label: "Administrative Synchronization",
            description: "Operator HQ enables coordination across court divisions.",
            subsections: [
                {
                    title: "Unified Case Inquiry Memory",
                    bullets: [
                        "Repeated inquiries tied to the same case ID",
                        "Reduces repeated explanations by citizens"
                    ]
                },
                {
                    title: "Volume Awareness",
                    bullets: [
                        "Identifies filing surges or jury season peaks",
                        "Supports staffing and scheduling decisions"
                    ]
                },
                {
                    title: "Consistent Public Messaging",
                    bullets: [
                        "Approved language across phone, chat, and email"
                    ]
                }
            ],
            footer: "At this level, Operator supports court administration, not judicial authority."
        },
        {
            tier: "Custom Operator",
            label: "Governance & Compliance Layer",
            description: "Custom Operator enables advanced capabilities requiring policy review and formal approval.",
            subsections: [
                {
                    title: "Policy & Rule Retrieval",
                    bullets: [
                        "Private RAG over court rules, filing procedures, and local orders",
                        "Answers procedural questions only"
                    ]
                },
                {
                    title: "Public Records Tracking",
                    bullets: [
                        "FOIA / open-records intake and internal dashboards",
                        "No automated release"
                    ]
                },
                {
                    title: "Multi-Court Coordination",
                    bullets: [
                        "Standardized intake across municipal or county courts"
                    ]
                }
            ],
            footer: "Custom Operator is designed around governance, accountability, and judicial independence."
        }
    ],
    accordionDisclaimer: "Operator does not provide legal advice, make judicial determinations, or access sealed matters. Capabilities vary by deployment. Examples illustrate what becomes possible while preserving judicial authority."
};
