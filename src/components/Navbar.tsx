import { Menu, PenLine, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { navItems, site } from "../config/site.ts"
import { useActiveSection } from "../hooks/useActiveSection.ts"
import { cx } from "../lib/cx.ts"

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8)
  const { pathname, hash } = useLocation()
  const active = useActiveSection(sectionIds, pathname)
  const onHome = pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header
      className={cx(
        "sticky top-0 z-50 border-b",
        scrolled || open ? "border-line bg-paper/95 shadow-sm" : "border-transparent bg-paper/80",
        "backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label={`${site.name} home`}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-navy-900 text-white">
            <PenLine className="h-[18px] w-[18px]" aria-hidden="true" />
          </span>
          <span className="truncate font-display text-lg leading-none text-navy-900 sm:text-xl">
            Assignment <span className="text-blue-700 italic">Assist</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const current = onHome && active === item.id
            return (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                aria-current={current ? "location" : undefined}
                className={cx(
                  "text-sm font-semibold",
                  current ? "text-blue-700" : "text-navy-900/75 hover:text-navy-900",
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/#inquiry" className="btn btn-navy hidden items-center sm:inline-flex">
            Submit Your Assignment
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-auto bg-paper px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/#${item.id}`}
                  className="block rounded-2xl px-3 py-3 font-display text-3xl text-navy-900"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/#inquiry" className="btn btn-navy mt-6 inline-flex w-full">
            Submit Your Assignment
          </Link>
        </nav>
      ) : null}
    </header>
  )
}
