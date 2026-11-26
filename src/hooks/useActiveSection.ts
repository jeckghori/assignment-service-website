import { useEffect, useState } from "react"

export function useActiveSection(ids: readonly string[], watch = "") {
  const [active, setActive] = useState(ids[0] ?? "")

  useEffect(() => {
    let frame = 0

    const update = () => {
      const marker = 150
      let current = ids[0] ?? ""
      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        if (element.getBoundingClientRect().top <= marker) current = id
      }
      setActive((previous) => (previous === current ? previous : current))
    }

    const onScroll = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(update)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [ids, watch])

  return active
}
