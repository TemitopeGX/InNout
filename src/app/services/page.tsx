import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Discover how InNout can make your life easier with our
              comprehensive food and grocery solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Food Ordering */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/food-ordering.jpg"
                  alt="Food Ordering"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Food Ordering
                </h2>
                <p className="text-gray-600 mb-6">
                  Order from your favorite local restaurants with just a few
                  taps. Browse menus, customize orders, and track delivery in
                  real-time.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Wide selection of restaurants",
                    "Real-time order tracking",
                    "Custom order instructions",
                    "Quick reordering",
                    "Favorite restaurants saved",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#download"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Start Ordering
                </a>
              </div>
            </div>

            {/* Grocery Shopping */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/grocery-shopping.jpg"
                  alt="Grocery Shopping"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Grocery Shopping
                </h2>
                <p className="text-gray-600 mb-6">
                  Shop for fresh groceries and household items from our curated
                  selection. Get everything delivered to your doorstep.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Fresh produce daily",
                    "Scheduled delivery",
                    "Quality guaranteed",
                    "Wide product range",
                    "Regular promotions",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#download"
                  className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Start Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vendor Platform",
                description:
                  "Join our platform to reach more customers and grow your business.",
                icon: "🏪",
                features: [
                  "Easy order management",
                  "Analytics dashboard",
                  "Marketing support",
                  "Customer insights",
                ],
              },
              {
                title: "Delivery Services",
                description:
                  "Fast and reliable delivery services for both food and groceries.",
                icon: "🚚",
                features: [
                  "Real-time tracking",
                  "Scheduled delivery",
                  "Express service",
                  "Professional riders",
                ],
              },
              {
                title: "Customer Support",
                description:
                  "24/7 support to help you with any questions or concerns.",
                icon: "💬",
                features: [
                  "24/7 availability",
                  "Multiple channels",
                  "Quick response",
                  "Issue resolution",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Download our app and experience the best of Nigerian food and
            grocery services.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="group hover:opacity-80 transition-all duration-300"
            >
              <Image
                src="/app-store.png"
                alt="App Store"
                width={160}
                height={48}
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <a
              href="#"
              className="group hover:opacity-80 transition-all duration-300"
            >
              <Image
                src="/play-store.png"
                alt="Play Store"
                width={160}
                height={48}
                className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
