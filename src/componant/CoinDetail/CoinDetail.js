import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import './CoinDetail.css';

const CoinDetail = () => {
const {coinId} = useParams();
const [coin,setCoin] = useState({});
const [loading , setLoading] =useState(false);
useEffect(()=>{
    setLoading(true)
   
   fetch(` https://api.coingecko.com/api/v3/coins/${coinId}`)
   .then(res=>res.json())
   .then(data=>
   setCoin(data));
   setLoading(false);
},[coinId]);

   return (
     <>
     {loading ? <Spinner></Spinner> :  <div className='container row work19'>
         <div className='col-12 col-md-6 work16 mt-2'>
         <h4 className='work17'>Generel <span className='work18'>Info</span></h4>
         <p>Coin name:{coin.name}</p>
         <p>Market Cap Rank:{coin.market_cap_rank}</p>
         <p>Origin:{coin.country_origin ? coin.country_origin:'not found'}</p>
         <p>Hasing Algarithm:{coin.hashing_algorithm}</p>
         <p>Genesis Date:{coin.genesis_date}</p>
         <p>Last Update:{coin.market_data?.ath_date.aed}</p>
         <h4 className='work17'>Score</h4>
         <p>liquidity score:{coin.links?.liquidity_score}</p>
         <p>Public Intersest Score:{coin.platforms?.public_interest_score}</p>

         </div>
         <div className='col-12 col-md-6'>
            <img className='img-fluid mt-5' src={coin.image?.large} alt="" />
         </div>
         
      </div>}
     </>
   );
};

export default CoinDetail;