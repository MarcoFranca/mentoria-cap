import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {ArrowRight, Brain} from "lucide-react"

const faqs = [
    {
        q: "Isso é um curso?",
        a: (
            <>
                Não. Curso é consumo. Aqui é <span className="text-foreground/80">execução com acompanhamento</span>:
                tarefas semanais, encontros em grupo, correção de rota e cobrança.
                Se você quer só assistir aulas, essa mentoria não é pra você.
            </>
        ),
    },
    {
        q: "Eu posso entrar começando do zero?",
        a: (
            <>
                Pode — desde que você esteja disposto a executar. A mentoria te dá base, rotina e direção
                para operar no campo como profissional. O que não funciona aqui é: “vou entrar pra ver”.
            </>
        ),
    },
    {
        q: "Preciso ter network (contatos) para começar?",
        a: (
            <>
                Não. Network não é pré-requisito. Você vai aprender geração de oportunidades e construção
                de autoridade com consistência. O jogo começa com clareza de oferta e ação semanal.
            </>
        ),
    },
    {
        q: "Eu tenho medo de vender. Isso é um problema?",
        a: (
            <>
                Medo geralmente vem de improviso. Aqui você aprende <span className="text-foreground/80">processo</span>:
                abordagem consultiva, condução, follow-up e rotina. Você não vira “bom de papo”.
                Você vira <span className="text-foreground/80">previsível</span>.
            </>
        ),
    },
    {
        q: "Preciso ter SUSEP para participar?",
        a: (
            <>
                Não necessariamente. A mentoria organiza sua base, posicionamento e rotina comercial.
                Se a sua trilha exigir SUSEP, você entra com direção — não no escuro, nem travado.
            </>
        ),
    },
    {
        q: "Quanto tempo por semana eu preciso dedicar?",
        a: (
            <>
                Você precisa de rotina, não de intensidade heroica. Existe um ciclo semanal de tarefas + checkpoint.
                Quem executa evolui. Quem não executa, fica assistindo a própria vida passar.
            </>
        ),
    },
    {
        q: "Como funcionam as vagas e por que é seletivo?",
        a: (
            <>
                Porque é grupo fechado com acompanhamento real. Não é pra volume.
                A mentoria é pra quem tem compromisso com execução e aceita cobrança.
            </>
        ),
    },
    {
        q: "E se eu entrar e perceber que não é pra mim?",
        a: (
            <>
                Melhor descobrir cedo do que fingir comprometimento. Se você não está pronto para executar e se expor,
                é mais honesto não entrar agora. Essa mentoria protege o grupo: só fica quem joga sério.
            </>
        ),
    },
]

export function FAQ() {
    return (
        <section id="faq" className="space-y-8">
            <div className="space-y-2">
                <Badge variant="secondary">FAQ</Badge>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Perguntas diretas. Respostas diretas.
                </h2>
                <p className="max-w-2xl text-muted-foreground">
                    Sem enrolação. O que você precisa saber antes de aplicar.
                </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx + 1}`}>
                        <AccordionTrigger>{item.q}</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                            {item.a}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>

            {/* Pós-FAQ CTA (premium e consultivo) */}
            <div
                className="flex flex-col items-start justify-between gap-4 rounded-2xl border bg-background/40 p-4 md:flex-row md:items-center md:p-5">
                <div className="flex items-start gap-3">
    <span
        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background/25 ring-1 ring-amber-400/15">
      <Brain className="h-4 w-4 text-amber-300/80"/>
    </span>

                    <div className="space-y-1">
                        <p className="text-sm font-medium">
                            Se você leu até aqui, você já está acima da média.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            Próximo passo: entender se o seu momento é de execução e se você tem perfil para o grupo.
                        </p>
                    </div>
                </div>

                <Button className="w-full md:w-auto" asChild>
                    <a href="#aplicar" className="inline-flex items-center gap-2">
                        Quero aplicar <ArrowRight className="h-4 w-4 opacity-80"/>
                    </a>
                </Button>
            </div>

        </section>
    )
}
