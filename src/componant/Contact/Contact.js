import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
   return (
      <div className='work8'>
         <div>
         <h1 className='mt-3 work7'>Contact Us , Our Office Adress Down Below</h1>
         </div>
         <div>
            <Link to='bd-address' className='btn btn-info fw-bolder m-4'>BD Adress</Link>
            <Link to='us-address'className='btn btn-info fw-bolder m-4'US >Adress</Link>
            <br></br>
            <div className='w-100 pt-3 pb-3'>
      <Outlet></Outlet>
            </div>
         </div>

      </div>
   );
};

export default Contact;