import "./FeaturedSection.css";

const FeaturedSection = ({ products, onProductClick }) => {
  return (
    <section className="featured-section section section-alt" id="featured" aria-labelledby="featured-heading">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Editor's Selection</span>
          <h2 className="section-title" id="featured-heading">Featured Picks</h2>
        </div>
        <div className="featured-grid">
          {products.map((product, i) => (
            <FeaturedCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedCard = ({ product, onClick, index }) => {
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
        click_location: 'featured_section'
      });
    }
    onClick();
  };

  return (
    <button
      className="featured-card"
      onClick={handleClick}
      aria-label={`View featured product: ${product.title}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="fc-img-wrap">
        <img src={product.image} alt={product.title} loading="lazy" />
        {discount >= 10 && (
          <span className="fc-discount">Save {discount}%</span>
        )}
      </div>
      <div className="fc-body">
        <span className="fc-cat">{product.category}</span>
        <h3 className="fc-title">{product.title}</h3>
        <p className="fc-desc">{product.description.slice(0, 100)}…</p>
        <div className="fc-bottom">
          <span className="fc-view-btn">
            View Deal
            <svg
              width="13"
              height="13"
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
          </span>
        </div>
      </div>
    </button>
  );
};

export default FeaturedSection;