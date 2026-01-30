import { UseCase } from "../types";

export const agencyMarketingUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-marketing",
    label: "Agency Overlay — Marketing Agency",
    headline: "From Fragmented Requests to Unified Growth Briefs",
    magicMoment: "The moment a new marketing inquiry is transformed into a Growth-Ready Brief — including business goals, channel mix, budget allocation, timeline, and stakeholder map — before a strategist or account director ever engages.",
    problem: "Full-service marketing agencies don't lose clients because of bad strategy — they lose them in the 'Scope Sprawl.' Prospects arrive with overlapping requests ('I need ads, SEO, email, and social'), unclear priorities, and no single point of truth. Account managers juggle discovery across five service lines while founders chase scope clarity. By the time strategy starts, three teams have asked the same questions. Without a system to capture Marketing DNA at the point of entry, agencies scale fragmentation instead of focus.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Marketing Agencies Start",
        description: "Most full-service marketing agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client strategies, channel plans, and proprietary frameworks remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of marketing inquiries 24/7",
            "Capture Marketing DNA: business goals, channel mix interest (paid, organic, email, social), budget range, timeline, stakeholder map, current marketing state",
            "Route Growth-Ready Briefs to the appropriate internal owner (sales, strategy, or leadership)"
        ],
        notIncluded: "What it intentionally does NOT include: Strategic recommendations or channel allocation. Campaign execution or content creation. Performance guarantees or growth predictions. Pricing decisions or scope commitments. The Foundation Package establishes intake clarity — it doesn't replace marketing strategy expertise."
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
            label: "Full-Service Routing Logic",
            description: "HQ Pro applies specialized logic for marketing agency flows: differentiating single-channel vs full-funnel requests, identifying enterprise vs SMB prospects, and routing complex multi-stakeholder accounts to senior strategists.",
            additionalText: "High-complexity opportunities reach leadership immediately. Standard requests flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Growth Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, onboarding, and ongoing campaign coordination. Leadership gains visibility into cross-channel friction."
        },
        {
            tier: "Custom Operator",
            label: "The 'Growth Agency OS' Layer",
            description: "Custom Operator is designed for scaled marketing agencies, holding companies, or multi-service groups requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (strategy frameworks). Multi-brand isolation. Client tier awareness. Audit-ready intake logs for strategic reviews."
        }
    ],
    bridgeLine: "Every tier reduces scope confusion — higher tiers add full-service routing logic, channel memory, and ultimately unified growth operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-strategy — goals and channels clarified before first call",
            "Cleaner handoffs — all service lines work from the same intake truth",
            "Reduced scope drift — Marketing DNA captured at first touch",
            "Protected frameworks — proprietary strategies stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from fragmented discovery to unified growth operations."
    },
    complianceNote: "Operator does not provide strategic recommendations, allocate budgets, predict growth outcomes, or execute campaigns. It strictly supports intake, routing, and coordination — it does not replace marketing strategy expertise or channel specialists.",
    accordionIntro: "The following examples illustrate what marketing agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "marketing agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Growth Intent",
            description: "At the Foundation level, Operator captures, structures, and routes marketing agency inquiries without strategist involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need a full marketing strategy' or 'Looking for help with growth'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Marketing DNA Intake",
                    bullets: [
                        "Business goals and growth objectives",
                        "Channel mix interest: paid, organic, email, social, content",
                        "Budget range and timeline",
                        "Stakeholder map and decision-maker status"
                    ]
                },
                {
                    title: "Growth-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: goals, channels, budget, timeline",
                        "Routing to the correct internal owner based on scope complexity"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a strategist or planner."
        },
        {
            tier: "HQ Pro",
            label: "Full-Service Routing Logic",
            description: "HQ Pro applies marketing agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Scope Complexity Routing",
                    bullets: [
                        "Full-funnel (paid + organic + email) flagged as complex for senior review",
                        "Single-channel requests handled through standard flow"
                    ]
                },
                {
                    title: "Business Size Detection",
                    bullets: [
                        "Enterprise prospects flagged for leadership engagement",
                        "SMB prospects routed to account executives"
                    ]
                },
                {
                    title: "Service Line Classification",
                    bullets: [
                        "Identify primary vs secondary channel interests",
                        "Route to appropriate service team leads"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Growth Operations",
            description: "Operator HQ maintains shared context across the full marketing agency lifecycle.",
            subsections: [
                {
                    title: "Cross-Channel Memory",
                    bullets: [
                        "Context persists across service lines and campaign phases",
                        "Clients never repeat their goals to different teams"
                    ]
                },
                {
                    title: "Service Line Coordination",
                    bullets: [
                        "Paid, organic, email, and social teams reference the same client truth",
                        "No more siloed channel strategies"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points across client journeys",
                        "Surface scope drift signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a marketing strategist."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Strategy Logic",
            description: "Custom Operator encodes proprietary marketing frameworks and protects agency IP.",
            subsections: [
                {
                    title: "Strategy Framework Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own methodologies",
                        "Consistent answers on 'How do we approach SaaS growth clients?'"
                    ]
                },
                {
                    title: "Multi-Brand Isolation",
                    bullets: [
                        "Complete separation of client strategies between accounts",
                        "No cross-contamination of competitive positioning"
                    ]
                },
                {
                    title: "Client Tier Awareness",
                    bullets: [
                        "Apply different intake rules for retainer vs project clients",
                        "Service levels aligned to engagement type"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for strategy reviews and client reporting",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned growth asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or growth predictions. Human approval and oversight remain required at every stage. Operator does not create strategies or execute campaigns."
};
