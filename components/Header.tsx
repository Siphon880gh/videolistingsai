"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Navigation Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50 brand-shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="https://videolistings.ai/wp-content/uploads/2023/11/VIDEO-LISTING-logo-main-1-poweredby-storyway.png"
                srcSet="https://videolistings.ai/wp-content/uploads/2023/11/VIDEO-LISTING-logo-main-1-poweredby-storyway.png 1x, https://videolistings.ai/wp-content/uploads/2023/11/VIDEO-LISTING-logo-main-1-poweredby-storyway.png 2x"
                alt="VideoListings.ai - Powered by Storyway"
                className="h-10 w-auto"
              />
            </Link>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/quote" className="text-sm font-medium text-yellow-600 hover:text-yellow-700 transition-colors">
                Get Quote
              </Link>
              <Link href="/portfolio" className="text-sm font-medium brand-text hover:brand-primary transition-colors">
                Portfolio
              </Link>
              <Link href="/how-it-works" className="text-sm font-medium brand-text hover:brand-primary transition-colors">
                How It Works
              </Link>
              <Link href="/faq" className="text-sm font-medium brand-text hover:brand-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-sm font-medium brand-text hover:brand-primary transition-colors">
                Contact
              </Link>
              
              {/* DIY Plans Dropdown */}
              <div className="relative group">
                <button className="text-sm font-medium brand-text hover:brand-primary transition-colors flex items-center space-x-1">
                  <span>DIY Plans</span>
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Panel */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                      DIY Plans
                    </div>
                    <Link href="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors">
                      Pricing Plans
                    </Link>
                    <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-primary transition-colors">
                      App Login
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-primary"
              >
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-b transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="max-w-sm mx-auto space-y-5">
            <Link 
              href="/quote" 
              className="block text-center text-lg font-medium text-yellow-600 hover:text-yellow-700 transition-colors py-2 px-4 rounded-lg hover:bg-white/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Quote
            </Link>
            <Link 
              href="/portfolio" 
              className="block text-center text-lg font-medium brand-text hover:brand-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/how-it-works" 
              className="block text-center text-lg font-medium brand-text hover:brand-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              href="/faq" 
              className="block text-center text-lg font-medium brand-text hover:brand-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="block text-center text-lg font-medium brand-text hover:brand-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            {/* DIY Plans Section */}
            <div className="pt-6 border-t border-white/30">
              <div className="mb-4 text-center">
                <h3 className="text-sm font-bold text-gray-600 uppercase tracking-wider bg-white/40 inline-block px-4 py-2 rounded-full">
                  DIY Plans
                </h3>
              </div>
              <div className="space-y-3">
                <Link 
                  href="/pricing" 
                  className="block text-center text-lg font-medium brand-text hover:brand-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing Plans
                </Link>
                <Link 
                  href="/login" 
                  className="block text-center text-lg font-medium brand-text hover:brand-primary transition-colors py-2 px-4 rounded-lg hover:bg-white/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  App Login
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
} 