import React from 'react'
import mainLogo from "../images/people.jpg";
import vector from "../images/vector-10.svg";
import group from "../images/group-1.svg";
import rectangle from "../images/rectangle-13.svg";

const About = () => {
  return (
    <div className="about  flex justify-center items-center text-white flex-col z-10" id="about">
    <button className="mt-[80px] text-[22px]">{`<ABOUT US/>`}</button>
    <img
      src={rectangle}
      alt=""
      className="absolute top-[866px] w-[167px]"
    />
    <img
      src={group}
      alt=""
      className="absolute top-[911px] left-[754px] w-[140px]"
    />
    <div className="about-section ">
      <div className="w-[50%] flex justify-center items-center">
        <img src={mainLogo} width={450} alt="" />
      </div>
      <div className="welcomeToOurContainer flex justify-center items-center">
        <p className="welcomeToOurSpancyberW">
          <span className="welcomeToOur">{`<p>Welcome to our <span>`}</span>
          <span className="cyberWebClub2">Cyber Web Club</span>
          <span className="text-white">
            {`!</span> We are a group of passionate students who come together to explore the exciting world of coding and technology.`}
            <span className="span text-white">{` `}</span>
            {`Our mission is to foster a community of like-minded individuals who share a love for coding and are eager to expand their skills and knowledge.</p>`}
          </span>
        </p>
      </div>
      <img
        src={vector}
        alt=""
        className="absolute top-[1467px] left-[800px] w-[160px]"
      />
    </div>
  </div>
  )
}

export default About