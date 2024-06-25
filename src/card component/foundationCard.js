import React from 'react'

function FoundationCard() {
  return (
    <div>
      
        <div className=' w-[310px] rounded-[10%] bg-gradient-to-r from-[#1e2a33] to-[#4389bb]  flex justify-center items-center p-[1px]'>
        <div className='h-[100%] w-[100%] rounded-[10%] bg-[#000] relative overflow-hidden p-3'>
           
            <div className='h-[50%] w-[70%] rounded-full bg-[#58B9FF]  absolute top-[-40%] z-[1] left-[15%] blur-3xl opacity-[.8]'></div>
            <div className='h-[75%] w-[75%] rounded-full bg-gradient-to-r from-[black] from-10% to-[#58B9FF] absolute bottom-[-15%] right-[-30%] rotate-[35deg] z-[-1]'></div>
            
              <div className='relative h-full w-[100%]'>
                <img src='./yellow.png' className='card-img h-[250px] w-[100%]  -relative z-[]'/>
              </div>

            </div>
        </div>
      </div>

  )
}

export default FoundationCard;



