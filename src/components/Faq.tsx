import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { faqs } from "../config/site.ts"
import { Container, SectionHeading } from "./SectionHeading.tsx"

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faqs" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="07 — FAQs" title="Questions students ask before sending a brief">
            Pricing, files, WhatsApp, and what happens after you submit are covered here.
          </SectionHeading>
          <div className="divide-y divide-line rounded-3xl border border-line bg-paper">
            {faqs.map((item, index) => {
              const expanded = open === index
              const panelId = `faq-panel-${index}`
              const buttonId = `faq-button-${index}`
              return (
                <div key={item.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() => setOpen(expanded ? -1 : index)}
                    >
                      <span className="font-semibold text-navy-900">{item.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-navy-900 transition ${expanded ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
