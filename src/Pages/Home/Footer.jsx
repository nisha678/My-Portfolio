import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <h2 className="logo-name">/Nisha Patar/</h2>
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
                href="#Home"
              >
                Go to Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">
          Copyright &#169; 2023 Nisha Patar. All right received.
        </p>
        <div className="footer--social--icon"></div>
      </div>
    </footer>
  );
}

export default Footer;
