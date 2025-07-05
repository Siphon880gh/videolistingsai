import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTAButtonsProps {
  primaryText?: string
  secondaryText?: string
  showDivider?: boolean
  variant?: "hero" | "page"
  className?: string
}

export function CTAButtons({ 
  primaryText = "Work With Us to Get 3D Video",
  secondaryText = "Try Do-It-Yourself Free Trial",
  showDivider = true,
  className = ""
}: CTAButtonsProps) {
  
  // Page variant - matches original button styling exactly
  return (
    <div className={`flex flex-col sm:flex-row gap-6 justify-center ${className}`}>
      <div className="flex flex-col items-center">
        <Link href="/pricing#diy">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            {secondaryText}
          </Button>
        </Link>
        <div className="text-xs text-gray-300 mt-1 text-center">
          (Without 3D depth effects)
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <Link href="/quote">
          <Button size="lg" className="w-full sm:w-auto bg-white text-primary font-bold hover:bg-white/90 hover:text-primary border-2 border-white shadow-lg">
            {primaryText}
          </Button>
        </Link>
        <div className="text-xs text-gray-300 mt-1 text-center">
          (With 3D depth effects)
        </div>
      </div>
    </div>
  )
} 