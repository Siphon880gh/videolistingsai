"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function QuotePage() {
  const [videoLength, setVideoLength] = useState("")

  const getPhotoCount = (length: string) => {
    switch(length) {
      case '30-45': return '15-20 photos needed';
      case '60-90': return '25-30 photos needed';  
      case '2-3': return '35-45 photos needed';
      default: return 'Select video length above';
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get Your Premium 3D Video Quote
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Professional video production with 3D effects, custom voice, and branding.
            </p>
            
            {/* Service Highlights */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl mb-2">🎬</div>
                  <p className="text-sm font-medium">3D Motion Effects</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🎵</div>
                  <p className="text-sm font-medium">Music + Voice</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">✏️</div>
                  <p className="text-sm font-medium">Revisions</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">🎨</div>
                  <p className="text-sm font-medium">Custom Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Quote Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
                <CardDescription>
                  Tell us about your property and video requirements. We'll get back with a custom quote within 3-16 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <Input 
                        id="name"
                        name="name" 
                        type="text" 
                        placeholder="Enter your full name"
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input 
                        id="email"
                        name="email" 
                        type="email" 
                        placeholder="your@email.com"
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        name="phone" 
                        type="tel" 
                        placeholder="(555) 123-4567"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Brokerage
                      </label>
                      <Input 
                        id="company"
                        name="company" 
                        type="text" 
                        placeholder="Your brokerage name"
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Property Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Property Information</h3>
                    
                    <div>
                      <label htmlFor="property-address" className="block text-sm font-medium text-gray-700 mb-2">
                        Property Address *
                      </label>
                      <Input 
                        id="property-address"
                        name="property-address" 
                        type="text" 
                        placeholder="123 Main St, City, State 12345"
                        className="w-full"
                        required
                      />
                    </div>

                    {/* Optional Details Subsection */}
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h4 className="text-sm font-medium text-gray-600 mb-3">
                        Optional details we can add to first slide or end card
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label htmlFor="property-details" className="block text-sm font-medium text-gray-700 mb-2">
                            Property Details
                          </label>
                          <Input
                            id="property-details"
                            name="property-details"
                            type="text"
                            placeholder="e.g. 4 bed, 3 bath"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="square-footage" className="block text-sm font-medium text-gray-700 mb-2">
                            Square Footage
                          </label>
                          <Input 
                            id="square-footage"
                            name="square-footage" 
                            type="text" 
                            placeholder="e.g. 2,500"
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="listing-price" className="block text-sm font-medium text-gray-700 mb-2">
                            Listing Price
                          </label>
                          <Input 
                            id="listing-price"
                            name="listing-price" 
                            type="text" 
                            placeholder="e.g. $750,000"
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Requirements */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Video Requirements</h3>
                    
                    <div>
                      <label htmlFor="video-length" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Video Length
                      </label>
                      <select 
                        id="video-length"
                        name="video-length"
                        value={videoLength}
                        onChange={(e) => setVideoLength(e.target.value)}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      >
                        <option value="">Select length</option>
                        <option value="30-45">30-45 seconds</option>
                        <option value="60-90">60-90 seconds</option>
                        <option value="2-3">2-3 minutes</option>
                      </select>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="photo-count" className="block text-sm font-medium text-gray-700 mb-2">
                        Required Number of Photos
                      </label>
                      <div className="relative">
                        <Input 
                          id="photo-count"
                          name="photo-count"
                          type="text"
                          placeholder="Based on video length"
                          className="w-full bg-gray-50"
                          disabled
                          value={getPhotoCount(videoLength)}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="mt-4">
                      <label htmlFor="voice-option" className="block text-sm font-medium text-gray-700 mb-2">
                        Voice Narration Preference
                      </label>
                      <select 
                        id="voice-option"
                        name="voice-option"
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      >
                        <option value="">Select option</option>
                        <option value="no-voice">Music Only (Free)</option>
                        <option value="professional-voice">Professional Voice Actor</option>
                        <option value="your-voice">Record My Own Voice</option>
                      </select>
                    </div>


                  {/* Timeline and Budget */}
                  {/* <div className="border-t pt-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Timeline & Budget</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          Project Timeline
                        </label>
                        <select 
                          id="timeline"
                          name="timeline"
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP (Rush order)</option>
                          <option value="1-week">Within 1 week</option>
                          <option value="2-weeks">Within 2 weeks</option>
                          <option value="flexible">Flexible timing</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select 
                          id="budget"
                          name="budget"
                          className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                        >
                          <option value="">Select range</option>
                          <option value="under-500">Under $500</option>
                          <option value="500-1000">$500 - $1,000</option>
                          <option value="1000-2000">$1,000 - $2,000</option>
                          <option value="2000-plus">$2,000+</option>
                          <option value="discuss">Let's discuss</option>
                        </select>
                      </div>
                    </div>
                  </div> */}

                  {/* <div>
                    <label htmlFor="additional-details" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Details & Special Requests
                    </label>
                    <textarea 
                      id="additional-details"
                      name="additional-details"
                      rows={4}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                      placeholder="Tell us about any specific requirements, branding needs, special features, or questions you have..."
                    />
                  </div> */}

                  <Button type="submit" size="lg" className="w-full">
                    Get My Custom Quote
                  </Button>
                  
                  <p className="text-sm text-gray-600 text-center">
                    * We'll respond with your custom quote within 3-16 hours
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Service Information */}
            <div className="space-y-8">
              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What's Included</CardTitle>
                  <CardDescription>
                    Premium 3D video production service features
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      3D
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">3D Motion & Zoom Effects</h3>
                      <p className="text-sm text-gray-600">Dynamic camera movements and depth effects that bring photos to life</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Professional Music & Voice</h3>
                      <p className="text-sm text-gray-600">Choose between your own voice recording or our professional voice actor, both paired with licensed music. Adding voice narration requires extra time to craft appropriate scripts that match your scenes, which increases production cost.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Revisions Included</h3>
                      <p className="text-sm text-gray-600">Perfect your video with rounds of changes after draft preview</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Custom End Card & Branding</h3>
                      <p className="text-sm text-gray-600">Personalized closing with your contact info and branding</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Process Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Production Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-sm">Quote approval & project kickoff</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-sm">Photo upload & voice recording (if needed)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-sm">Video production (3-5 business days)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span className="text-sm">Review & revisions (if needed)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">5</div>
                      <span className="text-sm">Final delivery in multiple formats</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-medium text-gray-900">Sales & Premium Services</h3>
                      <a href="mailto:sales@videolistings.ai" className="text-yellow-600 hover:underline">
                        sales@videolistings.ai
                      </a>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Response Time</h3>
                      <p className="text-sm text-gray-600">Custom quotes within 3-16 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 