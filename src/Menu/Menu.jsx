import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


import MyButton from "../components/MyButton";
import "../Menu/Menu.css";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="navbar1">
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      {setOpen ? (document.body.style.overflow = "auto") : null}
      {open ? (document.body.style.overflow = "hidden") : null}
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <MyButton to="Home" className="nav-link" onClick={closeMenu}>
            Home
          </MyButton>
        </li>
        <li className="nav-item">
          <MyButton to="About" className="nav-link" onClick={closeMenu}>
            About
          </MyButton>
        </li>
        <li className="nav-item">
          <MyButton to="Profile" className="nav-link" onClick={closeMenu}>
            Shop
          </MyButton>
        </li>
        <li className="nav-item">
          <MyButton to="Contact" className="nav-link" onClick={closeMenu}>
            Contact
          </MyButton>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
