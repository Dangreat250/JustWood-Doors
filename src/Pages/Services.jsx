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
  // ... (your service definitions)
];

const Services = () => {
  const location = useLocation();
  const category = location.state?.category || null;

  return (
    <div className="pt-20 text-white bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      <section className="p-10 text-center">
        {/* ... (your services section) */}
      </section>
      <section className="mt-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center text-yellow-400 mb-8"
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