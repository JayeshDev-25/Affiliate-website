import { useEffect } from "react";
import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Product details: ${product.title}`}
    >
      <div
        className="modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close product details">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal-body">
          <div className="modal-img-wrap">
            <img src={product.image} alt={product.title} />
          </div>

          <div className="modal-info">
            <span className="modal-cat">{product.category}</span>
            <h1 className="modal-title">{product.title}</h1>

            <p className="modal-description">{product.description}</p>

            {product.features && product.features.length > 0 && (
              <div className="modal-features">
                <h3 className="modal-features-heading">Key Features</h3>
                <ul className="modal-feature-list" role="list">
                  {product.features.map((f, i) => (
                    <li key={i} className="modal-feature-item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn btn-primary modal-cta"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              See Price on Amazon
            </a>

            <p className="modal-disclosure">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              As an Amazon Associate, we earn a small commission from qualifying purchases at no extra cost to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;