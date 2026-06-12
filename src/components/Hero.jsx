import "./Hero.css";

const Hero = ({ featuredProduct, onProductClick }) => {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>
      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-dot" aria-hidden="true" />
            Amazon Affiliate Picks — India
          </div>
          <h1 className="hero-headline">
            Discover Popular <em>Products</em> on Amazon
          </h1>
          <p className="hero-subtext">
            Browse trending gadgets, home essentials, lifestyle products, and more—all in one place.
          </p>
          <div className="hero-cta-group">
            <a href="#products" className="btn btn-primary">
              Browse All Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
              Best prices on Amazon
            </div>
          </div>
        </div>

        {featuredProduct && (
          <div className="hero-product-showcase" aria-label="Featured product preview">
            <div className="hero-product-badge">⭐ Featured Pick</div>
            <button
              className="hero-product-card"
              onClick={() => onProductClick(featuredProduct)}
              aria-label={`View details for ${featuredProduct.title}`}
            >
              <div className="hero-product-img-wrap">
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.title}
                  loading="eager"
                />
                {featuredProduct.tag && (
                  <span className="hero-product-tag badge badge-blue">{featuredProduct.tag}</span>
                )}
              </div>
              <div className="hero-product-info">
                <span className="hero-product-cat">{featuredProduct.category}</span>
                <h3 className="hero-product-title">{featuredProduct.title}</h3>
                <div className="hero-product-pricing">
                  <span className="hero-price">{featuredProduct.price}</span>
                  {featuredProduct.originalPrice && (
                    <span className="hero-original">{featuredProduct.originalPrice}</span>
                  )}
                </div>
                <div className="hero-product-cta btn btn-primary btn-sm" aria-hidden="true">
                  View on Amazon
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;