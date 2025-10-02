import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaTrash,
  FaInfoCircle,
  FaShoppingCart,
} from "react-icons/fa";

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
    title: "Modern Solid Wooden Door with Side Glass Panel",
    price: 150000,
    img: door1,
    desc: `**From ₦280,000 – ₦400,000 (depending on wood type & finish).
**Door Details

Material: Solid natural wood (possibly iroko or mahogany type)

Design: Modern horizontal slat panel with a smooth finish

Color: Light golden brown with natural wood grain visible

Side Panel: Slim vertical glass insert (tinted/dark glass) for added style & light

Frame: Same wood frame for uniform look

Handle/Lock: Stainless steel handle with secure lock system

Best For: Main entrance/front door for homes, apartments, or offices.

✨ The Story of the Modern Wooden Door

Every home has a story, and it begins at the door.

This modern wooden entrance door isn’t just built to protect—it’s designed to welcome. Crafted from premium hardwood, its warm golden tones and natural grain patterns carry the richness of nature right into your living space. The horizontal panel design reflects modern simplicity, while the slim tinted glass side panel brings in just the right touch of light, creating a perfect balance of privacy and openness.

When guests arrive, the polished handle and smooth finish give them their very first impression of your home: elegance, strength, and style. And for you, every time you unlock it, you’re reminded that you’ve chosen more than just a door—you’ve chosen a statement piece that speaks of comfort, security, and timeless beauty.

This is not just an entrance; it’s the beginning of your home’s story.`,
  },
  {
    title:
      "Modern Wooden Flush Door with Horizontal Panels and Frosted Glass Side Lite.",
    price: 250000,
    img: door2,
    desc: `**Estimate ₦250,000 to ₦500,000 as a reasonable range, depending on the wood species, glass quality, and hardware..  

**Door Details**

Material: Solid wood with a smooth polished finish

Design: Modern horizontal panel design

Color: Natural teak / walnut brown finish

Handle: Stainless steel handle with secure lock system

Frame: Matching wooden frame with sleek edges

Side Panel: Frosted glass panel for natural light and privacy

Style: Contemporary, elegant, and durable

Best For: Main entrance, modern homes, luxury apartments, and offices.“Make a lasting first impression with our Premium Solid Wooden Door. Designed with modern horizontal paneling, a natural teak finish, and a stainless steel handle for durability, this door combines strength with elegance. The integrated frosted glass side panel allows natural light into your home while preserving your privacy. Ideal for luxury homes, apartments, and offices, this door is more than just an entrance—it’s a statement of style and security.”`,
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

**Story:** Prioritizes safety without compromising aesthetics.`,
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

**Story:** Combines natural light and craftsmanship for stylish interiors.`,
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

**Story:** Timeless classic that complements both modern and traditional interiors.`,
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

**Story:** A luxurious statement door that welcomes guests with style.`,
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

**Story:** Blends simplicity with modern elegance for clean interior aesthetics.`,
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

**Story:** Sturdy and elegant solution for secure entrances.`,
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

**Story:** A blend of tradition and elegance for timeless interiors.`,
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

**Story:** A luminous, elegant statement for sophisticated homes.`,
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

**Story:** Evokes nostalgia while providing functional elegance for modern homes.`,
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

**Story:** Dramatic entrance that combines engineering precision with aesthetic sophistication.`,
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

**Story:** A door that balances tradition, longevity, and refined aesthetics.`,
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

**Story:** Elegant solution for privacy without sacrificing design aesthetics.`,
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

**Story:** Makes a bold statement of opulence and tradition.`,
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

**Story:** A secure, timeless entrance that doubles as art.`,
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

**Story:** Ultimate symbol of craftsmanship and opulent taste.`,
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

**Story:** Blends transparency, light, and modern sophistication seamlessly.`,
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

**Story:** Combines tradition and warmth for cozy, elegant spaces.`,
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

**Story:** Timeless craftsmanship that enhances the beauty of any space.`,
  },
  {
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

**Story:** Combines modern efficiency with elegance, perfect for contemporary homes.`,
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

**Story:** Showcases artisanal skill while adding rich character to spaces.`,
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

**Story:** Makes a dramatic architectural statement while remaining functional.`,
  },
  {
    title: "Frosted Glass Interior Door",
    price: 230000,
    img: door24,
    desc: `**Material & Craftsmanship:** Frosted tempered glass with wooden frame, smooth modern finish.  

**History & Legacy:** Designed to allow light while maintaining privacy in Nigerian homes.  

**Maintenance & Longevity:** Clean with soft cloth, avoid abrasives.  

**Cultural & Aesthetic Relevance:** Stylish and contemporary, ideal for offices and interiors.  

**Installation Guidance:** Standard hinges; professional fitting recommended.  

**Use Cases:** Bathrooms, offices, bedrooms.  

**Decor Ideas:** Neutral walls, modern furniture, plants.  

**Story:** Combines functionality, privacy, and contemporary aesthetics seamlessly.`,
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

**Story:** Provides a sophisticated welcome with elegance and craftsmanship.`,
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

**Story:** Offers timeless beauty and artisanal craftsmanship for modern homes.`,
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

**Story:** A statement of prestige and exceptional craftsmanship.`,
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

**Story:** Blends simplicity with elegance for modern, clutter-free interiors.`,
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

**Story:** Combines light, transparency, and engineering sophistication in one door.`,
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

**Story:** Combines heritage aesthetics with functional modern design.`,
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

**Story:** Functional elegance that complements contemporary home design.`,
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

**Story:** Exudes sophistication, status, and timeless beauty.`,
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

**Story:** Balances light, privacy, and contemporary elegance seamlessly.`,
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

**Story:** Merges opulence, modernity, and craftsmanship into one door.`,
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

**Story:** Statement door with rustic charm and modern engineering.`,
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

**Story:** A pinnacle of luxury craftsmanship, elegance, and design excellence.`,
  },
];

const Home = () => {
  const [selectedDoor, setSelectedDoor] = useState(null);
  const [cart, setCart] = useState([]);
  const [expandedInfo, setExpandedInfo] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeChild, setActiveChild] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [heroDoor, door1, door2, door3, door4, door5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const whatsappMsg =
    "Hello! I am interested in your doors. Please provide more details.";

  const addToCart = (door) => {
    setCart((prev) => [...prev, door]);
    setCartOpen(true);
  };

  const removeFromCart = (idx) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  const categories = {
    "Internal Doors": [
      {
        title: "View All",
        link: "#internal-doors",
        content:
          "Explore our full range of internal doors, perfect for enhancing any room with style, security, and a variety of designs tailored to your home's unique aesthetic. From classic to modern, find the perfect fit for every space.",
      },
      {
        title: "By Type",
        items: [
          {
            name: "Solid",
            content:
              "Solid doors offer unmatched durability and soundproofing, making them an excellent choice for bedrooms, living areas, and offices where privacy is key. Crafted from premium, sustainably sourced wood, these doors provide a sturdy build that can withstand daily wear while maintaining a timeless appeal. Available in various thicknesses and finishes to suit your decor.",
            image: "solid-door.jpg",
          },
          {
            name: "Glazed",
            content:
              "Glazed doors feature elegant glass panels that add light and sophistication to your space, transforming any room into a brighter, more inviting area. With options for frosted, tinted, or clear glass, these doors come in multiple styles, from traditional to contemporary, and are perfect for hallways or kitchens where light flow is essential.",
            image: "glazed-door.jpg",
          },
          {
            name: "Fire Rated",
            content:
              "Fire-rated doors provide up to 30-60 minutes of fire resistance, ensuring safety with a sleek and functional design. Ideal for homes and commercial buildings, these doors are tested to meet strict safety standards, offering peace of mind with their robust construction and attractive finishes that blend seamlessly with your interior.",
            image: "fire-rated-door.jpg",
          },
          {
            name: "Door Pairs",
            content:
              "Double door pairs create grand entrances or wide openings, crafted with matching finishes for a cohesive look. Perfect for dining rooms or formal living spaces, these doors add a touch of luxury and can be customized with hardware to match your style, enhancing both functionality and aesthetic appeal.",
            image: "door-pairs.jpg",
          },
          {
            name: "Bi-Fold",
            content:
              "Bi-fold doors save space and create a modern look, ideal for small rooms, closets, or areas where maximizing space is a priority. Their innovative folding mechanism allows for easy operation, and with a variety of panel designs, they offer a stylish solution that complements contemporary interiors.",
            image: "bi-fold-door.jpg",
          },
          {
            name: "Pocket/Sliding",
            content:
              "Pocket and sliding doors offer a space-saving solution with a smooth glide mechanism, perfect for tight spaces or open-plan layouts. These doors slide into a wall pocket or along a track, providing a seamless transition between rooms while adding a modern, minimalist touch to your home.",
            image: "pocket-sliding-door.jpg",
          },
          {
            name: "Room Dividing",
            content:
              "Room dividing doors add flexibility to open-plan spaces with stylish partitioning options, allowing you to redefine your living areas as needed. Available in folding or sliding configurations, these doors offer both practicality and elegance, making them a versatile choice for dynamic home designs.",
            image: "room-dividing-door.jpg",
          },
          {
            name: "Made to Measure",
            content:
              "Custom-made doors tailored to your exact specifications for a perfect fit, ensuring no gaps or awkward alignments. Whether you need a unique size or a bespoke design, our skilled craftsmen work with you to create a door that matches your vision, from material selection to final finishing.",
            image: "made-to-measure-door.jpg",
          },
        ],
      },
      {
        title: "By Material",
        items: [
          {
            name: "White",
            content:
              "White doors bring a clean, bright aesthetic, easy to paint or keep natural, making them a versatile choice for any room. Their light color reflects light beautifully, enhancing the sense of space, and they can be paired with bold or neutral decor for a fresh, modern look.",
            image: "white-door.jpg",
          },
          {
            name: "Oak",
            content:
              "Oak doors offer rich grain and strength, a timeless choice for elegance that adds warmth and character to any home. Known for their durability and natural beauty, these doors are available in various stains to highlight the unique grain patterns, making each one a statement piece.",
            image: "oak-door.jpg",
          },
          {
            name: "Hemlock",
            content:
              "Hemlock doors provide a light, versatile wood option with a smooth finish, ideal for painting or light staining. This lightweight yet strong material is perfect for custom projects, offering a subtle elegance that adapts to both traditional and modern interiors.",
            image: "hemlock-door.jpg",
          },
          {
            name: "Pine",
            content:
              "Pine doors are affordable and lightweight, perfect for a rustic look that brings a cozy, natural feel to your space. Easy to work with and available in knotty or clear grades, these doors are a budget-friendly option for adding charm to cabins or country-style homes.",
            image: "pine-door.jpg",
          },
          {
            name: "Walnut",
            content:
              "Walnut doors feature deep, dark tones for a luxurious feel, making them a premium choice for upscale interiors. The rich color and intricate grain patterns of walnut add depth and sophistication, perfect for formal living areas or executive offices.",
            image: "walnut-door.jpg",
          },
          {
            name: "Black",
            content:
              "Black doors add a bold, modern contrast to any interior, creating a striking focal point in your design scheme. Their sleek appearance pairs well with minimalist or industrial styles, offering a dramatic yet elegant touch to hallways or entryways.",
            image: "black-door.jpg",
          },
          {
            name: "Grey",
            content:
              "Grey doors offer a contemporary, neutral tone for versatile styling, blending seamlessly with a wide range of decor. Available in light to dark shades, these doors provide a sophisticated backdrop that can be accented with colorful hardware or trim.",
            image: "grey-door.jpg",
          },
          {
            name: "Ash",
            content:
              "Ash doors provide a light, strong wood with a subtle grain pattern, offering a refined look for classic interiors. Known for its flexibility and strength, ash is an excellent choice for carved designs or painted finishes that enhance its natural beauty.",
            image: "ash-door.jpg",
          },
          {
            name: "Beech",
            content:
              "Beech doors are durable with a warm, light finish for classic interiors, providing a soft yet resilient option. Their even grain and warm hue make them ideal for traditional settings, and they can be finished to match any color scheme.",
            image: "beech-door.jpg",
          },
        ],
      },
      {
        title: "By Style",
        items: [
          {
            name: "1930s/1960s",
            content:
              "Retro-styled doors with vintage charm, inspired by mid-century designs that evoke nostalgia. Featuring curved lines or bold colors, these doors are perfect for themed rooms or homes aiming for a historical aesthetic with modern functionality.",
            image: "1930s-1960s-door.jpg",
          },
          {
            name: "Barn/Cottage",
            content:
              "Rustic barn or cottage doors with a weathered, countryside appeal, ideal for rural or farmhouse-style homes. Often made with reclaimed wood and sliding hardware, they bring an authentic, rustic charm to both interiors and exteriors.",
            image: "barn-cottage-door.jpg",
          },
          {
            name: "Flush",
            content:
              "Flush doors offer a smooth, minimalist look for modern homes, providing a clean slate for creative decor. Their flat surface is perfect for painting or wallpapering, making them a versatile choice for contemporary or Scandinavian designs.",
            image: "flush-door.jpg",
          },
          {
            name: "Industrial/Urban",
            content:
              "Industrial doors with metal accents for an urban loft vibe, featuring raw materials like steel and exposed hinges. These doors are ideal for open-plan lofts or creative spaces, blending functionality with a gritty, modern edge.",
            image: "industrial-urban-door.jpg",
          },
          {
            name: "Custom",
            content:
              "Custom styles designed to match your unique vision and decor, offering endless possibilities for personalization. From intricate carvings to unique shapes, our custom doors are crafted to reflect your individuality and enhance your space.",
            image: "custom-door.jpg",
          },
        ],
      },
      {
        title: "By Finish",
        items: [
          {
            name: "Ready To Finish",
            content:
              "Unfinished doors ready for your custom paint or stain, giving you full control over the final look. Ideal for DIY enthusiasts, these doors can be transformed with any color or technique, making them a creative and cost-effective choice.",
            image: "ready-to-finish-door.jpg",
          },
          {
            name: "Pre-Finished",
            content:
              "Pre-finished doors with a factory-applied, durable coating that saves time and ensures a professional result. Available in multiple colors and finishes, these doors are ready to install and maintain their look with minimal effort.",
            image: "pre-finished-door.jpg",
          },
        ],
      },
      {
        title: "By Brand",
        items: [
          {
            name: "LPD",
            content:
              "LPD offers high-quality, innovative door designs for all tastes, combining modern technology with classic craftsmanship. Their extensive range includes options for every room, ensuring durability and style in every piece.",
            image: "lpd-door.jpg",
          },
          {
            name: "PM Mendes",
            content:
              "PM Mendes provides luxurious, handcrafted door solutions, perfect for those seeking exclusivity. Each door is meticulously made with premium materials, offering a bespoke experience for high-end interiors.",
            image: "pm-mendes-door.jpg",
          },
          {
            name: "Deanta",
            content:
              "Deanta doors combine style and durability with European craftsmanship, known for their precision and elegance. Ideal for sophisticated homes, these doors feature advanced finishing techniques for a flawless appearance.",
            image: "deanta-door.jpg",
          },
          {
            name: "Hemlock&Co",
            content:
              "Hemlock&Co specializes in lightweight, sustainable door options, focusing on eco-friendly materials. Their doors are perfect for environmentally conscious homeowners, offering strength and a natural finish.",
            image: "hemlock-co-door.jpg",
          },
          {
            name: "Pure Doors",
            content:
              "Pure Doors delivers affordable elegance with a wide range, catering to diverse budgets and styles. Their collection includes both traditional and modern designs, ensuring quality without compromising on price.",
            image: "pure-doors-door.jpg",
          },
          {
            name: "JB Kind",
            content:
              "JB Kind offers premium doors with a focus on quality and design, appealing to those who value craftsmanship. Known for their attention to detail, these doors elevate any space with superior materials and finishes.",
            image: "jb-kind-door.jpg",
          },
        ],
      },
    ],
    "Fire Doors": [
      {
        title: "View All",
        link: "#fire-doors",
        content:
          "Discover our full selection of fire-resistant doors for enhanced safety, designed to protect your home or business with reliable performance and stylish options.",
      },
      {
        title: "By Type",
        items: [
          {
            name: "FD30",
            content:
              "FD30 doors provide 30 minutes of fire resistance, ideal for home safety, offering a balance of protection and aesthetic appeal. These doors are tested to withstand flames and smoke, featuring a variety of finishes to match your decor while ensuring compliance with safety regulations.",
            image: "fd30-door.jpg",
          },
          {
            name: "FD60",
            content:
              "FD60 doors offer 60 minutes of fire resistance for commercial use, providing extended protection in high-risk areas. Built with reinforced materials, these doors are perfect for offices or public buildings, combining safety with a professional look.",
            image: "fd60-door.jpg",
          },
        ],
      },
      {
        title: "By Material",
        items: [
          {
            name: "White",
            content:
              "White fire doors blend safety with a clean, bright look, enhancing visibility and space in emergency situations. Their light color is easy to maintain and pairs well with modern interiors, offering a safe yet stylish solution.",
            image: "white-fire-door.jpg",
          },
          {
            name: "Oak",
            content:
              "Oak fire doors combine strength and elegance with fire protection, featuring natural grain that adds warmth. These doors are treated with fire-retardant coatings, making them both beautiful and a critical safety feature.",
            image: "oak-fire-door.jpg",
          },
        ],
      },
      {
        title: "By Finish",
        items: [
          {
            name: "Pre-Finished",
            content:
              "Pre-finished fire doors with a ready-to-install coating that ensures immediate use and long-lasting durability. Available in multiple shades, these doors save installation time while meeting stringent fire safety standards.",
            image: "pre-finished-fire-door.jpg",
          },
          {
            name: "Unfinished",
            content:
              "Unfinished fire doors for custom finishing options, allowing you to match your safety needs with your design preferences. Ideal for bespoke projects, these doors can be painted or stained to fit any setting.",
            image: "unfinished-fire-door.jpg",
          },
        ],
      },
    ],
    "External Doors": [
      {
        title: "View All",
        link: "#external-doors",
        content:
          "Browse our range of external doors for secure, stylish entrances that withstand the elements while enhancing your home's curb appeal with diverse designs.",
      },
      {
        title: "By Type",
        items: [
          {
            name: "Front Doors",
            content:
              "Front doors designed to impress with security and weather resistance, serving as the welcoming face of your home. Available in solid wood or composite materials, they feature advanced locking systems and weatherproof seals for year-round protection.",
            image: "front-door.jpg",
          },
          {
            name: "Back Doors",
            content:
              "Back doors for practical access with durable materials, offering a secure and functional entry point. Built to resist rain and wind, these doors come with options for glass panels or full solid designs for privacy.",
            image: "back-door.jpg",
          },
        ],
      },
      {
        title: "By Material",
        items: [
          {
            name: "Oak",
            content:
              "Oak external doors offer natural beauty and robust protection, with a rich grain that stands up to outdoor conditions. Treated with weather-resistant finishes, they provide a classic look with long-term durability.",
            image: "oak-external-door.jpg",
          },
          {
            name: "UPVC",
            content:
              "UPVC doors provide low-maintenance and excellent insulation, perfect for energy-efficient homes. Their tough plastic composition resists fading and warping, making them a practical choice for busy entrances.",
            image: "upvc-door.jpg",
          },
        ],
      },
      {
        title: "By Finish",
        items: [
          {
            name: "Stained",
            content:
              "Stained external doors highlight wood grain with a protective finish, enhancing natural beauty while guarding against moisture. Available in multiple shades, they offer a warm, inviting entrance with lasting protection.",
            image: "stained-door.jpg",
          },
          {
            name: "Painted",
            content:
              "Painted doors in various colors for a personalized exterior, allowing you to match your home’s facade. These doors are coated with weather-resistant paint, ensuring vibrant color and protection over time.",
            image: "painted-door.jpg",
          },
        ],
      },
    ],
    "Frames & Mouldings": [
      {
        title: "View All",
        link: "#frames-mouldings",
        content:
          "Check out our frames and mouldings to complement your doors, offering structural support and decorative accents for a polished look.",
      },
      {
        title: "By Type",
        items: [
          {
            name: "Door Frames",
            content:
              "Door frames crafted to fit perfectly with any door style, providing a sturdy foundation and seamless alignment. Available in adjustable sizes, these frames enhance stability and can be finished to match your doors.",
            image: "door-frame.jpg",
          },
          {
            name: "Architraves",
            content:
              "Architraves add a decorative trim around your door frames, elevating the overall aesthetic with elegant detailing. Offered in various profiles, they conceal gaps and add a finishing touch to your interior design.",
            image: "architrave.jpg",
          },
        ],
      },
      {
        title: "By Material",
        items: [
          {
            name: "MDF",
            content:
              "MDF frames and mouldings offer a smooth, paintable surface, ideal for creating a flawless finish. This versatile material is resistant to warping and perfect for painting in bold or subtle colors.",
            image: "mdf-frame.jpg",
          },
          {
            name: "Pine",
            content:
              "Pine frames provide a natural wood look with easy customization, offering a warm tone that can be stained or painted. Their lightweight nature makes them easy to install while adding rustic charm.",
            image: "pine-frame.jpg",
          },
        ],
      },
      {
        title: "By Finish",
        items: [
          {
            name: "Primed",
            content:
              "Primed frames ready for your chosen paint color, providing a smooth base that ensures even coverage. This pre-treatment saves time and guarantees a professional result on your installation.",
            image: "primed-frame.jpg",
          },
          {
            name: "Raw",
            content:
              "Raw frames for a natural or custom finish, allowing you to apply your preferred stain or paint. Ideal for DIY projects, these frames offer flexibility to match any design vision.",
            image: "raw-frame.jpg",
          },
        ],
      },
    ],
    Accessories: [
      {
        title: "View All",
        link: "#accessories",
        content:
          "Enhance your doors with our range of accessories, designed to improve functionality and style with high-quality components.",
      },
      {
        title: "By Type",
        items: [
          {
            name: "Handles",
            content:
              "Ergonomic door handles in various styles and finishes, designed for comfort and durability. From classic knobs to modern levers, these handles are crafted to complement your door’s design and ensure easy operation.",
            image: "door-handle.jpg",
          },
          {
            name: "Locks",
            content:
              "High-security locks to ensure your doors are safe, featuring advanced mechanisms for maximum protection. Available in smart or traditional options, these locks provide peace of mind with reliable performance.",
            image: "door-lock.jpg",
          },
        ],
      },
      {
        title: "By Material",
        items: [
          {
            name: "Brass",
            content:
              "Brass accessories for a classic, durable shine, adding a touch of luxury to your doors. Resistant to tarnish, these pieces develop a beautiful patina over time, enhancing their antique appeal.",
            image: "brass-accessory.jpg",
          },
          {
            name: "Stainless Steel",
            content:
              "Stainless steel for a modern, corrosion-resistant option, perfect for high-traffic areas. Its sleek, shiny surface resists rust and wear, making it an ideal choice for both indoor and outdoor use.",
            image: "stainless-steel-accessory.jpg",
          },
        ],
      },
      {
        title: "By Finish",
        items: [
          {
            name: "Polished",
            content:
              "Polished accessories for a sleek, reflective look, adding a mirror-like shine to your doors. This finish enhances modern designs and is easy to clean, maintaining its luster over time.",
            image: "polished-accessory.jpg",
          },
          {
            name: "Matt",
            content:
              "Matt finishes for a subtle, non-reflective style, offering a understated elegance. This finish hides fingerprints and scratches, making it practical for busy households.",
            image: "matt-accessory.jpg",
          },
        ],
      },
    ],
    Deals: [
      {
        title: "View All",
        link: "#deals",
        content:
          "Grab our best deals on doors and accessories, offering significant savings on premium products for a limited time.",
      },
      {
        title: "By Category",
        items: [
          {
            name: "Clearance",
            content:
              "Clearance items at reduced prices, limited stock, perfect for finding unique bargains. These doors and accessories are discounted to clear inventory, offering great value for quick purchases.",
            image: "clearance-deal.jpg",
          },
          {
            name: "Special Offers",
            content:
              "Special offers on selected doors and frames, providing exclusive discounts on top-quality items. These limited-time deals include bundle options to save even more on your home improvement projects.",
            image: "special-offer-deal.jpg",
          },
        ],
      },
      {
        title: "By Type",
        items: [
          {
            name: "Internal",
            content:
              "Discounted internal doors for quick home upgrades, featuring a variety of styles at unbeatable prices. Ideal for refreshing living spaces, these deals include free delivery on select items.",
            image: "internal-deal.jpg",
          },
          {
            name: "External",
            content:
              "External door deals for secure entrances, offering robust designs at reduced rates. These doors come with weatherproofing and security features, making them a smart investment for your home.",
            image: "external-deal.jpg",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide]}
            alt="Hero Slide"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400 drop-shadow-lg"
          >
            Welcome to JustWood Doors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-sm sm:text-md md:text-xl text-gray-800 max-w-3xl mx-auto mt-4"
          >
            Premium Nigerian-made doors, crafted strong and stylish for your
            home and office.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#doors"
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-gradient-to-r from-yellow-500 to-green-500 text-black font-bold hover:scale-105 transform transition"
            >
              Explore Doors
            </a>
            <a
              href={`https://wa.me/+2348066882900?text=${encodeURIComponent(
                whatsappMsg
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition text-white font-semibold"
            >
              <FaWhatsapp /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Navigation Dropdown */}
      <div className="bg-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:space-x-4 md:space-x-8 text-base sm:text-lg gap-2 sm:gap-0">
          {Object.keys(categories).map((category) => (
            <div key={category} className="relative w-full sm:w-auto">
              <button
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category ? null : category
                  )
                }
                className="w-full sm:w-auto text-black hover:text-yellow-400 bg-gray-300 px-4 py-2 rounded-t-lg shadow-md hover:bg-gray-400 transition duration-300"
              >
                {category}
              </button>
              {activeCategory === category && (
                <div className="absolute left-0 sm:relative w-full bg-gradient-to-br from-gray-200 to-gray-300 p-4 rounded-b-lg shadow-lg mt-0 z-10">
                  {categories[category].map((section, index) => (
                    <div key={index} className="mb-4">
                      <p className="text-black font-bold mb-1 bg-gray-100 px-2 py-1 rounded">
                        {section.title}
                      </p>
                      {section.link ? (
                        <a
                          href={section.link}
                          className="text-gray-700 hover:text-black block bg-gray-100 px-2 py-1 rounded"
                        >
                          {section.content || section.title}
                        </a>
                      ) : (
                        section.items.map((item, i) => (
                          <div key={i}>
                            <p
                              onClick={() =>
                                setActiveChild(
                                  activeChild === item.name ? null : item.name
                                )
                              }
                              className="text-gray-800 hover:text-yellow-300 cursor-pointer bg-gray-100 px-2 py-1 rounded mb-2 font-semibold"
                            >
                              {item.name}
                            </p>
                            {activeChild === item.name && (
                              <div className="ml-4 p-2 bg-gray-200 rounded">
                                <p className="text-gray-700">{item.content}</p>
                                {item.image && (
                                  <div className="mt-2">
                                    <p>Image: {item.image}</p>
                                    Would you like to generate this image?
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Doors Grid with Adjusted Margin */}
      <div
        id="doors"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 mt-6 sm:mt-8"
      >
        {doors.map((door, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl border border-gray-300 transition"
          >
            <img
              src={door.img}
              alt={door.title}
              className="w-full h-40 sm:h-48 object-cover"
              onClick={() => setSelectedDoor(door)}
            />
            <div className="absolute top-2 left-2 bg-yellow-400 text-black font-bold px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm shadow-lg">
              ₦{door.price.toLocaleString()}
            </div>
            <div className="p-2 sm:p-3 text-center">
              <p className="font-semibold text-black text-sm sm:text-base">{door.title}</p>
              <div className="flex justify-center gap-2 sm:gap-3 mt-2 flex-wrap">
                <button
                  onClick={() => addToCart(door)}
                  className="bg-green-600 hover:bg-green-700 px-2 sm:px-3 py-1 rounded-lg flex items-center gap-1 text-white text-xs sm:text-sm"
                >
                  <FaShoppingCart /> Add to Cart
                </button>
                <button
                  onClick={() =>
                    setExpandedInfo(expandedInfo === door ? null : door)
                  }
                  className="bg-blue-600 hover:bg-blue-700 px-2 sm:px-3 py-1 rounded-lg flex items-center gap-1 text-white text-xs sm:text-sm"
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
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedInfo(null)}
          >
            <motion.div
              className="relative w-full max-w-md sm:max-w-3xl bg-gray-100 rounded-xl p-4 sm:p-6 overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={expandedInfo.img}
                alt={expandedInfo.title}
                className="w-full h-60 sm:h-72 object-contain rounded-xl mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">
                {expandedInfo.title}
              </h2>
              <p className="text-yellow-400 text-lg sm:text-xl mb-4">
                ₦{expandedInfo.price.toLocaleString()}
              </p>
              <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base">
                {expandedInfo.desc}
              </p>
              <button
                onClick={() => setExpandedInfo(null)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-sm sm:text-base"
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
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDoor(null)}
          >
            <motion.div
              className="relative w-full max-w-lg sm:max-w-4xl bg-gray-100 rounded-xl p-4 sm:p-6 overflow-y-auto max-h-[90vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedDoor.img}
                alt={selectedDoor.title}
                className="w-full h-80 sm:h-96 object-contain rounded-xl mb-4"
              />
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">
                {selectedDoor.title}
              </h2>
              <p className="text-yellow-400 text-lg sm:text-xl mb-4">
                ₦{selectedDoor.price.toLocaleString()}
              </p>
              <p className="text-gray-700 whitespace-pre-line text-sm sm:text-base">
                {selectedDoor.desc}
              </p>
              <button
                onClick={() => addToCart(selectedDoor)}
                className="mt-4 bg-green-600 hover:bg-green-700 px-3 sm:px-4 py-1 sm:py-2 rounded-lg flex items-center gap-2 text-white text-sm sm:text-base"
              >
                <FaShoppingCart /> Add to Cart
              </button>
              <button
                onClick={() => setSelectedDoor(null)}
                className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-lg font-semibold text-sm sm:text-base"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Cart Button */}
      <div className="fixed bottom-20 sm:bottom-16 right-4 sm:right-6 z-50">
        <button
          onClick={() => setCartOpen(!cartOpen)}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg text-xl sm:text-2xl"
          title="Your Cart"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
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
            className="fixed right-0 top-16 h-[calc(100%-5rem)] w-full sm:w-80 bg-gray-100 shadow-2xl z-50 p-4 flex flex-col"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black">
                Your Cart ({cart.length})
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="text-red-500 hover:text-red-700 text-lg sm:text-xl"
              >
                ×
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-600 text-sm sm:text-base">Your cart is empty</p>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center mb-4 border-b border-gray-300 pb-2"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded mr-3"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-black text-sm sm:text-base">{item.title}</p>
                      <p className="text-yellow-400 text-xs sm:text-sm">
                        ₦{item.price.toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(idx)}
                      className="text-red-500 hover:text-red-700 text-sm sm:text-base"
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
                  const message = cart
                    .map(
                      (item) =>
                        `${item.title} - ₦${item.price.toLocaleString()}`
                    )
                    .join("%0A");
                  const total = cart.reduce((sum, item) => sum + item.price, 0);
                  const whatsappUrl = `https://wa.me/2348066882900?text=Hello,%20I%20want%20to%20order:%0A${message}%0ATotal:%20₦${total.toLocaleString()}`;
                  window.open(whatsappUrl, "_blank");
                }}
                className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 sm:py-3 rounded-lg shadow-lg text-center text-sm sm:text-base"
              >
                Checkout via WhatsApp
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/+2348066882900?text=${encodeURIComponent(
          whatsappMsg
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg z-50 flex items-center justify-center animate-pulse"
      >
        <FaWhatsapp size={24} className="sm:size-28" />
      </a>
    </div>
  );
};

export default Home;