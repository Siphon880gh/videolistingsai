"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTAButtons } from "@/components/CTAButtons"
import { useState, useEffect } from "react"

export default function HomePage() {
  const testimonials = [
    {
      quote: "This made my listing stand out. I sold in 4 days.",
      author: "Jamie S., Arizona Agent"
    },
    {
      quote: "My clients love the videos. It's like having a personal videographer.",
      author: "Michael R., California Realtor"
    },
    {
      quote: "The 3D effects are stunning. Way better than static photos.",
      author: "Sarah L., Texas Agent"
    },
    {
      quote: "I'm closing deals faster since I started using these videos.",
      author: "David K., Florida Realtor"
    },
    {
      quote: "Professional quality at a fraction of the cost. Amazing!",
      author: "Lisa M., New York Agent"
    },
    {
      quote: "My listings get 3x more engagement with these videos.",
      author: "Jennifer W., Nevada Broker"
    },
    {
      quote: "Clients think I hired a Hollywood production team!",
      author: "Robert T., Colorado Agent"
    },
    {
      quote: "I've doubled my commission this year thanks to these videos.",
      author: "Amanda C., Georgia Realtor"
    },
    {
      quote: "The DIY app is so easy, even my assistant can use it.",
      author: "Kevin H., Oregon Agent"
    },
    {
      quote: "Best investment I've made for my real estate business.",
      author: "Rachel P., Washington Broker"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [isCaptionVisible, setIsCaptionVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAutoAdvance = () => {
    if (intervalId) clearInterval(intervalId);
    
    const newInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds
    
    setIntervalId(newInterval);
  };

  const handleManualNavigation = (index: number) => {
    setCurrentTestimonial(index);
    startAutoAdvance(); // Restart the timer
  };

  const handleDismissCaption = () => {
    setIsAnimating(true);
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
      setIsCaptionVisible(false);
      setIsAnimating(false);
    }, 300); // Match the animation duration
  };

  useEffect(() => {
    startAutoAdvance();
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [testimonials.length]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-secondary to-white py-20 sm:py-32 lg:py-40 min-h-[80vh]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 px-4 sm:px-6 lg:px-8 items-center h-full">
            {/* Text Content */}
            <div className="text-center lg:text-center lg:col-span-2 space-y-8">
              {/* Badge/Label */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-700 mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                For Real Estate Agents
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold brand-heading mb-6 leading-tight">
                  Turn Your Listing Photos Into
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 pb-2 leading-normal">
                    Professional Videos
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl brand-text mb-8 leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-900">Want to see what's possible first?</span>
                </p>
                {/* <p className="text-xl sm:text-2xl brand-text mb-8 leading-relaxed text-gray-700">
                  <span className="font-semibold text-gray-900">No videographer needed.</span>
                  <span className="block mt-2 text-lg text-gray-600">Sell faster, impress clients, win more listings.</span>
                </p> */}
              </div>
              
              {/* CTA Section */}
              <div className="space-y-6">
                {/* Subtitle */}
                {/* <div className="text-center">
                  <p className="text-sm text-gray-600 mb-6 font-medium">Want to see what's possible first?</p>
                </div> */}
                
                {/* CTA Container Pit */}
                <div className="border border-gray-200 border-opacity-50 rounded-lg p-6 bg-white bg-opacity-50 backdrop-blur-sm">
                  {/* 3-Column CTA Layout */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center items-center w-full">
                  {/* Column 1: Get Your First Video */}
                  <Link href="/quote">
                    <Button 
                      size="lg" 
                      className="w-full text-lg px-4 py-4 brand-bg-primary text-white hover:bg-brand-primary/90 brand-shadow transform hover:scale-105 transition-all duration-200"
                    >
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                        </svg>
                        Get Your First Video
                      </span>
                    </Button>
                  </Link>
                  
                  {/* Column 2: OR Divider */}
                  <div className="text-center">
                    <span className="text-lg text-gray-500 font-medium">OR</span>
                  </div>
                  
                  {/* Column 3: See Examples */}
                  <Link href="/portfolio">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full text-lg px-4 py-4 border-brand-primary brand-primary hover:brand-bg-primary transform hover:scale-105 transition-all duration-200"
                    >
                      <span className="flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2z" />
                        </svg>
                        See Examples
                      </span>
                    </Button>
                  </Link>
                </div>
                </div>
              </div>
              
              {/* Trust Indicator */}
              {/* <p className="text-sm text-gray-500 mt-4">
                ✓ Used by 1000+ agents nationwide • ✓ 3-day turnaround • ✓ 70% less than traditional video
              </p> */}
            </div>
            
            {/* Hero Video Preview */}
            <div className="w-full max-w-none lg:col-span-3 group">
              <div className="relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="rounded-lg shadow-xl w-full h-auto min-h-[400px] lg:min-h-[500px] object-cover [&::-webkit-media-controls]:opacity-0 [&::-webkit-media-controls]:transition-opacity [&::-webkit-media-controls]:duration-300 hover:[&::-webkit-media-controls]:opacity-100 group-hover:[&::-webkit-media-controls]:opacity-100"
                >
                  <source src="/videos/3d-premium-demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Video Caption */}
                {isCaptionVisible && (
                  <div className={`absolute top-4 left-4 right-4 bg-black bg-opacity-75 text-white p-3 rounded-lg transition-all duration-300 ease-in-out ${
                    isAnimating ? 'transform scale-0 translate-x-full opacity-0' : 'transform scale-100 translate-x-0 opacity-100'
                  }`}>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Before: Static listing photos → After: Professional 3D video tour</p>
                      <button
                        onClick={handleDismissCaption}
                        className="ml-3 flex-shrink-0 text-white hover:text-gray-300 transition-colors duration-200"
                        aria-label="Dismiss caption"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold brand-heading mb-6">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">1. Upload Your Photos</h3>
                <p className="text-gray-600">Send us your existing listing photos - that's all we need to get started.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">2. We Create Magic</h3>
                <p className="text-gray-600">Our team transforms your photos into professional 3D video tours with motion, music, and effects.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">3. Get Your Video</h3>
                <p className="text-gray-600">Receive your professional video in 3 business days. Use it everywhere - social media, websites, MLS.</p>
              </div>
            </div>
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <p className="text-lg text-gray-700 mb-2">
                <strong>Why agents love this:</strong> No coordinating shoots, no expensive equipment, no learning curve.
              </p>
              <p className="text-gray-600">
                Just upload photos → get professional videos → win more listings. It's that simple.
              </p>
            </div>
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
                <h2 className="text-3xl sm:text-4xl font-bold brand-heading mb-4">Premium 3D Video</h2>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Testimonial Carousel */}
            <div className="text-center lg:text-left">
              <div className="relative h-32 overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ 
                    transform: `translateX(-${currentTestimonial * 100}%)`,
                    width: `${testimonials.length * 100}%`
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0 h-32 flex flex-col justify-center">
                      <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <cite className="text-lg text-gray-600">— {testimonial.author}</cite>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center lg:justify-start mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNavigation(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
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
              Ready to Transform Your Listings?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Join 1000+ agents who are winning more listings with professional video tours. No videographer required.
            </p>
            <CTAButtons 
              primaryText="Get Your First Video"
              secondaryText="Try DIY Free Trial"
              variant="page"
              showDivider={false}
            />
          </div>
        </div>
      </section>
    </div>
  )
} 