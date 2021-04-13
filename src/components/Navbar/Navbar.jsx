import React, { useState, useEffect } from "react";
// import styles from "./Navbar.css";
import "./Navbar.css";

function Navbar() {
  const [dark, setDark] = useState(false);

  const DarkMode = () => {
    document.body.classList.toggle("dark");
    document.body.classList.contains("dark") ? setDark(true) : setDark(false);
  };

  useEffect(() => {}, [dark]);

  return (
    <nav className="nav">
      <div className="innerWidth">
        <nav className="navBar">
          <div className="navbarTitle">
            <a href="/" className="navlinkTitle">
              Where in the world!
            </a>
          </div>
          <div className="navbarMode">
            <div className="darkMode">
              <input
                type="checkbox"
                className="inputMode"
                onClick={DarkMode}
                style={{ opacity: "0" }}
              />
              {dark ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="far fa-moon"></i>
              )}
              <p className="textMode">Dark Mode</p>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
