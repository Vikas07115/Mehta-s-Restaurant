import React, { useState, useEffect } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Dark mode toggle function
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <nav className={darkMode ? "dark-nav" : ""}>
        <div className="logo">Mehta's RESTAURANT</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>

        <div className="right-section">
          {/* Dark Mode Toggle Switch */}
          <div className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <MdLightMode className="mode-icon" /> : <MdOutlineDarkMode className="mode-icon" />}
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger" onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
