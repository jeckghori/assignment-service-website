import { steps } from "../config/site.ts"
import { Container, SectionHeading } from "./SectionHeading.tsx"

export function HowItWorks() {
  return (
    <section id="process" className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="02 — How it works" title="From your brief to a clear quotation">
          The path is short: share the requirements, discuss the quote, and keep the conversation on
          WhatsApp.
        </SectionHeading>
        <ol className="mt-12 grid gap-10 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              {index < steps.length - 1 ? (
                <span
                  className="absolute top-5 left-5 hidden h-px w-[calc(100%+1rem)] bg-sand lg:block"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-navy-900 font-display text-lg text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 font-display text-2xl leading-tight text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
