import React from 'react';
import '../Itemlists/Itemlists.css';
import { Typography } from '@mui/material';
import { IoIosList } from "react-icons/io";
import avtor from '../Assests/Avatar.png';
import store_data from '../../Firebase/storage';

function Itemlists() {
  return (
    <div className='container'>
      <div className='item_heading'>
        <Typography 
          variant='h2' 
          gutterBottom 
          sx={{ fontFamily: 'Roboto Flex', fontSize: '30px', fontWeight: '500' }}>
          Added CheckIns
        </Typography>
        <IoIosList className='list' />
      </div>

      <div className='items_sec'>
      
        {store_data.map((item) => (
          <div key={item.id} className='items_cont'>
            <div className='items_img_cont'>
              <img src={item.img} alt={item.tittle} />
            </div>
            <div className='items_detail_cont'>
              <Typography 
                variant='h4' 
                gutterBottom 
                sx={{ fontFamily: 'Roboto Flex', fontSize: '20px', fontWeight: '500' }}>
                {item.tittle}
              </Typography>
              <Typography 
                variant='h5' 
                gutterBottom 
                sx={{ fontFamily: 'Roboto Flex', fontSize: '16px', fontWeight: '500', color: '#718096' }}>
                {item.date}
              </Typography>

              <div className='owner_details'>
                <img src={avtor} alt="Owner Avatar" />
                <Typography 
                  variant='h5' 
                  gutterBottom 
                  sx={{ fontFamily: 'Roboto Flex', fontSize: '16px', fontWeight: '500', color: 'black' }}>
                  Owner: John Doe
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Itemlists;
