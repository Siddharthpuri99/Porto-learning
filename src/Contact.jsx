import React from "react";
// import { FaInstagramSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="items">
            <FaInstagram  className="icons" />
          </div>
          <div className="items">
            <FaFacebook  className="icons"/>
          </div>
          <div className="items">
            <FaLinkedin className="icons" />
          </div>
          <div className="items">
            <FaGithub  className="icons"/>
          </div>
          <div className="items">
            <SiGmail  className="icons"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
