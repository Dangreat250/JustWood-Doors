import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = ({ categories = ["doors", "furnitures", "sofas", "beds"] }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (category) => {
    navigate("/services", { state: { category } });
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav
      className="sticky top-0 left-0 w-full z-50 text-white shadow-lg backdrop-blur-sm"
      style={{
        backgroundImage: `
          linear-gradient(to right, #4e342e, #6d4c41, #8d6e63),
          url('https://www.transparenttextures.com/patterns/wood-pattern.png')
        `,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={() => {
            navigate("/");
            setMobileMenuOpen(false);
          }}
          className="text-xl sm:text-2xl font-extrabold tracking-wide cursor-pointer bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent"
        >
          JustWood <span className="text-amber-200">Doors</span>
        </div>

        {/* Hamburger (mobile only) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16m-7 6h7" // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 font-medium">
          <li
            onClick={() => navigate("/")}
            className="hover:text-amber-400 cursor-pointer transition-colors duration-300"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="hover:text-amber-400 cursor-pointer transition-colors duration-300"
          >
            About
          </li>

          {/* Services Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-amber-400 cursor-pointer focus:outline-none"
            >
              Services ▾
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 mt-2 w-48 bg-stone-900 text-amber-100 rounded-xl shadow-xl overflow-hidden z-50 border border-amber-700/30"
                >
                  {categories.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{
                        backgroundColor: "rgba(251,191,36,0.15)",
                        scale: 1.02,
                      }}
                      className="px-5 py-3 hover:text-amber-400 cursor-pointer transition"
                      onClick={() => handleCategoryClick(item)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          <li
            onClick={() => navigate("/contact")}
            className="hover:text-amber-400 cursor-pointer transition-colors duration-300"
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.ul
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden absolute top-16 right-4 w-60 sm:w-72 text-white rounded-lg shadow-xl overflow-hidden z-50 border border-amber-700/30"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, #4e342e, #6d4c41, #8d6e63),
                url('https://www.transparenttextures.com/patterns/wood-pattern.png')
              `,
              backgroundSize: "cover",
              backgroundBlendMode: "overlay",
            }}
          >
            <li
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
              className="px-5 py-3 hover:bg-amber-600/20 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                setMobileMenuOpen(false);
              }}
              className="px-5 py-3 hover:bg-amber-600/20 cursor-pointer"
            >
              About
            </li>

            {/* Mobile Services Dropdown */}
            <li>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full text-left px-5 py-3 hover:bg-amber-600/20 focus:outline-none"
              >
                Services ▾
              </button>
              <AnimatePresence>
                {mobileDropdownOpen && (
                  <motion.ul
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="bg-stone-900 text-amber-100 rounded-b-lg shadow-lg overflow-hidden border-t border-amber-700/30"
                  >
                    {categories.map((item, index) => (
                      <motion.li
                        key={index}
                        whileHover={{
                          backgroundColor: "rgba(251,191,36,0.15)",
                          scale: 1.02,
                        }}
                        className="px-5 py-3 hover:text-amber-400 cursor-pointer transition"
                        onClick={() => handleCategoryClick(item)}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            <li
              onClick={() => {
                navigate("/contact");
                setMobileMenuOpen(false);
              }}
              className="px-5 py-3 hover:bg-amber-600/20 cursor-pointer"
            >
              Contact
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
