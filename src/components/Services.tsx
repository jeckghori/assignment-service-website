import {
  BarChart3,
  BookOpen,
  Code2,
  Database,
  FileText,
  FolderKanban,
  Globe,
  PenLine,
  Presentation,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { services, startingAt } from "../config/site.ts"
import type { ServiceIcon } from "../config/site.ts"
import { Container, SectionHeading } from "./SectionHeading.tsx"

const icons: Record<ServiceIcon, LucideIcon> = {
  book: BookOpen,
  code: Code2,
  file: FileText,
  slides: Presentation,
  globe: Globe,
  database: Database,
  chart: BarChart3,
  folder: FolderKanban,
  pen: PenLine,
}

export function Services({ onQuote }: { onQuote: (assistance: string) => void }) {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="01 — Services" title="Support across the work students actually submit">
          Choose the kind of help you need. Each request is quoted from your instructions, deadline, and
          the scope of assistance.
        </SectionHeading>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <li key={service.id}>
                <article className="card-lift flex h-full flex-col rounded-3xl border border-line bg-paper p-6 shadow-[0_18px_40px_-34px_rgba(20,33,61,0.8)]">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-navy-900 ring-1 ring-line">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="text-right text-sm font-semibold text-navy-900">{startingAt(service.price)}</p>
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight text-navy-900">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
                  <button type="button" className="btn btn-line mt-6 inline-flex w-full" onClick={() => onQuote(service.assistance)}>
                    Request a Quote
                  </button>
                </article>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
