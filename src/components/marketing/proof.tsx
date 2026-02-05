import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Workflow, Crosshair, ClipboardCheck } from "lucide-react"

export function Proof() {
    return (
        <section className="relative space-y-8">
            {/* Header */}
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                    <Badge variant="secondary">Por que isso funciona</Badge>

                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        Autoridade não é fala bonita.
                        <span className="block text-foreground/75">
              É método, campo e consistência — com correção de rota.
            </span>
                    </h2>

                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        A Mentoria Método C.A.P. existe para tirar você do improviso e colocar uma operação em pé:
                        rotina semanal, entregáveis claros e acompanhamento real. Você não vai “assistir conteúdo”.
                        Você vai <span className="text-foreground/80">executar</span>.
                    </p>
                </div>

                <Button variant="outline" className="w-full md:w-auto" asChild>
                    <a href="#programa" className="inline-flex items-center gap-2">
                        Ver a estrutura do método <ArrowRight className="h-4 w-4 opacity-70" />
                    </a>
                </Button>
            </div>

            {/* Proof bar (sinais, sem precisar de números) */}
            <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border bg-background/40 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          Processo semanal com entregas
        </span>
                <span className="inline-flex items-center gap-2 rounded-full border bg-background/40 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          Grupo fechado + acompanhamento
        </span>
                <span className="inline-flex items-center gap-2 rounded-full border bg-background/40 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          Execução no campo (sem hype)
        </span>
                <span className="inline-flex items-center gap-2 rounded-full border bg-background/40 px-3 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          Correção de rota contínua
        </span>
            </div>

            {/* Cards premium */}
            <div className="grid gap-4 md:grid-cols-3">
                <PremiumCard
                    icon={<Crosshair className="h-4 w-4 text-amber-300/80" />}
                    title="Clareza de posicionamento"
                    desc="Você entende o jogo: quem você é no mercado, qual promessa sustenta e por que alguém escolhe você."
                    micro="Entrega: narrativa + oferta + perfil de cliente"
                />

                <PremiumCard
                    icon={<Workflow className="h-4 w-4 text-amber-300/80" />}
                    title="Ritmo semanal de execução"
                    desc="Sem motivação e sem achismo. Você entra numa rotina comercial com tarefas práticas, prazos e revisão."
                    micro="Entrega: plano da semana + ações no campo"
                />

                <PremiumCard
                    icon={<ClipboardCheck className="h-4 w-4 text-amber-300/80" />}
                    title="Acompanhamento e ajuste"
                    desc="Você não fica sozinho. Correção de rota em cima do que você fez — não do que você pretende fazer."
                    micro="Entrega: feedback + próximos passos (sem enrolação)"
                />
            </div>

            {/* Selo “premium” (sem parecer marketing barato) */}
            <div className="flex items-start gap-3 rounded-2xl border bg-background/40 p-4 md:p-5">
        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background/25 ring-1 ring-amber-400/15">
          <ShieldCheck className="h-4 w-4 text-amber-300/80" />
        </span>
                <div className="space-y-1">
                    <p className="text-sm font-medium">
                        Isso é mentoria de execução. Não é “aula”.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Você entra para operar com padrão. Se você quer só consumir conteúdo, essa mentoria não é pra você.
                    </p>
                </div>
            </div>
        </section>
    )
}

function PremiumCard({
                         icon,
                         title,
                         desc,
                         micro,
                     }: {
    icon: React.ReactNode
    title: string
    desc: string
    micro: string
}) {
    return (
        <Card className="rounded-2xl border bg-background/40 backdrop-blur">
            <CardHeader className="space-y-2">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border bg-background/25 ring-1 ring-amber-400/15">
                    {icon}
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <div className="rounded-xl border bg-background/30 px-3 py-2 text-xs text-muted-foreground">
                    <span className="text-foreground/80">Microprova:</span> {micro}
                </div>
            </CardContent>
        </Card>
    )
}
