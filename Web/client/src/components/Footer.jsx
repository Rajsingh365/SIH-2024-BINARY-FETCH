import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <img src="src/assets/images/logo.jpg" className="h-10 w-10 rounded-full"/>
        <p>
          Police Service Hub
          <br />
          secure, reliable, and efficient
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/report-crime"  className="link link-hover">Report a Crime</Link>
        <Link to="/crime-map"  className="link link-hover">Crime Map</Link>
        <Link to="/police-location"  className="link link-hover">Locate nearby police station</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about-us"  className="link link-hover">About us</Link>
        <Link to="/feedback-form"  className="link link-hover">Feedback Form</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link to="\"  className="link link-hover">Terms of use</Link>
        <Link to="\"  className="link link-hover">Privacy policy</Link>
        <Link to="\"  className="link link-hover">Cookie policy</Link>
      </nav>
    </footer>
  );
};

export default Footer;