import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row">
          {/* colomn1 */}
          <div className="col">
            <h1>Contact Info</h1>
            <ul className="list-unstyled">
              <li>Address</li>
              <li>Storgatan 3 , linköping</li>
              <br/>
              <li>123 33, Sweden</li>
              <li>info@pcg.se</li>
              <br/>
              <li>tel </li>
              <li>070-44444444</li>
            </ul>
          </div>
          {/* colomn2 */}
          <div className="col">
            <h1>Follow Us</h1>
            <ul className="list-unstyled">
              <li>facebook</li>
              <li>instagram</li>
              <li>twitter</li>
              <li>youtube</li>
              {/* <li>andress</li>
              <li>Storgatan 3 , linköping</li>
              <li>123 33, sweden</li>
              <li>info@pcg.se</li>
              <li>telfon </li>
              <li>070-44444444</li> */}
            </ul>
          </div>
          {/* colomn3 */}
          <div className="col">
            <h1>Other</h1>
            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Webshop Policy</a></li>
              <li><a href="#">Terms&Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            © 2021 THICC MEME INC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
