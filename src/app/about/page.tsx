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
              food and groceries. We're building the future of food delivery and
              shopping in Nigeria.
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
              <p className="text-gray-600 mb-6">
                At InNout, we're committed to making food ordering and grocery
                shopping more accessible, convenient, and enjoyable for everyone
                in Nigeria.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in supporting local businesses and creating
                opportunities for growth in our community. Our platform connects
                customers with their favorite restaurants and provides fresh
                groceries right to their doorstep.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    50K+
                  </div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Local Vendors</div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/about-mission.jpg"
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
                  "Your satisfaction is our top priority. We're always here to help.",
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

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Oluwaseun Adebayo",
                role: "CEO & Founder",
                image: "/team1.jpg",
              },
              {
                name: "Chioma Okonkwo",
                role: "Head of Operations",
                image: "/team2.jpg",
              },
              {
                name: "Aisha Mohammed",
                role: "Head of Technology",
                image: "/team3.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Us in Building the Future
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of Nigeria's leading food and grocery platform. Download our
            app today!
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
