import React from "react";
import { motion } from "framer-motion";
import { FaCouch, FaDoorOpen, FaUsers, FaHandshake } from "react-icons/fa";

const features = [
  {
    icon: <FaCouch className="text-amber-900 text-4xl" />,
    title: "Premium Furniture",
    desc: "Crafted with top-quality materials to blend comfort and durability.",
  },
  {
    icon: <FaDoorOpen className="text-amber-900 text-4xl" />,
    title: "Stylish Doors",
    desc: "Security meets elegance with our wide range of door designs.",
  },
  {
    icon: <FaUsers className="text-amber-900 text-4xl" />,
    title: "Customer Focused",
    desc: "We prioritize customer satisfaction with personalized services.",
  },
  {
    icon: <FaHandshake className="text-amber-900 text-4xl" />,
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
    <div className="p-10 text-black bg-white min-h-screen mt-20">
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-amber-900">About Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-3xl text-black">
          At justwood doors& interior we design doors and furniture that blend
          style, strength, and comfort. Every piece is crafted with quality
          materials and attention to detail, giving your home or office a touch
          of elegance that lasts. Our mission is simple: to create beautiful,
          durable designs that make your space stand out.
        </p>
      </motion.div>

      {/* Features */}
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mt-4 text-amber-800">
              {feature.title}
            </h3>
            <p className="text-black mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Articles Section */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-6">
          Latest Articles
        </h2>
        <div className="space-y-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:bg-gray-200 transition"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-3xl font-semibold text-amber-900">
                {article.title}
              </h3>
              <p className="text-black mt-2">{article.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mt-20 grid md:grid-cols-2 gap-12 text-center">
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-amber-900">Our Mission</h3>
          <p className="mt-3 text-black">
            To enhance modern living with innovative furniture and secure door
            designs, ensuring beauty and safety for every customer.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-3xl font-bold text-amber-900">Our Vision</h3>
          <p className="mt-3 text-black">
            To become the leading global brand for stylish furniture and doors
            while promoting eco-friendly living solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
