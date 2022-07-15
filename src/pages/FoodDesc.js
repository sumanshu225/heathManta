import React from 'react'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { fetchFood } from '../functions/fetchFood';
import FoodCard from '../Components/Cards/FoodCard';
import YellowHeader from '../Components/Utils/YellowHeader';
import ScrollToTop from '../Components/Utils/ScrollToTop';

import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/owl.carousel.min'
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css'

const FoodDesc = () => {



  const location = useLocation();
  const recipe = location.state;
  console.log("loaded")

  const [similarRecipie, setSimilarRecipie] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (recipe !== null && recipe !== undefined)
      fetchFood(recipe.mealType, setSimilarRecipie, setLoading);
  }, [recipe.label])

  return (
    <>
      <YellowHeader heading="explore your Recipie" className="mt-7 md:mt-14 md:text-4xl" />
      <div className="container mx-auto  mt-12 flex lg:flex-row flex-col">
        <div className="lg:w-1/3 mx-2 flex justify-center items-center">
          <img src={recipe.image} alt="" className="w-full h-full border-2 border-slate-100 rounded" />
        </div>
        <div className="border-2 rounded  mx-2 bg-slate-50 lg:pl-10 lg:w-2/3">
          <h1 className="text-4xl my-4 pl-4 roboto uppercase font-bold">{recipe.label}</h1>
          <p className="my-3 pl-4 text-xl">
            <span className="font-bold">Calories :- </span>
            <span className="roboto-mono italic"> {parseInt(recipe.calories)}</span>
          </p>
          <p className="my-2 flex flex-wrap items-center ">

            <span className='uppercase m-1 border-2 border-slate-100 text-white px-4 py-1 roboto-mono bg-green-600 rounded-full'>
              {recipe.mealType}
            </span>
            <span className='uppercase m-1 border-2 border-slate-100 text-white px-4 py-1 roboto-mono bg-red-600 rounded-full'>
              {recipe.cuisineType}
            </span>
            {recipe.dietLabels.length > 0 && <span className='uppercase m-1 border-2 border-slate-100 text-white px-4 py-1 roboto-mono bg-blue-600 rounded-full'>
              {recipe.dietLabels}
            </span>}
          </p>

          <p className='flex flex-wrap'>
            {recipe.healthLabels.map((ele, ind) =>
              <span className="font-bold px-1" key={ind}>
                #{ele}
              </span>)}
          </p>
          <h2 className="font-bold pl-3 my-2 text-xl open-sans">Ingredients</h2>
          <ol className="list-decimal pl-10">
            {recipe.ingredientLines.map((ele, ind) => {
              return <li className="italic roboto-mono  text-e">{ele}</li>
            })}
          </ol>

          <a href={recipe.url} target="_blank" >
            <button className="px-4 ml-4 py-1 my-4 text-white border-2 border-yellow-500 font-bold 
                  roboto text-xl bg-yellow-500 hover:bg-white hover:text-yellow-500 transition-all">
              View Recipe
            </button>
          </a>
        </div>
      </div>

      {similarRecipie.length === 0 ?
        <main class="loading-container">
          <p class="spinner-text">
            loading...
          </p>
          <div class="spinner"></div>
        </main> :
        <YellowHeader heading="Similar Recipie" className="my-14 md:mt-14 md:text-4xl" />}
      <div className="container mx-auto my-14">

        {similarRecipie.length > 0 && <OwlCarousel items={3} margin={15} autoWidth={true} dots={true} dotsEach={true} dotData={true}>
          {similarRecipie.length > 0 && similarRecipie.map((ele, ind) => {
            return (
              <FoodCard image={ele.recipe.image} key={ind} label={ele.recipe.label} mealtype={ele.recipe.mealType[0]}
                calories={ele.recipe.calories} link={{ pathname: `/fooddesc/${ele.recipe.label}`, state: ele.recipe }} />)
          })}
        </OwlCarousel>}
      </div>

    </>
  )
}

export default FoodDesc