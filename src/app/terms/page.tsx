export default function Terms() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using the InNout platform, you agree to be bound
              by these Terms of Service. If you do not agree with any part of
              these terms, please do not use our services.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              InNout provides a platform for ordering food and groceries from
              local vendors. Our services include:
            </p>
            <ul>
              <li>Food ordering from restaurants</li>
              <li>Grocery shopping and delivery</li>
              <li>Vendor platform for businesses</li>
              <li>Delivery services</li>
            </ul>

            <h2>3. User Accounts</h2>
            <p>To use our services, you must:</p>
            <ul>
              <li>Be at least 18 years old</li>
              <li>Register for an account</li>
              <li>Provide accurate information</li>
              <li>Maintain account security</li>
            </ul>

            <h2>4. Orders and Payments</h2>
            <p>When placing orders:</p>
            <ul>
              <li>All prices are in Nigerian Naira (NGN)</li>
              <li>Payment must be made in full</li>
              <li>Orders are subject to availability</li>
              <li>Delivery times are estimates</li>
            </ul>

            <h2>5. Vendor Terms</h2>
            <p>Vendors using our platform must:</p>
            <ul>
              <li>Maintain accurate menu items</li>
              <li>Keep prices up to date</li>
              <li>Process orders promptly</li>
              <li>Maintain food safety standards</li>
            </ul>

            <h2>6. Delivery Services</h2>
            <p>Our delivery partners:</p>
            <ul>
              <li>Are independent contractors</li>
              <li>Must follow safety guidelines</li>
              <li>Are responsible for their own insurance</li>
              <li>Must maintain professional conduct</li>
            </ul>

            <h2>7. Cancellation and Refunds</h2>
            <p>Orders can be cancelled:</p>
            <ul>
              <li>Before preparation begins</li>
              <li>Subject to vendor approval</li>
              <li>With applicable refund policies</li>
              <li>As per our cancellation policy</li>
            </ul>

            <h2>8. Intellectual Property</h2>
            <p>All content on the InNout platform, including:</p>
            <ul>
              <li>Logos and branding</li>
              <li>Menu items and descriptions</li>
              <li>User reviews and ratings</li>
              <li>Platform design and functionality</li>
            </ul>
            <p>is protected by intellectual property rights.</p>

            <h2>9. Limitation of Liability</h2>
            <p>InNout is not liable for:</p>
            <ul>
              <li>Food quality or safety</li>
              <li>Delivery delays</li>
              <li>Third-party actions</li>
              <li>Service interruptions</li>
            </ul>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Users will
              be notified of significant changes.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These terms are governed by the laws of Nigeria. Any disputes
              shall be resolved in the courts of Lagos State.
            </p>

            <h2>12. Contact Information</h2>
            <p>For questions about these terms, please contact us at:</p>
            <ul>
              <li>Email: legal@innout.com</li>
              <li>Phone: +234 XXX XXX XXXX</li>
              <li>Address: Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
