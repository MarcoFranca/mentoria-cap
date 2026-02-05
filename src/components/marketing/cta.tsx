import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LeadSheet } from "@/components/marketing/lead-sheet"
import { ArrowRight, ShieldCheck, Users2, CalendarDays } from "lucide-react"

export function CTA() {
    return (
        <section id="aplicar" className="space-y-6">
            <Card className="relative overflow-hidden rounded-2xl border bg-background/40 backdrop-blur">
                {/* Glow premium (sutil) */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-20 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-500/10 via-yellow-200/6 to-transparent blur-3xl opacity-50" />
                    <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_0%,transparent_62%)] opacity-90" />
                </div>

                <CardContent className="relative p-6 md:p-10">
                    <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
                        {/* Copy */}
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <Badge variant="secondary">Próxima turma</Badge>

                                <span className="inline-flex items-center gap-2 rounded-full border bg-background/30 px-3 py-1 text-xs text-muted-foreground">
                  <Users2 className="h-3.5 w-3.5" />
                  Grupo fechado
                </span>

                                <span className="inline-flex items-center gap-2 rounded-full border bg-background/30 px-3 py-1 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" />
                  3 meses
                </span>
                            </div>

                            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                Você quer resultado?
                                <span className="block text-foreground/75">
                  Então pare de negociar com a sua rotina.
                </span>
                            </h2>

                            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                                A entrada é por perfil e compromisso. Se você quer operar com método, execução e correção de rota,
                                aplique para a lista de prioridade. Turmas pequenas, acompanhamento real.
                            </p>

                            {/* Selo de posicionamento */}
                            <div className="flex items-start gap-3 rounded-2xl border bg-background/30 p-4">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background/25 ring-1 ring-amber-400/15">
                  <ShieldCheck className="h-4 w-4 text-amber-300/80" />
                </span>
                                <div className="space-y-1">
                                    <p className="text-sm font-medium">Isso é mentoria de execução. Não é curso.</p>
                                    <p className="text-sm text-muted-foreground">
                                        Se você quer só consumir conteúdo, é melhor não entrar.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex w-full flex-col gap-3 md:w-[280px]">
                            {/* CTA primário abre o Sheet */}
                            <LeadSheet />

                            <Button size="lg" variant="outline" className="w-full" asChild>
                                <a href="#programa" className="inline-flex items-center justify-center gap-2">
                                    Ver como funciona <ArrowRight className="h-4 w-4 opacity-70" />
                                </a>
                            </Button>

                            <p className="text-xs text-muted-foreground">
                                Leva menos de 30 segundos. Sem spam. Sem promessa vazia.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <p className="text-xs text-muted-foreground">
                Para quem é: quem executa e aceita cobrança. Não é para curiosos — nem para quem busca “atalho”.
            </p>
        </section>
    )
}
