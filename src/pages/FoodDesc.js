import React from 'react'
import { useLocation } from 'react-router-dom'

const FoodDesc = () => {

  const location = useLocation();
  const recipe = location.state;
  console.log(recipe.label)

  return (
    <div>FoodDesc</div>
  )
}

export default FoodDesc