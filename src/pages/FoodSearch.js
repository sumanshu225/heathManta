import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import { fetchFood } from '../functions/fetchFood';


const FoodCategory = () => {

  const url = useParams().search;

  const [food, setFood] = useState([]);

  useEffect(() => {
    fetchFood(url, setFood)
  }, [])



  return (
    <>
      <div>FoodCategory here</div>
      <div>
        {food.length === 0 && <div className="p-4 m-4">Loading...</div>}
        {food.length > 0 && food.map((ele,ind) => {
          return (<div className="m-4 p-4 border-2" key={ind}>
            {ele.recipe.label}
            <br/>
            <Link to={{ pathname:`/fooddesc/${ele.recipe.label}` ,state:ele.recipe }}>Explore</Link>
          </div>)
        })}

      </div>
    </>
  )
}

export default FoodCategory