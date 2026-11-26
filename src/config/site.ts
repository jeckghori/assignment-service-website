/**
 * Edit this file to change the brand, WhatsApp number, email, prices,
 * services, FAQs, and placeholder testimonials.
 *
 * WhatsApp number format: country code + number, digits only.
 * India example: 919876543210
 */

export const prices = {
  assignment: 199,
  report: 299,
  ppt: 299,
  sql: 399,
  programming: 499,
  research: 499,
  project: 799,
  web: 999,
} as const

export const site = {
  name: "Assignment Assist",
  metaTitle: "Assignment Assist | Quality Academic Support for Students",
  description:
    "Affordable academic support for assignments, programming, reports, presentations, and projects. Share your brief and get a personalized quotation on WhatsApp.",
  /** Public site URL. Update this when a custom domain is connected. */
  url: "https://example.com",
  email: "jeckghori@gmail.com",
  whatsappE164: "919537113566",
  whatsappDisplay: "+91 95371 13566",
  responseTime:
    "We usually reply within a few hours on working days. This is a typical window, not a guaranteed response time.",
  workingHours: "Monday to Saturday, 10:00–19:00 IST",
  blurb:
    "Academic guidance for university and college students, with clear communication and support shaped around your brief.",
} as const

export const academicDisclaimer =
  "We provide academic guidance, educational support, explanations, technical assistance, editing, and related services. Students are responsible for complying with their institution's academic integrity policies and using assistance appropriately."

export const priceDisclaimer =
  "Prices are indicative starting prices. Final quotations depend on the assignment requirements, complexity, deadline, and scope of assistance."

export const whatsappMessages = {
  hero: "Hello, I would like to inquire about assignment assistance.",
  float: "Hello, I would like to ask about academic support from Assignment Assist.",
  contact: "Hello, I would like to discuss an assignment and request a quotation.",
  footer: "Hello, I found Assignment Assist and would like to get in touch.",
} as const

export const assistanceOptions = [
  "Assignment Assistance",
  "Programming / Coding",
  "Report / Documentation",
  "PPT / Presentation",
  "Research Assistance",
  "Data Analysis",
  "Database / SQL",
  "Web Development",
  "Project Assistance",
  "Editing / Formatting",
  "Other",
] as const

export type Assistance = (typeof assistanceOptions)[number]

export const budgetOptions = [
  "Below ₹300",
  "₹300–₹500",
  "₹500–₹1,000",
  "₹1,000–₹2,000",
  "₹2,000+",
  "Flexible",
] as const

export const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "process", label: "How It Works" },
  { id: "pricing", label: "Pricing" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact" },
] as const

export function formatInr(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`
}

export function startingAt(amount: number) {
  return `Starting at ${formatInr(amount)}`
}

export type ServiceIcon =
  | "book"
  | "code"
  | "file"
  | "slides"
  | "globe"
  | "database"
  | "chart"
  | "folder"
  | "pen"

export const services = [
  {
    id: "assignment",
    icon: "book",
    title: "Assignment Assistance",
    description:
      "Help understanding assignment requirements, research, structuring, explanations, and academic guidance.",
    assistance: "Assignment Assistance",
    price: prices.assignment,
  },
  {
    id: "programming",
    icon: "code",
    title: "Programming & Coding Assistance",
    description:
      "Support with programming concepts, debugging, coding tasks, algorithms, and technical explanations.",
    assistance: "Programming / Coding",
    price: prices.programming,
  },
  {
    id: "report",
    icon: "file",
    title: "Report & Documentation",
    description:
      "Assistance with report structure, formatting, documentation, proofreading, and presentation.",
    assistance: "Report / Documentation",
    price: prices.report,
  },
  {
    id: "ppt",
    icon: "slides",
    title: "Presentation & PPT",
    description: "Help preparing structured, clear, and professional presentations.",
    assistance: "PPT / Presentation",
    price: prices.ppt,
  },
  {
    id: "web",
    icon: "globe",
    title: "Web Development",
    description:
      "Support with frontend development, backend development, React, Node.js, HTML, CSS, JavaScript, and database projects.",
    assistance: "Web Development",
    price: prices.web,
  },
  {
    id: "database",
    icon: "database",
    title: "Database & SQL",
    description:
      "Assistance with SQL queries, database design, ER diagrams, schema design, and DBMS concepts.",
    assistance: "Database / SQL",
    price: prices.sql,
  },
  {
    id: "research",
    icon: "chart",
    title: "Research & Data Analysis",
    description:
      "Support with research methodology, data processing, analysis, charts, and interpretation.",
    assistance: "Research Assistance",
    price: prices.research,
  },
  {
    id: "project",
    icon: "folder",
    title: "Project Assistance",
    description:
      "Technical guidance and support for academic projects, implementation, debugging, and documentation.",
    assistance: "Project Assistance",
    price: prices.project,
  },
  {
    id: "editing",
    icon: "pen",
    title: "Editing & Formatting",
    description:
      "Formatting documents, improving clarity, proofreading, citation formatting, and presentation.",
    assistance: "Editing / Formatting",
    price: prices.report,
  },
] as const satisfies readonly {
  id: string
  icon: ServiceIcon
  title: string
  description: string
  assistance: Assistance
  price: number
}[]

export const pricingPlans = [
  {
    id: "assignment",
    name: "Basic Assignment Assistance",
    detail: "Requirements, structure, and explanations for a standard written assignment.",
    assistance: "Assignment Assistance",
    price: prices.assignment,
  },
  {
    id: "report",
    name: "Report & Formatting",
    detail: "Structure, formatting, proofreading, and presentation of a report.",
    assistance: "Report / Documentation",
    price: prices.report,
  },
  {
    id: "ppt",
    name: "PPT Assistance",
    detail: "A clear, structured presentation based on your topic and instructions.",
    assistance: "PPT / Presentation",
    price: prices.ppt,
  },
  {
    id: "sql",
    name: "SQL / Database Assistance",
    detail: "Queries, schema design, ER diagrams, and DBMS concepts.",
    assistance: "Database / SQL",
    price: prices.sql,
  },
  {
    id: "programming",
    name: "Programming Assistance",
    detail: "Concepts, debugging, coding tasks, and technical explanations.",
    assistance: "Programming / Coding",
    price: prices.programming,
  },
  {
    id: "research",
    name: "Research Assistance",
    detail: "Methodology, source handling, analysis, and interpretation.",
    assistance: "Research Assistance",
    price: prices.research,
  },
  {
    id: "project",
    name: "Project Assistance",
    detail: "Guidance on implementation, debugging, and project documentation.",
    assistance: "Project Assistance",
    price: prices.project,
  },
  {
    id: "web",
    name: "Web Development Assistance",
    detail: "Frontend, backend, and database help for an academic web project.",
    assistance: "Web Development",
    price: prices.web,
    featured: true,
  },
] as const satisfies readonly {
  id: string
  name: string
  detail: string
  assistance: Assistance
  price: number
  featured?: boolean
}[]

export const trustPoints = [
  {
    id: "price",
    title: "Affordable Student Pricing",
    text: "Starting prices are published before you request a quote.",
  },
  {
    id: "personal",
    title: "Personalized Support",
    text: "Assistance follows your subject, brief, and questions.",
  },
  {
    id: "private",
    title: "Confidential Inquiry",
    text: "Your details are used to prepare a quotation and support.",
  },
  {
    id: "deadline",
    title: "Deadline-Conscious Assistance",
    text: "Share the due date so timing can be discussed up front.",
  },
] as const

export const steps = [
  {
    title: "Submit Your Requirements",
    text: "Students fill in the inquiry form and provide assignment details.",
  },
  {
    title: "Receive Your Quotation",
    text: "Requirements are reviewed and pricing and delivery timelines are discussed.",
  },
  {
    title: "Discuss on WhatsApp",
    text: "Students can directly communicate for clarifications and updates.",
  },
  {
    title: "Get Academic Support",
    text: "Students receive assistance, explanations, feedback, and support based on agreed requirements.",
  },
] as const

export const whyUs = [
  {
    id: "pricing",
    title: "Affordable Student-Friendly Pricing",
    text: "Starting prices are listed in rupees so you can see the range before you inquire. The final quotation follows your actual requirements.",
  },
  {
    id: "personal",
    title: "Personalized Assistance",
    text: "Support is based on your subject, instructions, and what you want help with, rather than a fixed package.",
  },
  {
    id: "technical",
    title: "Technical Expertise",
    text: "Get help with programming, web development, SQL, research, documentation, and related academic work.",
  },
  {
    id: "communication",
    title: "Timely Communication",
    text: "Share updates and questions on WhatsApp while you work toward the deadline you provided.",
  },
  {
    id: "privacy",
    title: "Confidentiality",
    text: "Your inquiry is used to prepare a quotation and provide the support you requested. Student submissions are not published on this site.",
  },
  {
    id: "process",
    title: "Support Throughout the Process",
    text: "You can ask for clarification, explanations, and feedback while the agreed assistance is in progress.",
  },
] as const

export const testimonials = [
  {
    id: "sample-a",
    quote:
      "Replace this card with a real comment from a student who has agreed to be quoted. Do not publish feedback without permission.",
    name: "Placeholder student A",
    detail: "Sample course — not a real review",
  },
  {
    id: "sample-b",
    quote:
      "Use this space for a specific note about communication, subject help, or how the quotation was explained. Invented praise does not belong here.",
    name: "Placeholder student B",
    detail: "Sample programme — not a real review",
  },
  {
    id: "sample-c",
    quote:
      "When you have genuine feedback, swap the name, course, and quote in the site configuration file. Leave the placeholder label until then.",
    name: "Placeholder student C",
    detail: "Sample year — not a real review",
  },
] as const

export const faqs = [
  {
    question: "How do I submit my assignment?",
    answer:
      "Use the inquiry form on this page. Add your details, deadline, and requirements, then submit. The site opens WhatsApp with your message prepared. If you selected files from your device, attach those files yourself in the WhatsApp chat. You can also paste a Google Drive link.",
  },
  {
    question: "How is the pricing decided?",
    answer:
      "The prices on this site are indicative starting prices. A quotation is based on the assignment requirements, complexity, deadline, and how much assistance you need. A starting price is not a promise that every assignment costs that amount.",
  },
  {
    question: "Can I submit a PDF?",
    answer:
      "Yes. You can select a PDF, DOC, DOCX, JPG, or PNG in the form, or paste a Google Drive link. In this version, selected files are not uploaded to a server. Attach them in the WhatsApp chat after it opens, or share a link that can be opened.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "We usually reply within a few hours on working days, during Monday to Saturday, 10:00–19:00 IST. That is a typical window, not a guaranteed response time. If your deadline is close, say so in the form.",
  },
  {
    question: "Can I contact you through WhatsApp?",
    answer:
      "Yes. Use any WhatsApp button on this site, or message the number shown in the contact section. The inquiry form also opens a WhatsApp chat with your details filled in.",
  },
  {
    question: "What types of assignments do you support?",
    answer:
      "Assignment guidance, programming and coding, reports and documentation, presentations, research and data analysis, databases and SQL, web development, project assistance, and editing or formatting. If your task is different, choose Other and describe it.",
  },
  {
    question: "Can I request urgent assistance?",
    answer:
      "Yes. Share the exact due date and time in the form. Whether urgent work can be taken on depends on the scope and the time available. We will tell you what is realistic after reading the brief.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Your details are used to review the request, discuss a quotation, and provide the assistance you ask for. Inquiries are not published on this website. Avoid sending passwords or unrelated personal documents. Once a chat opens, WhatsApp’s own privacy practices also apply.",
  },
  {
    question: "Can I get help understanding my assignment?",
    answer:
      "Yes. You can ask for help understanding the brief, the requirements, and how to approach the work. Share the instructions and say what you want explained.",
  },
  {
    question: "How do I receive a quotation?",
    answer:
      "After you submit the form, the requirements are reviewed in the WhatsApp conversation. You then receive a quotation and a suggested timeline. The final quote can differ from the starting prices shown on the site.",
  },
] as const
