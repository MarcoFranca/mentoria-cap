"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet"
import { LeadForm } from "@/components/marketing/lead-form"
import { ArrowRight } from "lucide-react"

export function LeadSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="lg" className="w-full sm:w-auto">
                    Quero aplicar para a Mentoria <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </SheetTrigger>

            {/*
        side="bottom" = drawer
        - overflow-hidden no content
        - padding externo (px)
        - centraliza com max-width
      */}
            <SheetContent
                side="bottom"
                className="
          p-0
          border-t
          bg-background/95
          backdrop-blur
          rounded-t-2xl
          overflow-hidden
        "
            >
                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"/>

                {/* Wrapper centralizado + padding lateral */}
                <div className="mx-auto w-full max-w-3xl px-4 pb-4 pt-4 sm:px-6">
                    <SheetHeader className="space-y-2 px-1">
                        <SheetTitle className="text-xl">Lista de prioridade</SheetTitle>
                        <SheetDescription>
                            Preencha para entrar na lista. Turmas pequenas, acompanhamento real.
                        </SheetDescription>
                    </SheetHeader>

                    {/* Área scrollável (resolve “comprido em telas menores”) */}
                    <div className="mt-4 max-h-[70vh] overflow-auto rounded-2xl border bg-background/35 p-4 sm:p-5">
                        <LeadForm/>

                        <p className="mt-4 text-xs text-muted-foreground">
                            Leva menos de 30 segundos. Sem spam.
                        </p>
                    </div>

                    {/* CTA fixo (opcional): se o LeadForm já tem botão, ignore esta parte.
              Se quiser o botão sempre visível, a gente move o submit pra fora do LeadForm.
              Por enquanto, deixei somente o scroll + centralização, que resolve o seu problema já.
          */}
                </div>
            </SheetContent>
        </Sheet>
    )
}
