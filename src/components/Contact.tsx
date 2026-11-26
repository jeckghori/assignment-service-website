import { Clock3, Mail, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { site, whatsappMessages } from "../config/site.ts"
import { whatsappUrl } from "../lib/whatsapp.ts"

export function Contact() {
  return (
    <section id="contact" className="px-5 pt-4 pb-20 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-8 rounded-[1.8rem] bg-navy-900 px-6 py-10 text-white sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-wa uppercase">Contact</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl leading-tight font-medium text-balance sm:text-5xl">
            Have an assignment in mind? Send us your requirements and receive a personalized quotation.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/#inquiry" className="btn btn-white inline-flex">
              Submit Your Assignment
            </Link>
            <a
              className="btn btn-wa inline-flex"
              href={whatsappUrl(whatsappMessages.contact)}
              target="_blank"
              rel="noreferrer noopener"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
        <ul className="space-y-3">
          <li className="rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/10">
            <a
              className="flex items-start gap-3"
              href={whatsappUrl(whatsappMessages.contact)}
              target="_blank"
              rel="noreferrer noopener"
            >
              <MessageCircle className="mt-0.5 h-5 w-5 text-wa" aria-hidden="true" />
              <span>
                <span className="block text-sm text-white/60">WhatsApp</span>
                <span className="font-semibold">{site.whatsappDisplay}</span>
              </span>
            </a>
          </li>
          <li className="rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/10">
            <a className="flex items-start gap-3" href={`mailto:${site.email}`}>
              <Mail className="mt-0.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>
                <span className="block text-sm text-white/60">Email</span>
                <span className="font-semibold break-all">{site.email}</span>
              </span>
            </a>
          </li>
          <li className="rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/10">
            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-5 w-5 text-white" aria-hidden="true" />
              <span>
                <span className="block text-sm text-white/60">Response time</span>
                <span className="block font-semibold">{site.workingHours}</span>
                <span className="mt-1 block text-sm leading-relaxed text-white/70">{site.responseTime}</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
