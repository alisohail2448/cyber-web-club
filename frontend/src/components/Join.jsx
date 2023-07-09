import React from 'react';
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";
import discord from "../images/discord.svg";

const Join = () => {
  return (
    <div className="join-us mt-[100px] w-full h-[30vh]">
      <h3 className="text-white text-3xl text-center ">{`<Join Us on Social Media/>`}</h3>
      <div className="socials flex justify-center items-center gap-10">
            <img src={twitter} alt="" className="w-[60px] mt-[60px]" />
            <img src={linkedin} alt="" className="w-[60px] mt-[60px]" />
            <img src={instagram} alt="" className="w-[60px] mt-[60px]" />
            <img src={discord} alt="" className="w-[60px] mt-[60px]" />
      </div>
      </div>
  )
}

export default Join