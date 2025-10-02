"use client"

import { cn } from "@/src/lib/utils"
import { useEffect, useMemo, useRef, useState } from "react"

export function ScrollStickyShowcase({ items = [], className }) {
    const [active, setActive] = useState(0)
    const sectionRefs = useRef([])

    useEffect(() => {
        sectionRefs.current = sectionRefs.current.slice(0, items.length)
        const sections = sectionRefs.current.filter(Boolean)
        if (!sections.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
                if (visible) {
                    const idx = Number(visible.target.getAttribute("data-index") || 0)
                    setActive(idx)
                }
            },
            {
                root: null,
                rootMargin: "-30% 0% -40% 0%",
                threshold: [0.2, 0.33, 0.5, 0.66, 0.8],
            },
        )

        sections.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [items.length])

    const current = useMemo(() => items[active] ?? items[0], [items, active])

    // If no items provided, render nothing to avoid runtime errors
    if (!items || items.length === 0) {
        return null
    }

    return (
        <section className={cn("relative mx-auto max-w-6xl px-4 md:px-6 border", className)} style={{ zIndex: 100 }}>
            <div className="">
                <h1>See How Accurack Saves You Time & Money</h1>
            </div>
            <div className="grid lg:gap-40 py-10 md:grid-cols-2 md:gap-12 relative absolute border" style={{ zIndex: 100 }}>
                <div className="flex flex-col relative gap-90 mt-50 border border-3" style={{ zIndex: 200 }}>
                    {items.map((item, i) => (
                        <article
                            key={item.id}
                            ref={(el) => (sectionRefs.current[i] = el)}
                            data-index={i}
                            className={cn("py-16 md:py-24 border-b last:border-b-0 relative z-10", i === active ? "opacity-100" : "opacity-70")}
                            style={{ zIndex: 200 }}
                            aria-current={i === active ? "true" : undefined}
                        >
                            <header className="mb-4" style={{ zIndex: 200 }}>
                                <h3 className="text-pretty text-2xl font-semibold md:text-3xl" style={{ zIndex: 200 }}>
                                    {item.heading}
                                </h3>
                            </header>

                            <p className="text-muted-foreground leading-relaxed" style={{ zIndex: 200 }}>
                                {item.description}
                            </p>

                            {item.bullets?.length ? (
                                <ul className="mt-6 grid gap-3" style={{ zIndex: 200 }}>
                                    {item.bullets.map((b, idx) => (
                                        <li key={idx} className="leading-relaxed" style={{ zIndex: 200 }}>
                                            • {b}
                                        </li>
                                    ))}
                                </ul>
                            ) : null}

                            <div className="mt-10 h-0" />
                        </article>
                    ))}
                </div>

                {/* RIGHT: sticky media */}
                <div className="relative" style={{ zIndex: 50 }}>
                    <div className="sticky top-48 p-1 bottom-10 h-[520px] w-[360px] md:top-32 lg:top-24 md:h-[560px] lg:h-[500px]">
                        <div className="relative h-full w-full">
                            {/* Decorative shape - BEHIND media */}
                            {current.shapeImageSrc ? (
                                <img
                                    key={current.shapeImageSrc}
                                    src={current.shapeImageSrc || "/placeholder.svg?height=320&width=320&query=rounded%20hex%20shape"}
                                    alt=""
                                    aria-hidden="true"
                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-[-30px] w-60 select-none transition-transform duration-500 md:right-[-80px] md:w-96 lg:right-[-100px] lg:w-[28rem]"
                                    style={{ zIndex: 1 }}
                                />
                            ) : (
                                <div
                                    aria-hidden
                                    className="absolute top-1/2 -translate-y-1/2 right-[-60px] h-72 w-72 rounded-[2rem] transition-[background-color,transform] duration-500 md:right-[-80px] md:h-96 md:w-96 lg:right-[-100px] lg:h-[28rem] lg:w-[28rem]"
                                    style={{ backgroundColor: current.shapeColor, zIndex: 1 }}
                                />
                            )}

                            {/* Media sits above shapes */}
                            <div
                                className="relative mx-auto aspect-[16/10] w-full max-w-[560px] rounded-xl border bg-card shadow-xl md:absolute md:left-1/2 md:top-1/2 md:-translate-x-[55%] md:-translate-y-1/2 lg:-translate-x-[50%]"
                                style={{ zIndex: 10 }}
                            >
                                {current.mediaType === "video" ? (
                                    <video
                                        key={current.mediaSrc}
                                        src={current.mediaSrc}
                                        className="h-full w-full rounded-xl object-cover transition-opacity duration-500"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        aria-label={current.mediaAlt}
                                    />
                                ) : (
                                    <img
                                        key={current.mediaSrc}
                                        src={current.mediaSrc || "/placeholder.svg"}
                                        alt={current.mediaAlt}
                                        className="h-full w-full rounded-xl object-cover transition-opacity duration-500"
                                    />
                                )}
                            </div>

                            {/* dots above media */}
                            <div
                                className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-2 md:bottom-3"
                                style={{ zIndex: 20 }}
                            >
                                {items.map((_, i) => (
                                    <span
                                        key={i}
                                        className={cn(
                                            "inline-block h-1.5 w-1.5 rounded-full bg-foreground/30",
                                            i === active && "h-2 w-5 bg-foreground/80 transition-all",
                                        )}
                                        aria-hidden
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
