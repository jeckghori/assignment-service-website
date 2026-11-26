export type InquiryValues = {
  name: string
  whatsapp: string
  email: string
  college: string
  course: string
  subject: string
  assessment: string
  assistance: string
  deadline: string
  budget: string
  driveLink: string
  requirements: string
  notes: string
}

export const emptyInquiry: InquiryValues = {
  name: "",
  whatsapp: "",
  email: "",
  college: "",
  course: "",
  subject: "",
  assessment: "",
  assistance: "",
  deadline: "",
  budget: "",
  driveLink: "",
  requirements: "",
  notes: "",
}

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>

function digits(value: string) {
  return value.replace(/\D/g, "")
}

export function formatDeadline(value: string) {
  if (!value.trim()) return "Not provided"
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date)
}

function oneLine(value: string) {
  const cleaned = value.replace(/\s+/g, " ").trim()
  return cleaned || "Not provided"
}

function block(value: string) {
  const cleaned = value.replace(/\r\n/g, "\n").trim()
  return cleaned || "Not provided"
}

export function validateInquiry(values: InquiryValues): InquiryErrors {
  const errors: InquiryErrors = {}

  if (values.name.trim().length < 2) {
    errors.name = "Enter your full name."
  }

  const phone = digits(values.whatsapp)
  if (phone.length < 10 || phone.length > 15) {
    errors.whatsapp = "Enter a WhatsApp number with 10 to 15 digits."
  }

  if (values.email.trim()) {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    if (!emailOk) errors.email = "Enter a valid email address, or leave this blank."
  }

  if (!values.subject.trim()) errors.subject = "Enter the subject or module."
  if (!values.assessment.trim()) errors.assessment = "Enter the assignment or assessment name."
  if (!values.assistance) errors.assistance = "Select a type of assistance."
  if (!values.deadline) errors.deadline = "Add the deadline, including the time if you know it."
  if (!values.budget) errors.budget = "Select a budget range."
  if (!values.requirements.trim()) {
    errors.requirements = "Describe the requirements so a quotation can be prepared."
  }

  if (values.driveLink.trim()) {
    try {
      const url = new URL(values.driveLink.trim())
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        errors.driveLink = "Paste a link that starts with http:// or https://."
      }
    } catch {
      errors.driveLink = "Paste a full Google Drive link, or leave this blank."
    }
  }

  return errors
}

export function buildInquiryMessage(values: InquiryValues, fileNames: string[]) {
  const files =
    fileNames.length > 0
      ? fileNames.map((name) => `- ${name.replace(/\s+/g, " ").trim()}`).join("\n")
      : "None selected. Attach files in this chat if you have them."

  return [
    "Hello, I would like to inquire about assignment assistance.",
    "",
    `Name: ${oneLine(values.name)}`,
    `WhatsApp: ${oneLine(values.whatsapp)}`,
    `Email: ${oneLine(values.email)}`,
    `College: ${oneLine(values.college)}`,
    `Course: ${oneLine(values.course)}`,
    `Subject: ${oneLine(values.subject)}`,
    `Assessment: ${oneLine(values.assessment)}`,
    `Service: ${oneLine(values.assistance)}`,
    `Deadline: ${formatDeadline(values.deadline)}`,
    `Budget: ${oneLine(values.budget)}`,
    "",
    "Assignment Details:",
    block(values.requirements),
    "",
    "PDF / File Link:",
    oneLine(values.driveLink),
    "",
    "Additional Notes:",
    block(values.notes),
    "",
    "Please review my requirements and provide a quotation.",
    "",
    "Files to attach manually in this chat (they were not uploaded on the website):",
    files,
  ].join("\n")
}

export function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
