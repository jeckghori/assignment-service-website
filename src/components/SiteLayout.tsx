import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "./Footer.tsx"
import { Navbar } from "./Navbar.tsx"
import { ScrollTop } from "./ScrollTop.tsx"
import { WhatsAppFloat } from "./WhatsAppFloat.tsx"

export function SiteLayout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "start",
      })
    })
    return () => window.cancelAnimationFrame(frame)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollTop />
    </div>
  )
}
