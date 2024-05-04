import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/rauf-rzayev-b12827219"
      target="_blank rel=noreferrer"
    >
      <FaLinkedinIn />
    </a>
  

    <a href="https://www.facebook.com/rauf.rzayev.904" target="_blank" rel="noreferrer">
      <FaFacebookF />
    </a>
    <a href="https://www.instagram.com/rauf.zr/" target="_blank" rel="noreferrer">
      <BsInstagram />
    </a>
  </div>
);

export default SocialMedia;
