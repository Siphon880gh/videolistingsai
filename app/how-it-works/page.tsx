"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HowItWorksPage() {
  const [premiumVideoPlaying, setPremiumVideoPlaying] = useState(false)
  const [budgetVideoPlaying, setBudgetVideoPlaying] = useState(false)
  const [showPremiumTooltip, setShowPremiumTooltip] = useState(false)
  const [showBudgetTooltip, setShowBudgetTooltip] = useState(false)
  
  const handleVideoPlay = (videoType: 'premium' | 'budget') => {
    if (videoType === 'premium') {
      setPremiumVideoPlaying(true)
    } else {
      setBudgetVideoPlaying(true)
    }
  }
  
  const handleVideoPause = (videoType: 'premium' | 'budget') => {
    if (videoType === 'premium') {
      setPremiumVideoPlaying(false)
    } else {
      setBudgetVideoPlaying(false)
    }
  }
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              See How It Works
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              From photos to powerful video — choose your path and start today.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* See the Difference Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              See the Difference
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Compare our premium professional service with our budget-friendly DIY solution. 
              Both create stunning videos, but with different levels of customization and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Premium 3D Video Process */}
            <Card className="h-full border-2 border-primary shadow-lg">
              <CardHeader className="text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    PROFESSIONAL
                  </span>
                </div>
                <CardTitle className="text-3xl text-primary mb-4 mt-4">Premium 3D Video</CardTitle>
                <CardDescription className="text-lg">
                  Professional service with full creative control
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Send us your photos</h3>
                      <p className="text-gray-600">Upload your listing photos through our secure portal</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">We add 3D motion, music, and effects</h3>
                      <p className="text-gray-600">Our team creates cinematic movement and visual effects</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Choose voice: your own or ours</h3>
                      <p className="text-gray-600">Use your voice recording or our professional narration</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">We send draft — you get 3 revisions</h3>
                      <p className="text-gray-600">Review and request changes until it's perfect</p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Done! Use on MLS, social, and more</h3>
                      <p className="text-gray-600">Download HD video ready for all platforms</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 relative">
                  <video
                    controls
                    className="rounded-lg w-full"
                    width="400"
                    height="250"
                    onPlay={() => handleVideoPlay('premium')}
                    onPause={() => handleVideoPause('premium')}
                    onEnded={() => handleVideoPause('premium')}
                  >
                    <source src="/videos/premium-3d-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* 3D Overlay */}
                  {!premiumVideoPlaying && (
                    <div className="absolute top-4 right-4 group">
                      <div 
                        className={`bg-primary text-primary-foreground px-3 py-1 rounded-md font-bold text-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${
                          showPremiumTooltip ? 'rotate-0' : 'rotate-12'
                        }`}
                        onMouseEnter={() => setShowPremiumTooltip(true)}
                        onMouseLeave={() => setShowPremiumTooltip(false)}
                        onClick={() => setShowPremiumTooltip(!showPremiumTooltip)}
                        onTouchStart={() => setShowPremiumTooltip(!showPremiumTooltip)}
                      >
                        3D
                      </div>
                      {/* Tooltip */}
                      {showPremiumTooltip && (
                        <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-3 z-10 animate-in slide-in-from-top-2 duration-200">
                          <div className="text-sm text-gray-800 font-medium mb-1">Premium 3D Video</div>
                          <div className="text-xs text-gray-600">
                            Professional video with 3D motion and parallax depth effects (makes the zooms look realistic), bespoke transitions, a branded end card, and dynamic effects like drifting leaves and flickering flames—enhanced by our expert creative team.
                          </div>
                          {/* Arrow */}
                          <div className="absolute -top-1 right-4 w-2 h-2 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <Link href="/quote">
                    <Button size="lg" variant="outline">
                        Talk to Sales
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button size="lg" variant="default">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* DIY Video App Process */}
            <Card className="h-full">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary mb-4">Budget Presentation Video</CardTitle>
                <CardDescription className="text-lg">
                  Self-service tool with instant results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Start with a free trial</h3>
                      <p className="text-gray-600">No credit card required, try all features</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Upload photos to our web app</h3>
                      <p className="text-gray-600">Drag and drop your listing photos</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Pick music, order, and voice settings</h3>
                      <p className="text-gray-600">Customize your video with our easy tools</p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Preview and download</h3>
                      <p className="text-gray-600">Watch your video and download instantly</p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Upgrade for re-edits, voice, or smart photo order</h3>
                      <p className="text-gray-600">Access advanced features with paid plans</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 relative">
                  <video
                    controls
                    className="rounded-lg w-full"
                    width="400"
                    height="250"
                    onPlay={() => handleVideoPlay('budget')}
                    onPause={() => handleVideoPause('budget')}
                    onEnded={() => handleVideoPause('budget')}
                  >
                    <source src="/videos/diy-app-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Budget DIY Overlay */}
                  {!budgetVideoPlaying && (
                    <div className="absolute top-4 right-4 group">
                      <div 
                        className={`bg-secondary text-secondary-foreground px-3 py-1 rounded-md font-bold text-sm shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 ${
                          showBudgetTooltip ? 'rotate-0' : '-rotate-12'
                        }`}
                        onMouseEnter={() => setShowBudgetTooltip(true)}
                        onMouseLeave={() => setShowBudgetTooltip(false)}
                        onClick={() => setShowBudgetTooltip(!showBudgetTooltip)}
                        onTouchStart={() => setShowBudgetTooltip(!showBudgetTooltip)}
                      >
                        Budget DIY
                      </div>
                      {/* Tooltip */}
                      {showBudgetTooltip && (
                        <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl p-3 z-10 animate-in slide-in-from-top-2 duration-200">
                          <div className="text-sm text-gray-800 font-medium mb-1">Budget DIY Tool</div>
                          <div className="text-xs text-gray-600">
                            Create videos instantly with automated effects (zoom and pan's that pass as realistic) and end card designer. Perfect for budget-conscious agents who want quick, professional results without 3D parallax depth effects.
                          </div>
                          {/* Arrow */}
                          <div className="absolute -top-1 right-4 w-2 h-2 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                  <Link href="/login">
                    <Button variant="outline" className="w-full" size="lg">
                      Try Free Trial
                    </Button>
                  </Link>
                  <Link href="/pricing">
                    <Button variant="outline" className="w-full" size="lg">
                      <span className="font-bold">View Pricing Plans</span>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Start Today
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