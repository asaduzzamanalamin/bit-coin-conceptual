import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './CoinCard.css';

const CoinCard = (props) => {
   const {name , image , symbol ,id} = props.coin;
    
   return (
      
      <Link className='col-12 col-md-3 mb-4 work14' to={`/coin-details/${id}`}>
         {/* <div > */}
          <Card className='work11' border="light" style={{ width: '18rem' }}>
    
    
      <div className='row'>
     <div className='col-12 col-md-8'>
     <h4 className='work13'>{name}</h4>
     <small>{symbol}</small>
     </div>
      <div className='col-12 col-md-4'>
      <img className=' work12' src={image} alt="" />
      </div>
      </div>
    
  </Card>
         
      {/* </div> */}
      </Link>
   );
};

export default CoinCard;