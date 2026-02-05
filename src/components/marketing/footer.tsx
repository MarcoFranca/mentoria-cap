export function Footer() {
    return (
        <footer className="mt-16 border-t border-border/40">
            <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Identidade */}
                    <div className="space-y-1">
                        <p className="font-medium text-foreground">
                            Mentoria Método C.A.P.
                        </p>
                        <p className="text-xs">
                            Consórcio • Autoridade • Performance
                        </p>
                    </div>

                    {/* Aviso */}
                    <div className="max-w-md text-xs leading-relaxed">
                        <p>
                            Este site não oferece promessas de ganho fácil.
                            Resultados dependem de execução, consistência e perfil do participante.
                        </p>
                    </div>

                    {/* Direitos */}
                    <div className="text-xs">
                        © {new Date().getFullYear()} Wagner Gorgulho. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    )
}
