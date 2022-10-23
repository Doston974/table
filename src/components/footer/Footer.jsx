import React from "react";
import "./footer.css";
import {FiFacebook,FiTwitter,FiInstagram,FiLinkedin} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/#">About us</a>
              </li>
              <li>
                <a href="/#">Our services</a>
              </li>
              <li>
                <a href="/#">Privacy policy</a>
              </li>
              <li>
                <a href="/#">Affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get help</h4>
            <ul>
              <li>
                <a href="/#">FAQ</a>
              </li>
              <li>
                <a href="/#">SHipping</a>
              </li>
              <li>
                <a href="/#">Returns</a>
              </li>
              <li>
                <a href="/#">Order status</a>
              </li>
              <li>
                <a href="/#">Payment options</a>
              </li>
            </ul>
          </div>
          {/* <div className="footer-col">
            <h4>Online shop</h4>
            <ul>
              <li>
                <a href="/#">Watch</a>
              </li>
              <li>
                <a href="/#">Bag</a>
              </li>
              <li>
                <a href="/#">SHoes</a>
              </li>
              <li>
                <a href="/#">Dress</a>
              </li>
            </ul>
          </div> */}
          <div className="footer-col">
            <h4>Follow us</h4>
            <div className="social-links">
                <a href="/#"><FiFacebook/></a>
                <a href="/#"><FiTwitter/></a>
                <a href="/#"><FiInstagram/></a>
                <a href="/#"><FiLinkedin/></a>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
