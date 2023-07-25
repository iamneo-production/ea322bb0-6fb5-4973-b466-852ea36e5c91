import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/NavbarStyles.css";
import icon from "../Assert/Image/icon.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar" id="home-navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={icon} alt="ok" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a
              href="#top"
              className="nav-links"
              id="button"
              onClick={closeMobileMenu}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#menuTitle"
              id="button"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Service
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              id="button"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-links"
              id="button"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/signup"
              id="button"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
