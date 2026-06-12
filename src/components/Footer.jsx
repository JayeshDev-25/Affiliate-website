import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
                  <rect x="11" y="2" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5" />
                  <rect x="2" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5" />
                  <rect x="11" y="11" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.9" />
                </svg>
              </div>
              <span>Budget<span className="logo-accent">Tech</span> Picks</span>
            </div>
            <p className="footer-tagline">
              Product recommendations from Amazon India.
            </p>
            <p className="footer-disclosure">
              As an Amazon Affiliate, we earn from qualifying purchases. This doesn't affect our editorial independence.
            </p>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-group-label">Navigate</h3>
            <ul role="list">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#featured" className="footer-link">Featured</a></li>
              <li><a href="#products" className="footer-link">All Products</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-group-label">Categories</h3>
            <ul role="list">
              <li><a href="#products" className="footer-link">Electronics</a></li>
              <li><a href="#products" className="footer-link">Tech Accessories</a></li>
              <li><a href="#products" className="footer-link">Home & Kitchen</a></li>
              <li><a href="#products" className="footer-link">Beauty & Personal Care</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;