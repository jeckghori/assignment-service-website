import { Link } from "react-router-dom"
import { academicDisclaimer, navItems, services, site, whatsappMessages } from "../config/site.ts"
import { whatsappUrl } from "../lib/whatsapp.ts"

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-display text-2xl">
            Assignment <span className="text-blue-300 italic">Assist</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-white/70">{site.blurb}</p>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-white/50 uppercase">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link className="text-white/80 hover:text-white" to={`/#${item.id}`}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="text-white/80 hover:text-white" to="/#inquiry">
                Submit Your Assignment
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-white/50 uppercase">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.id}>
                <Link className="text-white/80 hover:text-white" to="/#services">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-white/50 uppercase">Contact</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                className="text-white/80 hover:text-white"
                href={whatsappUrl(whatsappMessages.footer)}
                target="_blank"
                rel="noreferrer noopener"
              >
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a className="text-white/80 hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <Link className="text-white/80 hover:text-white" to="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-white/80 hover:text-white" to="/terms">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-white/45 uppercase">
            Academic integrity disclaimer
          </p>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-white/70">{academicDisclaimer}</p>
          <p className="mt-4 text-xs text-white/45">© {year} {site.name}</p>
        </div>
      </div>
    </footer>
  )
}
