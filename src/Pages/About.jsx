import React from "react";
import { motion } from "framer-motion";
import { FaCouch, FaDoorOpen, FaUsers, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: <FaCouch className="text-amber-900 text-3xl sm:text-4xl" />,
    title: "Premium Furniture",
    desc: "Crafted with top-quality materials to blend comfort and durability.",
  },
  {
    icon: <FaDoorOpen className="text-amber-900 text-3xl sm:text-4xl" />,
    title: "Stylish Doors",
    desc: "Security meets elegance with our wide range of door designs.",
  },
  {
    icon: <FaUsers className="text-amber-900 text-3xl sm:text-4xl" />,
    title: "Customer Focused",
    desc: "We prioritize customer satisfaction with personalized services.",
  },
  {
    icon: <FaHandshake className="text-amber-900 text-3xl sm:text-4xl" />,
    title: "Trusted Brand",
    desc: "Over 10 years of experience in furniture and door solutions.",
  },
];

const articles = [
  {
    title: "Why Modern Homes Need Smart Furniture",
    content:
      "In today’s fast-paced world, homes need furniture that is not only stylish but also functional. Our designs merge beauty with practicality.",
  },
  {
    title: "The Art of Choosing the Right Door",
    content:
      "Doors are the first impression of any home. From classic wooden to high-security steel doors, we provide a range that fits every taste.",
  },
  {
    title: "Eco-Friendly Furniture Trends",
    content:
      "Sustainability matters. Our eco-conscious products ensure you live in comfort while protecting the environment.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-16 sm:pt-20 px-4 sm:px-6 md:px-10">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900">
          About Us
        </h1>
        <p className="mt-3 sm:mt-4 max-w-xl sm:max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl text-black">
          At Justwood Doors & Interior, we design doors and furniture that blend
          style, strength, and comfort. Every piece is crafted with quality
          materials and attention to detail, giving your home or office a touch
          of elegance that lasts. Our mission is simple: to create beautiful,
          durable designs that make your space stand out.
        </p>
      </motion.div>

      {/* Features */}
      <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-4 sm:p-6 rounded-2xl shadow-lg text-center hover:scale-105 hover:bg-amber-50 hover:shadow-xl transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            {feature.icon}
            <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 text-amber-800">
              {feature.title}
            </h3>
            <p className="text-black text-sm sm:text-base mt-2">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Articles Section */}
      <div className="mt-10 sm:mt-12 md:mt-16 max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900 text-center mb-4 sm:mb-6">
          Latest Articles
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:bg-gray-200 hover:shadow-xl transition"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-amber-900">
                {article.title}
              </h3>
              <p className="text-black text-sm sm:text-base mt-2">
                {article.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-900">
            Our Mission
          </h3>
          <p className="mt-2 sm:mt-3 text-black text-sm sm:text-base">
            To enhance modern living with innovative furniture and secure door
            designs, ensuring beauty and safety for every customer.
          </p>
        </div>
        <div className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-900">
            Our Vision
          </h3>
          <p className="mt-2 sm:mt-3 text-black text-sm sm:text-base">
            To become the leading global brand for stylish furniture and doors
            while promoting eco-friendly living solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;