import React from 'react'
import { Link } from 'react-router-dom'

const FoodCateg = () => {

    const categories = ['sugar free', 'balanced', 'high protein', 'keto', 'Veg', 'vegan', 'indian','chicken','fish']
    const compressUrl = (url)=>{
        return  url.toLowerCase().split(' ').join('%20'); 
    }


    return (
        <>
            <div className="bg-lime-300 h-56">
                This is Food Categories
                <ul className='flex space-x-8'>
                    {categories
                        .map((food, ind) => <li key={ind} ><Link to={`/food/${compressUrl(food)}`} >{food}</Link></li>)}
                </ul>
            </div>

        </>
    )
}

export default FoodCateg