import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CategorySidebar from "./components/CategorySidebar";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import ScrollToTop from "./components/ScrollToTop";
// Product Images
import img_1 from "./assets/images/products/1.webp";
import img_2 from "./assets/images/products/2.webp";
import img_3 from "./assets/images/products/3.webp";
import img_4 from "./assets/images/products/4.webp";
import img_5 from "./assets/images/products/5.webp";
import img_6 from "./assets/images/products/6.webp";
import img_7 from "./assets/images/products/7.webp";
import img_8 from "./assets/images/products/8.webp";
import img_9 from "./assets/images/products/9.webp";
import img_10 from "./assets/images/products/10.webp";
import img_11 from "./assets/images/products/11.webp";
import img_12 from "./assets/images/products/12.webp";
import img_13 from "./assets/images/products/13.webp";
import img_14 from "./assets/images/products/14.webp";
import img_15 from "./assets/images/products/15.webp";
import img_16 from "./assets/images/products/16.webp";
import img_17 from "./assets/images/products/17.webp";
import img_18 from "./assets/images/products/18.webp";
import img_19 from "./assets/images/products/19.webp";
import img_20 from "./assets/images/products/20.webp";
import img_21 from "./assets/images/products/21.webp";
import img_22 from "./assets/images/products/22.webp";
import img_23 from "./assets/images/products/23.webp";
import img_24 from "./assets/images/products/24.webp";
import img_25 from "./assets/images/products/25.webp";
import img_26 from "./assets/images/products/26.webp";
import img_27 from "./assets/images/products/27.webp";
import img_28 from "./assets/images/products/28.webp";
import img_29 from "./assets/images/products/29.webp";
import img_30 from "./assets/images/products/30.webp";
import img_31 from "./assets/images/products/31.webp";
import img_32 from "./assets/images/products/32.webp";
import img_33 from "./assets/images/products/33.webp";
import img_34 from "./assets/images/products/34.webp";
import img_35 from "./assets/images/products/35.webp";
import img_36 from "./assets/images/products/36.webp";
import img_37 from "./assets/images/products/37.webp";
import img_38 from "./assets/images/products/38.webp";
import img_39 from "./assets/images/products/39.webp";
import img_40 from "./assets/images/products/40.webp";
import img_41 from "./assets/images/products/41.webp";
import img_42 from "./assets/images/products/42.webp";
import img_43 from "./assets/images/products/43.webp";
import img_44 from "./assets/images/products/44.webp";
import img_45 from "./assets/images/products/45.webp";
//
const PRODUCTS = [
  {
    id: 1,
    title: "OnePlus Nord Buds 3r",
    category: "Tech",
    tag: "Best Value",
    image: img_1,
    affiliateUrl: "https://amzn.to/4uBUDJm",
    description:
      "Exceptional sound quality for the price. 54hr battery life, deep bass, and IPX5 water resistance make these a top pick for students and daily commuters.",
    features: ["54hr battery life", "47ms Low Latency", "3D Spatial Audio", "Fast charging (10 min = 8hrs)"],
    featured: true,
  },
  {
    id: 2,
    title: "Zilch On Cloud 9 Face Wash",
    category: "Beauty & Personal Care",
    tag: "Editor's Pick",
    image: img_2,
    affiliateUrl: "https://amzn.to/3RGM818",
    description:
      "A gentle yet effective daily face wash. Sulphate-free formula that cleanses without stripping moisture. Perfect for oily to combination skin.",
    features: ["Sulphate-free formula", "For oily/combo skin", "pH balanced", "Dermatologist tested"],
    featured: false,
  },
  {
    id: 3,
    title: "Zebronics NS1000 Laptop Stand",
    category: "Tech",
    tag: "Top Pick",
    image: img_3,
    affiliateUrl: "https://amzn.to/49PjLEr",
    description:
      "An incredibly affordable ergonomic laptop stand. Reduces neck strain during long work sessions. Foldable and portable — fits any bag.",
    features: ["Foldable & portable", "6 height levels", "Anti-slip pads", "Up to 15.6\" laptops"],
    featured: false,
  },
  {
    id: 4,
    title: "Presto! Garbage Bags (Pack of 3)",
    category: "Home & Kitchen",
    tag: null,
    image: img_4,
    affiliateUrl: "https://amzn.to/4wVrqe7",
    description:
      "Strong, odor-control garbage bags. Thick enough to hold heavy waste without tearing. A practical home essential you'll reorder monthly.",
    features: ["Odor control technology", "Tear-resistant", "3 rolls per pack", "Medium & large sizes"],
    featured: false,
  },
  {
    id: 5,
    title: "American Tourister Valex Backpack",
    category: "Travel & Bags",
    tag: "Best Deal",
    image: img_5,
    affiliateUrl: "https://amzn.to/4dRuIGn",
    description:
      "Solid daily backpack from a trusted brand. Laptop compartment fits up to 15.6\", with organized pockets and comfortable padded straps.",
    features: ["15.6\" laptop compartment", "Padded back support", "Multiple organizer pockets", "Water-resistant base"],
    featured: true,
  },
  {
    id: 6,
    title: "Adhesive Soap Holder for Bathroom",
    category: "Home Organization",
    tag: null,
    image: img_6,
    affiliateUrl: "https://amzn.to/4wPhh2u",
    description:
      "No-drill wall mount soap dish with strong adhesive backing. Keeps your bathroom organized without damaging tiles. Holds up to 1kg.",
    features: ["No drilling required", "Holds up to 1kg", "Rust-proof stainless", "Easy to clean"],
    featured: false,
  },
  {
    id: 7,
    title: "Simple Kind to Skin Refreshing Facial Wash",
    category: "Beauty & Personal Care",
    tag: null,
    image: img_7,
    affiliateUrl: "https://amzn.to/4dQDDt2",
    description:
      "A gentle, soap-free facial cleanser that removes impurities while maintaining your skin's natural moisture. Enriched with Vitamin E and Pro-Vitamin B5 for soft, refreshed and hydrated skin.",
    features: [
      "100% soap-free cleanser",
      "Suitable for sensitive skin",
      "Vitamin E & Pro-Vitamin B5",
      "Dermatologically tested"
    ],
    featured: false,
  },
  {
    id: 8,
    title: "Zebronics 200HB USB 3.0 4 Port Hub",
    category: "Tech",
    tag: null,
    image: img_8,
    affiliateUrl: "https://amzn.to/4dTEfNa",
    description:
      "Expand your device connectivity with this compact 4-port USB hub. Features one USB 3.0 port and three USB 2.0 ports for fast data transfer and seamless plug-and-play usage.",
    features: [
      "4 USB ports (1x USB 3.0, 3x USB 2.0)",
      "Data transfer speeds up to 5Gbps",
      "Premium aluminum body",
      "Lightweight plug-and-play design"
    ],
    featured: false,
  },
  {
    id: 9,
    title: "Errol 2835 LED Strip Lights (3 Meter)",
    category: "Home Decor",
    tag: null,
    image: img_9,
    affiliateUrl: "https://amzn.to/4fPWmGq",
    description:
      "Bright white LED strip light with 120 LEDs per meter, ideal for ceilings, TV backlighting, festive decorations, and home ambiance.",
    features: [
      "120 LEDs per meter",
      "Flexible & waterproof design",
      "Up to 50,000 hours lifespan",
      "Low power consumption",
      "Suitable for indoor & outdoor decor"
    ],
    featured: false,
  },
  {
    id: 10,
    title: "Arctic Fox Pureview Transparent Wireless Mouse",
    category: "Tech",
    tag: null,
    image: img_10,
    affiliateUrl: "https://amzn.to/3SdtZbm",
    description:
      "Stylish transparent wireless mouse with triple-mode connectivity, rechargeable battery, adjustable DPI, and ergonomic design for work and everyday use.",
    features: [
      "Triple-mode connectivity (BT5.1 + BT5.1 + 2.4GHz)",
      "Built-in 400mAh rechargeable battery",
      "Real-time battery level display",
      "4 adjustable DPI levels (800-2400)",
      "Ergonomic lightweight design"
    ],
    featured: true,
  },
  {
    id: 11,
    title: "Ambrane Unbreakable 3A Fast Charging Type-C Cable (1.5m)",
    category: "Tech",
    tag: null,
    image: img_11,
    affiliateUrl: "https://amzn.to/43xoRRW",
    description:
      "Durable braided Type-C cable with 3A fast charging, 480Mbps data transfer, and wide compatibility for smartphones, tablets, and more.",
    features: [
      "3A fast charging support",
      "480Mbps data transfer speed",
      "Quick Charge 2.0 & 3.0 compatible",
      "Ultra-durable braided design",
      "1.5m convenient cable length"
    ],
    featured: false,
  },
  {
    id: 12,
    title: "2 Tier Wooden Tabletop Book Rack Desk Organizer Shelf",
    category: "Home Organization",
    tag: null,
    image: img_12,
    affiliateUrl: "https://amzn.to/3S6ZP9J",
    description:
      "Modern Z-shaped tabletop organizer with two spacious tiers, perfect for books, office supplies, décor items, and everyday essentials.",
    features: [
      "Modern Z-shaped design",
      "Space-saving 2-tier storage",
      "Durable engineered wood construction",
      "Multipurpose home & office use",
      "Easy assembly and maintenance"
    ],
    featured: false,
  },
  {
    id: 13,
    title: "DIVIJA STORE Foldable Multipurpose Laptop Table",
    category: "Stationery & Office",
    tag: null,
    image: img_13,
    affiliateUrl: "https://amzn.to/4uCRklb",
    description:
      "Portable foldable laptop table with cup holder, ergonomic design, and non-slip legs, perfect for work, study, breakfast, or entertainment.",
    features: [
      "Foldable and portable design",
      "Built-in cup holder",
      "Ergonomic tabletop with rounded edges",
      "Non-slip legs for added stability",
      "Multipurpose use for bed, sofa, or desk"
    ],
    featured: false,
  },
  {
    id: 14,
    title: "Portronics Clamp M4 Car Phone Holder Stand",
    category: "Tech",
    tag: null,
    image: img_14,
    affiliateUrl: "https://amzn.to/4ulFGdH",
    description:
      "Secure car phone holder with powerful suction cup, strong grip, shockproof build, and adjustable viewing angle for safer driving and hands-free navigation.",
    features: [
      "Powerful suction cup for stable mounting",
      "Strong and secure phone grip",
      "Easy single-hand operation",
      "Durable shockproof ABS construction",
      "180° adjustable viewing angle",
      "Compatible with 5.4 to 6.7 inch smartphones"
    ],
    featured: false,
  },
  {
    id: 15,
    title: "Olivia Depishine Instant Radiance Face Wash",
    category: "Beauty & Personal Care",
    tag: null,
    image: img_15,
    affiliateUrl: "https://amzn.to/4uTYmST",
    description:
      "Brightening face wash enriched with Kojic Acid, Vitamin C, and Vitamin E that deeply cleanses pores, removes dirt and excess oil, and helps reveal smoother, more radiant-looking skin.",
    features: [
      "Kojic Acid helps reduce dark spots and pigmentation",
      "Deeply cleanses pores and removes impurities",
      "Effectively removes excess oil and makeup residue",
      "Vitamin C supports brighter and more even skin tone",
      "Vitamin E helps nourish and protect the skin",
      "Suitable for all skin types for daily use"
    ],
    featured: false,
  },
  {
    id: 16,
    title: "Dyazo Water Resistant Laptop Sleeve with Handle",
    category: "Tech",
    tag: null,
    image: img_16,
    affiliateUrl: "https://amzn.to/4vEmJUF",
    description:
      "Water-resistant laptop sleeve with soft velvet lining, multiple accessory pockets, and a convenient top handle. Designed to protect laptops and notebooks from scratches, shocks, and daily wear.",
    features: [
      "Compatible with 15 to 15.6 inch laptops and notebooks",
      "Soft velvet lining for scratch and shock protection",
      "Two front zip pockets for accessories and chargers",
      "Convenient top handle for easy carrying",
      "Water-resistant Oxford fabric exterior",
      "Lightweight and travel-friendly design"
    ],
    featured: false,
  },
  {
    id: 17,
    title: "ZEBRONICS Freego Wireless Mouse",
    category: "Tech",
    tag: null,
    image: img_17,
    affiliateUrl: "https://amzn.to/4ocvX87",
    description:
      "Ergonomic wireless mouse with 2.4GHz connectivity, adjustable 3200 DPI precision, power-saving mode, and plug-and-play USB nano receiver for seamless productivity.",
    features: [
      "2.4GHz wireless connectivity for reliable performance",
      "3200 DPI for smooth and precise cursor control",
      "Ergonomic design for comfortable extended use",
      "Three-button layout with scroll wheel",
      "Automatic power-saving mode for longer battery life",
      "USB nano receiver with plug-and-play setup"
    ],
    featured: false,
  },
  {
    id: 18,
    title: "Vintage PU Leather Journal",
    category: "Stationery & Office",
    tag: "Aesthetic",
    image: img_18,
    affiliateUrl: "https://amzn.to/49TJPOG",
    description:
      "Premium PU leather journal with elegant metal coin bookmark",
    features: [
      "200 pages with 80 GSM thick no-bleed paper",
      "Premium PU leather cover with aesthetic vintage design",
      "Ruled pages with 8 mm line spacing for comfortable writing",
      "Perfect for journaling, scrapbooking, and travel memories",
      "Suitable for calligraphy, sketching, and creative writing",
      "Compact size",
      "Ideal gift choice for students, writers, and professionals"
    ],
    featured: true,
  },
  {
    id: 19,
    title: "Zouk Women's Office Laptop Bag",
    category: "Women's Fashion",
    tag: "Best Seller",
    image: img_19,
    affiliateUrl: "https://amzn.to/3S2huQ0",
    description:
      "Stylish office bag designed for modern women featuring ethnic-inspired artwork",
    features: [
      "Fits laptops up to 15.6 inches",
      "Dedicated padded laptop sleeve with Velcro protection",
      "Spacious compartments",
      "Multiple pockets for wallet, keys, pens and accessories",
      "Premium vegan leather construction with ethnic-inspired design",
      "Water-resistant lining for added durability",
      "Handcrafted in India and 100% PETA-approved"
    ],
    featured: true,
  },
  {
    id: 20,
    title: "Travel Organizer Pouch",
    category: "Travel & Bags",
    tag: "Travel Essential",
    image: img_20,
    affiliateUrl: "https://amzn.to/4xkmiAq",
    description:
      "Compact travel organizer pouch with double-layer storage, waterproof Oxford fabric, secure zip closure.",
    features: [
      "Compact and lightweight design for easy portability",
      "Premium waterproof Oxford fabric with protective padding",
      "Double-layer storage compartments with mesh pockets",
      "Elastic loops keep cables and accessories secure",
      "Smooth zipper closure for safe storage",
      "Perfect for chargers, power banks, USB drives and gadgets",
      "Convenient hand strap for travel and daily use"
    ],
    featured: true,
  },
  {
    id: 21,
    title: "Foldable Storage Cabinet",
    category: "Home Organization",
    tag: "Space Saving",
    image: img_21,
    affiliateUrl: "https://amzn.to/4oyjTOz",
    description:
      "Modern foldable storage cabinet with stackable design. Perfect for organizing clothes, toys, books, documents, kitchen supplies, and household essentials while maintaining a clean and elegant look.",
    features: [
      "Stackable modular structure to maximize vertical space",
      "Large capacity compartments for efficient organization",
      "Dustproof flip-door design",
      "Durable premium plastic construction for long-lasting use",
      "Quick tool-free assembly in minutes",
      "Modern minimalist style complements any home décor"
    ],
    featured: false,
  },
  {
    id: 22,
    title: "Socket Power Strip",
    category: "Tech",
    tag: "Electrical Safety",
    image: img_22,
    affiliateUrl: "https://amzn.to/4vH2WUp",
    description:
      "Premium 4 universal socket power strip with surge protection from voltage spikes. Designed to power multiple devices safely at home, office, study rooms, and workstations.",
    features: [
      "4 universal sockets compatible with multiple plug types",
      "Thermal trip technology automatically cuts power during overload",
      "Child safety shutters help prevent accidental contact",
      "Master switch with LED indicator for easy power control",
      "Fire-resistant material",
      "1.8-meter long cable",
      "Ideal for laptops, chargers, TVs, gaming setups and home offices"
    ],
    featured: false,
  },
  {
    id: 23,
    title: "Luxury Bird Wall Light",
    category: "Home Decor",
    tag: "Modern Lighting",
    image: img_23,
    affiliateUrl: "https://amzn.to/4461K12",
    description:
      "Elegant bird-shaped wall light featuring a premium white and gold finish.",
    features: [
      "3 adjustable lighting modes: White, Warm White and Natural White",
      "Premium iron construction for durability and long-lasting use",
      "Elegant white and gold luxury finish",
      "Modern decorative bird-inspired design",
      "Energy-efficient LED lighting technology",
      "Perfect 9-inch size for versatile placement",
      "Ideal for bedrooms, living rooms, hallways and offices",
      "Quick and easy wall-mount installation"
    ],
    featured: true,
  },
  {
    id: 24,
    title: "Handmade Macrame Sling Bag",
    category: "Women's Fashion",
    tag: "Boho Chic",
    image: img_24,
    affiliateUrl: "https://amzn.to/4e5sBjL",
    description:
      "Beautiful handmade macrame sling bag crafted from premium cotton rope with soft inner lining.",
    features: [
      "Handcrafted using premium 3mm cotton macrame rope",
      "Spacious interior for essentials",
      "Premium quality cotton lining with secure zipper closure",
      "Comfortable 45-inch sling strap for easy carrying",
      "Lightweight and durable construction",
      "Perfect for travel, shopping, festivals and casual outings"
    ],
    featured: true,
  },
  {
    id: 25,
    title: "Homify 3-Tier Stainless Steel Kitchen Organizer Rack",
    category: "Home & Kitchen",
    tag: "Kitchen Storage",
    image: img_25,
    affiliateUrl: "https://amzn.to/4v2k9Yy",
    description:
      "Space-saving 3-tier stainless steel corner rack designed to organize kitchen essentials while maximizing countertop, cabinet, and corner space.",
    features: [
      "3-tier design for efficient vertical storage",
      "Premium rust-resistant stainless steel construction",
      "Space-saving corner-friendly design",
      "Stable free-standing structure with no installation required",
      "Ideal for storing plates, bowls, jars, spices and utensils",
      "Easy assembly with durable everyday support"
    ],
    featured: false,
  },
  {
    id: 26,
    title: "FLYNGO Anti-Theft Sling Bag",
    category: "Travel & Bags",
    tag: "Travel Essential",
    image: img_26,
    affiliateUrl: "https://amzn.to/4vRSR7m",
    description:
      "Stylish anti-theft sling bag featuring a built-in password lock, USB charging port, and durable construction. Perfect for travel, commuting, and everyday carry.",
    features: [
      "Built-in anti-theft password lock for added security",
      "External USB charging port for convenient charging",
      "Versatile sling, crossbody, and chest bag design",
      "Durable polyester material for everyday use",
      "Lightweight and comfortable for travel and commuting",
      "Suitable for both men and women"
    ],
    featured: true,
  },
  {
    id: 27,
    title: "PUMA Women Smasher Sneaker",
    category: "Women's Fashion",
    tag: "Women's Footwear",
    image: img_27,
    affiliateUrl: "https://amzn.to/43EbpvI",
    description:
      "Stylish and lightweight women's sneaker featuring a classic lace-up design and versatile Rose Dust color for everyday comfort and casual wear.",
    features: [
      "Lightweight design for all-day comfort",
      "Classic lace-up closure for a secure fit",
      "Stylish Rose Dust colorway",
      "Durable synthetic upper construction",
      "Versatile design for daily and casual wear",
      "Trusted PUMA comfort and style"
    ],
    featured: false,
  },
  {
    id: 28,
    title: "HOMIFLY 3-Layer Wall-Mounted Storage Cabinet",
    category: "Home & Kitchen",
    tag: "Storage Solution",
    image: img_28,
    affiliateUrl: "https://amzn.to/43vTqrl",
    description:
      "Space-saving wall-mounted storage cabinet with a no-drill installation design, dustproof doors, and versatile 3-layer storage for kitchens, bathrooms, laundry rooms, and more.",
    features: [
      "No-drill self-adhesive wall mounting",
      "3 spacious layers for organized storage",
      "Waterproof and durable premium construction",
      "Dustproof dual-door cabinet design",
      "Suitable for kitchen, bathroom, laundry, and wardrobe use",
      "Modern space-saving wall organizer"
    ],
    featured: false,
  },
  {
    id: 29,
    title: "Webelkart Premium Home Wooden Key Holder",
    category: "Home Organization",
    tag: "Wall Organizer",
    image: img_29,
    affiliateUrl: "https://amzn.to/3QHcShS",
    description:
      "Decorative wooden key holder featuring a stylish 'Home' design and 7 hooks to keep keys, keychains, and small essentials organized while enhancing your wall décor.",
    features: [
      "Decorative 'Home' themed wall design",
      "7 sturdy hooks for keys and accessories",
      "Space-saving wall-mounted organizer",
      "Durable wooden construction",
      "Ideal for entryways, homes, and offices",
      "Great gifting option for housewarmings"
    ],
    featured: false,
  },
  {
    id: 30,
    title: "Natural Jute Planter with Wooden Stand",
    category: "Home Decor",
    tag: "Plant Decor",
    image: img_30,
    affiliateUrl: "https://amzn.to/4vi5RDm",
    description:
      "Handwoven natural jute planter with a sturdy wooden stand, designed to elevate indoor plants while adding warmth and style to your living space.",
    features: [
      "Handcrafted natural jute rope design",
      "Raised wooden stand for elevated display",
      "Lightweight and easy to reposition",
      "Perfect for indoor plants and home decor",
      "Suitable for living rooms, balconies, and offices",
      "Modern boho-inspired aesthetic"
    ],
    featured: true,
  },
  {
    id: 31,
    title: "Engineered Wood Study & Office Table with Drawer & Cabinet",
    category: "Home Organization",
    tag: "Study Desk",
    image: img_31,
    affiliateUrl: "https://amzn.to/3QoSWQQ",
    description:
      "Compact engineered wood study desk featuring a spacious tabletop, drawer, shelf, and cabinet for an organized workspace. Ideal for students, professionals, and home offices.",
    features: [
      "Built-in drawer, shelf, and storage cabinet",
      "Premium 15mm engineered wood construction",
      "Compact space-saving design",
      "Termite-resistant and durable finish",
      "Easy DIY assembly with included fittings",
      "Suitable for study, work, and home office use"
    ],
    featured: false,
  },
  {
    id: 32,
    title: "PVC Clear Makeup & Toiletry Travel Organizer Set of 3",
    category: "Travel & Bags",
    tag: "Travel Organizer",
    image: img_32,
    affiliateUrl: "https://amzn.to/4vOr5sb",
    description:
      "Transparent travel organizer set with three versatile storage bags designed for cosmetics, toiletries, skincare products, and travel essentials.",
    features: [
      "3-piece organizer set in different sizes",
      "Clear PVC design for quick item visibility",
      "Water-resistant and durable construction",
      "Comfortable carry handles for easy transport",
      "Ideal for travel, gym, vacations, and daily use",
      "Stores cosmetics, toiletries, medicines, and accessories"
    ],
    featured: true,
  },
  {
    id: 33,
    title: "Ozoy Mini Folding Travel Umbrella with Case",
    category: "Travel & Bags",
    tag: "Travel Essential",
    image: img_33,
    affiliateUrl: "https://amzn.to/4viDPrm",
    description: "Ultra-compact travel umbrella with waterproof case, UPF 50+ sun protection, and lightweight design for everyday carry.",
    features: [
      "Ultra-compact pocket-sized design",
      "Includes protective carrying case",
      "UPF 50+ UV protection",
      "Water-repellent quick-dry canopy",
      "Durable fiberglass frame construction",
      "Ideal for travel, commuting, and daily use"
    ],
    featured: false
  },
  {
    id: 34,
    title: 'DALUCI Travel Shoe Bags Pack of 6',
    category: 'Travel & Bags',
    tag: 'Travel Organizer',
    image: img_34,
    affiliateUrl: 'https://amzn.to/43EA3fR',
    description: 'Keep shoes clean, protected, and neatly organized with this reusable 6-pack travel shoe bag set. Perfect for luggage, gym bags, wardrobes, and everyday storage.',
    features: [
      'Pack of 6 reusable shoe storage bags',
      'Breathable nonwoven fabric helps reduce odor buildup',
      'Transparent window for quick shoe identification',
      'Protects footwear from dust, dirt, and scuffs',
      'Multipurpose organizer for travel essentials and accessories',
      'Lightweight design ideal for luggage, gym, and home storage'
    ],
    featured: true,
  },
  {
    id: 35,
    title: 'Metaind Wired USB Headset with Noise-Canceling Mic',
    category: 'Tech',
    tag: 'Office Accessories',
    image: img_35,
    affiliateUrl: 'https://amzn.to/4vVb1oy',
    description: 'Professional USB headset with noise-canceling microphone, HD audio, and memory foam comfort. Designed for calls, meetings, online classes, and remote work.',
    features: [
      'Noise-canceling microphone for crystal-clear communication',
      'USB plug-and-play setup with no software required',
      'HD audio quality for meetings, calls, and media',
      'Soft memory foam ear cushions for all-day comfort',
      'Compatible with Windows, Mac, Chromebook, Zoom & Teams',
      'Durable lightweight design built for daily use'
    ],
    featured: true,
  },
  {
    id: 36,
    title: "BOXJOY 4 Pcs Wardrobe Cloth Organizer Storage Boxes",
    category: "Home Organization",
    tag: "Storage Solution",
    image: img_36,
    affiliateUrl: "https://amzn.to/4esC4AC",
    description: "Keep your wardrobe neat and clutter-free with these foldable storage organizer boxes that maximize closet space while keeping clothes, towels, and accessories perfectly organized.",
    features: [
      "Pack of 4 storage organizers for wardrobe & shelves",
      "Durable steel frame with premium polyester linen fabric",
      "Stackable design saves valuable closet space",
      "Foldable and lightweight for easy storage when not in use",
      "Built-in handles for convenient carrying and movement",
      "Label card holders for quick and easy organization"
    ],
    featured: false
  },
  {
    id: 37,
    title: "XML 30 Eggs Tray Storage Box Organizer",
    category: "Home & Kitchen",
    tag: "Fridge Storage",
    image: img_37,
    affiliateUrl: "https://link.amazon/B02DedNQv",
    description: "Organize up to 30 eggs neatly with this space-saving refrigerator egg dispenser featuring an automatic rolling design and protective lid.",
    features: [
      "Holds up to 30 eggs in a compact design",
      "Automatic gravity-fed rolling dispenser",
      "Dust-proof lid keeps eggs clean and protected",
      "Stackable design maximizes refrigerator space",
      "Suitable for fridges, pantries, shelves, and countertops",
      "Easy access and convenient egg storage"
    ],
    featured: false
  },
  {
    id: 38,
    title: "Seznik Mini Sealing Machine for Food Packets",
    category: "Kitchen Gadgets",
    tag: "Food Storage",
    image: img_38,
    affiliateUrl: "https://link.amazon/B0e57TrJ4",
    description: "Keep snacks, chips, and food packets fresh for longer with this portable 2-in-1 heat sealer and cutter. USB rechargeable, lightweight, and perfect for airtight food storage at home or on the go.",
    features: [
      "2-in-1 heat sealer with built-in cutter",
      "Creates airtight seals in just 5 seconds",
      "USB Type-C rechargeable battery",
      "Magnetic back for easy fridge storage",
      "Works with most plastic food bags",
      "Compact, lightweight, and travel-friendly"
    ],
    featured: false
  },
  {
    id: 39,
    title: "OrganizeMee Magnetic Fridge Shelf Organizer",
    category: "Home & Kitchen",
    tag: "Kitchen Storage",
    image: img_39,
    affiliateUrl: "https://link.amazon/B0i07Wav7",
    description: "Maximize unused fridge space with this strong magnetic shelf organizer. Perfect for storing spices, oils, jars, and kitchen essentials while keeping countertops clutter-free.",
    features: [
      "Strong magnetic backing for secure attachment",
      "Creates extra storage without drilling or tools",
      "Perfect for spices, oils, jars, and seasonings",
      "Fits refrigerators, washing machines, and microwaves",
      "Durable premium metal construction",
      "Ideal for small kitchens and apartments"
    ],
    featured: false
  },
  {
    id: 40,
    title: "Self Adhesive Kitchen Hook Rack with 11 Hooks",
    category: "Home & Kitchen",
    tag: "Kitchen Organizer",
    image: img_40,
    affiliateUrl: "https://link.amazon/B05HJw24b",
    description: "Space-saving wall-mounted utensil rack with 11 hooks, durable carbon steel construction, and modern matte black finish for organized kitchens.",
    features: [
      "11 sturdy hooks for utensils, pans, mugs & tools",
      "Heavy-duty carbon steel with rust-resistant finish",
      "Self-adhesive installation with no drilling required",
      "Maximizes kitchen and countertop space",
      "Modern matte black design suits any decor",
      "Multi-purpose use for kitchen, bathroom, garage or office"
    ],
    featured: false
  },
  {
    id: 41,
    title: "Klenzmo Washing Machine Cleaner & Descaler Powder",
    category: "Home Care",
    tag: "Laundry Essential",
    image: img_41,
    affiliateUrl: "https://link.amazon/B0cZP0C8G",
    description: "Deep cleaning descaler powder that removes limescale, detergent residue, grime, and odors from top-load and front-load washing machines.",
    features: [
      "Removes stubborn limescale buildup",
      "Eliminates odor-causing residue & grime",
      "Microclean technology for deep cleaning",
      "Safe, biodegradable formula",
      "Compatible with all major washing machine brands",
      "Easy monthly maintenance solution"
    ],
    featured: false
  },
  {
    id: 42,
    title: "SPARX Sports Shoe SM-171 for Men",
    category: "Footwear",
    tag: "Men's Shoes",
    image: img_42,
    affiliateUrl: "https://link.amazon/B0bHFFPbH",
    description: "Lightweight sports shoes designed for everyday comfort, walking, travel, and casual wear with a stylish all-white look.",
    features: [
      "Breathable mesh upper",
      "Comfortable lace-up design",
      "Durable rubber outsole",
      "Lightweight for daily wear",
      "Versatile sporty style",
      "Made in India"
    ],
    featured: true
  },
  {
    id: 43,
    title: "TIMEWEAR Analog Slim Two Hands Leather Strap Watch for Men",
    category: "Men's Fashion",
    tag: "Best Amazon Find",
    image: img_43,
    affiliateUrl: "https://link.amazon/B09u78Riu",
    description: "A sleek and elegant analog watch featuring a slim dial and premium leather strap. Perfect for daily wear, office outfits, casual looks, and gifting.",
    features: [
      "Ultra-slim minimalist dial design",
      "Comfortable leather strap",
      "Lightweight for all-day wear",
      "Versatile style for casual & formal outfits",
      "Classic timeless look",
      "Great value budget watch"
    ],
    featured: true
  },
  {
    id: 44,
    title: 'LEDO 12 Slot Watch Box Organizer Case',
    category: 'Home Organization',
    tag: 'Watch Storage',
    image: img_44,
    affiliateUrl: 'https://link.amazon/B020E2N4i',
    description: 'Premium 12-slot watch organizer with PU leather exterior and soft velvet interior for safe, stylish storage.',
    features: [
      '12 spacious watch compartments',
      'Soft velvet interior protection',
      'Premium PU leather finish',
      'Secure anti-rust lock design',
      'Suitable for watches & accessories',
      'Great gift for watch collectors'
    ],
    featured: false
  },
  {
    id: 45,
    title: "URBAN FOREST Seattle Genuine Leather RFID Wallet",
    category: "Accessories",
    tag: "Men's Wallet",
    image: img_45,
    affiliateUrl: "https://link.amazon/B0fPZRlcF",
    description: "Premium genuine leather wallet featuring RFID protection, multiple storage compartments, and a sleek slim design for everyday use.",
    features: [
      "RFID blocking security technology",
      "Premium genuine leather construction",
      "6 dedicated card slots",
      "Coin pocket and zippered compartment",
      "Dual currency compartments",
      "Slim and lightweight everyday carry design"
    ],
    featured: true
  },
];

const CATEGORIES = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Auto-scroll to products and reset category when searching
  useEffect(() => {
    if (searchQuery.trim()) {
      setTimeout(() => {
        setActiveCategory("All");
        const section = document.getElementById("products");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [searchQuery]);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  return (
    <div className="app">
      <Navbar
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Hero featuredProducts={featuredProducts} onProductClick={setSelectedProduct} />

      <section className="section" id="products">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">All Products</span>
            <h2 className="section-title">
            {searchQuery.trim()
              ? `Results for "${searchQuery}"`
              : "Browse Products by Category"}
            </h2>
            <p className="section-subtitle">
             {searchQuery.trim()
                ? `${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""} found`
                : "Explore products across electronics, beauty, home, travel, and more."}
            </p>
          </div>

          <div className="products-layout">
            <CategorySidebar
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onSelect={setActiveCategory}
            />
            <div className="products-main">
              <ProductGrid
                products={filteredProducts}
                onProductClick={setSelectedProduct}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      <ScrollToTop />
    </div>
  );
};

export default App;