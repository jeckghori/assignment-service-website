import { Cpu, IndianRupee, LifeBuoy, Lock, MessagesSquare, UserRound } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { whyUs } from "../config/site.ts"
import { Container, SectionHeading } from "./SectionHeading.tsx"

const icons: Record<(typeof whyUs)[number]["id"], LucideIcon> = {
  pricing: IndianRupee,
  personal: UserRound,
  technical: Cpu,
  communication: MessagesSquare,
  privacy: Lock,
  process: LifeBuoy,
}

export function WhyUs() {
  return (
    <section className="py-20 sm:py-24" aria-label="Why choose us">
      <Container>
        <SectionHeading eyebrow="04 — Why students inquire" title="Straightforward support, without inflated promises">
          The service is built around a clear quote, direct WhatsApp communication, and help that matches
          the brief you send.
        </SectionHeading>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyUs.map((item) => {
            const Icon = icons[item.id]
            return (
              <li key={item.id}>
                <article className="h-full rounded-3xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-paper text-navy-900">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-navy-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                </article>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
