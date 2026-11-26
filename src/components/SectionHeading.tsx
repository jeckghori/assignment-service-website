import type { ReactNode } from "react"

export function Container({
  className = "",
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold tracking-[0.18em] text-blue-700 uppercase">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl leading-tight font-medium tracking-tight text-navy-900 text-balance sm:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">{children}</p>
      ) : null}
    </div>
  )
}
