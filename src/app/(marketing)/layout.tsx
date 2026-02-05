import type { Metadata } from "next"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ClientFx } from "@/components/marketing/client-fx"

export const metadata: Metadata = {
    title: "Mentoria Método C.A.P. | Wagner Gorgulho",
    description:
        "Mentoria premium de 3 meses com método, execução e acompanhamento para formar profissionais de consórcio.",
}

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <body className="min-h-screen bg-neutral-950 text-foreground isolate">
        {/* BACKGROUND GLOBAL */}
        <div className="pointer-events-none fixed inset-0 z-0">
            <div
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.045),transparent_62%)]"/>
            <div
                className="absolute -top-40 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500/8 via-yellow-200/5 to-transparent blur-[140px] opacity-40"/>
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.72)_100%)]"/>
            <div
                className="absolute inset-0 opacity-[0.2] mix-blend-soft-light bg-[url('/images/noise.png')] [background-size:260px_260px]"/>
        </div>

        {/* GOLD DUST GLOBAL (client-only) */}
        <ClientFx/>

        {/* CONTEÚDO */}
        <div className="relative z-10">
            <ThemeProvider>{children}</ThemeProvider>
        </div>
        </body>
        </html>
    )
}
