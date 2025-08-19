import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import heroDoor from "../assets/hero-door.jpg";
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
import door22 from "../assets/door22.jpg";
import door23 from "../assets/door23.jpg";
import door24 from "../assets/door24.jpg";
import door25 from "../assets/door25.jpg";
import door26 from "../assets/door26.jpg";
import door27 from "../assets/door27.jpg";
import door28 from "../assets/door28.jpg";
import door29 from "../assets/door29.jpg";
import door30 from "../assets/door30.jpg";
import door31 from "../assets/door31.jpg";
import door32 from "../assets/door32.jpg";
import door33 from "../assets/door33.jpg";
import door34 from "../assets/door34.jpg";
import door35 from "../assets/door35.jpg";
import door36 from "../assets/door36.jpg";

const features = [
  { title: "White Panel Door", desc: "Elegant white panel door for interior spaces.", img: door1, price: "₦150,000" },
  { title: "Oak Flush Door", desc: "Natural oak finish, durable and stylish.", img: door2, price: "₦160,000" },
  { title: "Security Door", desc: "Premium security door for home protection.", img: door3, price: "₦250,000" },
  { title: "Glass Accent Door", desc: "Modern door with stylish glass inserts.", img: door4, price: "₦220,000" },
  { title: "Classic Panel Door", desc: "Timeless wooden panel design.", img: door5, price: "₦180,000" },
  { title: "Luxury Entrance Door", desc: "Impressive main entrance door.", img: door6, price: "₦300,000" },
  { title: "Minimalist Door", desc: "Sleek and simple modern design.", img: door7, price: "₦170,000" },
  { title: "Exterior Solid Door", desc: "Durable door for Nigerian weather.", img: door8, price: "₦200,000" },
  { title: "Carved Wooden Door", desc: "Beautiful carved pattern design.", img: door9, price: "₦210,000" },
  { title: "Luxury Glass Door", desc: "Elegant door with full glass panel.", img: door10, price: "₦260,000" },
  { title: "Modern Panel Door", desc: "Contemporary panel design for interiors.", img: door11, price: "₦180,000" },
  { title: "Security Glass Door", desc: "Glass accent with reinforced security.", img: door12, price: "₦270,000" },
  { title: "Premium Oak Door", desc: "High-quality oak wood finish.", img: door13, price: "₦230,000" },
  { title: "Rustic Door", desc: "Perfect for country-style interiors.", img: door14, price: "₦175,000" },
  { title: "Luxury Panel Door", desc: "Elegant main entrance panel door.", img: door15, price: "₦290,000" },
  { title: "Modern Security Door", desc: "Stylish and strong exterior door.", img: door16, price: "₦250,000" },
  { title: "Minimalist Glass Door", desc: "Simple design with glass insert.", img: door17, price: "₦180,000" },
  { title: "Classic Wooden Door", desc: "Durable wood for interior spaces.", img: door18, price: "₦160,000" },
  { title: "Premium Luxury Door", desc: "High-end main entrance door.", img: door19, price: "₦320,000" },
  { title: "Glass Panel Door", desc: "Stylish door with glass panel.", img: door20, price: "₦240,000" },
  { title: "Exterior Oak Door", desc: "Durable exterior door with oak finish.", img: door21, price: "₦220,000" },
  { title: "Interior Panel Door", desc: "Elegant interior panel design.", img: door22, price: "₦175,000" },
  { title: "Modern Carved Door", desc: "Contemporary carved wood design.", img: door23, price: "₦230,000" },
  { title: "Luxury Oak Door", desc: "High-quality oak wood luxury door.", img: door24, price: "₦300,000" },
  { title: "Sleek Wooden Door", desc: "Smooth finish for modern interiors.", img: door25, price: "₦200,000" },
  { title: "Premium Security Door", desc: "Strong and stylish security door.", img: door26, price: "₦270,000" },
  { title: "Modern Glass Door", desc: "Elegant glass design for interiors.", img: door27, price: "₦230,000" },
  { title: "Luxury Panel Door", desc: "Beautiful panel door for main entrances.", img: door28, price: "₦290,000" },
  { title: "Classic Carved Door", desc: "Timeless carved wooden design.", img: door29, price: "₦210,000" },
  { title: "Exterior Security Door", desc: "Robust door for exterior protection.", img: door30, price: "₦260,000" },
  { title: "Minimalist Oak Door", desc: "Simple and elegant oak door.", img: door31, price: "₦180,000" },
  { title: "Luxury Glass Panel Door", desc: "Stylish and modern glass panel door.", img: door32, price: "₦280,000" },
  { title: "Classic Interior Door", desc: "Perfect for bedrooms and offices.", img: door33, price: "₦160,000" },
  { title: "Premium Exterior Door", desc: "Strong and elegant main entrance.", img: door34, price: "₦300,000" },
  { title: "Luxury Wooden Door", desc: "High-end wood door for modern homes.", img: door35, price: "₦320,000" },
  { title: "Modern Minimalist Door", desc: "Sleek design with clean lines.", img: door36, price: "₦270,000" },
];

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const whatsappMsg = "Hello! I am interested in your doors. Please provide more details.";

  return (
    <div className="p-0 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img
          src={heroDoor}
          alt="Luxury Wooden Door"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 drop-shadow-lg"
          >
            Welcome to JustWood Doors
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-md md:text-xl text-gray-200 max-w-3xl mx-auto mt-4"
          >
            Premium Nigerian-made doors, crafted strong and stylish for your home and office.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex gap-4 flex-wrap justify-center"
          >
            <a
              href="#doors"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-green-500 text-black font-bold hover:scale-105 transform transition"
            >
              Explore Doors
            </a>
            <a
              href={`https://wa.me/+2348066882900?text=${encodeURIComponent(whatsappMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition text-white font-semibold"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Doors Grid */}
      <div id="doors" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
        {features.map((door, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-900/80 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl border border-gray-700 transition"
            onClick={() => setSelectedImage(door)}
          >
            <img src={door.img} alt={door.title} className="w-full h-48 object-cover" />
            <div className="absolute top-2 left-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm shadow-lg">
              {door.price}
            </div>
            <div className="p-3 text-center">
              <p className="font-semibold text-white">{door.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
                <p className="text-2xl font-bold text-white">{selectedImage.title}</p>
                <p className="text-lg text-yellow-400">{selectedImage.price}</p>
                <p className="text-sm text-gray-300">{selectedImage.desc}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/+2348066882900?text=${encodeURIComponent(whatsappMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center animate-pulse"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
};

export default Home;
