"use client"

import { useMemo, useState } from "react"
import { leadSchema } from "@/lib/validations/lead"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ShieldCheck } from "lucide-react"

export function LeadForm() {
    const [pending, setPending] = useState(false)
    const [ok, setOk] = useState<string | null>(null)
    const [err, setErr] = useState<string | null>(null)

    const objectives = useMemo(
        () => [
            { value: "transicao", label: "Estou em transição de carreira" },
            { value: "iniciante_vendas", label: "Sou iniciante em vendas" },
            { value: "migrando_consorcio", label: "Quero migrar para consórcio" },
        ] as const,
        []
    )

    async function onSubmit(formData: FormData) {
        setPending(true)
        setOk(null)
        setErr(null)

        const raw = {
            nome: String(formData.get("nome") || ""),
            whatsapp: String(formData.get("whatsapp") || ""),
            email: String(formData.get("email") || ""),
            objetivo: String(formData.get("objetivo") || ""),
            consentimento: formData.get("consentimento") === "on",
        }

        const parsed = leadSchema.safeParse(raw)
        if (!parsed.success) {
            setPending(false)
            setErr(parsed.error.issues[0]?.message ?? "Confira os campos e tente novamente.")
            return
        }

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(parsed.data),
            })

            const json: unknown = await res.json().catch(() => ({}))

            if (!res.ok) {
                const msg =
                    typeof json === "object" && json && "error" in json
                        ? String((json as { error?: unknown }).error ?? "Não foi possível enviar.")
                        : "Não foi possível enviar. Tente novamente."
                setPending(false)
                setErr(msg)
                return
            }

            setPending(false)
            setOk("Aplicação enviada. Seu perfil será analisado e, se fizer sentido, entraremos em contato.")
        } catch {
            setPending(false)
            setErr("Falha de conexão. Verifique sua internet e tente novamente.")
        }
    }


    return (
        <form action={onSubmit} className="space-y-4">
            {/* Dados básicos */}
            <Input name="nome" placeholder="Seu nome" />
            <Input
                name="whatsapp"
                placeholder="Seu WhatsApp (com DDD)"
                inputMode="numeric"
            />
            <Input name="email" placeholder="Seu e-mail (opcional)" />

            {/* Momento atual */}
            <Card className="space-y-3 p-4">
                <p className="text-sm font-medium">Seu momento hoje:</p>
                <div className="grid gap-2">
                    {objectives.map((o) => (
                        <label key={o.value} className="flex items-center gap-2 text-sm">
                            <input
                                type="radio"
                                name="objetivo"
                                value={o.value}
                                defaultChecked={o.value === "transicao"}
                            />
                            <span>{o.label}</span>
                        </label>
                    ))}
                </div>
            </Card>

            {/* Consentimento */}
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" name="consentimento" />
                <span>
          Concordo em receber contato sobre a Mentoria Método C.A.P.
        </span>
            </label>

            {/* CTA */}
            <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Enviando aplicação..." : "Aplicar para a Mentoria"}
            </Button>

            {/* Feedback */}
            {err && <p className="text-sm text-destructive">{err}</p>}
            {ok && <p className="text-sm text-foreground/80">{ok}</p>}

            {/* Selo de proteção */}
            <div className="flex items-start gap-2 rounded-xl border bg-background/40 p-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-amber-300/80" />
                <p className="text-xs text-muted-foreground">
                    A mentoria é seletiva. O envio do formulário não garante vaga — garante
                    avaliação de perfil.
                </p>
            </div>
        </form>
    )
}
