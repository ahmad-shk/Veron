import React from 'react';
import { Link } from 'react-router-dom';

function FoundationCard({ price, name, colorborder, image, colorin }) {
  const cardStyle = {
    background: colorin,
  };

  return (
    <div>
      <Link to="/payment">
        <div className={`w-[310px] rounded-[10%] bg-gradient-to-r from-[#1e2a33] to-[${colorborder}] flex justify-center items-center p-[1px]`}>
          <div className='h-[100%] w-[100%] rounded-[10%] bg-[#000] relative overflow-hidden p-3'>
            <div style={cardStyle} className='h-[50%] w-[70%] rounded-full absolute top-[-40%] z-[1] left-[15%] blur-3xl opacity-[.8]'></div>
            <div className='h-[75%] w-[75%] rounded-full bg-gradient-to-r from-[black] from-10% to-[#58B9FF] absolute bottom-[-15%] right-[-30%] rotate-[35deg] z-[-1]'></div>
            <div className='relative h-full w-[100%] flex justify-center items-center'>
              <img src={image} className='card-img h-[250px] w-[100%] relative z-0' alt={`${name}`} />
              <h1 className='text-white absolute text-center hover:text-[32px] hover:font-semibold hover:text-[white] transition-[.5s]'>
                {name}<br/><br/>For {price} rs.
              </h1>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FoundationCard;
