import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    ArrowRight,
    CalendarDays,
    Target,
    Users2,
    CheckCircle2,
} from "lucide-react"

export function Offer() {
    return (
        <section id="programa" className="relative space-y-10">
            {/* Header */}
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                    <Badge variant="secondary">Como a mentoria funciona</Badge>

                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        Não é um curso dividido em módulos.
                        <span className="block text-foreground/75">
              É um processo de 3 meses para te colocar em operação.
            </span>
                    </h2>

                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        Cada mês tem foco claro, entregas práticas e acompanhamento.
                        Você executa no campo, traz o resultado (ou o erro) e ajusta.
                    </p>
                </div>

                <Button variant="outline" className="w-full md:w-auto" asChild>
                    <a href="#aplicar" className="inline-flex items-center gap-2">
                        Quero entender se faz sentido pra mim
                        <ArrowRight className="h-4 w-4 opacity-70" />
                    </a>
                </Button>
            </div>

            {/* Timeline */}
            <div className="relative grid gap-6 md:grid-cols-3">
                {/* MÊS 1 */}
                <TimelineCard
                    month="Mês 1"
                    title="Consórcio na prática"
                    focus="Clareza, base e primeiras execuções"
                    points={[
                        "Entendimento real do produto e do jogo comercial",
                        "Oferta clara: o que você vende e para quem",
                        "Primeiras abordagens e atendimentos acompanhados",
                    ]}
                    result="Você sai do improviso e começa a operar com método."
                />

                {/* MÊS 2 */}
                <TimelineCard
                    month="Mês 2"
                    title="Autoridade construída no campo"
                    focus="Posicionamento e confiança"
                    points={[
                        "Posicionamento simples e comunicável",
                        "Conteúdo funcional (sem virar influencer)",
                        "Condução consultiva e narrativa de valor",
                    ]}
                    result="Você começa a ser visto como referência, não como curioso."
                />

                {/* MÊS 3 */}
                <TimelineCard
                    month="Mês 3"
                    title="Performance e consistência"
                    focus="Rotina, métricas e escala"
                    points={[
                        "Rotina semanal de geração de oportunidades",
                        "Follow-up, pipeline e previsibilidade",
                        "Ajustes finos para manter performance no longo prazo",
                    ]}
                    result="Você opera com ritmo, controle e clareza."
                />
            </div>

            {/* O que acontece toda semana */}
            <div className="grid gap-4 md:grid-cols-3">
                <WeeklyCard
                    icon={<CalendarDays className="h-4 w-4 text-amber-300/80" />}
                    title="Encontros semanais"
                    desc="Direcionamento, análise do que foi feito e definição clara da próxima semana."
                />

                <WeeklyCard
                    icon={<Users2 className="h-4 w-4 text-amber-300/80" />}
                    title="Grupo fechado"
                    desc="Ambiente controlado, sem curiosos. Pessoas executando e sendo cobradas."
                />

                <WeeklyCard
                    icon={<Target className="h-4 w-4 text-amber-300/80" />}
                    title="Execução guiada e responsável"
                    desc="Desafios práticos de posicionamento, prospecção, oferta e follow-up."
                />
            </div>

            {/* Proof de fechamento */}
            <div className="flex items-start gap-3 rounded-2xl border bg-background/40 p-4 md:p-5">
        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background/25 ring-1 ring-amber-400/15">
          <CheckCircle2 className="h-4 w-4 text-amber-300/80" />
        </span>
                <div className="space-y-1">
                    <p className="text-sm font-medium">
                        Você não avança por assistir.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Você avança por executar, errar, ajustar e repetir — com acompanhamento.
                    </p>
                </div>
            </div>
        </section>
    )
}

/* =======================
   COMPONENTES AUXILIARES
======================= */

function TimelineCard({
                          month,
                          title,
                          focus,
                          points,
                          result,
                      }: {
    month: string
    title: string
    focus: string
    points: string[]
    result: string
}) {
    return (
        <Card className="relative rounded-2xl border bg-background/40 backdrop-blur">
            <CardContent className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-amber-400/80">{month}</span>
                    <span className="text-xs text-muted-foreground">{focus}</span>
                </div>

                <div className="space-y-1">
                    <h3 className="text-base font-semibold">{title}</h3>
                </div>

                <ul className="space-y-2 text-sm text-muted-foreground">
                    {points.map((p, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400/70" />
                            <span>{p}</span>
                        </li>
                    ))}
                </ul>

                <div className="rounded-xl border bg-background/30 px-3 py-2 text-xs text-muted-foreground">
                    <span className="text-foreground/80">Resultado:</span> {result}
                </div>
            </CardContent>
        </Card>
    )
}

function WeeklyCard({
                        icon,
                        title,
                        desc,
                    }: {
    icon: React.ReactNode
    title: string
    desc: string
}) {
    return (
        <Card className="rounded-2xl border bg-background/40 backdrop-blur">
            <CardContent className="space-y-3 p-5">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background/25 ring-1 ring-amber-400/15">
                    {icon}
                </div>
                <h4 className="text-sm font-semibold">{title}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </CardContent>
        </Card>
    )
}
