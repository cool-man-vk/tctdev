import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Merchant from '../components/Merchant';
import Categories from '../components/Categories';

export const RouteNames = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merchant" element={<Merchant />} />
        <Route path="/categories" element={<Categories />} />
    </Routes>
  )
}
