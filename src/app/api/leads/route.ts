import { NextResponse } from "next/server"
import { Resend } from "resend"
import { leadSchema } from "@/lib/validations/lead"
import { z } from "zod"

export const runtime = "nodejs"

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(s: string) {
    return s
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;")
}

function formatObjective(obj: string) {
    const map: Record<string, string> = {
        transicao: "Transição de carreira",
        iniciante_vendas: "Sou iniciante em vendas",
        migrando_consorcio: "Quero migrar para consórcio",
    }
    return map[obj] ?? obj
}

function getErrorMessage(err: unknown) {
    if (err instanceof Error) return err.message
    if (typeof err === "string") return err
    return "Erro inesperado."
}

export async function POST(req: Request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ ok: false, error: "RESEND_API_KEY não configurada." }, { status: 500 })
        }

        const toRaw = process.env.LEADS_TO_EMAILS || ""
        const to = toRaw
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean)

        if (!to.length) {
            return NextResponse.json({ ok: false, error: "LEADS_TO_EMAILS não configurado." }, { status: 500 })
        }

        const json: unknown = await req.json()

        const parsed = leadSchema.safeParse(json)
        if (!parsed.success) {
            return NextResponse.json(
                { ok: false, error: parsed.error.issues[0]?.message ?? "Dados inválidos." },
                { status: 400 }
            )
        }

        const data = parsed.data

        const subject = `Nova aplicação — Mentoria Método C.A.P. — ${data.nome}`

        const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height:1.5">
        <h2 style="margin:0 0 12px">Nova aplicação (Mentoria Método C.A.P.)</h2>
        <table style="border-collapse:collapse; width:100%; max-width:640px">
          <tr>
            <td style="padding:8px 10px; border:1px solid #e5e7eb; width:220px"><b>Nome</b></td>
            <td style="padding:8px 10px; border:1px solid #e5e7eb">${escapeHtml(data.nome)}</td>
          </tr>
          <tr>
            <td style="padding:8px 10px; border:1px solid #e5e7eb"><b>WhatsApp</b></td>
            <td style="padding:8px 10px; border:1px solid #e5e7eb">${escapeHtml(data.whatsapp)}</td>
          </tr>
          <tr>
            <td style="padding:8px 10px; border:1px solid #e5e7eb"><b>Email</b></td>
            <td style="padding:8px 10px; border:1px solid #e5e7eb">${escapeHtml(data.email || "(não informado)")}</td>
          </tr>
          <tr>
            <td style="padding:8px 10px; border:1px solid #e5e7eb"><b>Objetivo</b></td>
            <td style="padding:8px 10px; border:1px solid #e5e7eb">${escapeHtml(formatObjective(data.objetivo))}</td>
          </tr>
          <tr>
            <td style="padding:8px 10px; border:1px solid #e5e7eb"><b>Consentimento</b></td>
            <td style="padding:8px 10px; border:1px solid #e5e7eb">${data.consentimento ? "Sim" : "Não"}</td>
          </tr>
        </table>

        <p style="margin:14px 0 0; color:#6b7280; font-size:12px">
          Enviado pelo formulário do site. Recomendação: responder via WhatsApp assim que possível.
        </p>
      </div>
    `

        await resend.emails.send({
            from: process.env.LEADS_FROM_EMAIL || "onboarding@resend.dev",
            to,
            subject,
            html,
        })

        return NextResponse.json({ ok: true })
    } catch (err: unknown) {
        // Se vier erro do Zod em algum cenário fora do safeParse
        if (err instanceof z.ZodError) {
            return NextResponse.json(
                { ok: false, error: err.issues[0]?.message ?? "Dados inválidos." },
                { status: 400 }
            )
        }

        return NextResponse.json(
            { ok: false, error: getErrorMessage(err) },
            { status: 500 }
        )
    }
}
