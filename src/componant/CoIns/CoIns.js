import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';
import './CoIns.css';


const CoIns = () => {
   const [coins , setCoins] = useState([]);
   const [loading , setLoading] =useState(false);
   useEffect(()=>{
      setLoading(true)
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
      .then(res=>res.json())
      .then(data =>setCoins(data));
      setLoading(false);
   },[])
   return (
      <>
      {loading ? <Spinner></Spinner>: <div>
        <div className='row container work14'>
           <h3 className='mt-5 work9'>Available Crypto <span className='work10'>Currencies</span></h3>
           <p className='text-info fw-bolder fst-italic'>Total Coins {coins.length}</p>
        {
            coins.map(coin=> <CoinCard coin={coin}></CoinCard>)
         }
        </div>
      </div>}
      </>
   );
};

export default CoIns;