import React from 'react'
import Navbar from './Navbar'
import logo from "../images/group-5.svg";
import mainLogo from "../images/people.jpg";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-section ">
      <Navbar />
      <div className="flex justify-center items-center w-full mt-[100px] flex-col gap-2">
        <img src={logo} alt="" className='mobile-size home-image' />
        {/* <h2 className="text-white text-[44px] mt-2">CYBER WEB CLUB</h2> */}
        <button data-text="Awesome" className="button mobile-heading">
          <span className="actual-text">&nbsp;Cyber&nbsp;Web&nbsp;Club&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;Cyber&nbsp;Web&nbsp;Club&nbsp;</span>
        </button>
        <h4 className="text-white text-2xl">HVPM COET</h4>
        <Link to="/registration"
          style={{
            background: "#00CF6B",
            
            padding: "10px 20px",
            borderRadius: "8px",
            color: "white",
            marginTop: "30px",
          }}
        >{`<JOIN US/>`}</Link>
      </div>
      <div className="bg-blank"></div>
    </div>
  )
}

export default Home