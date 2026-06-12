import "./ProductGrid.css";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products, onProductClick }) => {
  if (products.length === 0) {
    return (
      <div className="empty-state" role="status">
        <div className="empty-icon" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <h3 className="empty-title">No products found</h3>
        <p className="empty-subtitle">Try a different category or clear your search.</p>
      </div>
    );
  }

  return (
    <div className="products-grid" role="list" aria-label="Product list">
      {products.map((product, i) => (
        <div key={product.id} role="listitem" style={{ animationDelay: `${i * 0.06}s` }}>
          <ProductCard product={product} onClick={() => onProductClick(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;