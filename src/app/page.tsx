"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiTruck,
  FiShoppingBag,
  FiPackage,
  FiDownload,
  FiMapPin,
  FiSearch,
  FiCheck,
} from "react-icons/fi";
import {
  IoFastFoodOutline,
  IoRestaurantOutline,
  IoBasketOutline,
  IoStarOutline,
  IoTimeOutline,
  IoStar,
} from "react-icons/io5";
import {
  MdOutlineLocalOffer,
  MdOutlineSupportAgent,
  MdOutlineDeliveryDining,
} from "react-icons/md";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] bg-[#1A1A1A] pt-24 md:pt-28">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {/* Main Background Image */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]">
            <Image
              src="/hero-bg.jfif"
              alt="Food Background"
              fill
              className="object-cover opacity-50 mix-blend-overlay"
              priority
            />
          </div>

          {/* Animated Patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 md:w-72 h-32 md:h-72 bg-[#F86808]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-40 md:w-96 h-40 md:h-96 bg-[#00A651]/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-5rem)] flex items-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left w-full md:max-w-xl mx-auto md:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                  <span className="px-4 md:px-4 py-2.5 md:py-2 bg-[#F86808]/10 rounded-full text-[#F86808] text-base md:text-base font-medium border border-[#F86808]/20">
                    🚀 Fast Delivery
                  </span>
                  <span className="px-4 md:px-4 py-2.5 md:py-2 bg-[#00A651]/10 rounded-full text-[#00A651] text-base md:text-base font-medium border border-[#00A651]/20">
                    🛒 Supermarket
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-4 md:space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                    Food & Groceries
                    <span className="block mt-3 md:mt-2">
                      Delivered{" "}
                      <span className="text-[#F86808]">Fast & Fresh</span>
                    </span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-2xl mx-auto md:mx-0">
                    Your one-stop solution for food delivery and grocery
                    shopping. Order delicious meals from local restaurants and
                    shop for fresh groceries - all delivered to your doorstep.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start">
                  <motion.a
                    href="#app-showcase"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById("app-showcase")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 md:px-8 py-4 bg-[#F86808] text-white rounded-xl font-medium inline-flex items-center gap-3 hover:bg-[#F86808]/90 transition-all text-lg"
                  >
                    <FiDownload className="w-6 h-6" />
                    Download App
                  </motion.a>
                  <motion.a
                    href="/contact#map"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 md:px-8 py-4 bg-white/10 text-white rounded-xl font-medium inline-flex items-center gap-3 hover:bg-white/20 backdrop-blur-sm transition-all border border-white/20 text-lg"
                  >
                    <FiMapPin className="w-6 h-6" />
                    Locate Us
                  </motion.a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 px-4 md:px-0 mb-8 md:mb-12">
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-3xl font-bold text-white mb-3">
                      50k+
                    </h3>
                    <p className="text-base text-gray-400">Happy Customers</p>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-3xl font-bold text-white mb-3">
                      5k+
                    </h3>
                    <p className="text-base text-gray-400">
                      Products Available
                    </p>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl md:text-3xl font-bold text-white mb-3">
                      30min
                    </h3>
                    <p className="text-base text-gray-400">Fast Delivery</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Image/App Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px]"
            >
              <div className="relative">
                {/* App Screenshot */}
                <Image
                  src="/app-mockup.jfif"
                  alt="InNout App"
                  width={400}
                  height={800}
                  className="relative z-10 w-full h-auto"
                />
                {/* Floating Elements */}
                <div className="absolute top-1/4 -left-4 md:-left-8 w-12 md:w-20 h-12 md:h-20 bg-[#F86808] rounded-full blur-xl opacity-50 animate-float" />
                <div className="absolute bottom-1/4 -right-4 md:-right-8 w-12 md:w-20 h-12 md:h-20 bg-[#00A651] rounded-full blur-xl opacity-50 animate-float-delayed" />
                {/* Food Images */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 md:-top-12 -left-6 md:-left-12 w-16 md:w-32 h-16 md:h-32"
                >
                  <Image
                    src="/jollof-rice.jfif"
                    alt="Floating Jollof Rice"
                    width={128}
                    height={128}
                    className="rounded-full shadow-lg w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 md:-bottom-8 -right-4 md:-right-8 w-14 md:w-28 h-14 md:h-28"
                >
                  <Image
                    src="/egusi-soup.jfif"
                    alt="Floating Egusi Soup"
                    width={112}
                    height={112}
                    className="rounded-full shadow-lg w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-24 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-3 md:space-y-6"
            >
              <h2 className="text-[#F86808] text-sm md:text-base font-medium tracking-wider">
                ABOUT US
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
                Your Complete Food & Grocery Solution
              </h3>
              <p className="text-sm md:text-lg text-gray-600">
                InNout is your all-in-one platform for food and grocery needs.
                We combine the convenience of restaurant food delivery with a
                full-service online supermarket, bringing quality meals and
                fresh groceries right to your doorstep.
              </p>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-[#F86808] font-medium hover:gap-3 transition-all text-sm md:text-base"
              >
                Learn More
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square md:aspect-auto md:h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/about-image.png"
                alt="About InNout"
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-12 md:py-24 bg-[#FAFAFA] overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-[#F86808] text-sm md:text-base font-medium tracking-wider mb-3">
              OUR SERVICES
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
              What We Offer
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: "Food Delivery",
                image: "/delivery-service.jfif",
                icon: <IoRestaurantOutline className="w-5 h-5 md:w-6 md:h-6" />,
                description:
                  "Swift delivery of your favorite Nigerian dishes from top restaurants",
              },
              {
                name: "Supermarket",
                image: "/supermarket.jfif",
                icon: <IoBasketOutline className="w-5 h-5 md:w-6 md:h-6" />,
                description:
                  "Fresh groceries, household essentials, and more with same-day delivery",
              },
              {
                name: "Bulk Orders",
                image: "/bulk-orders.jfif",
                icon: <FiPackage className="w-5 h-5 md:w-6 md:h-6" />,
                description: "Special handling for large orders and events",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-48 sm:h-56 md:h-72 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl inline-block mb-2">
                      {service.icon}
                    </div>
                    <h3 className="text-base md:text-xl font-bold mb-1">
                      {service.name}
                    </h3>
                    <p className="text-xs md:text-sm text-white/90">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="py-12 md:py-24 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-[#F86808] text-sm md:text-base font-medium tracking-wider mb-3">
              FOOD GALLERY
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
              Our Culinary Delights
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
            {[
              {
                name: "Jollof Rice Special",
                image: "/jollof-rice.jfif",
                description:
                  "Smoky party-style jollof rice with grilled chicken",
                price: "₦3,500",
              },
              {
                name: "Egusi Soup",
                image: "/egusi-soup.jfif",
                description: "Rich melon soup with assorted meat",
                price: "₦4,000",
              },
              {
                name: "Suya Platter",
                image: "/suya-platter.jfif",
                description: "Spicy grilled beef with yaji spice",
                price: "₦5,500",
              },
              {
                name: "Pounded Yam & Soup",
                image: "/pounded-yam.jfif",
                description: "Smooth pounded yam with choice of soup",
                price: "₦4,500",
              },
              {
                name: "Fried Rice Special",
                image: "/fried-rice.jfif",
                description: "Nigerian-style fried rice with proteins",
                price: "₦3,800",
              },
              {
                name: "Pepper Soup",
                image: "/pepper-soup.jfif",
                description: "Spicy catfish pepper soup",
                price: "₦4,200",
              },
            ].map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden group"
              >
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-sm md:text-xl font-bold mb-1 md:mb-2">
                    {dish.name}
                  </h4>
                  <p className="text-xs md:text-sm text-white/90 mb-1 md:mb-2">
                    {dish.description}
                  </p>
                  <p className="text-sm md:text-base text-[#F86808] font-bold">
                    {dish.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-24 bg-[#1A1A1A] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-5" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-[#F86808] text-sm md:text-base font-medium tracking-wider mb-3">
              WHY CHOOSE INNOUT
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              The InNout Experience
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-8">
            {[
              {
                icon: <IoBasketOutline className="w-6 md:w-8 h-6 md:h-8" />,
                title: "One-Stop Shop",
                description:
                  "Get everything you need - from restaurant meals to groceries - in one place",
              },
              {
                icon: (
                  <MdOutlineDeliveryDining className="w-6 md:w-8 h-6 md:h-8" />
                ),
                title: "Fast Delivery",
                description:
                  "Swift delivery to your location within 30 minutes",
              },
              {
                icon: <IoStarOutline className="w-6 md:w-8 h-6 md:h-8" />,
                title: "Quality Products",
                description:
                  "Fresh groceries and authentic dishes from trusted sources",
              },
              {
                icon: <MdOutlineLocalOffer className="w-6 md:w-8 h-6 md:h-8" />,
                title: "Best Deals",
                description:
                  "Regular promotions and loyalty rewards on food and groceries",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 hover:bg-white/10 transition-all"
              >
                <div className="bg-gradient-to-br from-[#F86808] to-[#FF9F45] p-3 md:p-4 rounded-xl inline-block mb-4 md:mb-6">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-16 md:py-24 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#F86808] text-sm md:text-base font-medium tracking-wider mb-4">
              SIGNATURE DISHES
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Popular Menu
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
              <button className="px-4 md:px-6 py-2 bg-[#F86808] text-white rounded-full text-sm md:text-base">
                All
              </button>
              <button className="px-4 md:px-6 py-2 hover:bg-gray-100 rounded-full text-gray-600 text-sm md:text-base">
                Soups & Stews
              </button>
              <button className="px-4 md:px-6 py-2 hover:bg-gray-100 rounded-full text-gray-600 text-sm md:text-base">
                Rice Dishes
              </button>
              <button className="px-4 md:px-6 py-2 hover:bg-gray-100 rounded-full text-gray-600 text-sm md:text-base">
                Specials
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: "Egusi Soup Special",
                price: "₦4,500",
                image: "/egusi-special.jfif",
                description: "Rich melon soup with assorted meat and seafood",
                category: "Soups & Stews",
                rating: 4.9,
                time: "25 mins",
              },
              {
                name: "Special Jollof Rice",
                price: "₦3,500",
                image: "/special-jollof.jfif",
                description:
                  "Smoky party-style jollof rice with grilled chicken",
                category: "Rice Dishes",
                rating: 4.8,
                time: "20 mins",
              },
              {
                name: "Chinese Fried Rice",
                price: "₦3,800",
                image: "/chinese-rice.jfif",
                description: "Special fried rice with shrimps and chicken",
                category: "Rice Dishes",
                rating: 4.7,
                time: "25 mins",
              },
              {
                name: "Assorted Meat Pepper Soup",
                price: "₦5,000",
                image: "/pepper-soup.jfif",
                description: "Spicy pepper soup with assorted meat cuts",
                category: "Soups & Stews",
                rating: 4.9,
                time: "30 mins",
              },
              {
                name: "Ofada Rice & Sauce",
                price: "₦4,000",
                image: "/ofada-rice.jfif",
                description: "Local rice served with special ofada sauce",
                category: "Rice Dishes",
                rating: 4.8,
                time: "25 mins",
              },
              {
                name: "Seafood Okra",
                price: "₦6,000",
                image: "/seafood-okra.jfif",
                description: "Fresh okra soup with assorted seafood",
                category: "Soups & Stews",
                rating: 4.9,
                time: "30 mins",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-60 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-[#F86808] font-bold text-xl">
                      {item.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <IoStar
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating)
                              ? "text-[#F86808]"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-gray-600 ml-2">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <IoTimeOutline className="w-5 h-5" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[#F86808] text-sm md:text-base font-medium tracking-wider mb-4">
              TESTIMONIALS
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Customers Say
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                name: "Chioma Adebayo",
                role: "Food Enthusiast",
                image: "/testimonial-3.jfif",
                quote:
                  "The best Nigerian food delivery service I've used. Their jollof rice is absolutely authentic!",
                rating: 5,
              },
              {
                name: "Oluwaseun Johnson",
                role: "Business Owner",
                image: "/testimonial-2.jpg",
                quote:
                  "Quick delivery and excellent food quality. The app makes ordering so convenient.",
                rating: 5,
              },
              {
                name: "Amina Ibrahim",
                role: "Regular Customer",
                image: "/testimonial-1.jpg",
                quote:
                  "Love their variety of traditional dishes. The customer service is top-notch!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IoStar key={i} className="text-[#F86808] w-5 h-5" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase */}
      <section
        id="app-showcase"
        className="py-12 md:py-24 bg-gradient-to-br from-[#F86808] to-[#FF9F45] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-10" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                Download Our App For
                <br />
                The Best Experience
              </h2>
              <p className="text-base md:text-xl text-white/90">
                Get the InNout app for:
              </p>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Easy food ordering from top restaurants",
                  "Real-time order tracking",
                  "Exclusive app-only deals",
                  "Loyalty rewards program",
                  "24/7 customer support",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-white/90"
                  >
                    <FiCheck className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[160px] transition-all"
                >
                  <Image
                    src="/app-store-badge.png"
                    alt="Download on the App Store"
                    width={160}
                    height={53}
                    className="w-full h-auto"
                  />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-[180px] transition-all"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={180}
                    height={53}
                    className="w-full h-auto"
                  />
                </motion.a>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <Image
                src="/app-mockup.jfif"
                alt="Mobile App"
                width={500}
                height={600}
                className="relative z-10 w-full max-w-[280px] md:max-w-full mx-auto"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-80 h-48 md:h-80 bg-white/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
