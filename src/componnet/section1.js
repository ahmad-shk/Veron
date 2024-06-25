import React from 'react'


function Section1() {
  return (
    <div className='section1-outer-div bg-transparent py-8'>
    <div className='section1-inner-div flex flex-col justify-center items-center gap-5 bg-transparent py-4'>
      <h1 className='bg-gradient-to-r from-[#00ca55] via-[#c3ff5a] via-60% to-[#c3ff5a] text-transparent bg-clip-text text-center text-[28px] font-bold leading-8'>WEAR CONFIDENCE <br/> WEAR Veron </h1>
      <p className='text-[#e4e4e4] text-center text-[13px]'>Shoes for everyone</p>
      <div className='flex justify-center items-center gap-3'>
        <button className='section1-btn bg-[#18A353] px-4 py-2 rounded-[25px] text-[#F4F4F4] text-[14px]'>Sneakers</button>
        <button className='section1-btn bg-[#18A353] px-4 py-2 rounded-[25px] text-[#F4F4F4] text-[14px]'>Joggers</button>
        <button className='section1-btn bg-[#18A353] px-4 py-2 rounded-[25px] text-[#F4F4F4] text-[14px]'>Slides</button>
      </div>
    </div>
    </div>
  )
}

export default Section1
