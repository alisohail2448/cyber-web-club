import React from "react";
import Navbar from "../components/Navbar";
import UpcomingEvent from "../components/UpcomingEvent";
import PastEvents from "../components/PastEvents";

const Event = () => {
  return (
    <>
      <div className="event-section">
        <Navbar />
        <div className="flex items-center flex-col">
        <h3 className="text-white text-3xl text-center mt-[90px] ">{`<Workshops and Events/>`}</h3>
        <UpcomingEvent/>
        <PastEvents/>
        </div>
      </div>
    </>
  );
};

export default Event;
