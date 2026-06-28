import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CategorySidebar from "./components/CategorySidebar";
import ProductModal from "./components/ProductModal";
import ScrollToTop from "./components/ScrollToTop";
import { PRODUCTS } from "./data/products";

// Build grouped structure automatically from product data
// Result: { "Tech": ["Accessories", "Electronics"], "Men's": ["Accessories", "Fashion", "Footwear"], ... }
const GROUPED_CATEGORIES = PRODUCTS.reduce((acc, p) => {
  if (!acc[p.group]) acc[p.group] = new Set();
  acc[p.group].add(p.category);
  return acc;
}, {});

// Convert Sets to sorted arrays
Object.keys(GROUPED_CATEGORIES).forEach((group) => {
  GROUPED_CATEGORIES[group] = [...GROUPED_CATEGORIES[group]].sort();
});

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeGroup, setActiveGroup] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (searchQuery.trim()) {
      setTimeout(() => {
        setActiveGroup("All");
        setActiveCategory("All");
        const section = document.getElementById("products");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [searchQuery]);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesGroup = activeGroup === "All" || p.group === activeGroup;
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.group.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesCategory && matchesSearch;
  });

  const featuredProducts = PRODUCTS.filter((p) => p.featured);

  const handleGroupSelect = (group) => {
    setActiveGroup(group);
    setActiveCategory("All");
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
  };

  // Dynamic section title
  const sectionTitle = searchQuery.trim()
    ? `Results for "${searchQuery}"`
    : activeCategory !== "All"
    ? `${activeGroup} — ${activeCategory}`
    : activeGroup !== "All"
    ? activeGroup
    : "Browse Products by Category";

  const sectionSubtitle = searchQuery.trim()
    ? `${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""} found`
    : "Explore products across electronics, beauty, home, travel, and more.";

  return (
    <div className="app">
      <Navbar
        darkMode={darkMode}
        onToggleDark={() => setDarkMode(!darkMode)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Hero
        featuredProducts={featuredProducts}
        onProductClick={setSelectedProduct}
      />

      <section className="section" id="products">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">All Products</span>
            <h2 className="section-title">{sectionTitle}</h2>
            <p className="section-subtitle">{sectionSubtitle}</p>
          </div>

          <div className="products-layout">
            <CategorySidebar
              groupedCategories={GROUPED_CATEGORIES}
              activeGroup={activeGroup}
              activeCategory={activeCategory}
              onGroupSelect={handleGroupSelect}
              onCategorySelect={handleCategorySelect}
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

      

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <ScrollToTop />
    </div>
  );
};

export default App;