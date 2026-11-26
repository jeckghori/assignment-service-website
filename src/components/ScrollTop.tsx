import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"
import { cx } from "../lib/cx.ts"

export function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <button
      type="button"
      className={cx(
        "fixed right-4 bottom-20 z-40 grid h-11 w-11 place-items-center rounded-full bg-navy-900 text-white shadow-lg transition sm:right-6 sm:bottom-24",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-label="Back to top"
      onClick={() => {
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
      }}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
