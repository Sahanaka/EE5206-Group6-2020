import React from "react";
import "./style/Footer.css";


function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">S&D.COM</p>
        <p className="footer-subscription-text">
          You can contact our admin panel at any time of your preference!
        </p>
        <small className="website-rights">S&D.COM © 2021</small>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo"></div>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              className="social-icon-link "
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href=" https://www.instagram.com/accounts/login/"
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="social-icon-link youtube"
              target="_blank"
              aria-label="Youtube"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              href="https://twitter.com/login?lang=en/"
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
