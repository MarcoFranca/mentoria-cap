import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LeadSheet } from "@/components/marketing/lead-sheet"

export function MarketingHeader() {
    return (
        <header className="sticky top-0 z-50">
            <div className="border-b bg-black/35 backdrop-blur supports-[backdrop-filter]:bg-black/25">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <a href="#top" className="flex items-center gap-3 cursor-pointer">
                        <Image
                            src="/images/Logo-Horizontal-Transparente.png"
                            alt="Mentoria Método C.A.P."
                            width={140}
                            height={36}
                            priority
                            className="h-16 w-auto"
                        />
                    </a>

                    {/* Ações */}
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                            <a href="#programa">Programa</a>
                        </Button>

                        <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                            <a href="#faq">Dúvidas</a>
                        </Button>

                        {/* CTA principal → Sheet */}
                        <LeadSheet />
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
            </div>
        </header>
    )
}
