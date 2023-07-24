import React from 'react'

const Developers = () => {
  return (
    <div className='w-full '>
         <h3 className="text-[#00FF84] text-2xl text-center ">{`<Developers/>`}</h3>
        <div className="names flex justify-center items-center gap-5 mt-8 mobile-dev">
            <a target="_blank" href="https://www.linkedin.com/in/alisohail2448/" className='hover:border-b hover:border-b-[#00FF84]'><h2 className='text-white'>{`<Sohail Akhtar Ali/>`}</h2></a>
            <a target="_blank" href="https://www.linkedin.com/in/mohammad-kaif-6a3597230/" className='hover:border-b hover:border-b-[#00FF84]'><h2 className='text-white'>{`<Mohammad Kaif/>`}</h2></a>
            <a target="_blank" href="https://www.linkedin.com/in/devenrathod/" className='hover:border-b hover:border-b-[#00FF84]'><h2 className='text-white'>{`<Deven Rathod/>`}</h2></a>
        </div>
        <p className='text-[#40f59d] text-center text-sm py-[30px]'>Cyber Web Club - 2023 &copy; Copyright</p>
    </div>
  )
}

export default Developers