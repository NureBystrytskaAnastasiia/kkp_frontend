import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "../styles/Header.css";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">Bokado</a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#">Головна</a>
            <a href="#">Увійти</a>
            <a href="#">Челенджи</a>
            <a href="#">Події</a>
            <a href="#">Про нас</a>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <FaBars />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
