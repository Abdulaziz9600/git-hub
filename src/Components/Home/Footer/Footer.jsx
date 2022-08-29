import React from "react";
import "./Footer.css";
import logo from "../../../assets/img/GitHub-Mark-64px.png";

const Footer = () => {
  return (
    <>
      <footer className="footer container d-flex align-items-center gap-5 pt-4 pb-4 foot">
        <div className="d-flex align-items-center gap-2">
            <img className="img-img" src={logo} alt="" />
          <p className="footer-text m-0">© 2022 GitHub, Inc.</p>
        </div>
        <ul className="footer-navbar w-75 list-unstyled d-flex flex-wrap justify-content-between gap-2 align-items-center p-0 m-0">
          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Home
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Privacy
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Security
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Status
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Docs
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Contact GitHub
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Pricing
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Api
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Training
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              Blog
            </a>
          </li>

          <li className="footer-nav-item">
            <a className="footer-nav-link text-decoration-none" href="#">
              About
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
