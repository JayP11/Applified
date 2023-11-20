import React, { useState } from "react";
import "./ContactUsPage.css";
import { mobileValidate } from "../../utils/helpers";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");

  return (
    <div className="ContactUsPage_main">
      <div className="ContactUsPage_form">
        <div>
          <h1>CONTACT US</h1>
        </div>
        <div>
          <form className="c_form">
            <h4 className="c-lbl">Name</h4>
            <input type="text" placeholder="" className="c-txt" />
            <h4 className="c-lbl">Number</h4>
            <input
              type="text"
              placeholder=""
              name="field-name"
              value={number}
              maxLength={10}
              className="c-txt"
              //   onChange={(e) => {
              //     if (mobileValidate(e.target.value)) {
              //       setnumber(e.target.value);
              //     }
              //   }}
            />
            <h4 className="c-lbl">Email</h4>
            <input type="text" placeholder="" value={email} className="c-txt" />
            <lable className="c-lbl">Subject</lable>
            <input
              type="text"
              placeholder=""
              //   value={subject}
              //   onChange={(e) => setsubject(e.target.value)}
              className="c-txt"
            />
            <h4 className="c-lbl">Descreption</h4>
            <textarea
              placeholder="Please leave comment here..."
              //   value={description}
              className="c-msg-txt"
              //   onChange={(e) => setdescription(e.target.value)}
            ></textarea>
          </form>
        </div>
        <div>
          <button className="button">SUBMIT</button>
        </div>
      </div>
      <div className="ContactUsPage_details">
        <div className="ContactUsPage_details_inner">
          <h1>REACHING TO US IS EASY...</h1>
        </div>
        <div className="ContactUsPage_details_inner">
          <div className="ContactUsPage_phoneno">
            <h4>PHONE</h4>
            <a href="tel:82000700450" className="link_decor">
              +91 820007 00450
            </a>
          </div>
          <div className="ContactUsPage_email">
            <h4>EMAIL</h4>
            <a href="mailto:info@applified.in" className="link_decor">
              info@applified.in
            </a>
          </div>
          <div className="ContactUsPage_linkdin">
            <h4>LINKDIN</h4>
            <Link to="https://www.linkedin.com/in/kedar-dave-applified/" style={{textDecoration:"none",color:"black"}}>
              https://www.linkedin.com/in/kedar-dave-applified
            </Link>
          </div>
          <div className="ContactUsPage_office">
            <h4>OFFICE</h4>
            301, Pride Square, JK Chowk,
            <br /> Opp Pushkardham, University Road,
            <br />
            Rajkot, Gujarat, India
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14767.205165684476!2d70.7561212!3d22.2855158!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbb81c917bb5%3A0x815d45b2c4636adc!2sApplified!5e0!3m2!1sen!2sin!4v1700463503767!5m2!1sen!2sin"
              width="90%"
              height="300"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;