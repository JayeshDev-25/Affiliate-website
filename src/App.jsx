import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedSection from "./components/FeaturedSection";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import ScrollToTop from "./components/ScrollToTop";

const PRODUCTS = [
  {
    id: 1,
    title: "OnePlus Nord Buds 3r",
    category: "Electronics",
    tag: "Best Value",
    image: "/src/assets/images/products/1.jpg",
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
    image: "/src/assets/images/products/2.jpg",
    affiliateUrl: "https://amzn.to/3RGM818",
    description:
      "A gentle yet effective daily face wash. Sulphate-free formula that cleanses without stripping moisture. Perfect for oily to combination skin.",
    features: ["Sulphate-free formula", "For oily/combo skin", "pH balanced", "Dermatologist tested"],
    featured: false,
  },
  {
    id: 3,
    title: "Zebronics NS1000 Laptop Stand",
    category: "Tech Accessories",
    tag: "Top Pick",
    image: "/src/assets/images/products/3.jpg",
    affiliateUrl: "https://amzn.to/49PjLEr",
    description:
      "An incredibly affordable ergonomic laptop stand. Reduces neck strain during long work sessions. Foldable and portable — fits any bag.",
    features: ["Foldable & portable", "6 height levels", "Anti-slip pads", "Up to 15.6\" laptops"],
    featured: true,
  },
  {
    id: 4,
    title: "Presto! Garbage Bags (Pack of 3)",
    category: "Home & Kitchen",
    tag: null,
    image: "/src/assets/images/products/4.jpg",
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
    image: "/src/assets/images/products/5.jpg",
    affiliateUrl: "https://amzn.to/4dRuIGn",
    description:
      "Solid daily backpack from a trusted brand. Laptop compartment fits up to 15.6\", with organized pockets and comfortable padded straps.",
    features: ["15.6\" laptop compartment", "Padded back support", "Multiple organizer pockets", "Water-resistant base"],
    featured: true,
  },
  {
    id: 6,
    title: "Adhesive Soap Holder for Bathroom",
    category: "Home Decor",
    tag: null,
    image: "/src/assets/images/products/6.jpg",
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
    image: "/src/assets/images/products/7.jpg",
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
    category: "Computer Accessories",
    tag: null,
    image: "/src/assets/images/products/8.jpg",
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
    image: "/src/assets/images/products/9.jpg",
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
    category: "Computer Accessories",
    tag: null,
    image: "/src/assets/images/products/10.jpg",
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
    category: "Computer Accessories",
    tag: null,
    image: "/src/assets/images/products/11.jpg",
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
    image: "/src/assets/images/products/12.jpg",
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
    image: "/src/assets/images/products/13.jpg",
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
    category: "Tech Accessories",
    tag: null,
    image: "/src/assets/images/products/14.jpg",
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
    image: "/src/assets/images/products/15.jpg",
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
    category: "Tech Accessories",
    tag: null,
    image: "/src/assets/images/products/16.jpg",
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
    category: "Computer Accessories",
    tag: null,
    image: "/src/assets/images/products/17.jpg",
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
    image: "/src/assets/images/products/18.png",
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
    category: "Tech Accessories",
    tag: "Best Seller",
    image: "/src/assets/images/products/19.png",
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
    category: "Tech Accessories",
    tag: "Travel Essential",
    image: "/src/assets/images/products/20.png",
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
    image: "/src/assets/images/products/21.png",
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
    featured: true,
  },
  {
    id: 22,
    title: "Socket Power Strip",
    category: "Electronics",
    tag: "Electrical Safety",
    image: "/src/assets/images/products/22.png",
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
    featured: true,
  },
  {
    id: 23,
    title: "Luxury Bird Wall Light",
    category: "Home Decor",
    tag: "Modern Lighting",
    image: "/src/assets/images/products/23.png",
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
    image: "/src/assets/images/products/24.png",
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
    image: "/src/assets/images/products/25.png",
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
    featured: true,
  },
  {
    id: 26,
    title: "FLYNGO Anti-Theft Sling Bag",
    category: "Travel & Bags",
    tag: "Travel Essential",
    image: "/src/assets/images/products/26.png",
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
    image: "/src/assets/images/products/27.png",
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
    featured: true,
  },
  {
    id: 28,
    title: "HOMIFLY 3-Layer Wall-Mounted Storage Cabinet",
    category: "Home Organization",
    tag: "Storage Solution",
    image: "/src/assets/images/products/28.png",
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
    featured: true,
  },
  {
    id: 29,
    title: "Webelkart Premium Home Wooden Key Holder",
    category: "Home Organization",
    tag: "Wall Organizer",
    image: "/src/assets/images/products/29.png",
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
    featured: true,
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

      <Hero featuredProduct={featuredProducts[0]} onProductClick={setSelectedProduct} />

      <FeaturedSection products={featuredProducts} onProductClick={setSelectedProduct} />

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
          <CategoryFilter
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />
          <ProductGrid products={filteredProducts} onProductClick={setSelectedProduct} />
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