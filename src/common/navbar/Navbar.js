import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="">
      <div className="shadow_nav">
        <div className="Navbar_main">
          <div className="logo_nav_main">
            {/* <h1>Applifed.</h1> */}
            <img src={images.logonew} alt="" className="logo_nav" />
            {/* <img src={images.Applified_logo} alt="" className="logo_nav" /> */}
          </div>
          <div className="links_nav_main">
            <Link to="/" className="link_decor">
              <h4>Home</h4>
            </Link>
            <Link to="/Products" className="link_decor">
              <h4>Products</h4>
            </Link>
            <Link to="/Portfolio" className="link_decor">
              <h4>Portfolio</h4>
            </Link>
            {/* <Link to="/" className="link_decor">
              <h4>Career</h4>
            </Link> */}
            <Link to="/contact" className="link_decor">
              <h4>Contact us</h4>
            </Link>
          </div>
          {toggleMenu === false ? (
            <GiHamburgerMenu
              className="side_icon"
              onClick={() => setToggleMenu(true)}
            />
          ) : (
            <RiCloseFill
              className="side_icon"
              onClick={() => setToggleMenu(false)}
            />
          )}
        </div>
      </div>
      {toggleMenu && (
        <div className="sidebar_main_wrapp">
          <div className="sidebar_base_wrapp">
            <div className="links_nav_main_wrapp">
              <Link
                to="/"
                className="link_decor"
                onClick={() => setToggleMenu(false)}>
                <h1>Home</h1>
              </Link>
              <Link
                to="/Products"
                className="link_decor"
                onClick={() => setToggleMenu(false)}>
                <h4>Products</h4>
              </Link>
              <Link
                to="/Portfolio"
                className="link_decor"
                onClick={() => setToggleMenu(false)}>
                <h4>Portfolio</h4>
              </Link>
              {/* <Link to="/" className="link_decor">
                <h4>Career</h4>
              </Link> */}
              <Link
                to="/contact"
                className="link_decor"
                onClick={() => setToggleMenu(false)}>
                <h4>Contact us</h4>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
