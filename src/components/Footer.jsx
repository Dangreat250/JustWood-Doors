import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  // Prefilled message
  const whatsappMessage = encodeURIComponent("Hello! I am interested in your doors. Please provide more details.");
  const gmailSubject = encodeURIComponent("Inquiry about JustWood Doors");
  const gmailBody = encodeURIComponent("Hello JustWood Doors,\n\nI would like more information about your doors.\n\nThanks!");

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300 pt-14 pb-6 mt-12 relative overflow-hidden">
      {/* Floating glow effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Brand / About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            JustWood Doors
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Premium doors & stylish home solutions crafted for modern Nigerian living.  
            Bringing elegance, comfort, and top-notch security to your space.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-yellow-400 hover:pl-2 transition-all duration-300">🏠 Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 hover:pl-2 transition-all duration-300">ℹ️ About</Link></li>
            <li><Link to="/services" className="hover:text-yellow-400 hover:pl-2 transition-all duration-300">🛠 Services</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 hover:pl-2 transition-all duration-300">📞 Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact & Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl font-semibold text-white mb-4">Get in Touch</h2>
          <p className="text-sm mb-2">📍 Lagos, Nigeria</p>

          <p className="text-sm mb-2">
            📞 <a
              href={`https://wa.me/+2348066882900?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              +234 806 688 2900 (WhatsApp)
            </a>
          </p>

          <p className="text-sm mb-4">
            ✉️ <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=Justwooddoors@gmail.com&su=${gmailSubject}&body=${gmailBody}`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              Justwooddoors@gmail.com
            </a>
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-4">
            {[
              { icon: <FaWhatsapp />, url: `https://wa.me/+2348066882900?text=${whatsappMessage}`, color: "bg-green-500 hover:bg-green-600" },
              { icon: <FaFacebookF />, url: "https://facebook.com", color: "bg-blue-600 hover:bg-blue-700" },
              { icon: <FaTwitter />, url: "https://twitter.com", color: "bg-sky-500 hover:bg-sky-600" },
              { icon: <FaInstagram />, url: "https://instagram.com", color: "bg-pink-500 hover:bg-pink-600" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${social.color} shadow-lg transition`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 border-t border-white/10 pt-4 text-center text-sm text-gray-400 relative z-10"
      >
        © {new Date().getFullYear()} JustWood Doors. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
