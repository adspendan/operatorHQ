import { UseCase } from "../types";

export const knowledgehqUseCase: UseCase = {
    useCaseCategory: "capability",
    id: "knowledgehq",
    label: "Knowledge HQ",
    headline: "From Scattered Information to Centralized Knowledge Infrastructure",
    magicMoment: "The moment you retrieve exactly the information you need — with source context, traceability, and connection to related knowledge — from your own organized knowledge system. This is Owned Knowledge Retrieval.",
    problem: "Information scatters across documents, notes, emails, and cloud services. Existing AI tools have no memory of your knowledge and no source traceability. Semantic search requires external services with no ownership guarantees. Knowledge compounds in theory but fragments in practice. Without centralized infrastructure, knowledge retrieval becomes guesswork.",
    foundationPackage: {
        badgeLabel: "Infrastructure Ready",
        title: "Where Most Knowledge Systems Start",
        description: "Most knowledge systems begin with the Foundation Package, installing Knowledge HQ as a private knowledge infrastructure on dedicated hardware — ensuring documents, notes, and organizational knowledge remain under owner control.",
        included: [
            "Operator Node (Mac Studio) — on-prem runtime (as scoped)",
            "OperatorOS activated (control plane app)",
            "Core Stack (Lite) included — baseline intake → routing → handoff loop",
            "One core HQ providing document ingestion, indexing, and basic retrieval"
        ],
        capabilities: [
            "Document ingestion and indexing for supported formats",
            "Basic semantic retrieval across ingested content",
            "Source traceability for all retrievals",
            "Owner-controlled knowledge boundaries"
        ],
        notIncluded: "What it explicitly does NOT include: Truth verification or authoritative fact-checking. Guaranteed accuracy or completeness. External knowledge integration without explicit configuration. Knowledge HQ depends entirely on user-provided content."
    },
    expansionPath: [
        {
            tier: "HQ Pro",
            label: "Team Knowledge + Access Controls",
            description: "HQ Pro adds multi-user knowledge infrastructure: team knowledge bases, role-based access, and controlled sharing patterns.",
            additionalText: "Organizational knowledge becomes accessible with appropriate boundaries.",
            highlighted: true
        },
        {
            tier: "Operator HQ",
            label: "Unified Knowledge Operating System",
            description: "All knowledge HQs share context and retrieval:",
            hqBadges: ["Document HQ", "Research HQ", "Reference HQ", "Archive HQ"],
            additionalText: "Fully unified knowledge infrastructure. Cross-domain retrieval. Compounding organizational intelligence."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Knowledge Infrastructure",
            description: "Custom Operator enables fully tailored knowledge systems — specialized ingestion pipelines, custom taxonomies, and enterprise integration requirements.",
            additionalText: "Enterprise-grade knowledge control for complex organizations."
        }
    ],
    bridgeLine: "Every tier increases knowledge leverage — higher tiers add connection intelligence, team access, and ultimately unified knowledge retrieval across domains.",
    outcomes: {
        title: "Outcomes (Modeled / Typical)",
        intro: "Organizations deploying Knowledge HQ may experience:",
        items: [
            "Faster retrieval of relevant information",
            "Clear source traceability for all knowledge",
            "Reduced duplication and contradictory information",
            "Full ownership of knowledge infrastructure",
            "100% on-premise knowledge data",
            "Compounding organizational intelligence over time"
        ],
        footer: "Outcomes vary by content quality and organization, but the system consistently shifts from scattered information to centralized knowledge infrastructure."
    },
    complianceNote: "SCOPE BOUNDARY (Non-Negotiable): Knowledge HQ is knowledge infrastructure. It is NOT a truth engine. It is NOT an authoritative source of facts. It depends entirely on user-provided content. Accuracy depends on source quality. All knowledge decisions remain human-led.",
    accordionIntro: "The following examples illustrate what organizations can unlock at higher tiers of Knowledge HQ. They are not guarantees and not included by default — they demonstrate what becomes possible as capability expands. All capabilities are infrastructure enablements.",
    accordionIntroSubject: "organizations",
    accordionTiers: [
        {
            tier: "Foundation Package",
            label: "Document Ingestion + Semantic Retrieval + Source Traceability",
            description: "At the Foundation level, Knowledge HQ provides basic knowledge infrastructure.",
            exampleCapabilitiesLabel: "Example capabilities include:",
            subsections: [
                {
                    title: "Document Ingestion",
                    bullets: [
                        "Ingest documents in supported formats (PDF, text, markdown, etc.)",
                        "Automatic indexing for retrieval"
                    ]
                },
                {
                    title: "Semantic Retrieval",
                    bullets: [
                        "Natural language queries across ingested content",
                        "Relevance-based result surfacing"
                    ]
                },
                {
                    title: "Source Traceability",
                    bullets: [
                        "Every retrieval linked to source document",
                        "Context preservation across queries"
                    ]
                },
                {
                    title: "Owner-Controlled Boundaries",
                    bullets: [
                        "Knowledge boundaries defined by what you ingest",
                        "No external knowledge without explicit configuration"
                    ]
                }
            ],
            footer: "Does not verify truth, guarantee accuracy, or include external knowledge sources."
        },
        {
            tier: "HQ Pro",
            label: "Team Knowledge + Role-Based Access + Controlled Sharing",
            description: "HQ Pro provides infrastructure for team and organizational knowledge.",
            highlighted: true,
            subsections: [
                {
                    title: "Team Knowledge Bases",
                    bullets: [
                        "Shared knowledge infrastructure for teams",
                        "Collaborative ingestion and organization"
                    ]
                },
                {
                    title: "Role-Based Access",
                    bullets: [
                        "Different access levels for different roles",
                        "Sensitive content protection"
                    ]
                },
                {
                    title: "Controlled Sharing",
                    bullets: [
                        "Share specific knowledge sets externally",
                        "Audit trails for knowledge access"
                    ]
                },
                {
                    title: "Knowledge Curation Workflows",
                    bullets: [
                        "Review and approval for knowledge additions",
                        "Quality control infrastructure"
                    ]
                }
            ],
            footer: "Does not replace human knowledge management or guarantee organizational accuracy."
        },
        {
            tier: "Operator HQ",
            label: "Unified Knowledge Operating System",
            description: "At the Operator HQ level, all knowledge systems operate as one coherent infrastructure.",
            subsections: [
                {
                    title: "Cross-Domain Retrieval",
                    bullets: [
                        "Query across all knowledge domains simultaneously",
                        "Unified search experience"
                    ]
                },
                {
                    title: "Organizational Intelligence",
                    bullets: [
                        "Patterns emerge across knowledge domains",
                        "Institutional memory compounds over time"
                    ]
                },
                {
                    title: "Knowledge Governance",
                    bullets: [
                        "Policies for retention, access, and lifecycle",
                        "Compliance-aware knowledge management"
                    ]
                },
                {
                    title: "Integration Patterns",
                    bullets: [
                        "Knowledge surfaces in workflows where needed",
                        "API access for other systems"
                    ]
                }
            ],
            footer: "Does not create authoritative truth or replace expert judgment."
        },
        {
            tier: "Custom Operator",
            label: "Bespoke Knowledge Infrastructure",
            description: "Custom Operator enables fully tailored knowledge systems for unique requirements.",
            subsections: [
                {
                    title: "Custom Ingestion Pipelines",
                    bullets: [
                        "Specialized formats and sources",
                        "Integration with legacy systems"
                    ]
                },
                {
                    title: "Custom Taxonomies",
                    bullets: [
                        "Organization-specific classification",
                        "Industry or domain vocabularies"
                    ]
                },
                {
                    title: "Enterprise Integration",
                    bullets: [
                        "SSO and access management",
                        "Compliance and audit requirements"
                    ]
                },
                {
                    title: "Knowledge Preservation",
                    bullets: [
                        "Long-term retention strategies",
                        "Migration and portability"
                    ]
                }
            ],
            footer: "Depends entirely on user-provided content quality and organization."
        }
    ],
    accordionDisclaimer: "Knowledge HQ is infrastructure for knowledge organization and retrieval. It is not a truth engine or authoritative fact source. It depends entirely on user-provided content. Accuracy and completeness depend on source quality and ingestion. All knowledge decisions remain human-led. Knowledge data remains on-premise under owner control."
};
