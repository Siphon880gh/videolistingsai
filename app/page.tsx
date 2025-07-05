import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "VideoListings.ai | Turn Photos into Videos for Real Estate",
  description: "Sell more homes with videos made from your listing photos. Try our done-for-you 3D video service or easy DIY app with free trial.",
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-secondary to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold brand-heading mb-6">
              Skip the Expensive Videographer
            </h1>
            <p className="text-xl sm:text-2xl brand-text mb-8">
              Transform your listing photos into luxury videos for a fraction of traditional costs. Professional service or DIY - your choice.
            </p>
            
            {/* Primary CTA for Premium Service */}
            <div className="mb-6">
              <Link href="/pricing#premium">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-4 brand-bg-primary text-white hover:bg-brand-primary/90 brand-shadow">
                  Get Premium 3D Video Service
                </Button>
              </Link>
            </div>
            
            {/* Secondary CTA for Budget Users */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Budget-conscious? Try our DIY option:</p>
              <Link href="/pricing#diy">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-brand-primary brand-primary hover:brand-bg-primary hover:text-white">
                  Start Free DIY Trial
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Video Preview */}
          <div className="mt-12 max-w-5xl mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg shadow-xl w-full"
              poster="/img/app-screenshot.png"
            >
              <source src="/videos/3d-premium-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Showcases the premium 3D video transformation in action */}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold brand-heading mb-6">
              Why Luxury Agents Choose Our Premium Service
            </h2>
            <p className="text-lg brand-text mb-4">
              <strong>Save 70% vs traditional videography.</strong> No scheduling shoots, no editing delays, no surprise costs.
            </p>
            <p className="text-lg brand-text">
              Transform your existing listing photos into professional 3D videos that sell properties faster and position you as the tech-forward agent.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Services Section - Premium First */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Premium 3D Video Service - Featured */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold brand-heading mb-4">Premium 3D Video Service</h2>
                <p className="text-lg text-gray-600">Our most popular choice for luxury agents</p>
              </div>
              
              <Card className="max-w-2xl mx-auto border-2 border-brand-primary shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl brand-heading">Done-For-You Professional Videos</CardTitle>
                  <CardDescription className="text-lg">We handle everything while you focus on selling</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Photo motion and 3D effects
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Professional music and voiceover
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        3 revisions included
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Custom end card design
                      </li>
                    </ul>
                  </div>
                  <div className="text-center pt-4">
                    <Link href="/pricing#premium">
                      <Button size="lg" className="w-full sm:w-auto brand-bg-primary text-white">Get Premium Service</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* DIY Option - Secondary */}
            <div className="border-t pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-700 mb-2">Budget-Friendly Alternative</h3>
                <p className="text-gray-600">Prefer to do it yourself? Try our DIY video app</p>
              </div>
              
              <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-gray-700">DIY Video App</CardTitle>
                  <CardDescription>Prefer our more economic do-it-yourself?<br/>Create videos yourself with our easy-to-use self-service app</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* App Screenshot */}
                  <div className="text-center">
                    <Image
                      src="/img/app-screenshot.png"
                      alt="DIY VideoListings.ai app interface - create videos yourself"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-md mx-auto"
                    />
                    <p className="text-sm text-gray-600 mt-2 italic">The actual app interface you'll use to create videos yourself</p>
                  </div>
                  
                  <div className="max-w-md mx-auto text-center">
                    <ul className="space-y-3">
                      <li className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Free trial - no credit card
                      </li>
                      <li className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        $30/month: slideshow videos
                      </li>
                      <li className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        $65/month: add voice + ordering
                      </li>
                      <li className="flex items-center justify-center">
                        <svg className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        $100/month: 10 re-edits
                      </li>
                    </ul>
                    <div className="text-center mt-4">
                      <Link href="/pricing">
                        <Button variant="link" className="text-brand-primary">
                          View Full Pricing Table
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="text-center pt-4">
                    <Link href="/pricing#diy">
                      <Button variant="outline" className="w-full sm:w-auto border-gray-400 text-gray-700">Try the App - Start Free Trial</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Testimonial Quote */}
            <div className="text-center lg:text-left">
              <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
                "This made my listing stand out. I sold in 4 days."
              </blockquote>
              <cite className="text-lg text-gray-600">— Jamie S., Arizona Agent</cite>
              
            </div>

            {/* Portfolio Preview */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                See What You Can Make
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Watch videos made for real listings with our tools and services.
              </p>
              <Link href="/portfolio">
                <Button size="lg">View Portfolio</Button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let Your Listings Shine
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