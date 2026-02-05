import { z } from "zod"

export const leadSchema = z.object({
    nome: z.string().min(2, "Informe seu nome"),
    whatsapp: z.string().min(10, "Informe um WhatsApp válido"),
    email: z.string().email("Informe um e-mail válido").optional().or(z.literal("")),
    objetivo: z.enum(["transicao", "iniciante_vendas", "migrando_consorcio"]),
    consentimento: z.boolean().refine((v) => v === true, {
        message: "Confirme o consentimento",
    }),
})

export type LeadInput = z.infer<typeof leadSchema>
