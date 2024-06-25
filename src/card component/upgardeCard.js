import React from 'react'

function UpgradeCard() {
  return (
    <div>
      
        <div className=' w-[310px] rounded-[10%] bg-gradient-to-r from-[#193528] to-[#00CA55]  flex justify-center items-center p-[1px]'>
        <div className='h-[100%] w-[100%] rounded-[10%] bg-[#000] relative overflow-hidden p-3'>
           
            <div className='h-[50%] w-[70%] rounded-full bg-[#00CA55]  absolute top-[-40%] z-[1] left-[15%] blur-3xl opacity-[.8]'></div>
            <div className='h-[75%] w-[75%] rounded-full bg-gradient-to-r from-[black] from-10% to-[#00CA55] absolute bottom-[-15%] right-[-30%] rotate-[35deg] z-[-1]'></div>
            
              <div className='relative h-full w-[100%]'>
                <img src='./green.png' className='card-img h-[250px] w-[100%] -relative z-[3] '/>
              </div>

            </div>
        </div>
      </div>

  )
}

export default UpgradeCard;



