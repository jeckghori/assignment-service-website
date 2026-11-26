import { useEffect } from "react"
import { Link } from "react-router-dom"
import { academicDisclaimer, priceDisclaimer, site } from "../config/site.ts"

export function Terms() {
  useEffect(() => {
    document.title = `Terms & Conditions | ${site.name}`
  }, [])

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-blue-700 uppercase">Terms</p>
      <h1 className="mt-3 font-display text-4xl text-navy-900 sm:text-5xl">Terms & Conditions</h1>
      <p className="mt-3 text-sm text-muted">Last updated 26 November 2026.</p>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-ink">
        <p>
          These terms describe how to use the {site.name} website and how an inquiry turns into a
          quotation. Sending a form does not by itself confirm that work has been accepted.
        </p>
        <section>
          <h2 className="font-display text-2xl text-navy-900">The service</h2>
          <p className="mt-2">{academicDisclaimer}</p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy-900">Quotations</h2>
          <p className="mt-2">{priceDisclaimer}</p>
          <p className="mt-2">
            A quotation is discussed after the requirements are reviewed, usually on WhatsApp. Work starts
            only when the scope, price, and timing have been agreed. The site does not take payment.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy-900">No outcome promises</h2>
          <p className="mt-2">
            Assistance can include explanation, structure, technical help, editing, and related academic
            support. It does not include a promise of grades, marks, plagiarism results, or any particular
            assessment outcome.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy-900">Your responsibilities</h2>
          <p className="mt-2">
            You are responsible for the accuracy of the details you send, for following your institution’s
            rules, and for how you use any guidance you receive. Do not send passwords or files you are
            not allowed to share.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy-900">This website</h2>
          <p className="mt-2">
            The inquiry button opens WhatsApp or copies text to your clipboard. It does not upload files
            and it does not create an account. Availability of WhatsApp depends on your device and that
            service.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy-900">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to {site.email} or {site.whatsappDisplay} on WhatsApp.
          </p>
        </section>
      </div>
      <Link to="/" className="mt-10 inline-flex font-semibold text-blue-700">
        Back to home
      </Link>
    </article>
  )
}
