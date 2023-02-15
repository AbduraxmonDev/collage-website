import React from "react";
import Logo from "../../assets/icons/logo.svg";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState(false);

  const handleClick = (index) => {
    setActive(index);
  };

  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const handleButtonClick = () => {
    setIsHeaderOpen(!isHeaderOpen);
    if (isHeaderOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <header className={isHeaderOpen ? "header open" : "header"}>
      <div className="container">
        <div className="header__container">
          <div className="logo">
            <a href="/" className="logo__link">
              <img src={Logo} alt="header logo" className="logo__image" />
            </a>
          </div>
          <div className="navbar">
            <nav className="navbar__list">
              <a
                href="#"
                className={
                  active === 0 ? "navbar__link active" : "navbar__link"
                }
                onClick={() => handleClick(0)}
              >
                Home
              </a>
              <a
                href="#"
                className={
                  active === 1 ? "navbar__link active" : "navbar__link"
                }
                onClick={() => handleClick(1)}
              >
                Programmes
              </a>
              <a
                href="#"
                className={
                  active === 2 ? "navbar__link active" : "navbar__link"
                }
                onClick={() => handleClick(2)}
              >
                Faculty
              </a>
              <a
                href="#"
                className={
                  active === 3 ? "navbar__link active" : "navbar__link"
                }
                onClick={() => handleClick(3)}
              >
                Infrastructure
              </a>
              <a
                href="#"
                className={
                  active === 4 ? "navbar__link active" : "navbar__link"
                }
                onClick={() => handleClick(4)}
              >
                Events
              </a>
              <a
                href="#"
                className={
                  active === 5 ? "navbar__link active" : "navbar__link"
                }
                onClick={() => handleClick(5)}
              >
                Placement
              </a>
              <a
                href="#"
                className={
                  active === 6 ? "navbar__link active" : "navbar__link"
                }
                onClick={() => handleClick(6)}
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="hamburger" onClick={handleButtonClick}>
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
