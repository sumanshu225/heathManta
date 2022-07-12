import React, { useEffect, useState } from 'react'

import Carousel from '../Components/Home/Carousel'
import Features from '../Components/Home/Features'
import ExerCateg from '../Components/Home/ExerCateg'
import FoodCateg from '../Components/Home/FoodCateg'

import { fetchData } from '../functions/fetchData'

const Home = () => {

  
  useEffect(() => {
      fetchData();
  }, [])


  return (
    <div>
      <Carousel/>
      <Features/>
      <ExerCateg/>
      <FoodCateg/>
      
    </div>
  )
}

export default Home