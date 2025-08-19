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
      icon: <MapPin className="text-green-400 w-6 h-6" />,
      text: "No 26 Micheal Adeboye St, Victory Estate, Ejigbo, Lagos",
      link: "https://www.google.com/maps/search/?api=1&query=No+26+Micheal+Adeboye+Street,+Victory+Estate,+Ejigbo,+Lagos",
      tooltip: "Click to open Google Maps",
    },
    {
      icon: <Phone className="text-green-400 w-6 h-6" />,
      text: "+234 806 688 2900",
      link: "tel:+2348066882900",
      tooltip: "Click to call us",
    },
    {
      icon: <Mail className="text-green-400 w-6 h-6" />,
      text: "Justwooddoors@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=Justwooddoors@gmail.com",
      tooltip: "Click to send an email in Gmail",
    },
    {
      icon: <MessageCircle className="text-green-400 w-6 h-6" />,
      text: "Chat on WhatsApp",
      link: `https://wa.me/2348066882900?text=${whatsappMessage}`,
      tooltip: "Click to chat on WhatsApp",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 md:p-12 relative overflow-hidden">
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, -20, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 text-center mb-12"
      >
        Contact & Articles
      </motion.h1>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto z-10 relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {contactItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            aria-label={item.tooltip}
          >
            <motion.div className="mb-2" whileHover={{ y: -3 }}>
              {item.icon}
            </motion.div>
            <p className="font-semibold text-center hover:text-yellow-400 transition">
              {item.text}
            </p>
          </motion.a>
        ))}
      </div>

      {/* Google Map under "Our Location" */}
      <div className="max-w-4xl mx-auto mb-12 relative rounded-2xl overflow-hidden border border-white/20 shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-center">
          Our Location
        </h2>
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456789!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d0b1234567%3A0xabcdef1234567890!2sNo+26+Micheal+Adeboye+Street,+Victory+Estate,+Ejigbo,+Lagos!5e0!3m2!1sen!2sng!4v1692297600000!5m2!1sen!2sng"
          width="100%"
          height="400"
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

      {/* Articles List */}
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6 text-center">
          Latest Articles
        </h2>
        <ul className="space-y-6">
          {articles.map((article, idx) => (
            <motion.li
              key={idx}
              className="border-b border-gray-700 pb-4 hover:text-yellow-400 transition cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center"
              >
                <span className="font-semibold text-lg">{article.title}</span>
                <ExternalLink className="w-5 h-5 text-green-400" />
              </a>
              <p className="text-gray-300 text-sm mt-1">{article.summary}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition z-50"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Sliding Chat Panel */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="fixed top-20 right-6 w-80 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 p-4 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-yellow-400 font-bold text-lg">Chat with Us</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-red-500 hover:text-red-600"
                aria-label="Close Chat Panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-200 mb-4 text-sm">
              Click below to open WhatsApp and start chatting.
            </p>
            <a
              href={`https://wa.me/2348066882900?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-center transition"
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
