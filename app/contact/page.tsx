import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTAButtons } from "@/components/CTAButtons"

export const metadata: Metadata = {
  title: "Contact Us | VideoListings.ai",
  description: "Contact the VideoListings.ai team with questions, feedback, or support needs.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Talk
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Need help or have questions? We're here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      name="name" 
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <Input 
                      id="email"
                      name="email" 
                      type="email" 
                      placeholder="Enter your email address"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                      placeholder="Tell us about your project or ask any questions..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Email */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Get In Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our team based on your needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* General Support */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">General Support</h3>
                      <a href="mailto:support@videolistings.ai" className="text-lg font-medium text-primary hover:underline">
                        support@videolistings.ai
                      </a>
                      <p className="text-sm text-gray-600">Questions, technical help, and general inquiries</p>
                    </div>
                  </div>

                  {/* Sales Inquiries */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Sales & Premium Services</h3>
                      <a href="mailto:sales@videolistings.ai" className="text-lg font-medium text-brand-primary hover:underline">
                        sales@videolistings.ai
                      </a>
                      <p className="text-sm text-gray-600">Custom quotes, enterprise plans, and premium video services</p>
                    </div>
                  </div>

                  {/* Partnerships */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-secondary text-secondary-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Partnerships & Integrations</h3>
                      <a href="mailto:partners@videolistings.ai" className="text-lg font-medium text-brand-primary hover:underline">
                        partners@videolistings.ai
                      </a>
                      <p className="text-sm text-gray-600">API integrations, real estate partnerships, and collaborations</p>
                    </div>
                  </div>

                </CardContent>
              </Card>

              {/* Response Times */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Response Times</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">General Questions</span>
                      <span className="font-medium">24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Premium Video Quotes</span>
                      <span className="font-medium">4-8 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Common Requests - Full Width */}
          <div className="max-w-6xl mx-auto mt-12">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Common Requests</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="text-gray-600">• Premium 3D video quotes</div>
                  <div className="text-gray-600">• Custom project consultations</div>
                  <div className="text-gray-600">• Technical support for DIY app</div>
                  <div className="text-gray-600">• Billing and account questions</div>
                  <div className="text-gray-600">• Partnership opportunities</div>
                  <div className="text-gray-600">• Bulk pricing for teams</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need Quick Help?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Check out these resources or jump straight into creating your first video.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="/faq" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="text-primary mb-3">
                  <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">FAQ</h3>
                <p className="text-sm text-gray-600 mt-1">Common questions & answers</p>
              </a>

              <a href="/how-it-works" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="text-primary mb-3">
                  <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">How It Works</h3>
                <p className="text-sm text-gray-600 mt-1">Step-by-step process</p>
              </a>

              <a href="/pricing" className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <div className="text-primary mb-3">
                  <svg className="h-8 w-8 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900">Start Free Trial</h3>
                <p className="text-sm text-gray-600 mt-1">Try before you buy</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Don't wait for answers. Start creating your first listing video today.
            </p>
            <CTAButtons 
              showDivider={false}
            />
          </div>
        </div>
      </section>
    </div>
  )
} 