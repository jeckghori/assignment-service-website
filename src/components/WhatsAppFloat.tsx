import { MessageCircle } from "lucide-react"
import { whatsappMessages } from "../config/site.ts"
import { whatsappUrl } from "../lib/whatsapp.ts"

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl(whatsappMessages.float)}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-wa text-navy-950 shadow-[0_16px_30px_-16px_rgba(18,90,40,0.9)] sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  )
}
