import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is Shubham Singh. I am a Full-Stack Developer and a
          tutorial on Youtube channel called <b> 6 Pack Programmer</b>
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/ssshubham12" target="black">
          <BsGithub />
        </a>
        <a href="https://youtube.com/6packprogrammer/" target="black">
          <BsYoutube />
        </a>
        <a
          href="https://www.codingninjas.com/codestudio/profile/00a59957-c158-4e7e-a431-68cc511a6dbb"
          target="black"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-kumar-singh-02b22a233/"
          target="black"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
