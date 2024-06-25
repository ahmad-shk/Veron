import React from 'react'

function BigCard() {
  return (
    <div>
      <div className='h-[400px] w-[450px] bg-[#373838] flex justify-center items-center rounded-lg '>
        <div className='h-[97%] w-[97%] rounded-[10%] bg-gradient-to-r from-[#193528] from-10% to-[#00CA55]  flex justify-center items-center'>
        <div className='h-[99.5%] w-[99.5%] rounded-[10%] bg-[black] relative overflow-hidden p-5'>
           
            <div className='h-[50%] w-[70%] rounded-full bg-[#00CA55] absolute top-[-40%] left-[15%] blur-3xl opacity-[.8]'></div>
            <div className='h-[75%] w-[75%] rounded-full bg-gradient-to-r from-[black] from-10% to-[#00CA55] absolute bottom-[-15%] right-[-30%] rotate-[35deg] z-[0]'></div>
            
            <p className='text-[#8fc436] mb-[8px]'>Upgrades</p>
            <h2 className='text-white mb-[8px] text-[20px] font-bold'>Weekly 90+ TOTS Players Pick</h2>

            <div className='relative z-[5] flex'>
              
              <div className='w-full'>
                <p className='text-white mb-[30px]'>Average Return:200k</p>
                <div className=' flex items-center mb-[15px]'><img src='./reuse_107790.png' className='h-[20px] w-[20px] invert'/><p className='text-[#3d4142] ml-[15px]'>Non-Repeatable</p></div>
                <div className=' flex items-center mb-[15px]'><img src='./clock.svg' className='h-[20px] w-[20px] invert'/><p className='text-white ml-[15px]'>6 Days Remaining</p></div>
                <div className=' flex items-center'><img src='./coins.svg' className='h-[20px] w-[20px] invert'/><p className='text-white ml-[15px]'>13,000 Cost</p></div>              
              </div>

              <div className='flex justify-center w-full'>
                <img src='./WhatsApp Image 2024-06-07 at 12.02.52 AM.svg' className='h-[180px] w-[150px]'/>
              </div>

            </div>
                  
            <button className='text-white flex  justify-center items-center gap-5 p-4 px-6 bg-[#16a254] rounded-[50px] absolute bottom-[6%] z-[5]'>
                View Solutions 
                <img src='./greater than.svg' className='h-[15px] w-[15px] invert '/>
            </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BigCard;
