import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600">
              InNout was founded with a vision to transform how Nigerians access
              food and groceries. We&apos;re building the future of food
              delivery and shopping in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We&apos;re on a mission to revolutionize food delivery and
                grocery shopping in Nigeria. Through innovation and dedication,
                we aim to provide convenient access to quality food and
                essential items.
              </p>
              <div className="space-y-4">
                {[
                  "Delivering happiness through food",
                  "Supporting local businesses",
                  "Creating job opportunities",
                  "Promoting food safety",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-[#F86808] rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/about-image.png"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description:
                  "We ensure the highest quality of food and groceries for our customers.",
                icon: "⭐",
              },
              {
                title: "Customer Focus",
                description:
                  "Your satisfaction is our top priority. We are always here to help.",
                icon: "❤️",
              },
              {
                title: "Community Support",
                description:
                  "We support local businesses and create opportunities for growth.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F86808]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of Nigeria&apos;s leading food and grocery platform.
            Download our app today!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="group hover:opacity-80 transition-all duration-300"
            >
              <Image
                src="/app-store-badge.png"
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
                src="/google-play-badge.png"
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
