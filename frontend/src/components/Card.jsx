import React from 'react'

const Card = ({title, venue, date, timing,learn}) => {
  return (
    <div className='flex gap-5 mt-[40px] mb-[50px]'>
        <div className="box w-[40%] h-[250px]  bg-[#3DBBD7]">

        </div>
        <div className="text text-white flex flex-col w-[60%] gap-3 text-2xl ml-[70px]">
            <span className='text-[#00FF84]'>{title}</span>
            <span>Venue: {venue}</span>
            <span>Date: {date}</span>
            <span>Timing: {timing}</span>
            <span>You will learn: - <span  className='text-[#00FF84]'>{learn}</span></span>
        </div>
    </div>
  )
}

export default Card