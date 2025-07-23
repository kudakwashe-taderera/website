export default function TermsPage() {
  return (
    <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-uiuc-orange mb-4">Terms of Service</h1>
        <p className="text-gray-500 mb-10 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Welcome to kudakwashetaderera.me</h2>
            <p>
              By accessing or using this website ("Site"), you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property on this Site are owned by Kudakwashe Taderera or its licensors. You may not reproduce, distribute, or create derivative works without explicit permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Use the Site only for lawful purposes and in accordance with these Terms.</li>
              <li>Do not attempt to gain unauthorized access to any part of the Site or its systems.</li>
              <li>Do not use the Site to transmit spam, malware, or harmful content.</li>
              <li>Do not impersonate others or misrepresent your affiliation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Service Availability</h2>
            <p>
              We strive to keep the Site available at all times, but we do not guarantee uninterrupted access. We may suspend or discontinue any part of the Site at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of any third-party sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
            <p>
              The Site and its content are provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any information on the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Kudakwashe Taderera shall not be liable for any damages arising from your use of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Site after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p>
              For questions about these Terms, please <a href="/contact" className="text-uiuc-blue underline">contact us</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 