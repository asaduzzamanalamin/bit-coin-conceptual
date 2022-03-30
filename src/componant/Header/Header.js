import React from 'react';

import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
   return (
      <div className='work3 container'>
         <div>
            <h4 className='work4'>Crypto <span className='work5'>CaFee</span></h4>
            </div>
         <div className='ms-auto work6'>
        <CustomLink to='/'>Home</CustomLink>
        <CustomLink to='/coins'>Coins</CustomLink>
        <CustomLink to='/contact'>Contact</CustomLink>
        <CustomLink to='/about'>About Us</CustomLink>
        {/* https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false */}

        {/* curl -X 'GET' \
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false' \
  -H 'accept: application/json' */}


{/* curl -X 'GET' \
  'https://api.coingecko.com/api/v3/coins/bitcoin' \
  -H 'accept: application/json' */}
         </div>
      </div>
   );
};

export default Header;