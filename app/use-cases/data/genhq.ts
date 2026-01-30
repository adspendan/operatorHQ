import { UseCase } from "../types";

export const genhqUseCase: UseCase = {
    useCaseCategory: "profile",
    id: "genhq",
    label: "GenHQ — Generative Media Headquarters",
    headline: "From Creative Entropy to Centralized Generative Control",
    magicMoment: "The moment a generative media request is executed with full brand context, asset memory, and governance boundaries — producing consistent, owned output without tool sprawl or duplicated effort. This is the Brand-Aware Generation.",
    problem: "Creators, entrepreneurs, and teams increasingly rely on generative media tools for images, video, audio, copy, and design — but these tools are fragmented, cloud-dependent, and disconnected from brand rules, asset history, and operational context. This leads to duplicated work, inconsistent outputs, unclear ownership of generated assets, and growing risk around data usage, licensing, and governance. As production volume increases, so does creative entropy.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Creators Start",
        description: "Most creators and teams begin with the Foundation Package, installing GenHQ as a Private Generative Media Hub on dedicated hardware — ensuring creative assets, brand context, and generation history remain under owner control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ providing centralized access point for generative media workflows (image, video, audio, text)"
        ],
        capabilities: [
            "Centralized access point for generative media workflows across formats",
            "Basic asset organization and session-level memory",
            "Owner-controlled access and usage boundaries",
            "Generation request capture and routing to appropriate tools or models"
        ],
        notIncluded: "What it explicitly does NOT include: Advanced brand memory or long-term asset intelligence. Multi-agent creative orchestration. Automated publishing, licensing logic, or external platform integrations. All creative decisions remain human-led."
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
            label: "Creative Agent Orchestration",
            description: "HQ Pro provides advanced creative agent orchestration: ideation agent, editor agent, compliance agent. Sub-systems for specific use cases (ads, social content, long-form media, product visuals). Asset reuse intelligence and pattern recognition across projects. Optional integration with selected distribution or storage platforms.",
            additionalText: "Complex creative pipelines become manageable and repeatable.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Creative Operating System",
            description: "The Core Stack shares memory and context:",
            hqBadges: ["Image HQ", "Video HQ", "Audio HQ", "Copy HQ", "Brand HQ"],
            additionalText: "Fully unified creative operating system across media types. Human-in-the-loop controls for approval, override, and creative direction. Cross-project memory and performance context. Governance layers for usage rules, permissions, and data boundaries."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Creative Infrastructure",
            description: "Custom Operator enables bespoke GenHQ architecture tailored to unique creative pipelines — custom models, tools, or on-device deployments with deep integration into proprietary workflows.",
            additionalText: "Extended governance, auditability, or privacy requirements. Enterprise-grade creative infrastructure."
        }
    ],
    bridgeLine: "Every tier increases creative leverage — higher tiers add brand awareness, agent orchestration, and ultimately unified governance across all generative workflows.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Creators and teams deploying GenHQ may experience:",
        items: [
            "More consistent creative output aligned to defined brand rules",
            "Reduced tool sprawl and duplicated creative effort",
            "Clearer ownership and organization of generated media assets",
            "Improved creative velocity without sacrificing control or oversight",
            "100% on-premise asset data — full ownership and governance",
            "Cross-format creative memory that compounds over time"
        ],
        footer: "Outcomes vary by deployment level, but the system consistently shifts creators from fragmented tool usage to centralized generative control."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): GenHQ is a technical infrastructure and workflow system. It does not provide legal, financial, or licensing advice, and does not guarantee creative performance, audience outcomes, or commercial results. All creative and business decisions remain human-led.",
    accordionIntro: "The following examples illustrate what creators and teams can unlock at higher tiers of GenHQ. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are workflow and infrastructure enablements.",
    accordionIntroSubject: "creators and teams",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Single Hub for Generation + Session Context + Audit Trail",
            description: "At the Foundation level, GenHQ serves as a centralized, owner-controlled starting point for generative media creation — focused on basic infrastructure, ownership, and project organization.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Single Hub for Generation",
                    bullets: [
                        "A unified 'launch point' for generating images, video snippets, audio, and copy via approved tools (local models and/or API-based)",
                        "A consistent intake pattern for prompts/briefs so output isn't scattered across browser tabs and accounts",
                        "A simple 'project workspace' concept (campaign name → assets → prompt notes → exports)"
                    ]
                },
                {
                    title: "Session-Level Context",
                    bullets: [
                        "Basic project context retained during a working session (e.g., 'same subject, same style constraints, same framing cues')",
                        "Repeatable prompt scaffolds per project (e.g., 'product photo → lifestyle scene → 1:1, 9:16, 16:9 variations')",
                        "Lightweight style reminders stored with the project (brand tone notes, preferred descriptors, disallowed terms)"
                    ]
                },
                {
                    title: "Media 'Audit Trail' Capture",
                    bullets: [
                        "Store generation metadata alongside assets: prompt text, seed references when available, model/tool used, timestamps, version notes",
                        "Basic naming and organization conventions (e.g., campaign_assetType_version_date)",
                        "Simple 'export packet' concept (finals + prompt notes + generation info) for sharing internally"
                    ]
                },
                {
                    title: "Owner-Controlled Environment",
                    bullets: [
                        "Local storage defaults (where applicable) and explicit controls around what gets sent to third-party APIs",
                        "Basic access control (who can generate, who can export, who can delete)",
                        "A starter 'sensitive content' workflow (keep unreleased concepts or private assets inside the private environment)"
                    ]
                }
            ],
            footer: "Does not include advanced brand memory, multi-agent orchestration, or external platform integrations."
        },
        {
            tier: "HQ Pro",
            label: "Ad-Creative Workflows + Social Pipelines + Product Visuals",
            description: "At this level, GenHQ supports specialized orchestration for specific production modes and content types — often with multiple agents and structured studio pipelines.",
            highlighted: true,
            subsections: [
                {
                    title: "Ad-Creative Production Workflows",
                    bullets: [
                        "A structured variation generator (hooks, backgrounds, CTA phrasing, visual framing) using predefined rules",
                        "'Batch generation' patterns (e.g., 20 headline variants + 20 visuals + 10 thumbnails) with traceability to a single brief",
                        "Optional linkages to performance context if you provide it (labeling assets by campaign theme and outcome tags)"
                    ]
                },
                {
                    title: "Social Content Studio Pipelines",
                    bullets: [
                        "A long-form → short-form pipeline pattern (clip suggestions, caption drafts, thumbnail directions)",
                        "Multiple format outputs from a single creative seed (9:16 / 1:1 / 16:9 packaging)",
                        "A 'series kit' workflow (consistent intro frames, lower-third prompts, recurring visual motifs)"
                    ]
                },
                {
                    title: "Product Visual Workflows",
                    bullets: [
                        "Product image packaging flows (background removal, lighting/scene variants, consistent angles)",
                        "Environment/styling batch prompts (e.g., '50 scene variants consistent with Brand Visual DNA')",
                        "'SKU-aware' organization (mapping asset sets to product IDs or collections you define)"
                    ]
                },
                {
                    title: "Voice and Persona Governance Patterns",
                    bullets: [
                        "Controlled storage and usage boundaries for voice assets where permitted by your tools and policies",
                        "Authorization rules (who can request voice generation, who can approve outputs)",
                        "Logging of voice usage events (inputs, outputs, approvals) as an internal audit trail"
                    ]
                },
                {
                    title: "Multi-Brand Partitioning (Lightweight)",
                    bullets: [
                        "Separate brand 'vaults' within the same environment (isolated references, templates, and rules per brand)",
                        "A 'brand switching' workflow to reduce accidental cross-brand contamination"
                    ]
                }
            ],
            footer: "Does not include automated publishing authority, performance guarantees, or external decision-making."
        },
        {
            tier: "Operator HQ",
            label: "Human-in-the-Loop Control Center + Cross-Project Intelligence",
            description: "At this level, GenHQ functions as a unified creative operating system — connecting workflows, approvals, and reusable intelligence across projects, teams, and media types.",
            subsections: [
                {
                    title: "Human-in-the-Loop Creative Control Center",
                    bullets: [
                        "A central review queue for drafts (approve, request revision, archive, or route to a collaborator)",
                        "Approval states (draft → review → approved → exported/published-ready)",
                        "'Owner override' controls for style constraints, disallowed concepts, or special campaign directions"
                    ]
                },
                {
                    title: "Cross-Project Intelligence (Within Your System)",
                    bullets: [
                        "Internal pattern tracking based on signals you choose to store (which style kits are used most, which assets are reused)",
                        "A structured way to compare creative themes across projects (labeling: 'dark aesthetic,' 'minimal,' 'UGC-style,' 'premium studio')",
                        "Suggestions that surface from your own library ('similar past assets,' 'previously approved prompt stacks')"
                    ]
                },
                {
                    title: "Asset Reuse and Remix Systems",
                    bullets: [
                        "A 'remix catalog' (approved assets + how to adapt them into new formats or campaigns)",
                        "Repackaging workflows (turn a hero image into a carousel set, a thumbnail kit, a story sequence)",
                        "Controlled reuse policies (what can be reused across brands, what must remain brand-specific)"
                    ]
                },
                {
                    title: "Governance and Boundary Enforcement",
                    bullets: [
                        "Tool-level rules (what tools can be used for what projects)",
                        "Data boundary rules (what sources can be referenced, what must remain local-only)",
                        "Activity logs for generation, export, approvals, and deletions"
                    ]
                }
            ],
            footer: "Does not include automated commercial decision-making, licensing authority, or content moderation authority."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Studio Pipelines + Private Models + IP Vault Patterns",
            description: "At this level, GenHQ can be tailored into a bespoke studio architecture — potentially including private model work, specialized pipelines, and stronger auditing requirements.",
            subsections: [
                {
                    title: "Bespoke Studio Pipelines",
                    bullets: [
                        "Custom production flows for complex media types (product launch kits, serialized content packages, multi-channel ad systems)",
                        "Custom intake layers (brief forms, structured creative specs, asset checklists)",
                        "Custom export packaging (folders, naming conventions, delivery bundles for editors or partners)"
                    ]
                },
                {
                    title: "Private Model Options (Where Feasible and Appropriate)",
                    bullets: [
                        "Support for private, brand-scoped model components (embeddings/LoRA-style adapters) when your data and toolchain allow",
                        "Training data governance patterns (what is included, what is excluded, retention and access policies)",
                        "Model versioning concepts (model v1/v2 with documented differences and usage constraints)"
                    ]
                },
                {
                    title: "Stronger Auditability and 'IP Vault' Patterns",
                    bullets: [
                        "Immutable-style logging patterns where required (generation metadata, approvals, export events)",
                        "Asset provenance packaging for internal recordkeeping (how an asset was produced, by whom, using what inputs)",
                        "Access review workflows (who accessed what, when, and for what purpose)"
                    ]
                },
                {
                    title: "Advanced Multi-Brand Isolation",
                    bullets: [
                        "Hard boundaries between brand vaults (separate references, templates, permissions)",
                        "Cross-brand sharing rules (explicit allowlists, review requirements before reuse)",
                        "Partitioned 'digital identity' controls (voice/persona assets and their permitted contexts)"
                    ]
                },
                {
                    title: "Custom Integrations and On-Device Requirements",
                    bullets: [
                        "Integration with your preferred storage, DAM, or internal tooling where feasible",
                        "Specialized on-device deployment constraints (when local-only operation is a priority)",
                        "Optional enterprise-grade controls (SSO patterns, device management constraints, custom dashboards)"
                    ]
                }
            ],
            footer: "Does not include licensing determination, legal compliance verification, or content moderation authority. GenHQ is not a legal, financial, or licensing advisor."
        }
    ],
    accordionDisclaimer: "The examples above describe what OperatorHQ can support at each tier for a generative media 'headquarters' setup. Specific capabilities depend on your selected tools, data sources, hosting choices (local vs API), and how your organization prefers to approve, store, and distribute creative assets. Nothing here is a promise of performance, speed, or commercial outcomes. OperatorHQ is not a legal, financial, or licensing advisor. GenHQ examples describe operational workflows and infrastructure patterns only, and should be evaluated against your own policies, rights, and tool terms."
};
