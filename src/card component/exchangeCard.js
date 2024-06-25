import React from 'react'

function ExchangeCard() {
  return (
    <div>
      
        <div className=' w-[310px] rounded-[10%] bg-gradient-to-r from-[#2f3e1b] to-[#98DD1F]  flex justify-center items-center p-[1px]'>
        <div className='h-[100%] w-[100%] rounded-[10%] bg-[#000] relative overflow-hidden p-3'>
           
            <div className='h-[50%] w-[70%] rounded-full bg-[#98DD1F]  absolute z-[1] top-[-40%] left-[15%] blur-3xl opacity-[.8]'></div>
            <div className='h-[75%] w-[75%] rounded-full bg-gradient-to-r from-[black] from-10% to-[#98DD1F] absolute bottom-[-15%] right-[-30%] rotate-[35deg] z-[-1]'></div>
            
           
              <div className='relative h-full w-[100%] flex justify-center items-center'>
                <img src='./grey.png' className='card-img h-[250px] w-[100%]  -relative z-[] '/>
                <h1 className='text-white absolute text-center hover:text-[32px] hover:font-semibold hover:text-[skyblue] transition-[.5s]'>
                  Nike Air hustler<br/><br/>For 9k rs.
                </h1>
              </div>

            </div>
                  
      
        </div>
      </div>

  )
}

export default ExchangeCard;


