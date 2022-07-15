import React from 'react'
import { Link } from 'react-router-dom'

const FoodCard = ({image,label,mealtype,calories,link}) => {


    return (
        <>
            <Link to={link}>
                <div className="group w-[20rem] h-[20rem] rounded md:w-[24rem] md:h-[22rem] m-4 lg:m-12 relative  overflow-hidden 
                    md:shadow-[0_35px_60px_-15px_rgba(0,0,0,1)] shadow-[0_15px_40px_-15px_rgba(0,0,0,1)] 
                    border-white border-2 cursor-pointer">
                    <img src={image} alt="No Image" className="w-full h-full object-cover" loading="lazy" />


                    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-30 
                                group-hover:opacity-40 transition-all"></div>
                    <div className="absolute bottom-0 left-0 right-0  z-20 shadow-text pl-4 pb-4 
                                group-hover:-translate-y-12 hover:-translate-y-12 transition-all">

                        <h1 className="text-white roboto font-bold text-3xl">
                            {label}
                        </h1>
                        <p className="text-white open-sans">
                            <span className='font-bold capitalize'>{mealtype}  </span>
                        </p>
                        <p className="text-white open-sans">
                            <span className='font-bold'>Calories :-  </span>
                            <span className="roboto-mono italic"> {parseInt(calories)} </span>
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default FoodCard