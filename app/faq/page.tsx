import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ | VideoListings.ai",
  description: "Answers to common questions about our 3D video service, DIY plans, revisions, and usage.",
}

const faqData = [
  {
    question: "How long does it take?",
    answer: "3D videos are ready in 3–5 days. DIY videos are instant after upload."
  },
  {
    question: "Can I use my voice?",
    answer: "Yes. We can train your voice or use your own upload."
  },
  {
    question: "Can I revise my video?",
    answer: "Yes. For Done-For-You 3d Videos, revisions will be done within 24-72 hours after first draft. DIY plans come with up to 2, 3, or 5 revisions per month."
  },
  {
    question: "What formats do I get?",
    answer: "You'll get HD MP4 files, ready for MLS, Instagram, YouTube, and more."
  },
  {
    question: "Do I need a credit card for the free trial?",
    answer: "Nope. Try it free with no payment info."
  }
]

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Have a Question?
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              We've got answers for you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you get started with video marketing for your listings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Popular Topics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Started</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Creating your first video</li>
                  <li>• Photo requirements</li>
                  <li>• Account setup</li>
                  <li>• Free trial details</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Video Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 3D motion effects</li>
                  <li>• Voice narration options</li>
                  <li>• Music and audio</li>
                  <li>• End card customization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Billing & Plans</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Plan comparisons</li>
                  <li>• Upgrading/downgrading</li>
                  <li>• Cancellation policy</li>
                  <li>• Payment methods</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Choose your path: try our budget-friendly DIY tool or get a custom premium 3D video.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Unsure? Try DIY Free Trial (non-3D)
                </Button>
              </Link>
                             <Link href="/quote">
                 <Button size="lg" className="w-full sm:w-auto bg-white text-primary font-bold hover:bg-white/90 hover:text-primary border-2 border-white shadow-lg">
                   Get Premium 3D - Get Quote
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 