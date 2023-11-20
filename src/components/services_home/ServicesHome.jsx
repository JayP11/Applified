import React from "react";
import "./ServicesHome.css";
import images from "../../constants/images";

const ServicesHome = () => {
  return (
    <section className="ServicesHome_main_sec">
      <div className="ServicesHome_main">
        <div>
          <div>
            <h1 className="heading_components">Our Services</h1>
          </div>
          <p className="ServicesHome_para">
            Empower your business with our comprehensive IT services. We provide
            tailored solutions, expert support, and cutting-edge technology to
            drive your success.
          </p>
        </div>
        <div>
          <div className="services_main">
            <div className="services_main_inner">
              <img
                src={images.webhost}
                alt="webapps"
                className="sevices_icon"
              />
              <h3>WEB HOSTING SERVICES</h3>
              <p className="ServicesHome_innerpara">
                If you own a business, Web Hosting is a necessity. Get a custom
                made home for your website. We provide Shared, Wordpress, VPS,
                Dedicated Hostings, Domain & other Web -Hosting service
                solutions.
              </p>
            </div>
            <div className="services_main_inner">
              <img
                src={images.content}
                alt="webapps"
                className="sevices_icon"
              />
              <h3>CONTENT WRITING</h3>
              <p className="ServicesHome_innerpara">
                We create compelling content. Our job is to fuel your growth by
                writing SEO Supported Web Content, Articles, Product
                Description, Brochures , Brand Name & much more
              </p>
            </div>
          </div>
          <div className="services_main">
            <div className="services_main_inner">
              <img src={images.brand} alt="brand" className="sevices_icon" />
              <h3>BRAND ELEVATION</h3>
              <p className="ServicesHome_innerpara">
                Branding is the art of Differentiation. We aim to modernize &
                make Brands exceptional through creating Content, Tagline,
                Slogans Logo Re- Designing etc.
              </p>
            </div>
            <div className="services_main_inner">
              <img
                src={images.socialmediaicon}
                alt="social media icon"
                className="sevices_icon"
              />
              <h3>SOCIAL MEDIA INFLUENCING</h3>
              <p className="ServicesHome_innerpara">
                Social Media presence is an essential part in Brand Building. We
                help you create a powerful profile to engage customers & boost
                your Brand while integrating all your pages at one place
              </p>
            </div>
          </div>
        </div>
        <img
          src={images.costeffectivesol}
          alt="costeffectivesol.png"
          className="costeffectivesol"
        />
      </div>
    </section>
  );
};

export default ServicesHome;
