"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useMemo } from "react"

type Particle = {
    xPct: number
    sizePx: number
    blurPx: number
    alpha: number
    driftPx: number
    durationS: number
    delayS: number
    twinkleS: number
    twinkleDelayS: number
    yFrom: string
    yTo: string
}

type LayerCfg = {
    count: number
    seed: number
    // ranges
    size: [number, number]
    alpha: [number, number]
    blurChance: number
    blur: [number, number]
    drift: [number, number]
    duration: [number, number]
    twinkle: [number, number]
    // motion window
    yFrom: string
    yTo: string
    // visual
    color: string
    layerOpacityClass: string
    intensity: number
}

function mulberry32(seed: number) {
    return function () {
        let t = (seed += 0x6d2b79f5)
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

function clamp(n: number, min: number, max: number) {
    return Math.min(max, Math.max(min, n))
}

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t
}

function makeLayer(cfg: LayerCfg): Particle[] {
    const rand = mulberry32(cfg.seed)
    const list: Particle[] = []

    for (let i = 0; i < cfg.count; i++) {
        // distribuição mais “premium”: densidade maior no centro
        const u = rand()
        const centered = Math.pow(u, 0.65)
        const rawXPct = 50 + (centered - 0.5) * 120 // ~ -10..110
        const xPct = clamp(rawXPct, -12, 112)

        const size = lerp(cfg.size[0], cfg.size[1], rand())
        const alpha = lerp(cfg.alpha[0], cfg.alpha[1], rand())
        const drift = lerp(cfg.drift[0], cfg.drift[1], rand())

        const blurOn = rand() < cfg.blurChance
        const blur = blurOn ? lerp(cfg.blur[0], cfg.blur[1], rand()) : 0

        const duration = lerp(cfg.duration[0], cfg.duration[1], rand())
        const delay = -rand() * duration // espalha no tempo (já começa “rodando”)
        const twinkleS = lerp(cfg.twinkle[0], cfg.twinkle[1], rand())
        const twinkleDelayS = -rand() * twinkleS

        list.push({
            xPct: Number(xPct.toFixed(4)),
            sizePx: Number(size.toFixed(3)),
            blurPx: Number(blur.toFixed(3)),
            alpha: Number(alpha.toFixed(6)),
            driftPx: Number(drift.toFixed(3)),
            durationS: Number(duration.toFixed(3)),
            delayS: Number(delay.toFixed(3)),
            twinkleS: Number(twinkleS.toFixed(3)),
            twinkleDelayS: Number(twinkleDelayS.toFixed(3)),
            yFrom: cfg.yFrom,
            yTo: cfg.yTo,
        })
    }

    return list
}

function ParticleLayer({
                           particles,
                           color,
                           className,
                           intensity,
                       }: {
    particles: Particle[]
    color: string
    className: string
    intensity: number
}) {
    return (
        <div
            className={[
                "absolute inset-0",
                "mix-blend-soft-light",
                className,
            ].join(" ")}
        >
            {particles.map((p, i) => {
                const glow = Math.max(4, p.sizePx * 2.6) * intensity
                const blurStyle = p.blurPx > 0 ? `blur(${p.blurPx}px)` : "none"

                return (
                    <motion.span
                        key={i}
                        className="absolute left-0 top-0 block rounded-full will-change-transform"
                        style={{
                            left: `${p.xPct}%`,
                            width: `${p.sizePx}px`,
                            height: `${p.sizePx}px`,
                            background: color,
                            filter: blurStyle,
                            boxShadow: `0 0 ${glow}px ${color}`,
                        }}
                        // A base sobe sempre. O brilho “respira” em loop diferente (twinkle).
                        initial={{
                            y: p.yFrom,
                            x: 0,
                            opacity: p.alpha * 0.55,
                        }}
                        animate={{
                            y: p.yTo,
                            x: [0, p.driftPx * 0.35, p.driftPx],
                            opacity: [p.alpha * 0.35, p.alpha, p.alpha * 0.55],
                            scale: [1, 1.12, 0.98],
                        }}
                        transition={{
                            // subida / drift
                            duration: p.durationS,
                            delay: p.delayS,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {/* Twinkle separado: um “glow” interno que pulsa com tempo próprio */}
                        <motion.span
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: "transparent",
                                boxShadow: `0 0 ${glow * 1.15}px ${color}`,
                                filter: blurStyle,
                            }}
                            initial={{opacity: 0.0}}
                            animate={{opacity: [0.0, 0.22, 0.0]}}
                            transition={{
                                duration: p.twinkleS,
                                delay: p.twinkleDelayS,
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: "easeInOut",
                            }}
                        />
                    </motion.span>
                )
            })}
        </div>
    )
}

export function GoldDust() {
    const reduce = useReducedMotion()

    // ✅ Camadas no estilo “tem atrás / tem na frente”
    const layers: LayerCfg[] = useMemo(
        () => [
            {
                count: 180,
                seed: 1101,
                size: [0.55, 1.25],
                alpha: [0.05, 0.12],
                blurChance: 0.6,
                blur: [0.8, 2.2],
                drift: [-35, 35],
                duration: [38, 66],
                twinkle: [4.0, 8.2],
                yFrom: "40vh",
                yTo: "-78vh",
                color: "rgba(245, 158, 11, 0.55)",      // ouro âmbar (escuro)
                layerOpacityClass: "opacity-[0.8]",
                intensity: 0.55,
            },
            {
                count: 120,
                seed: 2202,
                size: [0.85, 2.05],
                alpha: [0.08, 0.18],
                blurChance: 0.45,
                blur: [0.6, 1.9],
                drift: [-60, 60],
                duration: [24, 46],
                twinkle: [3.0, 6.4],
                yFrom: "50vh",
                yTo: "-95vh",
                color: "rgba(251, 191, 36, 0.62)",      // ouro (meio)
                layerOpacityClass: "opacity-[0.90]",
                intensity: 0.75,
            },
            {
                count: 55,
                seed: 3303,
                size: [1.35, 3.1],
                alpha: [0.10, 0.26],
                blurChance: 0.25,
                blur: [0.4, 1.4],
                drift: [-95, 95],
                duration: [14, 26],
                twinkle: [2.2, 4.8],
                yFrom: "62vh",
                yTo: "-112vh",
                color: "rgba(253, 230, 138, 0.72)",     // champagne (claro, mas NÃO branco)
                layerOpacityClass: "opacity-[1]",
                intensity: 0.9,
            },
        ],
        []
    )


    // gera partículas por camada (memo)
    const particlesByLayer = useMemo(() => layers.map((cfg) => makeLayer(cfg)), [layers])

    if (reduce) return null

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[40] overflow-hidden">
            {/* Máscara / vinheta (igual o print: foco no centro, some nas bordas/topo) */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_62%)] opacity-90" />
            </div>

            {/* Glow azul “horizonte” (puxa a estética do print) */}
            <div className="absolute -top-56 left-1/2 h-[620px] w-[1100px] -translate-x-1/2 rounded-full
  bg-gradient-to-r from-amber-500/8 via-yellow-200/6 to-transparent
  blur-[160px] opacity-30"/>

            {/* Camadas (parallax por tempo + tamanho + brilho) */}
            {layers.map((cfg, idx) => (
                <ParticleLayer
                    key={cfg.seed}
                    particles={particlesByLayer[idx]}
                    className={cfg.layerOpacityClass}
                    color={cfg.color}
                    intensity={cfg.intensity}
                />
            ))}

            {/* Noise fininho */}
            {/*<div className="absolute inset-0 opacity-[0.05] mix-blend-soft-light bg-[url('/images/noise.png')] [background-size:680px_680px]" />*/}
        </div>
    )
}
