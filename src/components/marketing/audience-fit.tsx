import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {CheckCircle2, ShieldCheck, XCircle} from "lucide-react"

export function AudienceFit() {
    return (
        <section className="relative space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <Badge variant="secondary">Critérios de entrada</Badge>

                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Esta mentoria não é para todo mundo.
                </h2>

                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    A Mentoria Método C.A.P. é seletiva porque exige execução, exposição e
                    compromisso semanal. Leia com atenção antes de aplicar.
                </p>
            </div>

            {/* Grid */}
            <div className="grid gap-4 md:grid-cols-2">
                {/* PARA QUEM É */}
                <Card className="rounded-2xl border bg-background/40 backdrop-blur">
                    <CardContent className="space-y-4 p-5">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-amber-400/80"/>
                            <h3 className="text-base font-semibold">Para quem é</h3>
                        </div>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• Profissionais em transição de carreira que querem estrutura real</li>
                            <li>• Iniciantes dispostos a executar mesmo sem experiência prévia</li>
                            <li>• Pessoas dispostas a assumir responsabilidade pela própria execução, com suporte e direção</li>
                            <li>• Quem quer construir autoridade no campo, não na teoria</li>
                            <li>• Quem busca consistência e identidade profissional</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* PARA QUEM NÃO É */}
                <Card className="rounded-2xl border bg-background/40 backdrop-blur">
                    <CardContent className="space-y-4 p-5">
                        <div className="flex items-center gap-2">
                            <XCircle className="h-5 w-5 text-rose-500/70"/>
                            <h3 className="text-base font-semibold">Para quem não é</h3>
                        </div>

                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>• Quem busca atalhos ou “dinheiro rápido”</li>
                            <li>• Quem prefere consumir conteúdo sem executar</li>
                            <li>• Quem não pode se comprometer semanalmente</li>
                            <li>• Quem espera motivação externa para agir</li>
                            <li>• Quem quer só “mais informação”</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            {/* Nota estratégica (mata objeções sem parecer venda) */}
            <div className="flex items-start gap-3 rounded-2xl border bg-background/40 p-4 md:p-5">
  <span
      className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background/25 ring-1 ring-amber-400/15">
    <ShieldCheck className="h-4 w-4 text-amber-300/80"/>
  </span>

                <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="text-foreground/80 font-medium">Critério de entrada:</span>
                    <br/> você não precisa
                    de experiência prévia, network ou SUSEP para aplicar.
                    O que você precisa é compromisso com execução e aprendizado no campo.
                </p>
            </div>

        </section>
    )
}
