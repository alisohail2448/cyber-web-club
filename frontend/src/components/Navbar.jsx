import React from "react";
import logo from "../images/image-1-traced.svg";
import rectangle from "../images/rectangle-5.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="leftBtn">
          <Link className="link z-20" to="/">{`<HOME/>`}</Link>
          <img
            src={rectangle}
            alt=""
            className="absolute left-[224px] top-[55px] cursor-pointer z-0"
          />
          <ScrollLink  to="about" className="link">{`<ABOUT US/>`}</ScrollLink>
          <div className="logo">
            <img alt="logo" src={logo} width={40} />
            <div style={{ color: "#00FF84", fontSize: "20px" }}>
              CYBER WEB CLUB
            </div>
          </div>
        </div>
        <div className="rightBtn">
          <Link className="link ml-[90px]" to="/event">{`<EVENTS/>`}</Link>
          <Link className="link" to="/event">{`<WORKSHOPS/>`}</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
