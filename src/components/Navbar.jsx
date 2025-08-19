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
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 h-50 via-blue-800 to-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={() => {
            navigate("/");
            setMobileMenuOpen(false);
          }}
          className="text-2xl font-bold tracking-wide cursor-pointer"
        >
          JustWood Doors <span className="text-yellow-400">Co.</span>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-10 font-medium">
          <li
            onClick={() => navigate("/")}
            className="hover:text-yellow-400 cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/about")}
            className="hover:text-yellow-400 cursor-pointer"
          >
            About
          </li>

          {/* Services Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-yellow-400 cursor-pointer focus:outline-none"
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
                  className="absolute left-0 mt-2 w-44 bg-white text-gray-900 rounded-xl shadow-lg overflow-hidden z-50"
                >
                  {categories.map((item, index) => (
                    <motion.li
                      key={index}
                      whileHover={{ backgroundColor: "#f3f4f6", scale: 1.02 }}
                      className="px-5 py-3 hover:text-blue-700 cursor-pointer transition"
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
            className="hover:text-yellow-400 cursor-pointer"
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
            className="lg:hidden absolute top-16 right-4 w-48 bg-blue-900 text-white rounded-lg shadow-lg overflow-hidden z-50"
          >
            <li
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
              className="px-5 py-3 hover:bg-blue-800 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                setMobileMenuOpen(false);
              }}
              className="px-5 py-3 hover:bg-blue-800 cursor-pointer"
            >
              About
            </li>

            {/* Mobile Services Dropdown */}
            <li>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full text-left px-5 py-3 hover:bg-blue-800 focus:outline-none"
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
                    className="bg-white text-gray-900 rounded-b-lg shadow-lg overflow-hidden"
                  >
                    {categories.map((item, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ backgroundColor: "#f3f4f6", scale: 1.02 }}
                        className="px-5 py-3 hover:text-blue-700 cursor-pointer transition"
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
              className="px-5 py-3 hover:bg-blue-800 cursor-pointer"
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
