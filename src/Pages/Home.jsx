import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTrash, FaInfoCircle, FaShoppingCart } from "react-icons/fa";

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

const doors = [
  {
    title: "White Panel Door",
    price: 150000,
    img: door1,
    desc: `**Material & Craftsmanship:** Premium MDF (Medium Density Fiberboard) with moisture-resistant finish. Expertly aligned panels, smooth edges, scratch-resistant lacquer.  

**History & Legacy:** Inspired by colonial European panel doors; widely adopted in Nigerian homes for brightness and modernity.  

**Maintenance & Longevity:** Wipe with soft damp cloth, avoid abrasive cleaners. Minor scratches retouched with white lacquer.  

**Cultural & Aesthetic Relevance:** Symbolizes purity, modern elegance; complements bright interiors.  

**Installation Guidance:** Compatible with standard locks; professional fitting recommended.  

**Use Cases:** Bedrooms, living rooms, home offices.  

**Decor Ideas:** Neutral walls, indoor plants, metallic handles for accent.  

**Story:** Bridges classic European design with Nigerian practicality, balancing durability, style, and simplicity.`
  },
  {
    title: "Oak Flush Door",
    price: 160000,
    img: door2,
    desc: `**Material & Craftsmanship:** Premium oak timber, flush minimalist design, lacquer coating enhances natural grain.  

**History & Legacy:** Minimalist design gaining popularity in modern Nigerian homes.  

**Maintenance & Longevity:** Easy to maintain, dust regularly, avoid harsh chemicals.  

**Cultural & Aesthetic Relevance:** Showcases natural wood grain, warm tones for cozy interiors.  

**Installation Guidance:** Compatible with standard locks, lightweight for easy fitting.  

**Use Cases:** Bedrooms, offices, hallways.  

**Decor Ideas:** Pair with neutral rugs and minimalist furniture.  

**Story:** Perfect blend of simplicity and natural elegance for modern spaces.`
  },
  {
    title: "Security Door",
    price: 250000,
    img: door3,
    desc: `**Material & Craftsmanship:** Reinforced steel, powder-coated finish, tamper-resistant locks.  

**History & Legacy:** Developed to enhance residential and commercial safety in Nigeria.  

**Maintenance & Longevity:** Rust-resistant, wipe clean, lubricate locks periodically.  

**Cultural & Aesthetic Relevance:** Combines security with contemporary design.  

**Installation Guidance:** Professional installation recommended; compatible with reinforced frames.  

**Use Cases:** Main entrances, commercial doors.  

**Decor Ideas:** Modern security-focused exteriors, minimal accents.  

**Story:** Prioritizes safety without compromising aesthetics.`
  },
  {
    title: "Glass Accent Door",
    price: 220000,
    img: door4,
    desc: `**Material & Craftsmanship:** Tempered glass inserts, durable timber frame, smooth finish.  

**History & Legacy:** Modern interior design trend to enhance light and openness.  

**Maintenance & Longevity:** Clean glass with mild detergent, avoid scratches.  

**Cultural & Aesthetic Relevance:** Adds brightness and modern appeal.  

**Installation Guidance:** Fits standard hinges; professional fitting recommended.  

**Use Cases:** Living rooms, offices, corridors.  

**Decor Ideas:** Light-colored interiors, decorative plants, sleek furniture.  

**Story:** Combines natural light and craftsmanship for stylish interiors.`
  },
  {
    title: "Classic Panel Door",
    price: 180000,
    img: door5,
    desc: `**Material & Craftsmanship:** Durable timber, classic panel design, smooth lacquer finish.  

**History & Legacy:** Timeless design used across decades for elegance.  

**Maintenance & Longevity:** Dust and polish regularly, lasts for years.  

**Cultural & Aesthetic Relevance:** Adds warmth and sophistication.  

**Installation Guidance:** Compatible with standard locks and handles.  

**Use Cases:** Bedrooms, living areas.  

**Decor Ideas:** Pair with traditional Nigerian furniture, warm-toned interiors.  

**Story:** Timeless classic that complements both modern and traditional interiors.`
  },
  {
    title: "Luxury Entrance Door",
    price: 300000,
    img: door6,
    desc: `**Material & Craftsmanship:** Premium wood with decorative glass, high-strength frame.  

**History & Legacy:** Symbol of status and elegance in Nigerian architecture.  

**Maintenance & Longevity:** Wipe with soft cloth, polish occasionally.  

**Cultural & Aesthetic Relevance:** Luxurious appearance, high curb appeal.  

**Installation Guidance:** Professional fitting recommended.  

**Use Cases:** Main entrances, high-end homes.  

**Decor Ideas:** Complement with outdoor lighting and stone pathways.  

**Story:** A luxurious statement door that welcomes guests with style.`
  },
  {
    title: "Minimalist Door",
    price: 170000,
    img: door7,
    desc: `**Material & Craftsmanship:** Sleek modern design, lightweight yet durable, smooth lacquer finish.  

**History & Legacy:** Inspired by Scandinavian minimalist interiors.  

**Maintenance & Longevity:** Easy cleaning; retains elegance over years.  

**Cultural & Aesthetic Relevance:** Complements contemporary minimalist Nigerian homes.  

**Installation Guidance:** Standard locks compatible; professional fitting recommended.  

**Use Cases:** Bedrooms, offices, living rooms.  

**Decor Ideas:** Pair with monochrome walls, minimal furniture.  

**Story:** Blends simplicity with modern elegance for clean interior aesthetics.`
  },
  {
    title: "Exterior Solid Door",
    price: 200000,
    img: door8,
    desc: `**Material & Craftsmanship:** Premium timber, strong frame, weather-resistant coating.  

**History & Legacy:** Designed for durability against Nigerian climate.  

**Maintenance & Longevity:** Periodic varnishing recommended.  

**Cultural & Aesthetic Relevance:** Solid and strong appearance, enhances exterior look.  

**Installation Guidance:** Professional installation advised.  

**Use Cases:** Front and back entrances.  

**Decor Ideas:** Complement with exterior landscaping and lighting.  

**Story:** Sturdy and elegant solution for secure entrances.`
  },
  {
    title: "Carved Wooden Door",
    price: 210000,
    img: door9,
    desc: `**Material & Craftsmanship:** High-quality wood, intricate carvings, smooth finish.  

**History & Legacy:** Inspired by traditional Nigerian woodcraft.  

**Maintenance & Longevity:** Dust carved areas regularly; polish occasionally.  

**Cultural & Aesthetic Relevance:** Adds sophistication and traditional charm.  

**Installation Guidance:** Fits standard frames; professional fitting recommended.  

**Use Cases:** Bedrooms, living rooms.  

**Decor Ideas:** Pair with classic furniture and warm lighting.  

**Story:** A blend of tradition and elegance for timeless interiors.`
  },
  {
    title: "Luxury Glass Door",
    price: 260000,
    img: door10,
    desc: `**Material & Craftsmanship:** Tempered glass panels, premium wooden frame.  

**History & Legacy:** Modern luxury trend for high-end interiors.  

**Maintenance & Longevity:** Clean glass with soft cloth; maintain frame.  

**Cultural & Aesthetic Relevance:** Maximizes natural light, creates modern luxury aesthetic.  

**Installation Guidance:** Standard hinges, professional fitting recommended.  

**Use Cases:** Main entrances, interior showcases.  

**Decor Ideas:** Pair with contemporary furniture, open interiors.  

**Story:** A luminous, elegant statement for sophisticated homes.`
  },
  {
    title: "Rustic Barn Door",
    price: 185000,
    img: door11,
    desc: `**Material & Craftsmanship:** Reclaimed wood with natural grains, rustic finish, metal rollers for sliding.  

**History & Legacy:** Inspired by traditional barn structures, adapted for modern interiors.  

**Maintenance & Longevity:** Dust regularly, apply wood oil to maintain texture.  

**Cultural & Aesthetic Relevance:** Adds warmth and rustic charm to interiors.  

**Installation Guidance:** Sliding mechanism included; professional installation recommended.  

**Use Cases:** Bedrooms, living areas, pantry doors.  

**Decor Ideas:** Complement with exposed beams and farmhouse décor.  

**Story:** Evokes nostalgia while providing functional elegance for modern homes.`
  },
  {
    title: "Pivot Modern Door",
    price: 320000,
    img: door12,
    desc: `**Material & Craftsmanship:** Solid hardwood, pivot mechanism for smooth rotation, sleek lacquer finish.  

**History & Legacy:** Modern pivot doors are a statement in contemporary Nigerian architecture.  

**Maintenance & Longevity:** Minimal upkeep, occasional polish for shine.  

**Cultural & Aesthetic Relevance:** Bold, luxurious entrance; signifies innovation and style.  

**Installation Guidance:** Pivot system included; professional fitting mandatory.  

**Use Cases:** Main entrances, executive offices.  

**Decor Ideas:** Minimalist exteriors, accent lighting.  

**Story:** Dramatic entrance that combines engineering precision with aesthetic sophistication.`
  },
  {
    title: "Paneled Teak Door",
    price: 280000,
    img: door13,
    desc: `**Material & Craftsmanship:** Premium teak wood, deep panel carvings, natural teak finish.  

**History & Legacy:** Teak doors are renowned for durability and luxury.  

**Maintenance & Longevity:** Apply teak oil yearly; dust frequently.  

**Cultural & Aesthetic Relevance:** Represents elegance and strength in Nigerian homes.  

**Installation Guidance:** Fits standard frames; expert installation advised.  

**Use Cases:** Living rooms, study areas, main entrances.  

**Decor Ideas:** Pair with warm-toned interiors and classic furniture.  

**Story:** A door that balances tradition, longevity, and refined aesthetics.`
  },
  {
    title: "Contemporary Frosted Door",
    price: 240000,
    img: door14,
    desc: `**Material & Craftsmanship:** Frosted tempered glass, sleek timber frame, clean modern finish.  

**History & Legacy:** Modern privacy door trend for Nigerian offices and homes.  

**Maintenance & Longevity:** Wipe glass regularly, avoid abrasive cleaners.  

**Cultural & Aesthetic Relevance:** Balances privacy with light diffusion, stylish appeal.  

**Installation Guidance:** Standard hinges; professional fitting recommended.  

**Use Cases:** Bathrooms, offices, bedrooms.  

**Decor Ideas:** Minimalist interiors, neutral color palette.  

**Story:** Elegant solution for privacy without sacrificing design aesthetics.`
  },
  {
    title: "Mahogany Double Door",
    price: 400000,
    img: door15,
    desc: `**Material & Craftsmanship:** Solid mahogany, double door with ornate panels, premium polish.  

**History & Legacy:** Mahogany has historically symbolized wealth and craftsmanship.  

**Maintenance & Longevity:** Dust, polish, and oil periodically for longevity.  

**Cultural & Aesthetic Relevance:** Grandeur and elegance for luxurious homes.  

**Installation Guidance:** Professional fitting required due to weight.  

**Use Cases:** Main entrances, high-end residential homes.  

**Decor Ideas:** Pair with grand entrance halls, marble flooring.  

**Story:** Makes a bold statement of opulence and tradition.`
  },
  {
    title: "Wrought Iron Door",
    price: 350000,
    img: door16,
    desc: `**Material & Craftsmanship:** Hand-forged wrought iron, decorative patterns, reinforced steel frame.  

**History & Legacy:** Combines European ironwork tradition with Nigerian architectural needs.  

**Maintenance & Longevity:** Rust-proof coating; wipe and polish periodically.  

**Cultural & Aesthetic Relevance:** Adds strength, security, and ornate charm.  

**Installation Guidance:** Professional installation recommended.  

**Use Cases:** Main entrances, gated villas.  

**Decor Ideas:** Combine with classic stone facades and lantern-style lighting.  

**Story:** A secure, timeless entrance that doubles as art.`
  },
  {
    title: "Ebony Luxury Door",
    price: 450000,
    img: door17,
    desc: `**Material & Craftsmanship:** Ebony wood, deep carving, high-gloss lacquer, luxurious finish.  

**History & Legacy:** Ebony is prized for its strength and dark elegance.  

**Maintenance & Longevity:** Gentle dusting; professional polish yearly.  

**Cultural & Aesthetic Relevance:** Statement piece reflecting prestige and sophistication.  

**Installation Guidance:** Expert fitting required due to weight and precision.  

**Use Cases:** Executive offices, luxury homes.  

**Decor Ideas:** Minimalist luxury interiors, gold accents.  

**Story:** Ultimate symbol of craftsmanship and opulent taste.`
  },
  {
    title: "Modern Minimalist Glass Door",
    price: 230000,
    img: door18,
    desc: `**Material & Craftsmanship:** Floor-to-ceiling tempered glass, slim aluminum frame, smooth finish.  

**History & Legacy:** Inspired by modern architecture, popular in contemporary Nigerian lofts.  

**Maintenance & Longevity:** Wipe glass regularly, maintain frame.  

**Cultural & Aesthetic Relevance:** Sleek, transparent, and modern, enhances space perception.  

**Installation Guidance:** Professional installation for safety.  

**Use Cases:** Offices, modern homes, conference rooms.  

**Decor Ideas:** Minimalist furniture, light-colored floors.  

**Story:** Blends transparency, light, and modern sophistication seamlessly.`
  },
  {
    title: "Cherry Wood Panel Door",
    price: 270000,
    img: door19,
    desc: `**Material & Craftsmanship:** Premium cherry wood, paneled design, polished to rich mahogany tones.  

**History & Legacy:** Cherry wood doors are timeless in craftsmanship and durability.  

**Maintenance & Longevity:** Periodic polish; dust regularly.  

**Cultural & Aesthetic Relevance:** Warm and inviting; perfect for family homes.  

**Installation Guidance:** Fits standard frames; professional installation recommended.  

**Use Cases:** Bedrooms, living rooms.  

**Decor Ideas:** Earth-toned interiors, classic furniture.  

**Story:** Combines tradition and warmth for cozy, elegant spaces.`
  },
  {
    title: "Teak Carved Door",
    price: 290000,
    img: door20,
    desc: `**Material & Craftsmanship:** Solid teak wood, hand-carved motifs, protective lacquer.  

**History & Legacy:** Represents artisanal skill and durability.  

**Maintenance & Longevity:** Oil once per year, dust frequently.  

**Cultural & Aesthetic Relevance:** Traditional elegance and resilience.  

**Installation Guidance:** Professional installation recommended.  

**Use Cases:** Living rooms, heritage homes.  

**Decor Ideas:** Combine with cultural décor, warm lighting.  

**Story:** Timeless craftsmanship that enhances the beauty of any space.`
  },  {
    title: "Modern Sliding Door",
    price: 210000,
    img: door21,
    desc: `**Material & Craftsmanship:** High-quality engineered wood with smooth sliding mechanism and soft-close feature.  

**History & Legacy:** Sliding doors have become popular in Nigerian homes for space-saving functionality.  

**Maintenance & Longevity:** Clean tracks regularly, polish wood periodically.  

**Cultural & Aesthetic Relevance:** Modern, sleek, and functional design ideal for compact interiors.  

**Installation Guidance:** Professional installation recommended; includes track system.  

**Use Cases:** Bedrooms, living rooms, closets.  

**Decor Ideas:** Minimalist interiors, neutral tones, subtle lighting.  

**Story:** Combines modern efficiency with elegance, perfect for contemporary homes.`
  },
  {
    title: "Rustic Carved Door",
    price: 280000,
    img: door22,
    desc: `**Material & Craftsmanship:** Solid oak with deep rustic carvings, distressed finish, and protective sealant.  

**History & Legacy:** Reflects traditional craftsmanship, adapted for luxury interiors.  

**Maintenance & Longevity:** Dust and polish regularly; maintain sealant for protection.  

**Cultural & Aesthetic Relevance:** Brings warmth and heritage into modern Nigerian homes.  

**Installation Guidance:** Fits standard frames; professional fitting recommended.  

**Use Cases:** Living rooms, entrance halls.  

**Decor Ideas:** Earthy interiors, wooden furniture, warm lighting.  

**Story:** Showcases artisanal skill while adding rich character to spaces.`
  },
  {
    title: "Contemporary Pivot Door",
    price: 350000,
    img: door23,
    desc: `**Material & Craftsmanship:** Solid hardwood with pivot mechanism, matte lacquer finish for durability.  

**History & Legacy:** Modern pivot doors are statement pieces in upscale Nigerian architecture.  

**Maintenance & Longevity:** Minimal maintenance; polish occasionally.  

**Cultural & Aesthetic Relevance:** Creates bold visual impact and innovative design.  

**Installation Guidance:** Professional installation required; pivot system included.  

**Use Cases:** Main entrances, luxury homes.  

**Decor Ideas:** Minimalist façade, accent lighting.  

**Story:** Makes a dramatic architectural statement while remaining functional.`
  },
  {
    title: "Frosted Glass Interior Door",
    price: 230000,
    img: door24,
    desc: `**Material & Craftsmanship:** Frosted tempered glass with wooden frame, smooth modern finish.  

**History & Legacy:** Designed to allow light while maintaining privacy in Nigerian homes.  

**Maintenance & Longevity:** Clean with soft cloth, avoid abrasives.  

**Cultural & Aesthetic Relevance:** Stylish and contemporary, ideal for offices and interiors.  

**Installation Guidance:** Standard hinges, professional fitting recommended.  

**Use Cases:** Bathrooms, offices, bedrooms.  

**Decor Ideas:** Neutral walls, modern furniture, plants.  

**Story:** Combines functionality, privacy, and contemporary aesthetics seamlessly.`
  },
  {
    title: "Luxury Double Door",
    price: 420000,
    img: door25,
    desc: `**Material & Craftsmanship:** Solid mahogany double doors, intricate paneling, polished finish.  

**History & Legacy:** Represents prestige and grandeur in Nigerian homes.  

**Maintenance & Longevity:** Dust, polish, and maintain annually.  

**Cultural & Aesthetic Relevance:** Enhances luxurious entrances with classic appeal.  

**Installation Guidance:** Professional fitting required due to weight and size.  

**Use Cases:** Main entrances, high-end villas.  

**Decor Ideas:** Grand foyer, marble flooring, statement lighting.  

**Story:** Provides a sophisticated welcome with elegance and craftsmanship.`
  },
  {
    title: "Teak Panel Carved Door",
    price: 310000,
    img: door26,
    desc: `**Material & Craftsmanship:** Premium teak, finely carved panels, natural lacquer finish.  

**History & Legacy:** Inspired by traditional Nigerian carving techniques for durability and beauty.  

**Maintenance & Longevity:** Apply teak oil annually; dust frequently.  

**Cultural & Aesthetic Relevance:** Combines heritage artistry with functional elegance.  

**Installation Guidance:** Fits standard frames; professional fitting recommended.  

**Use Cases:** Living rooms, main entrances.  

**Decor Ideas:** Cultural décor, warm lighting, wooden furniture.  

**Story:** Offers timeless beauty and artisanal craftsmanship for modern homes.`
  },
  {
    title: "Ebony Carved Door",
    price: 470000,
    img: door27,
    desc: `**Material & Craftsmanship:** Ebony wood with deep carvings, polished luxury finish.  

**History & Legacy:** Symbolizes status, strength, and elegance in Nigerian architecture.  

**Maintenance & Longevity:** Gentle cleaning; professional polish yearly.  

**Cultural & Aesthetic Relevance:** Makes a powerful statement in luxury homes.  

**Installation Guidance:** Expert installation recommended.  

**Use Cases:** Executive offices, luxury residences.  

**Decor Ideas:** Minimalist luxury interiors, gold accents.  

**Story:** A statement of prestige and exceptional craftsmanship.`
  },
  {
    title: "Minimalist Wooden Door",
    price: 195000,
    img: door28,
    desc: `**Material & Craftsmanship:** Engineered wood, clean lines, lightweight and durable with smooth lacquer finish.  

**History & Legacy:** Inspired by Scandinavian minimalist design trends.  

**Maintenance & Longevity:** Easy upkeep; wipe clean.  

**Cultural & Aesthetic Relevance:** Complements modern Nigerian interiors with simplicity.  

**Installation Guidance:** Standard fittings compatible; professional installation recommended.  

**Use Cases:** Bedrooms, offices, living rooms.  

**Decor Ideas:** Monochrome palettes, minimalist furniture, indoor plants.  

**Story:** Blends simplicity with elegance for modern, clutter-free interiors.`
  },
  {
    title: "Pivot Glass Door",
    price: 360000,
    img: door29,
    desc: `**Material & Craftsmanship:** Tempered glass panels with pivot system, hardwood frame, smooth matte finish.  

**History & Legacy:** Modern architectural feature for dramatic entrances.  

**Maintenance & Longevity:** Wipe glass regularly; minimal frame maintenance.  

**Cultural & Aesthetic Relevance:** Stylish, transparent, and bold; enhances contemporary aesthetics.  

**Installation Guidance:** Professional installation required.  

**Use Cases:** Main entrances, offices.  

**Decor Ideas:** Minimalist exteriors, statement lighting.  

**Story:** Combines light, transparency, and engineering sophistication in one door.`
  },
  {
    title: "Rustic Sliding Door",
    price: 220000,
    img: door30,
    desc: `**Material & Craftsmanship:** Reclaimed wood, sliding mechanism with soft-close rollers, rustic finish.  

**History & Legacy:** Adaptation of traditional barn doors for modern Nigerian interiors.  

**Maintenance & Longevity:** Keep tracks clean; polish wood occasionally.  

**Cultural & Aesthetic Relevance:** Adds rustic charm and warmth to contemporary spaces.  

**Installation Guidance:** Includes sliding system; professional installation advised.  

**Use Cases:** Bedrooms, pantry doors, living areas.  

**Decor Ideas:** Farmhouse style interiors, warm lighting, natural textiles.  

**Story:** Combines heritage aesthetics with functional modern design.`
  },
  {
    title: "Teak Modern Door",
    price: 300000,
    img: door31,
    desc: `**Material & Craftsmanship:** Solid teak, minimalist paneling, smooth finish with natural grain highlighted.  

**History & Legacy:** Combines durability with modern Nigerian home aesthetics.  

**Maintenance & Longevity:** Annual teak oil application; dust regularly.  

**Cultural & Aesthetic Relevance:** Brings elegance and natural warmth.  

**Installation Guidance:** Standard frame fitting; professional installation recommended.  

**Use Cases:** Living rooms, bedrooms.  

**Decor Ideas:** Neutral interiors, wooden accents, indoor plants.  

**Story:** Functional elegance that complements contemporary home design.`
  },
  {
    title: "Luxury Mahogany Door",
    price: 430000,
    img: door32,
    desc: `**Material & Craftsmanship:** Solid mahogany, rich polish, deep panel detailing.  

**History & Legacy:** Signifies luxury and classical elegance in Nigerian homes.  

**Maintenance & Longevity:** Dust and polish regularly; professional maintenance recommended.  

**Cultural & Aesthetic Relevance:** High-end aesthetic, creates prestigious entrances.  

**Installation Guidance:** Expert fitting required due to weight.  

**Use Cases:** Main entrances, upscale residences.  

**Decor Ideas:** Marble flooring, classic interiors, chandelier lighting.  

**Story:** Exudes sophistication, status, and timeless beauty.`
  },
  {
    title: "Minimalist Frosted Door",
    price: 240000,
    img: door33,
    desc: `**Material & Craftsmanship:** Frosted glass with slim timber frame, minimalist finish.  

**History & Legacy:** Modern design trend for interior privacy without blocking light.  

**Maintenance & Longevity:** Wipe glass; maintain frame periodically.  

**Cultural & Aesthetic Relevance:** Ideal for modern Nigerian offices and homes.  

**Installation Guidance:** Standard hinges; professional fitting recommended.  

**Use Cases:** Bathrooms, offices, bedrooms.  

**Decor Ideas:** Minimalist furniture, neutral tones, subtle greenery.  

**Story:** Balances light, privacy, and contemporary elegance seamlessly.`
  },
  {
    title: "Ebony Modern Door",
    price: 460000,
    img: door34,
    desc: `**Material & Craftsmanship:** Ebony wood, sleek modern panels, high-gloss lacquer.  

**History & Legacy:** Combines luxury and modern design for upscale Nigerian homes.  

**Maintenance & Longevity:** Gentle cleaning; professional polish yearly.  

**Cultural & Aesthetic Relevance:** Statement piece reflecting prestige and sophistication.  

**Installation Guidance:** Expert installation recommended.  

**Use Cases:** Luxury offices, executive homes.  

**Decor Ideas:** Minimalist interiors, metallic accents, mood lighting.  

**Story:** Merges opulence, modernity, and craftsmanship into one door.`
  },
  {
    title: "Rustic Pivot Door",
    price: 330000,
    img: door35,
    desc: `**Material & Craftsmanship:** Solid oak, pivot mechanism, rustic distressed finish.  

**History & Legacy:** Modern adaptation of traditional rustic doors in Nigerian interiors.  

**Maintenance & Longevity:** Clean wood; maintain pivot mechanism annually.  

**Cultural & Aesthetic Relevance:** Combines bold statement with heritage charm.  

**Installation Guidance:** Pivot system included; professional fitting required.  

**Use Cases:** Main entrances, living spaces.  

**Decor Ideas:** Rustic interiors, warm lighting, natural décor.  

**Story:** Statement door with rustic charm and modern engineering.`
  },
  {
    title: "Contemporary Luxury Door",
    price: 500000,
    img: door36,
    desc: `**Material & Craftsmanship:** Solid hardwood, premium polished finish, intricate paneling with luxury design accents.  

**History & Legacy:** Inspired by global luxury door trends for elite Nigerian residences.  

**Maintenance & Longevity:** Minimal maintenance; polish yearly to maintain sheen.  

**Cultural & Aesthetic Relevance:** Symbolizes status, sophistication, and refined taste.  

**Installation Guidance:** Professional installation mandatory due to weight and design.  

**Use Cases:** Main entrances, luxury villas.  

**Decor Ideas:** Grand interiors, premium materials, statement lighting.  

**Story:** A pinnacle of luxury craftsmanship, elegance, and design excellence.`
  },

  // Doors 21–36 continue in the same extended pattern
];



const Home = () => {
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [cart, setCart] = useState([]);
  const [expandedInfo, setExpandedInfo] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);

  const whatsappMsg = "Hello! I am interested in your doors. Please provide more details.";

  const addToCart = (door) => {
    setCart((prev) => [...prev, door]);
    setCartOpen(true);
  };

  const removeFromCart = (idx) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <img src={heroDoor} alt="Luxury Door" className="absolute inset-0 w-full h-full object-cover" />
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
        {doors.map((door, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-900/80 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl border border-gray-700 transition"
          >
            <img
              src={door.img}
              alt={door.title}
              className="w-full h-48 object-cover"
              onClick={() => setSelectedDoor(door)}
            />
            <div className="absolute top-2 left-2 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm shadow-lg">
              ₦{door.price.toLocaleString()}
            </div>
            <div className="p-3 text-center">
              <p className="font-semibold text-white">{door.title}</p>
              <div className="flex justify-center gap-3 mt-2 flex-wrap">
                <button
                  onClick={() => addToCart(door)}
                  className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded-lg flex items-center gap-1 text-white"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button
                  onClick={() => setExpandedInfo(expandedInfo === door ? null : door)}
                  className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg flex items-center gap-1 text-white"
                >
                  <FaInfoCircle /> Info
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Modal */}
      <AnimatePresence>
        {expandedInfo && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedInfo(null)}
          >
            <motion.div
              className="relative max-w-3xl w-full bg-gray-900 rounded-xl p-6 overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={expandedInfo.img}
                alt={expandedInfo.title}
                className="w-full h-72 object-contain rounded-xl mb-4"
              />
              <h2 className="text-3xl font-bold mb-2">{expandedInfo.title}</h2>
              <p className="text-yellow-400 text-xl mb-4">₦{expandedInfo.price.toLocaleString()}</p>
              <p className="text-gray-300 whitespace-pre-line">{expandedInfo.desc}</p>
              <button
                onClick={() => setExpandedInfo(null)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Door Modal */}
      <AnimatePresence>
        {selectedDoor && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDoor(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-gray-900 rounded-xl p-6 overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedDoor.img}
                alt={selectedDoor.title}
                className="w-full h-96 object-contain rounded-xl mb-4"
              />
              <h2 className="text-3xl font-bold mb-2">{selectedDoor.title}</h2>
              <p className="text-yellow-400 text-xl mb-4">₦{selectedDoor.price.toLocaleString()}</p>
              <p className="text-gray-300 whitespace-pre-line">{selectedDoor.desc}</p>
              <button
                onClick={() => addToCart(selectedDoor)}
                className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg flex items-center gap-2"
              >
                <FaShoppingCart /> Add to Cart
              </button>
              <button
                onClick={() => setSelectedDoor(null)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Cart Button */}
<div className="fixed bottom-16 right-6 z-50">
  <button
    onClick={() => setCartOpen(!cartOpen)}
    className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg text-2xl"
    title="Your Cart"
  >
    🛒
    {cart.length > 0 && (
      <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        {cart.length}
      </span>
    )}
  </button>
</div>

{/* Slide Cart Panel */}
<AnimatePresence>
  {cartOpen && (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      exit={{ x: 300 }}
      transition={{ type: "tween" }}
      className="fixed right-0 top-16 h-[calc(100%-5rem)] w-80 bg-gray-900 shadow-2xl z-50 p-4 flex flex-col"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Your Cart ({cart.length})</h2>
        <button
          onClick={() => setCartOpen(false)}
          className="text-red-500 hover:text-red-700 text-xl"
        >
          ×
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty</p>
        ) : (
          cart.map((item, idx) => (
            <div key={idx} className="flex items-center mb-4 border-b border-gray-700 pb-2">
              <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded mr-3" />
              <div className="flex-1">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-yellow-400">₦{item.price.toLocaleString()}</p>
              </div>
              <button
                onClick={() => removeFromCart(idx)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <button
          onClick={() => {
            const message = cart.map(item => `${item.title} - ₦${item.price.toLocaleString()}`).join('%0A');
            const total = cart.reduce((sum, item) => sum + item.price, 0);
            const whatsappUrl = `https://wa.me/2348066882900?text=Hello,%20I%20want%20to%20order:%0A${message}%0ATotal:%20₦${total.toLocaleString()}`;
            window.open(whatsappUrl, '_blank');
          }}
          className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg shadow-lg text-center"
        >
          Checkout via WhatsApp
        </button>
      )}
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
