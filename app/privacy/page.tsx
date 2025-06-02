export default function PrivacyPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or interact with kudakwashe-taderera.com (the "Site").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              When you visit the Site, we automatically collect certain information about your device, including
              information about your web browser, IP address, time zone, and some of the cookies that are installed on
              your device.
            </p>
            <p>
              Additionally, as you browse the Site, we collect information about the individual web pages that you view,
              what websites or search terms referred you to the Site, and information about how you interact with the
              Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Form Information</h2>
            <p>
              When you submit the contact form, we collect the information you provide, including your name, email
              address, and any other information you choose to include in your message. This information is processed
              through Formspree and is used solely for the purpose of responding to your inquiry.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Respond to your inquiries and contact you about services you requested</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Site</li>
              <li>Improve our Site and services</li>
              <li>Detect, investigate, and prevent security incidents</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p>
              We will maintain your information for our records unless and until you ask us to delete this information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes</h2>
            <p>
              We may update this privacy policy from time to time in order to reflect changes to our practices or for
              other operational, legal, or regulatory reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a
              complaint, please contact us through the contact form on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 