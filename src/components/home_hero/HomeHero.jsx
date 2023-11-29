import React from "react";
import "./HomeHero.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <>
      <div
        className="home-hero-bg drop-in"
        style={{
          backgroundImage: `url(${images.curv_darkgreen})`,
          // backgroundImage: `url(${images.curv_darkgreen})`,
          backgroundSize: "cover",
          backgroundColor: "#003e29",
          height: "670px",
          marginTop:"5rem",
        }}>
        {/* <img
        src={images.curv}
        alt=""
        style={{ background: "seagreen", height: "670px", width: "100%" }}
      /> */}
        <div className="HomeHero_main drop-in-2">
          <div className="heading_main_hero">
            <h1 className="heading_main_h1">
              Simplified Web & Mobile Application Development Company.
            </h1>
            <p className="heading_main_p">
              Streamline your digital presence with our seamless web and mobile
              app development solutions. We craft captivating user experiences
              that drive business growth.
            </p>
            <div className="hero_btn_main">
              {/* <button className="button">Learn more</button> */}

              <Link to="Contact">
                <button className="button">Contact us</button>
              </Link>
            </div>
          </div>
          <div className="women_hero_main">
            <img src={images.web_elements} alt="" className="women_hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
