import { useEffect } from "react"
import { Link } from "react-router-dom"
import { site } from "../config/site.ts"

export function NotFound() {
  useEffect(() => {
    document.title = `Page not found | ${site.name}`
  }, [])

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col px-5 py-24 sm:px-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-blue-700 uppercase">404</p>
      <h1 className="mt-3 font-display text-5xl text-navy-900">This page is not on the site.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        The link may be out of date. You can return home and send an assignment inquiry from there.
      </p>
      <Link to="/" className="btn btn-navy mt-8 inline-flex self-start">
        Back to home
      </Link>
    </section>
  )
}
