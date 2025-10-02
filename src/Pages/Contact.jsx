import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, X, ExternalLink } from "lucide-react";

// Articles data
const articles = [
  {
    title: "Top 5 Modern Door Designs for Nigerian Homes",
    summary: "Discover the latest trends in security and style for your home entrances.",
    link: "https://funi.com.ng/articles/modern-door-designs",
  },
  {
    title: "How to Choose the Right Door Material",
    summary: "A guide to selecting doors that last long in Nigerian weather conditions.",
    link: "https://funi.com.ng/articles/door-material-guide",
  },
  {
    title: "Benefits of Premium Security Doors",
    summary: "Keep your family safe while enhancing your home's aesthetic appeal.",
    link: "https://funi.com.ng/articles/premium-security-doors",
  },
  {
    title: "DIY Maintenance Tips for Your Doors",
    summary: "Simple steps to keep your doors looking new and functioning smoothly.",
    link: "https://funi.com.ng/articles/door-maintenance-tips",
  },
  {
    title: "Why Lagos Homeowners Prefer Modern Panel Doors",
    summary: "Learn why panel doors are trending in Lagos apartments and houses.",
    link: "https://funi.com.ng/articles/panel-door-trend",
  },
];

const Contact = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello Justwood Doors, I would like to inquire about your doors and services."
  );

  const contactItems = [
    {
      icon: <MapPin className="text-amber-800 w-5 h-5 sm:w-6 sm:h-6" />,
      text: "No 26 Micheal Adeboye St, Victory Estate, Ejigbo, Lagos",
      link: "https://www.google.com/maps/search/?api=1&query=No+26+Micheal+Adeboye+Street,+Victory+Estate,+Ejigbo,+Lagos",
      tooltip: "Click to open Google Maps",
    },
    {
      icon: <Phone className="text-amber-800 w-5 h-5 sm:w-6 sm:h-6" />,
      text: "+234 806 688 2900",
      link: "tel:+2348066882900",
      tooltip: "Click to call us",
    },
    {
      icon: <Mail className="text-amber-800 w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Justwooddoors@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=Justwooddoors@gmail.com",
      tooltip: "Click to send an email in Gmail",
    },
    {
      icon: <MessageCircle className="text-amber-800 w-5 h-5 sm:w-6 sm:h-6" />,
      text: "Chat on WhatsApp",
      link: `https://wa.me/2348066882900?text=${whatsappMessage}`,
      tooltip: "Click to chat on WhatsApp",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-200 text-gray-900 pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Floating Orbs with warm wood tones */}
      <motion.div
        className="absolute top-10 sm:top-20 left-4 sm:left-10 w-40 sm:w-64 h-40 sm:h-64 bg-amber-700/10 rounded-full blur-2xl sm:blur-3xl"
        animate={{ x: [0, 20, -15, 0], y: [0, 15, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-40 sm:w-64 h-40 sm:h-64 bg-orange-900/10 rounded-full blur-2xl sm:blur-3xl"
        animate={{ x: [0, -20, 15, 0], y: [0, -15, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-900 text-center mb-8 sm:mb-10 md:mb-12"
      >
        Contact & Articles
      </motion.h1>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto z-10 relative grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8 sm:mb-10 md:mb-12">
        {contactItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center cursor-pointer p-4 sm:p-6 bg-gray-100 rounded-xl shadow-sm hover:shadow-md hover:bg-amber-50 transition"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label={item.tooltip}
          >
            <motion.div className="mb-2 sm:mb-3" whileHover={{ y: -3 }}>
              {item.icon}
            </motion.div>
            <p className="font-semibold text-center text-sm sm:text-base hover:text-amber-700 transition">
              {item.text}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Google Map */}
      <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-800 mb-4 sm:mb-6 text-center">
          Our Location
        </h2>
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d0b1234567%3A0xabcdef1234567890!2sNo+26+Micheal+Adeboye+Street,+Victory+Estate,+Ejigbo,+Lagos!5e0!3m2!1sen!2sng!4v1692297600000!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="https://www.google.com/maps/search/?api=1&query=No+26+Micheal+Adeboye+Street,+Victory+Estate,+Ejigbo,+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-transparent cursor-pointer"
            aria-label="Open Google Maps"
          ></a>
        </div>
      </div>

      {/* Articles List */}
      <div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-800 mb-4 sm:mb-6 text-center">
          Latest Articles
        </h2>
        <ul className="space-y-4 sm:space-y-6">
          {articles.map((article, idx) => (
            <motion.li
              key={idx}
              className="border-b border-gray-200 pb-3 sm:pb-4 hover:text-amber-700 transition cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center gap-2"
              >
                <span className="font-semibold text-base sm:text-lg">
                  {article.title}
                </span>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 flex-shrink-0" />
              </a>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                {article.summary}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-amber-800 text-white p-3 sm:p-4 rounded-full shadow-xl hover:bg-amber-900 transition z-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Sliding Chat Panel */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fixed top-16 sm:top-20 right-0 w-11/12 sm:w-80 max-w-xs bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 p-4 sm:p-5 flex flex-col"
          >
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h3 className="text-amber-800 font-bold text-base sm:text-lg">
                Chat with Us
              </h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-red-500 hover:text-red-600"
                aria-label="Close Chat Panel"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <p className="text-gray-700 mb-3 sm:mb-4 text-xs sm:text-sm">
              Click below to open WhatsApp and start chatting.
            </p>
            <a
              href={`https://wa.me/2348066882900?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-800 hover:bg-amber-900 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-center transition text-sm sm:text-base"
              aria-label="Start WhatsApp Chat"
            >
              Start WhatsApp Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;