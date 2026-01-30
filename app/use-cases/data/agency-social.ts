import { UseCase } from "../types";

export const agencySocialUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-social",
    label: "Agency Overlay — Social Media Agency",
    headline: "From Content Chaos to Posting-Ready Operations",
    magicMoment: "The moment a new social media inquiry is transformed into a Community-Ready Brief — including platforms, posting cadence, content pillars, community moderation needs, and approval workflows — before a social strategist or community manager ever reviews the conversation.",
    problem: "Social media agencies don't lose clients because of bad content — they lose them in the 'Content Treadmill.' Prospects arrive with vague requests ('I need to post more'), unclear brand voice, and no content pillar structure. Account managers chase calendar access, approval chains, and community guidelines while social teams wait for direction. By the time posting starts, half the brand context is missing. Without a system to capture Social DNA at the point of entry, agencies scale chaos instead of community.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Social Media Agencies Start",
        description: "Most social media agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client community data, content strategies, and proprietary social playbooks remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of social media inquiries 24/7",
            "Capture Social DNA: platforms (Instagram, TikTok, LinkedIn, X, etc.), posting cadence expectations, content pillars, community moderation needs, approval workflow preferences",
            "Route Community-Ready Briefs to the appropriate internal owner (social strategist, community manager, or account lead)"
        ],
        notIncluded: "What it intentionally does NOT include: Content creation or caption writing. Posting execution or scheduling. Engagement guarantees or follower growth predictions. Community moderation or comment responses. The Foundation Package establishes intake clarity — it doesn't replace social media expertise."
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
            label: "Social-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for social media agency flows: differentiating organic content vs community management, identifying high-volume vs boutique accounts, and routing multi-platform campaigns to senior strategists.",
            additionalText: "Complex multi-platform engagements reach leadership immediately. Single-platform requests flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Community Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, onboarding, and ongoing content requests. Leadership gains visibility into engagement patterns."
        },
        {
            tier: "Custom Operator",
            label: "The 'Social Agency OS' Layer",
            description: "Custom Operator is designed for scaled social media agencies, community management firms, or multi-platform content teams requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (social playbooks). Multi-brand isolation. Platform tier awareness. Audit-ready intake logs for content reviews."
        }
    ],
    bridgeLine: "Every tier reduces content chaos — higher tiers add social-aware logic, community memory, and ultimately unified social operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-posting — brand voice and pillars confirmed before kickoff",
            "Cleaner handoffs — account and social teams work from the same intake truth",
            "Reduced brand confusion — Social DNA captured at first touch",
            "Protected strategies — proprietary social approaches stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from content chaos to structured social operations."
    },
    complianceNote: "Operator does not create content, post to platforms, predict engagement, or moderate communities. It strictly supports intake, routing, and coordination — it does not replace social media expertise or content execution.",
    accordionIntro: "The following examples illustrate what social media agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "social media agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Social Intent",
            description: "At the Foundation level, Operator captures, structures, and routes social agency inquiries without strategist involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need help with social media' or 'Looking for Instagram management'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "Social DNA Intake",
                    bullets: [
                        "Platforms: Instagram, TikTok, LinkedIn, X, YouTube, Facebook",
                        "Posting cadence expectations (daily, weekly, campaign-based)",
                        "Content pillars and topic structure",
                        "Community moderation needs and approval workflows"
                    ]
                },
                {
                    title: "Community-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: platforms, cadence, pillars, approvals",
                        "Routing to the correct internal owner based on platform and scope"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a social strategist or community manager."
        },
        {
            tier: "HQ Pro",
            label: "Social-Aware Routing Logic",
            description: "HQ Pro applies social media agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Service Type Routing",
                    bullets: [
                        "Organic content vs community management vs influencer coordination flagged",
                        "Route to specialized teams based on primary need"
                    ]
                },
                {
                    title: "Platform Complexity Detection",
                    bullets: [
                        "Multi-platform campaigns (4+ platforms) flagged for senior review",
                        "Single-platform management handled through standard flow"
                    ]
                },
                {
                    title: "Volume Classification",
                    bullets: [
                        "High-volume accounts (daily posting) identified",
                        "Campaign-based vs ongoing management differentiated"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Social Operations",
            description: "Operator HQ maintains shared context across the full social media agency lifecycle.",
            subsections: [
                {
                    title: "Account Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through content creation and community management",
                        "Clients never repeat their brand voice guidelines"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Content, community, and strategy teams reference the same intake truth",
                        "No more siloed platform information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (approval delays, content bottlenecks)",
                        "Surface engagement health signals for proactive communication"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a social analyst."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Social Logic",
            description: "Custom Operator encodes proprietary social strategies and protects agency IP.",
            subsections: [
                {
                    title: "Social Playbook Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own content frameworks",
                        "Consistent answers on 'How do we approach B2B LinkedIn content?'"
                    ]
                },
                {
                    title: "Multi-Brand Isolation",
                    bullets: [
                        "Complete separation of brand voices between clients",
                        "No cross-contamination of content styles"
                    ]
                },
                {
                    title: "Platform Tier Awareness",
                    bullets: [
                        "Apply different intake rules for enterprise vs SMB accounts",
                        "Service levels aligned to posting volume"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for content reviews and performance reporting",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned social asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or engagement predictions. Human approval and oversight remain required at every stage. Operator does not create content or post to platforms."
};
