import { site } from "../config/site.ts"

export function whatsappDigits() {
  return site.whatsappE164.replace(/\D/g, "")
}

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${whatsappDigits()}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

const URL_LIMIT = 1800

export function openWhatsApp(message: string) {
  const fullUrl = whatsappUrl(message)
  const shortened = fullUrl.length > URL_LIMIT
  const url = shortened
    ? whatsappUrl(
        "Hello, I would like to inquire about assignment assistance.\n\nMy full inquiry is copied to the clipboard. Please let me paste it here, then I will attach any files.",
      )
    : fullUrl
  const popup = window.open(url, "_blank", "noopener,noreferrer")
  return { url, opened: popup !== null, shortened }
}
