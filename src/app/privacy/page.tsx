export default function Privacy() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
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
            <h2>Introduction</h2>
            <p>
              At InNout, we take your privacy seriously. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our mobile application and website.
            </p>

            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Delivery address</li>
              <li>Payment information</li>
              <li>Order history</li>
            </ul>

            <h3>Device Information</h3>
            <ul>
              <li>Device type and model</li>
              <li>Operating system</li>
              <li>Unique device identifiers</li>
              <li>Location data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>Process your orders and payments</li>
              <li>Send order confirmations and updates</li>
              <li>Improve our services</li>
              <li>Communicate with you about promotions</li>
              <li>Analyze usage patterns</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Restaurants and vendors fulfilling your orders</li>
              <li>Delivery partners</li>
              <li>Payment processors</li>
              <li>Service providers</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information, including encryption and secure data
              storage.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>Cookies and Tracking</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your
              experience and collect usage data.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13. We do not
              knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <ul>
              <li>Email: privacy@innout.com</li>
              <li>Phone: +234 XXX XXX XXXX</li>
              <li>Address: Lagos, Nigeria</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
