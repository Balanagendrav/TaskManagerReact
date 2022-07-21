import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-logo"
            />
            <h1 className="footer-section-mail-id">
              orderonline@nxttrendz.com
            </h1>
            <p className="footer-section-address">
              RoadNo:01, NAD Junction, Vishakapatnam, India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
