import React from 'react'

function Footer() {
    return (
        <div >
              <div className='h-[130px]'>

              </div>
            <div className='bg-gradient-to-r from-[#000] via-[#08391e] to-[#000] flex flex-col -justify-center items-center relative px-14 pt-14'>

                {/*card*/}
                <div className='footerCard bg-gradient-to-b from-[#00CA55] to-[#043F1D] w-[50%] flex justify-center items-center absolute top-[-40%]  rounded-xl p-[1px]'>
                    <div className='flex justify-between items-center bg-[#043F1D] rounded-xl w-full  p-4'>
                        <div className='text-white'>
                            <p className='text-[#49DD87] text-[10px]'>Veron Subscription</p>
                            <h2 className='text-[20px] font-semibold leading-none mt-[6px]'>Get your <br /> subscription today</h2>
                            <p className='text-[12px] mt-[6px] w-[75%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                            <button className='footerCardBtn text-white flex mt-[20px] justify-center items-center gap-3 py-3 px-3 bg-[#16a254] rounded-[50px] text-[11px]'>
                                Subscribe Now
                                <img src='./greater than.svg' className='h-[15px] w-[15px] invert ' />
                            </button>
                        </div>
                        <img src='./footerImg.svg' className='footerCardImg h-[140px] w-[140px] mr-[20px]' />
                    </div>
                </div>

                <div className='footerCont flex w-full justify-between items-center mt-[20px] py-6 border-b border-[#F4F4F4] border-opacity-[.5]'>
                <div className='footerCont-div1 flex flex-col gap-3'>
                    <div className='flex gap-2 justify-start items-center'>
                        <img src='./futnext logo.svg' className='h-[40px] w-[40px]' />
                        <h1 className='text-white text-[24px] font-semibold mb-1'>Veron</h1>
                    </div>
                    <p className='text-white text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit, sed do eiusmod tempor</p>
                    <div className='[&>*]:[&>*]:h-[25px] flex gap-3'>
                        <button><img src='./tiktok.svg' /></button>
                        <button><img src='./instagram.svg' /></button>
                        <button><img src='./twitter.svg' /></button>
                        <button><img src='./discord.svg' /></button>
                        <button><img src='./youtube.svg' /></button>
                    </div>
                </div>

                <div className='footerNavbar flex [&>*]:text-white gap-6 [&>*]:text-[14px]'>
                    <button>SBCs</button>
                    <button>Evolutions</button>
                    <button>Packs</button>
                    <button>Privacy Policy</button>
                    <button>Terms of service</button>
                </div>
            </div>

            <p className='text-[#F4F4F4] opacity-[.5] text-[12px] py-5 w-full'>Veron 2024, All rights reserved</p>
            </div>

            
        </div>
    )
}

export default Footer
