"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function ItemRow({
  index,
  item,
  numberClassName,
}) {
  const isEven = index % 2 === 1
  const baseNumber = String(index + 1).padStart(2, "0")

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
      }}
      className={cn(
        "grid items-start gap-4 py-10 md:py-14",
        "md:grid-cols-2",
        isEven ? "md:text-right" : "md:text-left",
      )}
    >
      {/* Number + content placement alternates by column */}
      {isEven ? (
        <>
          <div className="order-2 md:order-1 px-2 font-body">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-[var(--color-muted-foreground)]">
              {item.description}
            </p>
          </div>
          <div className="order-1 md:order-2 px-2">
            <motion.span
              className={cn("block font-semibold tracking-tight text-6xl md:text-7xl font-heading", numberClassName)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              aria-hidden
            >
              {baseNumber}
            </motion.span>
          </div>
        </>
      ) : (
        <>
          <div className="order-1 px-2">
            <motion.span
              className={cn("block font-semibold tracking-tight text-6xl md:text-7xl font-heading", numberClassName)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              aria-hidden
            >
              {baseNumber}
            </motion.span>
          </div>
          <div className="order-2 px-2">
            <h3 className="text-xl md:text-2xl font-semibold font-body text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed font-body text-[var(--color-muted-foreground)]">
              {item.description}
            </p>
          </div>
        </>
      )}
    </motion.li>
  )
}

export function ExpertiseList({
  heading = "Our Collective Expertise",
  items,
  className,
  numberClassName = "text-[var(--color-chart-3)] md:even:text-[var(--color-chart-2)]",
}) {
  return (
    <section className={cn("py-12 md:py-16", className)} aria-labelledby="expertise-heading">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          id="expertise-heading"
          className="mb-6 text-center text-3xl md:text-4xl font-heading font-semibold text-foreground text-balance"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {heading}
        </motion.h2>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="font-heading"
        >
          {items.map((item, i) => (
            <ItemRow key={i} index={i} item={item} numberClassName={numberClassName} />
          ))}
        </motion.ol>
      </div>
    </section>
  )
}

export default ExpertiseList
