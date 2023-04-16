import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-title">
          <Link to="/">
            <h2 className="text-white">REDUX STORE</h2>
          </Link>
        </div>
        <div className="items">
          <h5 className="text-white mb-4">Get to know us</h5>
          <p className="text-white">About Us</p>
          <p className="text-white">Careers</p>
          <p className="text-white">Press Releases</p>
          <p className="text-white">Become an Affiliate</p>
        </div>
        <div className="items">
          <h5 className="text-white mb-4">Connect with us</h5>
          <p className="text-white">Facebook</p>
          <p className="text-white">Twitter</p>
          <p className="text-white">Instagram</p>
        </div>
        <div className="items">
          <h5 className="text-white mb-4">Let us help you</h5>
          <p className="text-white">Your Account</p>
          <p className="text-white">Returns Center</p>
          <p className="text-white">100% Purchase Protection</p>
          <p className="text-white">Help</p>
        </div>
      </div>
      <hr />
      <p className="text-white text-center copyright ">
      © Copyright 2023 All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
