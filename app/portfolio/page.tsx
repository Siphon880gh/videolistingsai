"use client"

import { useState, useRef } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTAButtons } from "@/components/CTAButtons"

// Note: Metadata export removed since this is now a client component
// export const metadata: Metadata = {
//   title: "Video Portfolio | VideoListings.ai",
//   description: "See sample real estate listing videos made with our 3D video service and DIY app.",
// }

const portfolioVideos = [
  {
    title: "8899 Beverly Blvd #PHW, West Hollywood, CA",
    type: "3D Video",
    category: "3d",
    src: "/videos/3d-8899-Beverly-Blvd-West-Hollywood-Final-compressed-.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/8899-beverly-blvd-lead-image-layers-w-text-thumbnail.jpg"
  },
  {
    title: "395 Glenullen Dr., Pasadena, CA",
    type: "3D Video",
    category: "3d",
    src: "/videos/3d-Sabatella-VLAi-395-Glenullen-Dr-Pasadena-desktop-w-logos.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/glenullen-pasadena-thumbnail-scaled.jpg"
  },
  {
    title: "820 Mission St. PH #208, Pasadena, CA 91030",
    type: "3D Video",
    category: "3d",
    src: "/videos/3d-video-listings-the-agency-ai-mission-st-trk-1.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/Screenshot-2025-03-15-at-9.42.38%E2%80%AFpm-scaled.jpg"
  },
  {
    title: "4263 Navajo St., Toluca Lake, CA 91602",
    type: "3D Video",
    category: "3d",
    src: "/videos/3d-toluca-lake-final-horizontal.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/Screenshot-2025-03-15-at-9.39.07%E2%80%AFpm-scaled.jpg"
  },
  {
    title: "820 Mission St. PH #208, Pasadena, CA 91030 (Vertical)",
    type: "3D Video",
    category: "3d",
    src: "/videos/3d-4263-navajo-st-toluca-lake-vertical.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/Screenshot-2025-06-17-at-6.59.42 pm.jpg"
  },
  {
    title: "One Solstice Lane, Malibu, CA",
    type: "3D Video",
    category: "3d",
    src: "3d-app-demo",
    poster: "https://videolistings.ai/wp-content/uploads/Video-Listings-Ai-One-Solstice-Lane-Mailibu-CA-featrued-video-image.jpg"
  },
  // Budget DIY Videos
  {
    title: "One Solstice Lane, Malibu, CA",
    type: "Budget DIY",
    category: "budget",
    src: "/videos/diy-muxed-aSW-VLAI-c76-673eb6bf48c77420d743190e.mp4",
    poster: ""
  },
  {
    title: "61 Palm Hill Lane, Branbury CA (Endcard)",
    type: "Budget DIY",
    category: "budget",
    src: "/videos/diy-muxed-aSW-VLAI-c6-679c54fc7edb73366fa4b341.mp4",
    poster: ""
  },
  {
    title: "2341 Wilson Ave, Venice (Endcard Black background, Two agents, 1 pic)",
    type: "Budget DIY",
    category: "budget",
    src: "/videos/diy-muxed-aSW-VLAI-c41-673eb6bf48c77420d743190e.mp4",
    poster: ""
  },
  {
    title: "5220 Medina Rd, Woodland Hills (Endcard Two agents, No pic)",
    type: "Budget DIY",
    category: "budget",
    src: "/videos/diy-muxed-aSW-VLAI-c67-673eb6bf48c77420d743190e.mp4",
    poster: ""
  },
  {
    title: "2106 Glencoe Ave, Venice (Watermarked)",
    type: "Budget DIY",
    category: "budget",
    src: "/videos/diy-muxed-aSW-VLAI-c61-673eb6bf48c77420d743190e.mp4",
    poster: ""
  },
  {
    title: "2060 Cross Gate Blvd. #204, Surfside Beach, SC 29575 (No endcard)",
    type: "Budget DIY",
    category: "budget",
    src: "/videos/diy-muxed-aSW-VLAI-c1-678c0579bb08fe22892dd994.mp4",
    poster: ""
  }
]

export default function PortfolioPage() {
  const [show3DVideos, setShow3DVideos] = useState(true)
  const [showBudgetVideos, setShowBudgetVideos] = useState(true)
  const ctaSectionRef = useRef<HTMLElement>(null)

  const scrollToCTA = () => {
    ctaSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  const filteredVideos = portfolioVideos.filter(video => {
    if (video.category === "3d" && !show3DVideos) return false
    if (video.category === "budget" && !showBudgetVideos) return false
    return true
  })

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Real Work. Real Results.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Watch videos made for agents across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Filter by Video Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 3D Video Filter */}
              <div className="space-y-3 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setShow3DVideos(!show3DVideos);
                }}
              >
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={show3DVideos}
                    onChange={(e) => { e.stopPropagation(); setShow3DVideos(e.target.checked); }}
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-lg font-semibold text-gray-900">Premium 3D Videos</span>
                </label>
                <p className="text-sm text-gray-600 ml-8">
                  Professional video with 3D motion and parallax depth effects (makes the zooms look realistic), bespoke transitions, a branded end card, and dynamic effects like drifting leaves and flickering flames—enhanced by our expert creative team.
                </p>
              </div>

              {/* Budget Video Filter */}
              <div className="space-y-3 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setShowBudgetVideos(!showBudgetVideos);
                }}
              >
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={showBudgetVideos}
                    onChange={(e) => { e.stopPropagation(); setShowBudgetVideos(e.target.checked); }}
                    className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                  />
                  <span className="text-lg font-semibold text-gray-900">Budget DIY Presentation Videos</span>
                </label>
                <p className="text-sm text-gray-600 ml-8">
                  Create videos instantly with automated effects (zoom and pan's that pass as realistic) and end card designer. Perfect for budget-conscious agents who want quick, professional results without 3D parallax depth effects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredVideos.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {filteredVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    {video.src ? (
                      <video 
                        className="w-full h-64 object-cover"
                        poster={video.poster || undefined}
                        controls
                        preload="metadata"
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="relative">
                        {video.poster ? (
                          <Image
                            src={video.poster}
                            alt={video.title}
                            width={400}
                            height={256}
                            className="w-full h-64 object-cover"
                          />
                        ) : (
                          <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                            <svg className="h-16 w-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="bg-white bg-opacity-90 rounded-full p-4">
                            <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Video Type Badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        video.category === "3d" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-secondary-foreground"
                      }`}>
                        {video.type}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                    <CardDescription>
                      {video.category === "3d" 
                        ? "Premium 3D video with cinematic effects and professional narration"
                        : "Budget-friendly video with automated effects and instant results"
                      }
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-500">
                <svg className="h-24 w-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No videos match your filters</h3>
                <p className="text-gray-600">Try selecting different video types above to see our portfolio.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              What Makes These Videos Special
            </h2>
            <p className="text-lg text-gray-600">
              Every video in our portfolio showcases the quality and attention to detail you can expect from VideoListings.ai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3D Motion Effects</h3>
              <p className="text-gray-600">
                Cinematic camera movements and zoom effects that bring static photos to life
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v6.114a4 4 0 10.894 7.618c.4-.204.606-.635.606-1.091V10.828l8-1.6v4.786a4 4 0 101.28-7.618z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Audio</h3>
              <p className="text-gray-600">
                High-quality music and voice narration that matches your brand and style
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom End Cards</h3>
              <p className="text-gray-600">
                Branded closing segments with your contact information and call-to-action
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Results That Speak for Themselves
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Videos Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3-5</div>
              <div className="text-gray-600">Day Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaSectionRef} className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Try?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Choose your path: try our budget-friendly DIY tool or get a custom premium 3D video.
            </p>
            <CTAButtons
              showDivider={false}
            />
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <button
        onClick={scrollToCTA}
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 font-semibold text-sm hover:scale-105"
        aria-label="Get a video now"
      >
        <span className="flex items-center space-x-2">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          <span>Get Video Now!</span>
        </span>
      </button>
    </div>
  )
} 