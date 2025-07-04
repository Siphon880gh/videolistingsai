import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | VideoListings.ai",
  description: "Learn how we protect your data and keep your information safe.",
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                We care about your privacy. This policy explains how we collect, use, and protect your data when you use VideoListings.ai services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600 mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Account information (name, email, contact details)</li>
                <li>Photos and media files you upload for video creation</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communications with our support team</li>
                <li>Usage data and analytics to improve our services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Provide and improve our video creation services</li>
                <li>Process your photos and create requested videos</li>
                <li>Communicate with you about your projects and account</li>
                <li>Process payments and manage subscriptions</li>
                <li>Provide customer support</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure cloud storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Limited employee access to personal data</li>
                <li>Secure payment processing through certified providers</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Sharing</h2>
              <p className="text-gray-600 mb-4">
                We do not sell your personal information. We may share your information only in these limited circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>With service providers who help us operate our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Content and Videos</h2>
              <p className="text-gray-600 mb-4">
                Your uploaded photos and created videos are treated with special care:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>You retain full ownership of your original photos</li>
                <li>We process photos only to create your requested videos</li>
                <li>Completed videos are delivered to you with full usage rights</li>
                <li>We may retain copies for customer support purposes</li>
                <li>You can request deletion of your content at any time</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies and Tracking</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to improve your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your account and data</li>
                <li>Export your data in a portable format</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data Retention</h2>
              <p className="text-gray-600 mb-4">
                We retain your information only as long as necessary to provide services and comply with legal obligations. Account data is typically deleted within 30 days of account closure upon request.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. International Data Transfers</h2>
              <p className="text-gray-600 mb-4">
                Your information may be processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data across borders.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy periodically. We will notify users of significant changes via email or through our service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                For privacy-related questions or requests, please contact us at:
                <br />
                Email: support@videolistings.ai
                <br />
                Subject: Privacy Inquiry
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