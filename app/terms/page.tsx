import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | VideoListings.ai",
  description: "Review the terms and conditions for using VideoListings.ai.",
}

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                This website and its services are owned and operated by VideoListings.ai. By using our services, you agree to these terms and conditions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Service Description</h2>
              <p className="text-gray-600 mb-4">
                VideoListings.ai provides video creation services for real estate professionals, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Premium 3D video production services</li>
                <li>DIY video creation application</li>
                <li>Photo enhancement and motion effects</li>
                <li>Voice narration services</li>
                <li>Custom end card design</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. User Accounts</h2>
              <p className="text-gray-600 mb-4">
                To access our services, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                Premium services require payment as outlined in our pricing plans. Free trial periods are offered without requiring payment information. Subscription fees are billed monthly or as otherwise specified.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Content and Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                You retain ownership of the original photos and content you upload. By using our services, you grant us a license to process, edit, and enhance your content to create the requested videos. Final videos are delivered to you with full usage rights for real estate marketing purposes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Acceptable Use</h2>
              <p className="text-gray-600 mb-4">
                Our services are intended for legitimate real estate marketing purposes. You may not use our services for illegal activities, spam, or content that violates third-party rights.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Service Availability</h2>
              <p className="text-gray-600 mb-4">
                We strive to maintain high service availability but cannot guarantee uninterrupted access. Premium video turnaround times are typically 3-5 business days, subject to project complexity and current demand.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                VideoListings.ai shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Termination</h2>
              <p className="text-gray-600 mb-4">
                Either party may terminate service at any time. Upon termination, your access to the service will cease, but you retain rights to any videos already delivered.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or through the service interface.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                For questions about these terms, please contact us at:
                <br />
                Email: support@videolistings.ai
              </p>

              <p className="text-sm text-gray-500 mt-8">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 