import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CategorySidebar from "./components/CategorySidebar";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import ScrollToTop from "./components/ScrollToTop";
import { PRODUCTS } from "./data/products";

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