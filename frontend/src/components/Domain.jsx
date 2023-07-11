import React from 'react'
import group6 from "../images/group-6.svg";


const Domain = () => {
  return (
    <div className="domain-section h-[870px]">
      <div className="heading">
        <button className="mt-[80px] text-white  ml-[110px] reuseBtn fontSize p-[15px] mobile-subheading">{`<DOMAINS/>`}</button>
        <img
          src={group6}
          alt=""
          className="absolute  left-[55px] w-[120px] mobile-none"
        />
      </div>
      <div className="domains w-full mt-[100px]  ">
        <div class="grid grid-cols-3 gap-9 px-[120px] mobile-cards">
          <div className="card-bg">
            <div className="cards">     
             <div className="desc">{"<Development/>"}</div>
            </div>
          </div>
          <div className="card-bg">
            <div className="cards">
              <div className="desc">{"<DevOps/>"}</div>
            </div>
          </div>
          <div className="card-bg">
            <div className="cards">
              <div className="desc">{"<Cyber Security/>"}</div>
            </div>
          </div>
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

export default Domain