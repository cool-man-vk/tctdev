// containers/MerchantTab.js

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const DetailsTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    axios
      .get('https://run.mocky.io/v3/4bad75b9-5c38-48fa-8f68-dbfa34bef45b')
      .then(response => {
        dispatch({ type: 'SET_MERCHANT', payload: response.data['data']['merchant']['name'] });
        dispatch({ type: 'SET_CATEGORIES', payload: response.data['data']['merchant']['categories'] });
        console.log(response.data['data']['merchant']['categories']);
      })
      .catch(error => {
        console.error('Error fetching merchant details:', error);
      });
  }, [dispatch]);

};

export default DetailsTab;
