import React from 'react'
import mainLogo from "../images/people.jpg";
import vector from "../images/vector-10.svg";
import group from "../images/group-1.svg";
import rectangle from "../images/rectangle-13.svg";

const About = () => {
  return (
    <div className="about  flex justify-center items-center text-white flex-col z-10" id="about">
    <button className="mt-[100px] text-[18px] reuseBtn fontSize p-[15px] pt-[30px] pb-[30px] relative">{`<ABOUT US/>`}
    <img
      src={group}
      alt=""
      className="absolute bottom-[-108px] left-[192px] h-[107px] mobile-none"
    /></button>
    <div className="about-section ">
      <div className="w-[50%] flex justify-center items-center mobile-about-img-size">
        <img src={mainLogo} width={450} alt=""  />
      </div>
      <div className="welcomeToOurContainer flex justify-center items-center relative">
        <p className="welcomeToOurSpancyberW">
          <span className="welcomeToOur">{`<p>Welcome to our <span>`}</span>
          <span className="cyberWebClub2">Cyber Web Club</span>
          <span className="text-white">
            {`!</span> We are a group of passionate students who come together to explore the exciting world of coding and technology.`}
            <span className="span text-white">{` `}</span>
            {`Our mission is to foster a community of like-minded individuals who share a love for coding and are eager to expand their skills and knowledge.</p>`}
          </span>
        </p>
        <img
        src={vector}
        alt=""
        className="absolute bottom-[126px] left-[140px] w-[180px] mobile-position"
      />
      </div>

    </div>
  </div>
  )
}

export default About