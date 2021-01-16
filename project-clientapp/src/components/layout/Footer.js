import React from "react";
import "./style/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">S&D.COM</p>
        <p className="footer-subscription-text">
          You can contact our admin panel at any time of your preference!
        </p>
        <small class="website-rights">S&D.COM © 2021</small>
      </section>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo"></div>

          <div class="social-icons">
            <a
              href="https://www.facebook.com/"
              className="social-icon-link "
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </a>
            <a
              href=" https://www.instagram.com/accounts/login/"
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/"
              className="social-icon-link youtube"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </a>
            <a
              href="https://twitter.com/login?lang=en/"
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
