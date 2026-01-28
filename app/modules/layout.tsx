import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "HQ Modules | Operator HQ",
    description: "Modular operating system for business. Starter HQs for voice, intake, scheduling, sales, and operations — coordinated through OperatorOS.",
}

export default function ModulesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
