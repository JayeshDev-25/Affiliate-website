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
              <span>Budget <span className="logo-accent">Picks</span></span>
            </div>
            <p className="footer-tagline">
              Product recommendations from Amazon India.
            </p>
            <p className="footer-disclosure">
              As an Amazon Associate, we earn from qualifying purchases. Product recommendations are selected independently.
            </p>
          </div>

          <div className="footer-links-group">
            <h3 className="footer-group-label">Navigate</h3>
            <ul role="list">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#products" className="footer-link">All Products</a></li>
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