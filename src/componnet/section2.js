import React from 'react'
// import SmallCard from '../card component/upgardeCard'
import UpgradeCard from '../card component/upgardeCard'
import ExchangeCard from '../card component/exchangeCard'
import FoundationCard from '../card component/foundationCard'
import IconCard from '../card component/iconCard'
import ChallengeCard from '../card component/challengeCard'
import '../App.css';
import PlayersCard from '../card component/playersCard'
function Section2() {
  return (
    <div className='py-4'>

      <div className='section2-part1 flex justify-between items-center'>
        <div>
        <h3 className='text-[#F4F4F4] font-semibold text-[18px]'>Squad building Challenges</h3>
        <p className='text-[#6B6B6B] text-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
        </div>
        <div className='search-div flex gap-2'>
            <div className='relative w-[250px] h-[40px] rounded-[25px] '><img src='./searchIcon.svg' className='absolute top-[25%]  left-[10px]'/><input type='text' placeholder='Search' className='searchBar bg-transparent text-white w-[100%] h-[100%] outline-none border border-[#7F7F7F] rounded-[25px] p-1 pl-[40px]'/></div>
            <select className='recentBar bg-transparent outline-none border border-[#7F7F7F] rounded-[25px] text-white px-2'>
                <option>Most Recent</option>
            </select>
        </div>
      </div>

      <div className='flex flex-col justify-center'>
      <div className='cardsCont flex flex-wrap justify-between gap-4 py-6'>
    
      <FoundationCard/>
      <IconCard/>
      <UpgradeCard/>
      <PlayersCard/>

      <FoundationCard/>
      <IconCard/>
      <UpgradeCard/>
      <PlayersCard/>

      <ChallengeCard/>
      <ExchangeCard/>
      <FoundationCard/>
      <IconCard/>

      <ChallengeCard/>
      <ExchangeCard/>
      <UpgradeCard/>
      <PlayersCard/>

      
        </div>
        <div className='py-8'>
        <button className='m-auto text-white flex justify-center items-center gap-2 py-2 px-4 bg-[#16a254] rounded-[50px] text-[11px] '>
                Order Now
                
            </button>
            </div>
      </div>
    </div>
  )
}

export default Section2
