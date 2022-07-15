import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import FoodCard from '../Components/Cards/FoodCard';
import NotFound from '../Components/Utils/NotFound';
import Loading from '../Components/Utils/Loading';
import { fetchFood } from '../functions/fetchFood';
import YellowHeader from '../Components/Utils/YellowHeader'


const FoodCategory = () => {

  const url = useParams().search;

  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    window.scrollTo(0, 0)
    fetchFood(url, setFood, setLoading)
  }, [])



  return (
    <>
      <YellowHeader heading="Food Results" className="my-14" />
      {/* <FoodCard /> */}
      <div className="container mx-auto bg-slate-50 border-t  flex flex-wrap items-center justify-center space-y-4 ">

        {/* While Loading Food */}
        {loading === true && <Loading/>}

        {/* Loading is complte but no result */}
        {(food.length === 0 && loading === false) && <NotFound/>}

        {food.length > 0 && food.map((ele, ind) => {
          return (
            <FoodCard image={ele.recipe.image} key={ind} label={ele.recipe.label} mealtype={ele.recipe.mealType[0]}
              calories={ele.recipe.calories} link={{ pathname: `/fooddesc/${ele.recipe.label}`, state: ele.recipe }} />)
        })}

      </div>
    </>
  )
}

export default FoodCategory