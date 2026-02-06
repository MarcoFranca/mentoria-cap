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

export type LeadSheetProps = {
    size?: "sm" | "lg"
    className?: string
    label?: string
}

export function LeadSheet({
                              size = "lg",
                              className,
                              label,
                          }: LeadSheetProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size={size} className={className}>
                    {label ?? (
                        <>
                            <span className="hidden sm:inline">Quero aplicar para a Mentoria</span>
                            <span className="sm:hidden">Aplicar</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </SheetTrigger>

            <SheetContent
                side="bottom"
                className="p-0 border-t bg-background/95 backdrop-blur rounded-t-2xl overflow-hidden"
            >
                <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

                <div className="mx-auto w-full max-w-3xl px-4 pb-4 pt-4 sm:px-6">
                    <SheetHeader className="space-y-2 px-1">
                        <SheetTitle className="text-xl">
                            Aplicação — Mentoria Método C.A.P.
                        </SheetTitle>
                        <SheetDescription>
                            Preencha para avaliação. Turmas pequenas, acompanhamento real.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="mt-4 max-h-[70vh] overflow-auto rounded-2xl border bg-background/35 p-4 sm:p-5">
                        <LeadForm />
                        <p className="mt-4 text-xs text-muted-foreground">
                            Leva menos de 30 segundos. Sem spam.
                        </p>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
