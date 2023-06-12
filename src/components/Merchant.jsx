import React from 'react';
import { useSelector } from 'react-redux';
import DetailsTab from './tabs/DetailsTab';

const Merchant = () => {
  const merchantData = useSelector(state => state.merchant.merchant);


  return (
    <div style={{'textAlign':'center'}}>
      <React.Fragment>
        <DetailsTab />
      </React.Fragment>
      {
        merchantData 
        ? <h2>Merchant name : {merchantData}</h2>
        : <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='loading' />
      }
    </div>
  );
};

export default Merchant;
