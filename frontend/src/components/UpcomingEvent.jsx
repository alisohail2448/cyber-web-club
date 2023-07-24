import React from 'react'
import Card from './Card'

const UpcomingEvent = () => {
  return (
    <div className='w-full px-[223px] mobile-event-pad'>
      <h3 className="text-[#00FF84] text-2xl mt-[90px] ">{`<Upcoming Events/>`}</h3>
      <Card title="Web Development Workshop" venue="C5 Hall" date=" 1 July TO 15 July" timing=" 10:30AM TO 12:30PM" learn="HTML,CSS & JAVASCRIPT REACTJS, NODEJS" />
      <Card title="Web Development Workshop" venue="C5 Hall" date=" 1 July TO 15 July" timing=" 10:30AM TO 12:30PM" learn="HTML,CSS & JAVASCRIPT REACTJS, NODEJS" />
    </div>
  )
}

export default UpcomingEvent