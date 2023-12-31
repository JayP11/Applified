import React, { useState } from "react";
import "./Tools.css";
import images from "../../constants/images";
import { FaLaptopCode } from "react-icons/fa";
import {
  TbDeviceMobileCode,
  TbSettingsCode,
  TbAppsFilled,
} from "react-icons/tb";

const Tools = () => {
  const [faqData, setFaqData] = useState([
    {
      // id: 0,
      icon: <FaLaptopCode />,
      question: "  Web APP Development",
      answer:
        "To build accessible, responsive and secure web applications with latest technology. With bulletproof code and stunning interfaces, we provide both front-end and back-end development.",
    },
    {
      // id: 1,
      icon: <TbDeviceMobileCode />,
      question: "  Mobile APP Development",
      answer:
        "To build visually pleasing applications with attention to detail and bearing in mind every peculiarity of the operating system.We build custom android, ios and hybrid apps tailored to the clients needs.",
    },
    {
      icon: <TbSettingsCode />,
      question: "  Turn-Key Software",
      answer:
        "We have certain ready made softwares available with us which can be useful for other respective industries. Using digital technology, reinvent your business model and create new growth channels.",
    },
    {
      icon: <TbAppsFilled />,
      question: "  Custom APPS Development",
      answer:
        "We sculpt your thoughts and turn it into reality. To speed up the digital transformation, we leverage our expertise with our cross functional experts and help you unlock innovation.",
    },
  ]);

  const [expanded, setExpanded] = useState(0);

  const toggleAccordion = (index) => {
    setExpanded((prevExpanded) => (prevExpanded === index ? null : index));
  };

  return (
    <div className="Tools_main">
      <div>
        <h1 className="heading_components">
          Tools We Use To Solve Your Problem
        </h1>
      </div>
      <div className="Tools_sections_main">
        <div className="tools_img_main">
          <img src={images.tools} alt="" className="tools_img" />
        </div>
        <div className="faq_services_main">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="faq_services_inner"
              onClick={() => {
                toggleAccordion(index);
              }}>
              <div className="faq-question">
                <div className="icon_main" style={{ marginBottom: 10 }}>
                  {item.icon}
                </div>
                <div className="" style={{ marginBottom: 10 }}>
                  <h3 className="question_h3">{item.question}</h3>
                </div>
              </div>
              <div
                className={`faq-answer ${
                  expanded === index
                    ? "visible"
                    : "hidden faq-answer_margin_not"
                }`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
