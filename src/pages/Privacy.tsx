import { useEffect } from "react"
import { Link } from "react-router-dom"
import { site } from "../config/site.ts"

export function Privacy() {
  useEffect(() => {
    document.title = `Privacy Policy | ${site.name}`
  }, [])

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-blue-700 uppercase">Privacy</p>
      <h1 className="mt-3 font-display text-4xl text-navy-900 sm:text-5xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted">Last updated 26 November 2026.</p>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-ink">
        <p>
          {site.name} uses this website to explain academic support services and to help students send an
          inquiry. This version of the site does not run its own database.
        </p>
        <section>
          <h2 className="font-display text-2xl text-navy-900">What you can send</h2>
          <p className="mt-2">
            The inquiry form asks for your name, WhatsApp number, assignment details, and optional
            information such as email, college, course, a file link, and notes. When you submit, those
            details are placed in a WhatsApp message. They are not stored by this website.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy-900">Files</h2>
          <p className="mt-2">
            If you select a PDF or other file, it stays on your device. The site only shows the file name.
            You need to attach the file yourself in WhatsApp, or share a Google Drive link. A future
            upload feature would need a separate backend and would be explained before it stores anything.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy-900">WhatsApp and email</h2>
          <p className="mt-2">
            WhatsApp is operated by a third party. Once a chat opens, that conversation is handled under
            WhatsApp’s privacy practices as well as by the person who receives it. Email, if you choose to
            write to {site.email}, is handled by the email provider you and the recipient use.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy-900">Cookies</h2>
          <p className="mt-2">
            This version of the site does not set analytics or advertising cookies. Your browser may still
            store normal technical data required to load the page.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-navy-900">Contact</h2>
          <p className="mt-2">
            To ask about a message you already sent, contact {site.whatsappDisplay} on WhatsApp or email{" "}
            {site.email}. Replace these placeholder details in the site configuration before publishing.
          </p>
        </section>
      </div>
      <Link to="/" className="mt-10 inline-flex font-semibold text-blue-700">
        Back to home
      </Link>
    </article>
  )
}
