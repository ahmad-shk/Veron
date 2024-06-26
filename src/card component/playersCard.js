import React from 'react'

function PlayersCard() {
  return (
    <div>
      
        <div className=' w-[310px] rounded-[10%] bg-gradient-to-r from-[#1d1d11] to-[#CAB600]  flex justify-center items-center p-[1px]'>
        <div className='h-[100%] w-[100%] rounded-[10%] bg-[#000] relative overflow-hidden p-3'>
           
            <div className='h-[50%] w-[70%] rounded-full bg-[#CAB600]  absolute z-[1] top-[-40%] left-[15%] blur-3xl opacity-[.8]'></div>
            <div className='h-[75%] w-[75%] rounded-full bg-gradient-to-r from-[black] from-10% to-[#CAB600] absolute bottom-[-15%] right-[-30%] rotate-[35deg] z-[-1]'></div>
            
              <div className='relative h-full w-[100%] flex justify-center items-center'>
                <img src='./silver.png' className='card-img h-[250px] w-[100%] -relative z-[]'/>
                <h1 className='text-white absolute text-center hover:text-[32px] hover:font-semibold hover:text-[red] transition-[.5s]'>
                  Nike Silver surfer<br/><br/>For 8k rs.
                </h1>
              </div>

            </div>
        </div>
      </div>

  )
}

export default PlayersCard;


