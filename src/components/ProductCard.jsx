import "./ProductCard.css";

const tagColors = {
  "Best Value": "badge-green",
  "Editor's Pick": "badge-blue",
  "Top Pick": "badge-blue",
  "Best Deal": "badge-amber",
};

const ProductCard = ({ product, onClick }) => {
  const discount = product.originalPrice
    ? Math.round(
        ((parseInt(product.originalPrice.replace(/[^0-9]/g, "")) -
          parseInt(product.price.replace(/[^0-9]/g, ""))) /
          parseInt(product.originalPrice.replace(/[^0-9]/g, ""))) *
          100
      )
    : null;

  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'product_click', {
        product_id: product.id,
        product_name: product.title,
        product_category: product.category,
        product_price: product.price,
        click_location: 'product_grid'
      });
    }
    onClick();
  };

  return (
    <article
      className="product-card"
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      role="button"
      aria-label={`View details for ${product.title}`}
    >
      <div className="pc-img-wrap">
        <img src={product.image} alt={product.title} loading="lazy" />
        {product.tag && (
          <span className={`pc-tag badge ${tagColors[product.tag] || "badge-blue"}`}>
            {product.tag}
          </span>
        )}
        {discount >= 10 && (
          <span className="pc-discount">-{discount}%</span>
        )}
      </div>

      <div className="pc-body">
        <span className="pc-category">{product.category}</span>
        <h3 className="pc-title">{product.title}</h3>
        <div className="pc-footer">
          <button
            className="pc-cta"
            aria-label={`View ${product.title} on Amazon`}
            onClick={(e) => { e.stopPropagation(); handleClick(); }}
          >
            View
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;