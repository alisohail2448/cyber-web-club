import React from 'react'
import rectangle from "../images/rectangle-13.svg";
import group7 from "../images/group-7.svg";
import rectangle14 from "../images/rectangle-14.svg";

const What = () => {
  return (
    <div className="what-section mb-[80px]">
        <div className="heading">
          <button className="mt-[80px] text-white  text-[22px] ml-[110px]">{`<What We Do/>`}</button>
          <img
            src={rectangle}
            alt=""
            className="absolute top-[2415px] left-[100px] w-[197px]"
          />
          <img
            src={group7}
            alt=""
            className="absolute top-[2360px] left-[280px] w-[135px]"
          />
        </div>
        <div className="domains w-full mt-[150px]  ">
          <div class="grid grid-cols-3 gap-9 px-[120px]">
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

export default What