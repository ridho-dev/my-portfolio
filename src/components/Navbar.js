import React, { useState } from 'react';

const Navbar = () => {
  const [menus] = useState(["Home", "Who", "What", "Work"]);
  const [isNavbarShown, setIsNavbarShown] = useState(false);

  const moveSlider = (index) => {
    const firstMenuElement = document.getElementById("menu0")
    const menuElement = document.getElementById(`menu${index}`)
    const sliderMargin = menuElement.offsetLeft - firstMenuElement.offsetLeft;
    document.documentElement.style.setProperty('--slider', sliderMargin + "px")
  }

  const toggleNavbar = () => {
    const menus = document.querySelector(".menus");
    if (!isNavbarShown) {
      menus.style.opacity = "100%";
      menus.style.transform = "scale(1)";
      setIsNavbarShown(!isNavbarShown)
    } else {
      menus.style.opacity = "0";
      menus.style.transform = "scale(0)";
      setIsNavbarShown(!isNavbarShown)
    }
  }

  return (
    <nav className="navbar">
      <div className="hamburger-container">
        <button className="hamburger-btn" onClick={() => toggleNavbar()}><i className="fas fa-bars fa-lg"></i></button>
      </div>
      <div className="menus" id="menus">
        {
          menus.map((menu, index) => {
            return <a href={`#${menu}`} id={`menu${index}`} key={index}><button className="menu" onClick={() => moveSlider(index)}>{menu}</button></a>
          })
        }
      </div>
    </nav>
  );
};

export default Navbar;
