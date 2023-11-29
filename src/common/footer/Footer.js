import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <section className="Footer_main_upper">
      <div className="Footer_main">
        <div className="links_sec_footer">
          <h3>APPLIFIED</h3>
          <div className="links_sec_footer_inner">
            <Link to="/" className="link_decor">
              <h4 className="footer_link_color">Home</h4>
            </Link>
            <Link to="/Products" className="link_decor">
              <h4 className="footer_link_color">Products</h4>
            </Link>
            <Link to="/Portfolio" className="link_decor">
              <h4 className="footer_link_color">Portfolio</h4>
            </Link>

            <Link to="contact" className="link_decor">
              <h4 className="footer_link_color">Contact us</h4>
            </Link>
          </div>
        </div>
        <div className="social_sec_footer">
          <div className="socialfooter_icons">
            <h3>SOCIAL SHARING</h3>
            <div className="socialicon_footer_main">
              <Link
                to="/"
                className="link_decor socialicon_footer socialicon_footer_twitter">
                <BsTwitter className="socialicon_footer_inner" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/kedar-dave-applified/"
                className="link_decor socialicon_footer socialicon_footer_linkdin">
                <FaLinkedinIn className="socialicon_footer_inner" />
              </Link>
              <Link
                to="http://api.whatsapp.com/send?phone=9099040407&text=Let%27s%20Get%20in%20Touch"
                className="link_decor socialicon_footer socialicon_footer_whatsapp">
                <IoLogoWhatsapp className="socialicon_footer_inner" />
                {/* <BsWhatsapp className="socialicon_footer_inner" /> */}
              </Link>
            </div>
          </div>
          <div className="address_sec_main_footer">
            <h3>ADDRESS</h3>
            <p>
              301 Pride Square JK Chowk,
              <br /> University Road,
              <br /> Rajkot - 360005 Gujarat India
            </p>
          </div>
        </div>
        <div className="contact_sec_footer">
          <div className="contact_sec_footer_inner">
            <h3>PHONE</h3>
            <a href="tel:9099040407" className="link_decor footer_link_color">
              +91 90990 40407
            </a>
          </div>
          <div className="contact_sec_footer_inner">
            <h3>WHATSAPP</h3>
            <a
              href="http://api.whatsapp.com/send?phone=9099040407&text=Let%27s%20Get%20in%20Touch"
              target="_blank"
              rel="noreferrer"
              className="link_decor footer_link_color">
              +91 90990 40407
            </a>
          </div>
          <div className="contact_sec_footer_inner">
            <h3>EMAIL</h3>
            <a
              href="mailto:info@applified.in"
              className="link_decor footer_link_color">
              info@applified.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
