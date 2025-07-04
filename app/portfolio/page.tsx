import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Video Portfolio | VideoListings.ai",
  description: "See sample real estate listing videos made with our 3D video service and DIY app.",
}

const portfolioVideos = [
  {
    title: "8899 Beverly Blvd #PHW, West Hollywood, CA",
    type: "3D Video",
    src: "https://videolistings.ai/wp-content/uploads/8899-Beverly-Blvd-West-Hollywood-Final-compressed-.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/8899-beverly-blvd-lead-image-layers-w-text-thumbnail.jpg"
  },
  {
    title: "395 Glenullen Dr., Pasadena, CA",
    type: "3D Video", 
    src: "https://videolistings.ai/wp-content/uploads/Sabatella-VLAi-395-Glenullen-Dr-Pasadena-desktop-w-logos.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/glenullen-pasadena-thumbnail-scaled.jpg"
  },
  {
    title: "One Solstice Lane, Malibu, CA",
    type: "3D Video",
    src: "https://videolistings.ai/wp-content/uploads/Video-Listings-Ai-One-Solstice-Point-Malibu-Victoria-Lasso-handbrake-.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/Video-Listings-Ai-One-Solstice-Lane-Mailibu-CA-featrued-video-image.jpg"
  },
  {
    title: "820 Mission St. PH #208, Pasadena, CA 91030",
    type: "3D Video",
    src: "https://videolistings.ai/wp-content/uploads/video-listings-the-agency-ai-mission-st-trk-1.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/Screenshot-2025-03-15-at-9.42.38%E2%80%AFpm-scaled.jpg"
  },
  {
    title: "4263 Navajo St., Toluca Lake, CA 91602",
    type: "3D Video",
    src: "https://videolistings.ai/wp-content/uploads/toluca-lake-final-horizontal.mp4",
    poster: "https://videolistings.ai/wp-content/uploads/Screenshot-2025-03-15-at-9.39.07%E2%80%AFpm-scaled.jpg"
  },
  {
    title: "151 Kellis Pond Lane, Watermill, NY 11932",
    type: "3D Video",
    src: "",
    poster: "https://videolistings.ai/wp-content/uploads/Screenshot-2025-06-17-at-6.59.42%E2%80%AFpm.jpg"
  },
  {
    title: "211 S Muirfield Rd, Hancock Park, CA 90004",
    type: "3D Video",
    src: "",
    poster: "https://videolistings.ai/wp-content/uploads/Screenshot-2025-03-17-at-8.19.22%E2%80%AFpm.jpg"
  },
  {
    title: "4263 Navajo St., Toluca Lake, CA 91602 (Vertical)",
    type: "3D Video",
    src: "",
    poster: "https://videolistings.ai/wp-content/uploads/Screenshot-2025-03-17-at-3.37.42%E2%80%AFpm-scaled.jpg"
  }
]

export default function PortfolioPage() {
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

      {/* Video Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioVideos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  {video.src ? (
                    <video 
                      className="w-full h-64 object-cover"
                      poster={video.poster}
                      controls
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="relative">
                      <Image
                        src={video.poster}
                        alt={video.title}
                        width={400}
                        height={256}
                        className="w-full h-64 object-cover"
                      />
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
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {video.type}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                  <CardDescription>
                    Premium 3D video with cinematic effects and professional narration
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
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
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Try?
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