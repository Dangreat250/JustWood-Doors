import React from "react";
import { motion } from "framer-motion";
import {
  FaDoorOpen,
  FaCouch,
  FaPaintBrush,
  FaTools,
  FaShippingFast,
  FaHandshake,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import ProductGallery from "../components/ProductGallery";

const services = [
  {
    icon: <FaDoorOpen className="text-amber-800 text-3xl sm:text-4xl" />,
    title: "Custom Door Designs",
    desc: "From modern security doors to classic wooden styles, tailored to your needs.",
  },
  {
    icon: <FaCouch className="text-amber-800 text-3xl sm:text-4xl" />,
    title: "Furniture Solutions",
    desc: "Premium sofas, chairs, and more crafted with durability and elegance.",
  },
  {
    icon: <FaPaintBrush className="text-amber-800 text-3xl sm:text-4xl" />,
    title: "Interior Finishing",
    desc: "Unique paint and finishing services that give your home a modern look.",
  },
  {
    icon: <FaTools className="text-amber-800 text-3xl sm:text-4xl" />,
    title: "Maintenance & Repairs",
    desc: "Reliable furniture and door repairs to keep your home in top condition.",
  },
  {
    icon: <FaShippingFast className="text-amber-800 text-3xl sm:text-4xl" />,
    title: "Fast Delivery",
    desc: "Quick and secure delivery so you get your products right on time.",
  },
  {
    icon: <FaHandshake className="text-amber-800 text-3xl sm:text-4xl" />,
    title: "Trusted Service",
    desc: "Over a decade of providing quality products and customer satisfaction.",
  },
];

const Services = () => {
  const location = useLocation();
  const category = location.state?.category || null;

  return (
    <div className="pt-16 sm:pt-20 text-black bg-white min-h-screen">
      {/* Services Section */}
      <section className="p-4 sm:p-6 md:p-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 mb-6 sm:mb-8 md:mb-10"
        >
          Our Services
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 border border-gray-300 p-4 sm:p-6 rounded-2xl shadow-sm text-center hover:scale-105 hover:border-amber-700 hover:bg-amber-50 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              {service.icon}
              <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 text-amber-800">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base mt-2">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-amber-800 mb-6 sm:mb-8"
        >
          {category
            ? `Showing ${category.charAt(0).toUpperCase() + category.slice(1)}`
            : "Our Products"}
        </motion.h2>
        <ProductGallery category={category} />
      </section>
    </div>
  );
};

export default Services;