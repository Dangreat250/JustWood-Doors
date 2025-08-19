import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// Import images from src/assets/
import door1 from "../assets/door1.jpg";
import door2 from "../assets/door2.jpg";
import door3 from "../assets/door3.jpg";
import door4 from "../assets/door4.jpg";
import door5 from "../assets/door5.jpg";
import door6 from "../assets/door6.jpg";
import door7 from "../assets/door7.jpg";
import door8 from "../assets/door8.jpg";
import door9 from "../assets/door9.jpg";
import door10 from "../assets/door10.jpg";
import door11 from "../assets/door11.jpg";
import door12 from "../assets/door12.jpg";
import door13 from "../assets/door13.jpg";
import door14 from "../assets/door14.jpg";
import door15 from "../assets/door15.jpg";
import door16 from "../assets/door16.jpg";
import door17 from "../assets/door17.jpg";
import door18 from "../assets/door18.jpg";
import door19 from "../assets/door19.jpg";
import door20 from "../assets/door20.jpg";
import door21 from "../assets/door21.jpg";
import solidFlush from "../assets/solid-flush.jpg";
import furniture1 from "../assets/furniture1.jpg";
import furniture2 from "../assets/furniture2.jpg";
import furniture3 from "../assets/furniture3.jpg";
import chair1 from "../assets/chair1.jpg";
import sofa1 from "../assets/sofa1.jpg";
import sofa2 from "../assets/sofa2.jpg";
import sofa3 from "../assets/sofa3.jpg";
import bed1 from "../assets/bed1.jpg";
import bed2 from "../assets/bed2.jpg";
import bed3 from "../assets/bed3.jpg";

const products = {
  doors: [
    { title: "Door 1", desc: "Elegant door design.", img: door1, price: "₦150,000" },
    { title: "Door 2", desc: "Stylish oak door.", img: door2, price: "₦160,000" },
    { title: "Door 3", desc: "Security door.", img: door3, price: "₦250,000" },
    { title: "Door 4", desc: "Glass accent door.", img: door4, price: "₦220,000" },
    { title: "Door 5", desc: "Classic panel door.", img: door5, price: "₦180,000" },
    { title: "Door 6", desc: "Luxury entrance door.", img: door6, price: "₦300,000" },
    { title: "Door 7", desc: "Minimalist door.", img: door7, price: "₦170,000" },
    { title: "Door 8", desc: "Exterior solid door.", img: door8, price: "₦200,000" },
    { title: "Door 9", desc: "Carved wooden door.", img: door9, price: "₦210,000" },
    { title: "Door 10", desc: "Luxury glass door.", img: door10, price: "₦260,000" },
    { title: "Door 11", desc: "Modern panel door.", img: door11, price: "₦180,000" },
    { title: "Door 12", desc: "Security glass door.", img: door12, price: "₦270,000" },
    { title: "Door 13", desc: "Premium oak door.", img: door13, price: "₦230,000" },
    { title: "Door 14", desc: "Rustic door.", img: door14, price: "₦175,000" },
    { title: "Door 15", desc: "Luxury panel door.", img: door15, price: "₦290,000" },
    { title: "Door 16", desc: "Modern security door.", img: door16, price: "₦250,000" },
    { title: "Door 17", desc: "Minimalist glass door.", img: door17, price: "₦180,000" },
    { title: "Door 18", desc: "Classic wooden door.", img: door18, price: "₦160,000" },
    { title: "Door 19", desc: "Premium luxury door.", img: door19, price: "₦320,000" },
    { title: "Door 20", desc: "Glass panel door.", img: door20, price: "₦240,000" },
    { title: "Door 21", desc: "Solid flush door.", img: door21, price: "₦200,000" },
    { title: "Solid Flush Door", desc: "Durable solid flush design.", img: solidFlush, price: "₦220,000" },
  ],
  furnitures: [
    { title: "Furniture 1", desc: "Modern dining table.", img: furniture1, price: "₦350,000" },
    { title: "Furniture 2", desc: "Luxury bookshelf.", img: furniture2, price: "₦200,000" },
    { title: "Furniture 3", desc: "Minimalist coffee table.", img: furniture3, price: "₦120,000" },
    { title: "Chair 1", desc: "Comfortable chair design.", img: chair1, price: "₦100,000" },
  ],
  sofas: [
    { title: "Sofa 1", desc: "Leather sofa set.", img: sofa1, price: "₦450,000" },
    { title: "Sofa 2", desc: "Fabric corner sofa.", img: sofa2, price: "₦300,000" },
    { title: "Sofa 3", desc: "Modern recliner.", img: sofa3, price: "₦180,000" },
  ],
  beds: [
    { title: "Bed 1", desc: "King size bed.", img: bed1, price: "₦400,000" },
    { title: "Bed 2", desc: "Wooden platform bed.", img: bed2, price: "₦250,000" },
    { title: "Bed 3", desc: "Modern canopy bed.", img: bed3, price: "₦320,000" },
  ],
};

const ProductGallery = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const whatsappMsg = `Hello! I'm interested in your ${category || "products"}. Please provide more details.`;

  const filteredProducts = category
    ? products[category] || []
    : Object.values(products).flat();

  return (
    <div className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/80 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl border border-gray-700"
              onClick={() => setSelectedProduct(product)}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  console.error(`Image failed to load: ${product.img}`);
                  e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found"; // Fallback image
                }}
              />
              <div className="p-3 text-center">
                <p className="font-semibold text-white">{product.title}</p>
                <p className="text-sm text-gray-400">{product.price}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-400 text-center col-span-full">
            No products available for this category.
          </p>
        )}
      </div>
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative bg-gray-800 rounded-xl p-6 max-w-2xl w-full">
              <motion.img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                className="max-h-[60vh] w-full object-contain rounded-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onError={(e) => {
                  console.error(`Modal image failed to load: ${selectedProduct.img}`);
                  e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found";
                }}
              />
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-yellow-400">{selectedProduct.title}</h3>
                <p className="text-gray-300">{selectedProduct.desc}</p>
                <p className="text-lg font-bold text-white mt-2">{selectedProduct.price}</p>
                <a
                  href={`https://wa.me/+2348066882900?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition text-white font-semibold"
                >
                  <FaWhatsapp /> Inquire Now
                </a>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductGallery;