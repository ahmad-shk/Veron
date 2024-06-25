import React from 'react'
import Header from '../componnet/header'
import Section1 from '../componnet/section1'
import Section2 from '../componnet/section2'
import Footer from '../componnet/footer'
import '../App.css'
function Layout() {
  return (
    <div className='layout-outer-div relative bg-black overflow-hidden flex flex-col items-center w-full'>
      <div className='layoutBlur1 w-[90%] h-[80vh] -bg-[#16a254] rounded-b-[50%] bg-gradient-to-t from-[#000] to-[#16a254] absolute z-[1] blur-[120px] top-[-7%] opacity-[.8]'>
        
      </div>
      <div className='layoutBlur2 h-[3vh] w-[80vw] bg-[#00ca55] absolute z-[2] blur-[50px] top-[-10px]'>

      </div>
      <div className='layoutBlur3 h-[2vh] w-[60vw] bg-[#20ff20] absolute z-[3] blur-[50px] top-[-25px]'>

</div>
      <img src='./vector triangles.svg' className='layout-triangle-img w--[50%] h-[75vh] absolute top-[0] z-[4] mt-[2%] ml-[3%]'/>
      <div className='layout-comp-div px-12 relative z-[5]'>
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
      </div>
    </div>
  )
}

export default Layout
