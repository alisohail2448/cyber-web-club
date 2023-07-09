import React from 'react'
import rectangle from "../images/rectangle-13.svg";
import rectangle14 from "../images/rectangle-14.svg";
import group6 from "../images/group-6.svg";


const Domain = () => {
  return (
    <div className="domain-section h-[870px]">
    <div className="heading">
      <button className="mt-[80px] text-white  text-[22px] ml-[110px]">{`<DOMAINS/>`}</button>
      <img
        src={rectangle}
        alt=""
        className="absolute top-[1600px] left-[98px] w-[167px]"
      />
      <img
        src={group6}
        alt=""
        className="absolute top-[1652px] left-[35px] w-[135px]"
      />
    </div>
    <div className="domains w-full mt-[150px]  ">
      <div class="grid grid-cols-3 gap-9 px-[120px]">
        <div className="card-bg">
          <div className="img">
            <img src={rectangle14} alt="" />
          </div>
          <div className="desc">{"<Development/>"}</div>
        </div>
        <div className="card-bg">
          <div className="img">
            <img src={rectangle14} alt="" />
          </div>
          <div className="desc">{"<DevOps/>"}</div>
        </div>
        <div className="card-bg">
          <div className="img">
            <img src={rectangle14} alt="" />
          </div>
          <div className="desc">{"<Cyber Security/>"}</div>
        </div>
        <div className="card-bg">
          <div className="img">
            <img src={rectangle14} alt="" />
          </div>
          <div className="desc">{"<UI/UX/>"}</div>
        </div>
        <div className="card-bg">
          <div className="img">
            <img src={rectangle14} alt="" />
          </div>
          <div className="desc">{"<AL/ML/>"}</div>
        </div>
        <div className="card-bg">
          <div className="img">
            <img src={rectangle14} alt="" />
          </div>
          <div className="desc">{"<Data Science/>"}</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Domain