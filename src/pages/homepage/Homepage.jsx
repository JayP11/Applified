import React from "react";
import HomeHero from "../../components/home_hero/HomeHero";
import images from "../../constants/images";
import Strategy from "../../components/strategy/Strategy";
import ServicesHome from "../../components/services_home/ServicesHome";
import Tools from "../../components/tools/Tools";

const Homepage = () => {
  return (
    <>
      <HomeHero />
      <Strategy />
      <Tools/>
      <ServicesHome/>
    </>
  );
};

export default Homepage;
