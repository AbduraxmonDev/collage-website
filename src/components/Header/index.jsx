import React from "react";
import Logo from "../../assets/icons/logo.svg";

function Active() {
  let navItems = document.querySelectorAll(".navbar__link");
  navItems.map();
}

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <a href="/" className="logo__link">
              <img src={Logo} alt="header logo" className="logo__image" />
            </a>
          </div>
          <div className="navbar">
            <nav className="navbar__list">
              <a href="#" className="navbar__link" onClick={Active}>
                Home
              </a>
              <a href="#" className="navbar__link">
                Programmes
              </a>
              <a href="#" className="navbar__link">
                Faculty
              </a>
              <a href="#" className="navbar__link">
                Infrastructure
              </a>
              <a href="#" className="navbar__link">
                Events
              </a>
              <a href="#" className="navbar__link">
                Placement
              </a>
              <a href="#" className="navbar__link">
                Contact
              </a>
            </nav>
          </div>
          <div className="hamburger">
            <span className="hamburger__item"></span>
            <span className="hamburger__item"></span>
            <span className="hamburger__item"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
