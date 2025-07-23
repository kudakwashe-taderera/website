export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-uiuc-orange mb-4">Privacy Policy</h1>
        <p className="text-gray-500 mb-10 text-sm">Last updated: {new Date().toLocaleDateString()}</p>
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              This Privacy Policy explains how kudakwashetaderera.me ("we", "us", or "our") collects, uses, and protects your information when you use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><b>Device Information:</b> Browser, IP address, time zone, cookies, and device type.</li>
              <li><b>Usage Data:</b> Pages visited, referring sites, and interactions with the website.</li>
              <li><b>Contact Form Data:</b> Name, email, and message when you submit a form.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Cookies & Analytics</h2>
            <p>
              We use cookies and similar technologies to enhance your experience and analyze site usage. Analytics tools (such as Google Analytics) may collect anonymized data about your interactions with the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>To respond to your inquiries and provide requested services</li>
              <li>To improve our website and services</li>
              <li>To monitor and analyze usage and trends</li>
              <li>To ensure the security and integrity of our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
            <p>
              We retain your information only as long as necessary to fulfill the purposes described in this policy or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>You may request access to, correction, or deletion of your personal data.</li>
              <li>You may opt out of analytics tracking by adjusting your browser settings or using opt-out tools.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
            <p>
              We may use third-party services (such as Formspree for contact forms) that process your data according to their own privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
            <p>
              For questions or requests regarding your privacy, please <a href="/contact" className="text-uiuc-blue underline">contact us</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 