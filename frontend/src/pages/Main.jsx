import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Domain from "../components/Domain";
import What from "../components/What";
import Contact from "../components/Contact";
import Join from "../components/Join";
import Developers from "../components/Developers";



const Main = () => {
  return (
    <div id="scroll-container">
     
      <Home />
      <About />
      <Domain />
      <What />
      <Contact />
      <Join />
      <Developers/>
    </div>
  );
};

export default Main;
