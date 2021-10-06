import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import logo from "../../images/logo.png";
import logo1 from "../../images/e-buying.JPG";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = [""];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <header className={navbarClasses.join(" ")}>
      <div className="header">
        <img src={logo1} alt="e-buying logo" />
        <nav className="navigation">
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/manage">Manage Inventory</a>
          <button onClick={() => setLoggedInUser({})}>Sign out</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
