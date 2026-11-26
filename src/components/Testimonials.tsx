import { testimonials } from "../config/site.ts"
import { Container, SectionHeading } from "./SectionHeading.tsx"

export function Testimonials() {
  return (
    <section className="py-20 sm:py-24" aria-label="Placeholder testimonials">
      <Container>
        <SectionHeading eyebrow="06 — Testimonials" title="Space reserved for real student feedback">
          These cards are placeholders. They are not genuine reviews and should be replaced before you
          present them as customer comments.
        </SectionHeading>
        <p className="mt-6 max-w-3xl rounded-2xl border border-dashed border-navy-800/25 bg-white px-4 py-3 text-sm leading-relaxed text-navy-900">
          Placeholder feedback only. Nothing in this section is a real testimonial.
        </p>
        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <li key={item.id}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-6 ring-1 ring-line">
                <figcaption className="text-xs font-semibold tracking-[0.14em] text-blue-700 uppercase">
                  Placeholder — not a real review
                </figcaption>
                <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-navy-900">
                  “{item.quote}”
                </blockquote>
                <div className="mt-6 border-t border-line pt-4">
                  <p className="font-semibold text-navy-900">{item.name}</p>
                  <p className="text-sm text-muted">{item.detail}</p>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
