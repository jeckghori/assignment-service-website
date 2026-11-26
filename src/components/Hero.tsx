import { BadgeCheck, Clock3, LockKeyhole, MessageCircle, UserRound } from "lucide-react"
import { Link } from "react-router-dom"
import { site, trustPoints, whatsappMessages } from "../config/site.ts"
import { whatsappUrl } from "../lib/whatsapp.ts"
import { Container } from "./SectionHeading.tsx"
import { HeroVisual } from "./HeroVisual.tsx"

const trustIcons = {
  price: BadgeCheck,
  personal: UserRound,
  private: LockKeyhole,
  deadline: Clock3,
} as const

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 sm:pt-12 lg:pb-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.16),transparent_52%),radial-gradient(ellipse_at_top_right,rgba(20,33,61,0.07),transparent_46%)]"
        aria-hidden="true"
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div>
            <p className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-semibold tracking-[0.14em] text-navy-800 uppercase shadow-sm ring-1 ring-line">
              For university and college students
            </p>
            <h1 className="mt-5 max-w-xl font-display text-[2.55rem] leading-[1.05] font-medium tracking-tight text-navy-900 text-balance sm:text-6xl">
              Quality Academic Support at{" "}
              <span className="text-blue-700 italic">Student-Friendly Prices</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">
              Get reliable assistance with assignments, programming, reports, presentations, projects,
              and technical subjects. Affordable pricing, personalized support, and deadline-conscious
              service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/#inquiry" className="btn btn-navy inline-flex">
                Submit Your Assignment
              </Link>
              <a
                className="btn btn-wa inline-flex"
                href={whatsappUrl(whatsappMessages.hero)}
                target="_blank"
                rel="noreferrer noopener"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => {
                const Icon = trustIcons[point.id]
                return (
                  <li key={point.id} className="flex gap-3 rounded-2xl bg-white/80 p-3 ring-1 ring-line">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-paper text-navy-900">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">{point.title}</span>
                      <span className="mt-0.5 block text-sm leading-snug text-muted">{point.text}</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
          <HeroVisual />
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          {site.name} offers academic guidance and explanations. It does not promise grades, marks, or a
          particular academic outcome.
        </p>
      </Container>
    </section>
  )
}
