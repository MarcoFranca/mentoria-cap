import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
    {
        title: "“Eu não tenho experiência.”",
        body:
            "Ótimo. Você não precisa de experiência — precisa de método e rotina. A mentoria existe pra te tirar do zero e te colocar em execução guiada.",
    },
    {
        title: "“Eu não tenho network.”",
        body:
            "Network não é pré-requisito. Você vai aprender geração de oportunidades e construção de autoridade com consistência. O jogo começa com clareza e ação.",
    },
    {
        title: "“Eu tenho medo de vender.”",
        body:
            "Medo vem de falta de processo. A mentoria estrutura abordagem consultiva, condução e follow-up. Você não vira ‘bom de papo’ — vira previsível no resultado.",
    },
    {
        title: "“Eu não tenho SUSEP ainda.”",
        body:
            "Você não vai travar por isso. A mentoria organiza sua base, posicionamento e rotina. Se a sua trilha exigir SUSEP, você entra com direção — não no escuro.",
    },
]

export function Objections() {
    return (
        <section className="space-y-6">
            <div className="space-y-2">
                <Badge variant="secondary">Objeções comuns</Badge>
                <h2 className="text-2xl font-semibold md:text-3xl">
                    Se você está esperando “estar pronto”, você vai perder mais um ano.
                </h2>
                <p className="text-muted-foreground">
                    A mentoria não é pra quem busca atalhos. É pra quem aceita processo, cobrança e prática.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                {items.map((it) => (
                    <Card key={it.title} className="rounded-2xl">
                        <CardHeader>
                            <CardTitle className="text-base">{it.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground">{it.body}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
