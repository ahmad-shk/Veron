import React from 'react';
import FoundationCard from '../card component/foundationCard';

function Section2() {
  const itemDetail = [
    { name: "nike FellFree 2022", price: 1900, colorborder: "#4389bb", image: './yellow.png', colorin: "#58B9FF" },
    { name: "Nike Spencer", price: 1900, colorborder: "#C3C3C3", image: './white.png', colorin: "#C3C3C3" },
    { name: "Nike Air hustler", price: 1900, colorborder: "#98DD1F", image: './grey.png', colorin: "#98DD1F" },
    { name: "Nike Black Mamba", price: 1900, colorborder: "#6c4b7d", image: './black.png', colorin: "#6c4b7d" },
    { name: "Nike Silver surfer", price: 1900, colorborder: "#CAB600", image: './silver.png', colorin: "#CAB600" },
    { name: "Nike Chlorophyll", price: 1900, colorborder: "#00CA55", image: './green.png', colorin: "#00CA55" },
  ];

  return (
    <div className='py-4'>
      <div className='section2-part1 flex justify-center items-center'>
        <div>
          <h3 className='text-[#F4F4F4] font-semibold text-[18px] text-center'>Best Offers For You</h3>
          <p className='text-[#6B6B6B] text-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
        </div>
      </div>

      <div className='flex flex-col justify-center'>
        <div className='cardsCont flex flex-wrap justify-between gap-4 py-6'>
          {itemDetail.map((item, index) => (
            <FoundationCard
              key={index}
              price={item.price}
              name={item.name}
              colorborder={item.colorborder}
              image={item.image}
              colorin={item.colorin}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
