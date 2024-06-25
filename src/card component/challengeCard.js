import React from 'react'

function ChallengeCard() {
  return (
    <div>
      
        <div className=' w-[310px] rounded-[10%] bg-gradient-to-r from-[#181a1b] to-[#C3C3C3]  flex justify-center items-center p-[1px]'>
        <div className='h-[100%] w-[100%] rounded-[10%] bg-[#17191b] relative overflow-hidden p-3'>
           
            <div className='h-[50%] w-[70%] rounded-full bg-[#C3C3C3] absolute z-[1] top-[-40%] left-[15%] blur-3xl opacity-[.8]'></div>
            <div className='h-[75%] w-[75%] rounded-full bg-gradient-to-r from-[#17191b] from-10% to-[#C3C3C3] absolute bottom-[-15%] right-[-30%] rotate-[35deg] opacity-[.3] z-[-1]'></div>
            
            
              
             
<div className='flex justify-center items-center h-full w-full'>
              
                <img src='./white.png' className='- h-[250px] w-[100%] -relative z-[]'/>
                </div>   

           </div>
       </div>
      </div>

  )
}

export default ChallengeCard;
