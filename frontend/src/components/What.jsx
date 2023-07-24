import React from 'react'
import rectangle from "../images/rectangle-13.svg";
import group7 from "../images/group-7.svg";
import rectangle14 from "../images/rectangle-14.svg";

const What = () => {
  return (
    <div className="what-section mb-[80px]">
        <div className="heading">
          <button className="mt-[150px] text-white  text-[22px] ml-[110px]  reuseBtn fontSize p-[15px] relative mobile-subheading">{`<What We Do/>`}
          <img
            src={group7}
            alt=""
            className="absolute top-[-42px] right-[-120px] w-[120px]"
          />
          </button>
        </div>
        <div className="domains w-full mt-[70px]  ">
          <div class="grid grid-cols-3 gap-9 px-[120px] mobile-cards">
            <div className="card-bg">
              <div className="cards">
              <div className="desc">{"<UI/UX/>"}</div>
              </div>
            </div>
            <div className="card-bg">
              <div className="cards">
              <div className="desc">{"<AL/ML/>"}</div>
              </div>
            </div>
            <div className="card-bg">
              <div className="cards">
              <div className="desc">{"<Data Science/>"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default What