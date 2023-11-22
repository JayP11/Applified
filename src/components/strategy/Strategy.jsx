import React from "react";
import "./Strategy.css";
import images from "../../constants/images";

const Strategy = () => {
  return (
    <div className="Strategy_main">
      <div>
        <h1 className="heading_components">Our Problem Solving Strategy</h1>
      </div>
      <div className="Strategy_content_main">
        {/* <h1 className="Strategy_content_no">01</h1> */}
        <div className="Strategy_content_inner">
          <img
            src={images.empathy_icon}
            alt="EMPATHIZE WITH THE CUSTOMER"
            className="empathy_icon"
          />
          <h2 className="heading_inner_strategy">
            Empathize With The Customer
          </h2>
          {/* <p className="para_inner_strategy">
            We understand your needs, and we're here to make your experience
            exceptional. Your satisfaction is our priority, and we're committed
            to delivering the best for you.
          </p> */}
        </div>
        <div className="Strategy_content_inner">
          {/* <h1 className="Strategy_content_no">02</h1> */}
          <img
            src={images.probem_icon}
            alt="DEFINE PROBLEM"
            className="empathy_icon"
          />
          <h2 className="heading_inner_strategy">Define The Problem</h2>
          {/* <p className="para_inner_strategy">
            Defining the problem is our first step. We analyze and pinpoint the
            challenge, providing clarity for effective solutions that meet your
            specific needs.
          </p> */}
        </div>
        <div className="Strategy_content_inner">
          {/* <h1 className="Strategy_content_no">03</h1> */}

          <img
            src={images.solution}
            alt="IDEATE SOLUTIONS"
            className="empathy_icon"
          />

          <h2 className="heading_inner_strategy">Ideate Solutions</h2>
          {/* <p className="para_inner_strategy">
            Inspired by your unique challenges, we ideate innovative solutions.
            Our creative minds explore possibilities to design custom strategies
            that drive success for your goals.
          </p> */}
        </div>
        <div className="Strategy_content_inner">
          {/* <h1 className="Strategy_content_no">04</h1> */}
          <img
            src={images.trial}
            alt="TRIAL AND TEST"
            className="empathy_icon"
          />
          <h2 className="heading_inner_strategy">Trial And Test</h2>
          {/* <p className="para_inner_strategy">
            We believe in trials and rigorous testing. Before implementation, we
            validate our solutions, ensuring they perform optimally and exceed
            expectations for your peace of mind.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Strategy;
