import { Copy, Loader2, MessageCircle, Paperclip, X } from "lucide-react"
import { useId, useRef, useState } from "react"
import type { FormEvent, ReactNode } from "react"
import {
  academicDisclaimer,
  assistanceOptions,
  budgetOptions,
  site,
} from "../config/site.ts"
import {
  buildInquiryMessage,
  emptyInquiry,
  formatFileSize,
  validateInquiry,
} from "../lib/inquiry.ts"
import type { InquiryErrors, InquiryValues } from "../lib/inquiry.ts"
import { cx } from "../lib/cx.ts"
import { openWhatsApp } from "../lib/whatsapp.ts"
import { Container, SectionHeading } from "./SectionHeading.tsx"
import { useToast } from "./Toast.tsx"

const ALLOWED = new Set(["pdf", "doc", "docx", "jpg", "jpeg", "png"])

const fieldClass =
  "w-full rounded-2xl border border-line bg-white px-4 py-3 text-base text-ink transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/15"

function extension(name: string) {
  const parts = name.toLowerCase().split(".")
  return parts.length > 1 ? (parts.at(-1) ?? "") : ""
}

export function InquiryForm({ assistance }: { assistance: string }) {
  const toast = useToast()
  const formId = useId()
  const bannerRef = useRef<HTMLDivElement>(null)
  const lock = useRef(false)
  const [values, setValues] = useState<InquiryValues>(emptyInquiry)
  const [appliedAssistance, setAppliedAssistance] = useState(assistance)
  if (assistance !== appliedAssistance) {
    setAppliedAssistance(assistance)
    if (assistance) setValues((current) => ({ ...current, assistance }))
  }
  const [errors, setErrors] = useState<InquiryErrors>({})
  const [files, setFiles] = useState<File[]>([])
  const [fileNote, setFileNote] = useState("")
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "blocked">("idle")
  const [copied, setCopied] = useState(false)
  const [shortened, setShortened] = useState(false)
  const [fallbackUrl, setFallbackUrl] = useState("")

  function update<K extends keyof InquiryValues>(key: K, value: InquiryValues[K]) {
    setValues((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
  }

  function describedBy(key: keyof InquiryValues) {
    return errors[key] ? `${formId}-${key}-error` : undefined
  }

  function onFiles(list: FileList | null) {
    const selected = Array.from(list ?? [])
    const accepted: File[] = []
    const rejected: string[] = []
    for (const file of selected) {
      if (ALLOWED.has(extension(file.name))) accepted.push(file)
      else rejected.push(file.name)
    }
    setFiles((current) => {
      const seen = new Set(current.map((file) => `${file.name}:${file.size}`))
      const next = [...current]
      for (const file of accepted) {
        const key = `${file.name}:${file.size}`
        if (!seen.has(key)) {
          seen.add(key)
          next.push(file)
        }
      }
      return next
    })
    setFileNote(
      rejected.length > 0
        ? `Skipped unsupported files: ${rejected.join(", ")}. Use PDF, DOC, DOCX, JPG, or PNG.`
        : "",
    )
  }

  async function share(mode: "whatsapp" | "copy") {
    const nextErrors = validateInquiry(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0]
      if (first) document.getElementById(`${formId}-${first}`)?.focus()
      return
    }
    if (lock.current) return
    lock.current = true

    const message = buildInquiryMessage(
      values,
      files.map((file) => file.name),
    )

    if (mode === "copy") {
      try {
        await navigator.clipboard.writeText(message)
        setCopied(true)
        toast("Inquiry details copied. Paste them into WhatsApp and attach your files there.")
      } catch {
        toast("Could not copy the inquiry. Check browser clipboard permission and try again.", "error")
      } finally {
        lock.current = false
      }
      return
    }

    try {
      const result = openWhatsApp(message)
      setStatus("submitting")
      setFallbackUrl(result.url)
      setShortened(result.shortened)
      let didCopy = false
      try {
        await navigator.clipboard.writeText(message)
        didCopy = true
      } catch {
        didCopy = false
      }
      setCopied(didCopy)
      if (!result.opened) {
        setStatus("blocked")
        toast("The browser blocked WhatsApp. Use the link in the form.", "error")
        return
      }
      setStatus("success")
      toast(
        result.shortened
          ? "WhatsApp opened. Paste the copied inquiry into the chat."
          : "WhatsApp opened with your inquiry.",
      )
      bannerRef.current?.focus()
    } catch {
      setStatus("blocked")
      toast("The inquiry could not be prepared. Copy the details and try again.", "error")
    } finally {
      lock.current = false
    }
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    void share("whatsapp")
  }

  const errorCount = Object.values(errors).filter(Boolean).length

  return (
    <section id="inquiry" className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="05 — Inquiry" title="Send your requirements">
          Tell us what the assessment asks for. Submitting opens WhatsApp with a prepared message so you
          can receive a personalized quotation.
        </SectionHeading>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="rounded-[1.7rem] bg-navy-900 p-6 text-white sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold tracking-[0.16em] text-wa uppercase">After you submit</p>
            <ol className="mt-5 space-y-4">
              {[
                "WhatsApp opens with your details already written out.",
                "Attach any selected files yourself in that chat.",
                "A quotation and timeline are discussed from the brief you shared.",
              ].map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/10 text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-white/85">{item}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-white/80 ring-1 ring-white/10">
              Files chosen on this page stay on your device. This website does not upload them. Use the
              chat attachment button, or paste a Google Drive link in the form.
            </div>
            <p className="mt-6 text-sm text-white/70">
              WhatsApp {site.whatsappDisplay}
              <span className="mt-1 block">{site.workingHours}</span>
            </p>
            <p className="mt-6 text-xs leading-relaxed text-white/60">{academicDisclaimer}</p>
          </aside>

          <form
            className="rounded-[1.7rem] border border-line bg-paper p-5 shadow-[0_24px_50px_-40px_rgba(20,33,61,0.8)] sm:p-8"
            onSubmit={onSubmit}
            noValidate
            aria-busy={status === "submitting"}
          >
            {status === "success" ? (
              <div
                ref={bannerRef}
                tabIndex={-1}
                role="status"
                className="mb-5 rounded-2xl bg-emerald-50 px-4 py-4 text-sm leading-relaxed text-emerald-950 ring-1 ring-emerald-200"
              >
                <p className="font-semibold">WhatsApp opened with your inquiry.</p>
                <p className="mt-1">
                  Nothing was uploaded to a server. If you selected files, attach them in the WhatsApp chat.
                  {copied ? " A copy of the full inquiry is on your clipboard." : " Use Copy inquiry details if you need to paste the message."}
                  {shortened
                    ? " The message was long, so WhatsApp opened with a short note. Paste the copied inquiry into the chat."
                    : ""}
                </p>
              </div>
            ) : null}

            {status === "blocked" ? (
              <div ref={bannerRef} tabIndex={-1} role="alert" className="mb-5 rounded-2xl bg-red-50 px-4 py-4 text-sm text-red-900 ring-1 ring-red-200">
                <p className="font-semibold">WhatsApp did not open.</p>
                <p className="mt-1">
                  The browser blocked the new tab. Your files are still only on this device.
                  {copied ? " The inquiry text was copied." : ""}
                </p>
                {fallbackUrl ? (
                  <a className="mt-3 inline-flex font-semibold text-navy-900 underline" href={fallbackUrl} target="_blank" rel="noreferrer noopener">
                    Open WhatsApp with this inquiry
                  </a>
                ) : null}
              </div>
            ) : null}

            {errorCount > 0 ? (
              <p role="alert" className="mb-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-800">
                Please complete the highlighted fields before sending the inquiry.
              </p>
            ) : null}

            <fieldset className="grid gap-4 sm:grid-cols-2">
              <legend className="mb-1 font-display text-2xl text-navy-900 sm:col-span-2">About you</legend>
              <Field label="Full name" required error={errors.name} errorId={`${formId}-name-error`}>
                <input
                  id={`${formId}-name`}
                  className={cx(fieldClass, errors.name && "border-red-500")}
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={describedBy("name")}
                  onChange={(event) => update("name", event.target.value)}
                />
              </Field>
              <Field label="WhatsApp number" required error={errors.whatsapp} errorId={`${formId}-whatsapp-error`}>
                <input
                  id={`${formId}-whatsapp`}
                  className={cx(fieldClass, errors.whatsapp && "border-red-500")}
                  name="whatsapp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="98XXX XXXXX"
                  value={values.whatsapp}
                  aria-invalid={Boolean(errors.whatsapp)}
                  aria-describedby={describedBy("whatsapp")}
                  onChange={(event) => update("whatsapp", event.target.value)}
                />
              </Field>
              <Field label="Email address" error={errors.email} errorId={`${formId}-email-error`}>
                <input
                  id={`${formId}-email`}
                  className={cx(fieldClass, errors.email && "border-red-500")}
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={describedBy("email")}
                  onChange={(event) => update("email", event.target.value)}
                />
              </Field>
              <Field label="College / University" error={errors.college} errorId={`${formId}-college-error`}>
                <input
                  id={`${formId}-college`}
                  className={fieldClass}
                  name="organization"
                  autoComplete="organization"
                  value={values.college}
                  onChange={(event) => update("college", event.target.value)}
                />
              </Field>
              <Field label="Course / Degree" className="sm:col-span-2" error={errors.course} errorId={`${formId}-course-error`}>
                <input
                  id={`${formId}-course`}
                  className={fieldClass}
                  name="course"
                  value={values.course}
                  onChange={(event) => update("course", event.target.value)}
                />
              </Field>
            </fieldset>

            <fieldset className="mt-8 grid gap-4 sm:grid-cols-2">
              <legend className="mb-1 font-display text-2xl text-navy-900 sm:col-span-2">Assignment</legend>
              <Field label="Subject / Module" required error={errors.subject} errorId={`${formId}-subject-error`}>
                <input
                  id={`${formId}-subject`}
                  className={cx(fieldClass, errors.subject && "border-red-500")}
                  name="subject"
                  value={values.subject}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={describedBy("subject")}
                  onChange={(event) => update("subject", event.target.value)}
                />
              </Field>
              <Field
                label="Assignment / Assessment name"
                required
                error={errors.assessment}
                errorId={`${formId}-assessment-error`}
              >
                <input
                  id={`${formId}-assessment`}
                  className={cx(fieldClass, errors.assessment && "border-red-500")}
                  name="assessment"
                  value={values.assessment}
                  aria-invalid={Boolean(errors.assessment)}
                  aria-describedby={describedBy("assessment")}
                  onChange={(event) => update("assessment", event.target.value)}
                />
              </Field>
              <Field label="Type of assistance" required error={errors.assistance} errorId={`${formId}-assistance-error`}>
                <select
                  id={`${formId}-assistance`}
                  className={cx("select-field", fieldClass, errors.assistance && "border-red-500")}
                  name="assistance"
                  value={values.assistance}
                  aria-invalid={Boolean(errors.assistance)}
                  aria-describedby={describedBy("assistance")}
                  onChange={(event) => update("assistance", event.target.value)}
                >
                  <option value="">Select a service</option>
                  {assistanceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Deadline" required error={errors.deadline} errorId={`${formId}-deadline-error`}>
                <input
                  id={`${formId}-deadline`}
                  className={cx(fieldClass, errors.deadline && "border-red-500")}
                  name="deadline"
                  type="datetime-local"
                  value={values.deadline}
                  aria-invalid={Boolean(errors.deadline)}
                  aria-describedby={describedBy("deadline")}
                  onChange={(event) => update("deadline", event.target.value)}
                />
              </Field>
              <Field label="Budget" required className="sm:col-span-2" error={errors.budget} errorId={`${formId}-budget-error`}>
                <select
                  id={`${formId}-budget`}
                  className={cx("select-field", fieldClass, errors.budget && "border-red-500")}
                  name="budget"
                  value={values.budget}
                  aria-invalid={Boolean(errors.budget)}
                  aria-describedby={describedBy("budget")}
                  onChange={(event) => update("budget", event.target.value)}
                >
                  <option value="">Select a budget range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                label="Detailed requirements"
                required
                className="sm:col-span-2"
                error={errors.requirements}
                errorId={`${formId}-requirements-error`}
              >
                <textarea
                  id={`${formId}-requirements`}
                  className={cx(fieldClass, "min-h-36 resize-y", errors.requirements && "border-red-500")}
                  name="requirements"
                  maxLength={4000}
                  value={values.requirements}
                  aria-invalid={Boolean(errors.requirements)}
                  aria-describedby={describedBy("requirements")}
                  onChange={(event) => update("requirements", event.target.value)}
                />
              </Field>
            </fieldset>

            <fieldset className="mt-8 grid gap-4">
              <legend className="mb-1 font-display text-2xl text-navy-900">Files and notes</legend>
              <div>
                <p className="mb-1.5 text-sm font-semibold text-navy-900">Assignment instructions / PDF</p>
                <label className="flex cursor-pointer flex-col items-center rounded-2xl border border-dashed border-navy-800/30 bg-white px-4 py-6 text-center focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-600/15">
                  <Paperclip className="h-5 w-5 text-navy-900" aria-hidden="true" />
                  <span className="mt-2 text-sm font-semibold text-navy-900">Choose PDF, DOC, DOCX, JPG, or PNG</span>
                  <span className="mt-1 text-xs text-muted">You can select more than one file</span>
                  <input
                    className="sr-only"
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,image/jpeg,image/png"
                    onChange={(event) => {
                      onFiles(event.target.files)
                      event.target.value = ""
                    }}
                  />
                </label>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Selected files are listed here only. They are not uploaded. After WhatsApp opens, attach
                  the same files in the chat unless you add a cloud upload later.
                </p>
                {fileNote ? <p className="mt-2 text-sm text-red-700">{fileNote}</p> : null}
                {files.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {files.map((file) => (
                      <li
                        key={`${file.name}-${file.size}`}
                        className="flex items-center justify-between gap-3 rounded-xl bg-white px-3 py-2 text-sm ring-1 ring-line"
                      >
                        <span className="min-w-0 truncate">
                          {file.name}
                          <span className="ml-2 text-muted">{formatFileSize(file.size)}</span>
                        </span>
                        <button
                          type="button"
                          className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-navy-900"
                          onClick={() =>
                            setFiles((current) => current.filter((item) => item !== file))
                          }
                        >
                          <span className="sr-only">Remove {file.name}</span>
                          <X className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <Field label="Google Drive link" error={errors.driveLink} errorId={`${formId}-driveLink-error`}>
                <input
                  id={`${formId}-driveLink`}
                  className={cx(fieldClass, errors.driveLink && "border-red-500")}
                  name="driveLink"
                  type="url"
                  inputMode="url"
                  placeholder="https://"
                  value={values.driveLink}
                  aria-invalid={Boolean(errors.driveLink)}
                  aria-describedby={describedBy("driveLink")}
                  onChange={(event) => update("driveLink", event.target.value)}
                />
              </Field>
              <Field label="Additional notes" error={errors.notes} errorId={`${formId}-notes-error`}>
                <textarea
                  id={`${formId}-notes`}
                  className={cx(fieldClass, "min-h-24 resize-y")}
                  name="notes"
                  maxLength={1500}
                  value={values.notes}
                  onChange={(event) => update("notes", event.target.value)}
                />
              </Field>
            </fieldset>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="btn btn-wa inline-flex" disabled={status === "submitting"}>
                {status === "submitting" ? (
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                ) : (
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                )}
                {status === "submitting" ? "Opening WhatsApp…" : "Send inquiry on WhatsApp"}
              </button>
              <button type="button" className="btn btn-line inline-flex" onClick={() => void share("copy")}>
                <Copy className="h-5 w-5" aria-hidden="true" />
                Copy inquiry details
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}

function Field({
  label,
  required,
  error,
  errorId,
  className = "",
  children,
}: {
  label: string
  required?: boolean
  error?: string
  errorId: string
  className?: string
  children: ReactNode
}) {
  return (
    <label className={className}>
      <label className="mb-1.5 block text-sm font-semibold text-navy-900">
        {label}
        {required ? (
          <span className="text-blue-700" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="font-medium text-muted"> (optional)</span>
        )}
        {required ? <span className="sr-only"> required</span> : null}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </label>
  )
}
