import { useEffect, useState } from "react"
import { site } from "../config/site.ts"
import { Contact } from "../components/Contact.tsx"
import { Faq } from "../components/Faq.tsx"
import { Hero } from "../components/Hero.tsx"
import { HowItWorks } from "../components/HowItWorks.tsx"
import { InquiryForm } from "../components/InquiryForm.tsx"
import { Pricing } from "../components/Pricing.tsx"
import { Services } from "../components/Services.tsx"
import { Testimonials } from "../components/Testimonials.tsx"
import { WhyUs } from "../components/WhyUs.tsx"
import { scrollToId } from "../lib/scroll.ts"

export function Home() {
  const [assistance, setAssistance] = useState("")

  useEffect(() => {
    document.title = site.metaTitle
  }, [])

  function requestQuote(next: string) {
    setAssistance(next)
    scrollToId("inquiry")
  }

  return (
    <>
      <Hero />
      <Services onQuote={requestQuote} />
      <HowItWorks />
      <Pricing onQuote={requestQuote} />
      <WhyUs />
      <InquiryForm assistance={assistance} />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
