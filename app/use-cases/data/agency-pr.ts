import { UseCase } from "../types";

export const agencyPrUseCase: UseCase = {
    useCaseCategory: "vertical",
    id: "agency-pr",
    label: "Agency Overlay — PR Agency",
    headline: "From Scattered Pitches to Press-Ready Briefs",
    magicMoment: "The moment a new PR inquiry is transformed into a Media-Ready Brief — including narrative angles, spokesperson availability, press assets, embargo rules, and crisis flags — before a publicist or media relations lead ever reviews the conversation.",
    problem: "PR agencies don't lose clients because of bad pitches — they lose them in the 'Narrative Gap.' Prospects arrive with urgent requests ('I need press coverage'), incomplete media kits, and no clarity on spokespeople or embargoes. Account managers chase headshots, bios, and talking points while publicists wait for story angles. By the time outreach starts, half the narrative context is missing or contradictory. Without a system to capture PR DNA at the point of entry, agencies scale reactive firefighting instead of strategic media relations.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most PR Agencies Start",
        description: "Most PR agencies begin with the Foundation Package, which installs the core, private infrastructure required to run Operator locally — ensuring client media strategies, press contacts, and proprietary pitch approaches remain under agency control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One HQ deepened beyond Lite mode (e.g., Voice or Data/RAG)"
        ],
        capabilities: [
            "Acknowledge 100% of PR inquiries 24/7",
            "Capture PR DNA: narrative angles, spokesperson availability, press asset readiness (headshots, bios, boilerplate), embargo rules, crisis flags, media tier preferences",
            "Route Media-Ready Briefs to the appropriate internal owner (publicist, media relations lead, or account director)"
        ],
        notIncluded: "What it intentionally does NOT include: Media list building or journalist outreach. Press release writing or story pitching. Coverage guarantees or placement predictions. Crisis management or reputation repair. The Foundation Package establishes intake clarity — it doesn't replace PR expertise."
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
            label: "PR-Aware Routing Logic",
            description: "HQ Pro applies specialized logic for PR agency flows: differentiating proactive media relations vs crisis response, identifying product launches vs ongoing awareness, and routing sensitive reputation matters to senior publicists.",
            additionalText: "Crisis situations reach leadership immediately. Standard PR requests flow through proven processes.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Media Brain",
            description: "The Core Stack shares a unified memory layer:",
            hqBadges: ["Voice HQ", "Sales HQ", "Ops HQ", "Data HQ", "Marketing HQ"],
            additionalText: "Context persists across sales, onboarding, and ongoing media relations. Leadership gains visibility into coverage patterns and client health."
        },
        {
            tier: "Custom Operator",
            label: "The 'PR Agency OS' Layer",
            description: "Custom Operator is designed for scaled PR agencies, communications firms, or multi-client media relations teams requiring advanced capabilities.",
            additionalText: "Internal SOP RAG (media playbooks). Multi-client isolation. Sensitivity tier awareness. Audit-ready intake logs for coverage reporting."
        }
    ],
    bridgeLine: "Every tier reduces narrative chaos — higher tiers add PR-aware logic, media memory, and ultimately unified communications operations.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Practices deploying Operator may experience:",
        items: [
            "Zero missed inquiries — every prospect acknowledged 24/7",
            "Faster time-to-pitch — assets and angles confirmed before kickoff",
            "Cleaner handoffs — account and media teams work from the same intake truth",
            "Reduced asset chasing — PR DNA captured at first touch",
            "Protected relationships — proprietary media contacts stay on agency hardware"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts agencies from reactive firefighting to structured media operations."
    },
    complianceNote: "Operator does not write press releases, contact journalists, guarantee coverage, or manage crises. It strictly supports intake, routing, and coordination — it does not replace PR expertise or media relations execution.",
    accordionIntro: "The following examples illustrate what PR agencies can unlock at higher tiers of Operator. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands.",
    accordionIntroSubject: "PR agencies",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Capture & Structure Media Intent",
            description: "At the Foundation level, Operator captures, structures, and routes PR agency inquiries without publicist involvement.",
            exampleCapabilitiesLabel: "Example capabilities:",
            subsections: [
                {
                    title: "24/7 Inquiry Capture",
                    bullets: [
                        "Capture inbound inquiries such as 'I need press coverage' or 'Looking for a PR agency'",
                        "Zero missed prospects — every inquiry acknowledged"
                    ]
                },
                {
                    title: "PR DNA Intake",
                    bullets: [
                        "Narrative angles and story hooks",
                        "Spokesperson availability and contact preferences",
                        "Press asset readiness: headshots, bios, boilerplate, media kit",
                        "Embargo rules, crisis flags, and media tier preferences"
                    ]
                },
                {
                    title: "Media-Ready Briefs",
                    bullets: [
                        "Automatic creation of intake summary: angles, assets, availability, timing",
                        "Routing to the correct internal owner based on urgency and scope"
                    ]
                }
            ],
            footer: "At this tier, Operator functions as a 24/7 intake layer — not a publicist or media strategist."
        },
        {
            tier: "HQ Pro",
            label: "PR-Aware Routing Logic",
            description: "HQ Pro applies PR agency-specific rules to prioritize attention and protect delivery capacity.",
            highlighted: true,
            subsections: [
                {
                    title: "Engagement Type Routing",
                    bullets: [
                        "Proactive media relations vs crisis response flagged appropriately",
                        "Route to specialized teams based on urgency"
                    ]
                },
                {
                    title: "Sensitivity Detection",
                    bullets: [
                        "Crisis flags and reputation concerns escalated immediately",
                        "Standard awareness campaigns handled through normal flow"
                    ]
                },
                {
                    title: "Media Tier Classification",
                    bullets: [
                        "Tier 1 media targets (national press) identified",
                        "Trade and local media campaigns routed appropriately"
                    ]
                }
            ],
            footer: "At this tier, Operator applies rules, not judgment — surfacing signals for humans to act on."
        },
        {
            tier: "Operator HQ",
            label: "Unified Media Operations",
            description: "Operator HQ maintains shared context across the full PR agency lifecycle.",
            subsections: [
                {
                    title: "Campaign Lifecycle Memory",
                    bullets: [
                        "Context persists from inquiry through pitching and ongoing media relations",
                        "Clients never repeat their narrative angles"
                    ]
                },
                {
                    title: "Cross-Team Awareness",
                    bullets: [
                        "Account, media relations, and crisis teams reference the same intake truth",
                        "No more siloed client information"
                    ]
                },
                {
                    title: "Pattern Detection",
                    bullets: [
                        "Identify repeated friction points (asset delays, spokesperson unavailability)",
                        "Surface campaign health signals for proactive intervention"
                    ]
                }
            ],
            footer: "At this tier, Operator acts as a unified operational memory — not a media strategist."
        },
        {
            tier: "Custom Operator",
            label: "Proprietary Media Logic",
            description: "Custom Operator encodes proprietary PR methodologies and protects agency IP.",
            subsections: [
                {
                    title: "Media Playbook Retrieval (RAG)",
                    bullets: [
                        "Answer internal questions using agency's own pitching frameworks",
                        "Consistent answers on 'How do we approach tech product launches?'"
                    ]
                },
                {
                    title: "Multi-Client Isolation",
                    bullets: [
                        "Complete separation of media strategies between clients",
                        "No cross-contamination of competitive narratives"
                    ]
                },
                {
                    title: "Sensitivity Tier Awareness",
                    bullets: [
                        "Apply different intake rules for crisis vs proactive campaigns",
                        "Service levels aligned to reputation risk"
                    ]
                },
                {
                    title: "Audit-Ready Intake Logs",
                    bullets: [
                        "Structured records for coverage reporting and client reviews",
                        "Full traceability without cloud exposure"
                    ]
                }
            ],
            footer: "At this tier, Operator becomes a private, agency-owned media asset — not a generalized AI tool."
        }
    ],
    accordionDisclaimer: "All examples describe capability potential, not automated outcomes, guarantees, or coverage predictions. Human approval and oversight remain required at every stage. Operator does not contact journalists or guarantee placements."
};
