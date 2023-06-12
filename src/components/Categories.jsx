import React from 'react';
import { useSelector } from 'react-redux';
import DetailsTab from './tabs/DetailsTab';
import Category from './categories/Category';

export default function Categories() {
  const categoryData = useSelector(state => state.category.categories);
  console.log(categoryData);

  return (
    <div>
      <React.Fragment>
          <DetailsTab />
      </React.Fragment>
      {
        categoryData != null 
        ? <Category categoryData={categoryData} />
        : <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='loading' />
      }
    </div>
  )
}
