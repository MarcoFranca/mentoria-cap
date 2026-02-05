import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LeadSheet } from "@/components/marketing/lead-sheet"
import {
    ArrowRight,
    Users2,
    CalendarDays,
    Timer,
    TrendingUp,
    BadgeCheck,
    Target,
    type LucideIcon,
} from "lucide-react"

function Bullet({
                    icon: Icon,
                    children,
                }: {
    icon: LucideIcon
    children: React.ReactNode
}) {
    return (
        <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background/25 ring-1 ring-amber-400/15">
        <Icon className="h-4 w-4 text-amber-300/80" />
      </span>
            <p className="text-sm leading-snug text-muted-foreground">{children}</p>
        </div>
    )
}

export function Hero() {
    return (
        <section className="relative overflow-hidden rounded-3xl border bg-background/40 backdrop-blur">
            {/* Background premium (sem “lavar” o ouro) */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/2 h-72 w-[46rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-foreground/10 via-foreground/5 to-transparent blur-3xl" />
                <div className="absolute -top-28 right-[-140px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.18),transparent_60%)] blur-2xl" />
                <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.06),transparent_45%)]" />
            </div>

            <div className="relative grid gap-10 p-6 md:grid-cols-[1.1fr_0.9fr] md:items-start md:p-10">
                {/* LEFT */}
                <div className="space-y-6">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">Mentoria premium</Badge>

                        <Badge variant="outline" className="gap-1">
                            <Users2 className="h-3.5 w-3.5" />
                            Grupo fechado
                        </Badge>

                        <Badge variant="outline" className="gap-1">
                            <CalendarDays className="h-3.5 w-3.5" />
                            3 meses
                        </Badge>

                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs text-foreground/80">
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              Prioridade
            </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-3">
                        <h1 className="text-3xl font-semibold leading-snug tracking-tight md:text-[2.18rem]">
                            Você não precisa de mais um curso.
                            <br className="hidden md:block" />
                            <span className="mt-2 block text-foreground/75">
                Precisa de rotina, direção e{" "}
                                <span className="relative inline-block">
                  <span className="pointer-events-none absolute -inset-2 rounded-xl bg-amber-400/22 blur-xl" />
                  <span className="relative bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                    execução
                  </span>
                </span>{" "}
                                para virar profissional de consórcio.
              </span>
                        </h1>

                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            Mentoria Método C.A.P. (Consórcio, Autoridade e Performance): encontros
                            semanais, desafios práticos e correção de rota para você operar no campo
                            <strong> mesmo sem experiência, sem rede e sem SUSEP no início</strong>.
                        </p>
                    </div>

                    {/* Bullets */}
                    <div className="grid gap-2 md:grid-cols-2">
                        <Bullet icon={Timer}>
                            Sprint semanal: tarefa → entrega → ajuste.
                        </Bullet>
                        <Bullet icon={TrendingUp}>
                            Rotina comercial com acompanhamento em grupo fechado.
                        </Bullet>
                        <Bullet icon={BadgeCheck}>
                            Posicionamento e autoridade construídos pela execução.
                        </Bullet>
                        <Bullet icon={Target}>
                            Sem hype: processo, consistência e performance.
                        </Bullet>
                    </div>

                    {/*/!* Proof bar *!/*/}
                    {/*<div className="text-xs text-muted-foreground">*/}
                    {/*    Mentoria de 3 meses • grupo fechado • acompanhamento semanal • turmas limitadas*/}
                    {/*</div>*/}

                    {/* CTAs */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <LeadSheet />

                        <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                            <a href="#programa" className="inline-flex items-center gap-2">
                                Ver como funciona <ArrowRight className="h-4 w-4 opacity-70" />
                            </a>
                        </Button>
                    </div>

                    {/* Microcopy */}
                    <div className="space-y-2">
                        <p className="text-xs text-muted-foreground">
                            Importante: isso não é curso. É mentoria de execução com acompanhamento
                            e correção de rota.
                        </p>

                        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                            <span>• Mentor: Wagner Gorgulho</span>
                            <span>• Acompanhamento semanal</span>
                            <span>• Turmas limitadas</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT — FOTO */}
                <div className="relative overflow-hidden rounded-3xl border bg-muted/30">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/35 to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-amber-400/15" />

                    <div className="relative aspect-[4/5] w-full">
                        <Image
                            src="/images/wagner-hero.png"
                            alt="Wagner Gorgulho"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-semibold">Wagner Gorgulho</p>
                                <p className="text-xs text-muted-foreground">
                                    Mentor • Método C.A.P. • Execução no campo
                                </p>
                            </div>
                            <Badge variant="secondary">Mentoria</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
