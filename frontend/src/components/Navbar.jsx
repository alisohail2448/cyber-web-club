import React, { useState } from "react";
import logo from "../images/image-1-traced.svg";
import rectangle from "../images/rectangle-5.svg";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { Bars3Icon, BeakerIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div className="navbar ">
        <div className="leftBtn ">
          {/* <Link className="link z-20" to="/">{`<HOME/>`}</Link> */}
          <Link to="/" className="reuseBtn">
            {`<HOME/>`}
          </Link>
          {/* <img
            src={rectangle}
            alt=""
            className="absolute left-[224px] top-[55px] cursor-pointer z-0"
          /> */}
          <ScrollLink to="about" className="link">{`<ABOUT US/>`}</ScrollLink>
          <div className="logo">
            <img alt="logo" src={logo} width={40} />
            <div style={{ color: "#00FF84", fontSize: "20px" }}>
              CYBER WEB CLUB
            </div>
          </div>
        </div>
        <div className="rightBtn">
          <Link className="link ml-[90px] tab-size" to="/event">{`<EVENTS/>`}</Link>
          <Link className="link" to="/event">{`<WORKSHOPS/>`}</Link>
        </div>
      </div>
      <div className="mobile-div">
        <div className="navbar-mobile ">
          <div className="">
            <Link to="/" >
            <img alt="logo" src={logo} width={35} />
            </Link>
          </div>
          <div className="hamburger ">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}

                <label htmlFor="my-drawer-4" className="drawer-button">
                  {" "}
                  <Bars3Icon className="text-white w-[38px] cursor-pointer" />
                </label>
              </div>
              <div className="drawer-side z-50">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full pt-[40px] bg-glass text-base-content text-center">
                <label htmlFor="my-drawer-4" className="drawer-button flex justify-end">
                  {" "}
                <XMarkIcon className="text-[#00f17d] w-[25px] cursor-pointer mr-[35px] mt-[8px] " />
                </label>
                  {/* Sidebar content here */}
                  <li className="flex flex-col justify-center items-center text-center text-white mt-2 ">
                    <Link
                      to="/"
                      className="link flex flex-col justify-center items-center no-underline text-lg mobile-btn "
                    >
                      {`<HOME/>`}
                    </Link>
                  </li>
                  <li className="flex flex-col justify-center items-center text-white mt-2">
                    <Link
                      className="link flex flex-col justify-center items-center text-center text-lg no-underline mobile-btn"
                      to="/about"
                    >{`<About us/>`}</Link>
                  </li>
                  <li className="flex flex-col justify-center items-center text-white mt-2 ">
                    {" "}
                    <Link
                      className="link flex flex-col justify-center items-center no-underline text-lg mobile-btn"
                      to="/event"
                    >{`<Events/>`}</Link>
                  </li>
                  <li className="flex flex-col justify-center items-center text-white mt-2 ">
                    {" "}
                    <Link
                      className="link flex flex-col justify-center items-center no-underline text-lg mobile-btn"
                      to="/event"
                    >{`<WORKSHOPS/>`}</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
