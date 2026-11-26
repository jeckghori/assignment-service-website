import { formatInr, priceDisclaimer, pricingPlans } from "../config/site.ts"
import { cx } from "../lib/cx.ts"
import { Container, SectionHeading } from "./SectionHeading.tsx"

export function Pricing({ onQuote }: { onQuote: (assistance: string) => void }) {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="03 — Pricing" title="Student-friendly starting prices">
          Use these figures to understand the range. Your quotation is prepared after the requirements are
          reviewed.
        </SectionHeading>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => {
            const featured = "featured" in plan && plan.featured
            return (
            <li key={plan.id}>
              <article
                className={cx(
                  "card-lift flex h-full flex-col rounded-3xl p-5",
                  featured
                    ? "bg-navy-900 text-white shadow-[0_20px_40px_-28px_rgba(20,33,61,0.9)]"
                    : "border border-line bg-paper text-navy-900",
                )}
              >
                {featured ? (
                  <p className="text-xs font-semibold tracking-[0.14em] text-wa uppercase">Broader scope</p>
                ) : (
                  <p className="text-xs font-semibold tracking-[0.14em] text-blue-700 uppercase">Indicative</p>
                )}
                <h3 className="mt-3 font-display text-2xl leading-tight">{plan.name}</h3>
                <p className={cx("mt-3 flex-1 text-sm leading-relaxed", featured ? "text-white/75" : "text-muted")}>
                  {plan.detail}
                </p>
                <p className="mt-6 text-sm font-semibold">Starting at</p>
                <p className="font-display text-4xl tracking-tight">{formatInr(plan.price)}</p>
                <button
                  type="button"
                  className={cx("btn mt-6 inline-flex w-full", featured ? "btn-white" : "btn-navy")}
                  onClick={() => onQuote(plan.assistance)}
                >
                  Get Personalized Quote
                </button>
              </article>
            </li>
            )
          })}
        </ul>
        <p className="mt-8 rounded-2xl bg-sand px-5 py-4 text-sm leading-relaxed text-navy-900">
          {priceDisclaimer}
        </p>
      </Container>
    </section>
  )
}
