import React from "react";
import { ReactNavbar } from "overlay-navbar";

import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const logo =
    "https://img.freepik.com/free-psd/logo-mockup_35913-2089.jpg?t=st=1650440095~exp=1650440695~hmac=b88d8c318a5de4471c4196f2a9653f8ff831950a342d5fcb00bbb5a4d803831f&w=900";
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219, 48%, 8%)"
      burgerColor="hsl(250, 100%, 75%)"
      burgerColorHover="hsl(250, 100%, 75%)"
      logo={logo}
      logoWidth="250px"
      logoHoverColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="#FF5F00"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
      profileIconColor="HSL(250, 100%, 75%)"
      profileIconColorHover="white"
    />
  );
};

export default Header;
