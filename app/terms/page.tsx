export default function TermsPage() {
  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website (kudakwashe-taderera.com), you accept and agree to be bound by the
              terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
            <p className="mb-4">
              Other than the content you own, which you may have opted to include on this Website, under these Terms,
              Kudakwashe Taderera and/or its licensors own all the intellectual property rights and materials contained
              in this Website.
            </p>
            <p>
              You are granted a limited license only for purposes of viewing the material contained on this Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Restrictions</h2>
            <p className="mb-4">You are specifically restricted from all of the following:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Publishing any Website material in any other media</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material</li>
              <li>Publicly performing and/or showing any Website material</li>
              <li>Using this Website in any way that is or may be damaging to this Website</li>
              <li>Using this Website contrary to applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Services</h2>
            <p>
              The content of the pages of this Website is for your general information and use only. It is subject to
              change without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. No Warranties</h2>
            <p>
              This Website is provided "as is," with all faults, and Kudakwashe Taderera express no representations or
              warranties, of any kind related to this Website or the materials contained on this Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Kudakwashe Taderera, nor any of its officers, directors, and employees, be held liable
              for anything arising out of or in any way connected with your use of this Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the United States, and you
              submit to the non-exclusive jurisdiction of the state and federal courts located in Illinois for the
              resolution of any disputes.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 