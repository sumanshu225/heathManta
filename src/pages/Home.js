import React, { useEffect } from 'react'

import Carousel from '../Components/Home/Carousel'
import Features from '../Components/Home/Features'
import ExerCateg from '../Components/Home/ExerCateg'
import FoodCateg from '../Components/Home/FoodCateg'

import { fetchData } from '../functions/fetchData'

import cover from '../images/cover.jpg'
import cover2 from '../images/cover2.jpg'

const Home = () => {

  const fitnessText = "Fitness is defined as the quality or state of being fit and healthy.The modern definition of fitness describes either a person or machine's ability toperform a specific function or a holistic definition of human adapt ability to copewith various situations. This has led to an interrelation of human fitness and physical attractiveness that has mobilized global fitness and fitness equipment industries."
  const heathText = "A healthy diet is a diet that maintains or improves overall health. A healthy diet provides the body with essential nutrition: fluid, macronutrients such as protein, micronutrients such as vitamins, and adequate fibre and food energy. A healthy diet may contain fruits, vegetables, and whole grains, and may include little to no processed food or sweetened beverages."
  useEffect(() => {
    window.scrollTo(0, 0)
    fetchData();
  }, [])


  return (
    <>
      <Carousel />
      <ExerCateg />
      <Features img={cover2} heading="get fit with us" text={fitnessText}/>
      <FoodCateg />
      <Features img={cover} heading="Just for the Health of it!" text={heathText}/>
    </>
  )
}

export default Home