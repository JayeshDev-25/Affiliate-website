import { useState, useEffect, useCallback,useRef } from "react";
import "./Hero.css";

const Hero = ({ featuredProducts, onProductClick }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const touchStart = useRef(null);

  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStart.current = null;
  };

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % featuredProducts.length);
  }, [featuredProducts.length]);

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? featuredProducts.length - 1 : prev - 1
    );
  };

  // Auto-rotate every 4 seconds unless hovered or paused
  useEffect(() => {
    if (isHovered || isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next, isHovered, isPaused]);

  const product = featuredProducts[current];

  if (!product) return null;

  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>

      <div className="hero-container container">
        {/* Left — static content */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-dot" aria-hidden="true" />
            Amazon Affiliate Picks — India
          </div>
          <h1 className="hero-headline">
            Discover Popular <em>Products</em> on Amazon
          </h1>
          <p className="hero-subtext">
            Browse trending gadgets, home essentials, lifestyle products,
            and more — all in one place.
          </p>
          <div className="hero-cta-group">
            <a href="#products" className="btn btn-primary">
              Browse All Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <div className="hero-trust">
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              No fake ratings
            </div>
            <div className="trust-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Best picks on Amazon
            </div>
          </div>
        </div>

        {/* Right — carousel */}
        <div
          className="hero-carousel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-label="Featured products carousel"
        >
          {/* Card */}
          <div
            className="hero-carousel-card"
            key={product.id}
            onClick={() => {
              setIsPaused(true);
              onProductClick(product);
            }}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onProductClick(product)}
            role="button"
            aria-label={`View ${product.title}`}
          >
            <div className="hero-carousel-img">
              <img
                src={product.image}
                alt={product.title}
                loading="eager"
              />
              {product.tag && (
                <span className="hero-carousel-tag badge badge-blue">
                  {product.tag}
                </span>
              )}
            </div>
            <div className="hero-carousel-info">
              <span className="hero-carousel-cat">{product.category}</span>
              <h3 className="hero-carousel-title">{product.title}</h3>
              <p className="hero-carousel-desc">
                {product.description.slice(0, 80)}…
              </p>
              <div className="hero-carousel-cta btn btn-primary btn-sm">
                View on Amazon
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="hero-carousel-controls">
            <button
              className="carousel-arrow"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous product"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="carousel-dots" role="tablist">
              {featuredProducts.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot ${i === current ? "carousel-dot-active" : ""}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to product ${i + 1}`}
                  role="tab"
                  aria-selected={i === current}
                />
              ))}
            </div>

            <button
              className="carousel-arrow"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next product"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div className="carousel-progress">
            <div
              className={`carousel-progress-bar ${!isHovered && !isPaused ? "carousel-progress-animate" : ""}`}
              key={`${current}-${isHovered}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;