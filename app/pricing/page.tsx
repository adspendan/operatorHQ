import type { Metadata } from "next"
import PricingClientPage from "./pricing-client"

export const metadata: Metadata = {
  title: "Pricing | OperatorHQ — On-Prem AI Agents + OperatorOS",
  description:
    "OperatorHQ pricing for on-prem AI agent infrastructure: Foundation Package ($10k), Core Vitals (+$15k), HQ Pro (Industry-Specific), Operator HQ (starting $69k), and Custom Operator (enterprise).",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "OperatorHQ Pricing — On-Prem AI Agents + OperatorOS",
    description:
      "Foundation ($10k) → Core Vitals (+$15k) → HQ Pro (Industry-Specific) → Operator HQ (starting $69k) → Custom Operator (enterprise).",
    url: "/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OperatorHQ Pricing",
    description:
      "On-prem AI agents + OperatorOS pricing: Foundation, Core Vitals, HQ Pro, Operator HQ, Custom Operator.",
  },
}

// JSON-LD structured data for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an Operator Node?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An Operator Node is an on-prem Mac Studio that runs OperatorOS and your deployed HQs. It sits inside your business — your data never leaves your premises unless you configure external integrations.",
      },
    },
    {
      "@type": "Question",
      name: "What is OperatorOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OperatorOS is the control plane that coordinates your AI agents. It handles routing, context sharing, handoffs, audit trails, and approvals across all deployed HQs.",
      },
    },
    {
      "@type": "Question",
      name: "What determines which HQ I start with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You choose based on your immediate need: Voice HQ handles inbound calls/sales, Knowledge HQ handles internal staff queries/policy. You can add the other for +$2,500.",
      },
    },
    {
      "@type": "Question",
      name: "Is OperatorHQ on-prem or cloud?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On-prem by default. Your Operator Node runs locally. Cloud or hybrid configurations are available in Custom Operator builds (as scoped).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need ongoing support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The system runs without us after deployment. Optional support ($2,000/month) provides priority response and updates — cancel anytime, system keeps running.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in Foundation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operator Node (Mac Studio), OperatorOS activation, core coordination layer, and Choice of Voice HQ OR Knowledge HQ.",
      },
    },
    {
      "@type": "Question",
      name: "What systems can you integrate with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CRMs (HubSpot, Salesforce), calendars (Google, Outlook), phone systems (Twilio, VAPI), email/SMS providers, ticketing systems, and payment processors — scoped per deployment.",
      },
    },
  ],
}

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "OperatorHQ",
  description:
    "On-prem AI agent infrastructure and business operating system with workflow routing, CRM integration, and AI voice agents.",
  provider: {
    "@type": "Organization",
    name: "OperatorHQ",
    url: "https://operatorhq.ai",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "OperatorHQ Pricing Tiers",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Foundation Package",
        description: "Operator Node + OperatorOS + 1 Starter HQ deployment",
        price: "10000",
        priceCurrency: "USD",
      },

      {
        "@type": "Offer",
        name: "Core Vitals",
        description: "Connect multiple HQs via OperatorOS with shared routing and objects",
        price: "15000",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "HQ Pro (Industry-Specific)",
        description: "Industry-specific templates (dental, legal, roofing, etc.)",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "25000",
          maxPrice: "100000",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        name: "Operator HQ",
        description: "Bespoke build with deep integrations and governance",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "69000",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "Offer",
        name: "Custom Operator",
        description: "Enterprise governance, security, and scale",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "250000",
          priceCurrency: "USD",
        },
      },
    ],
  },
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }}
      />
      <PricingClientPage />
    </>
  )
}
