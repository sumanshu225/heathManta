import React from 'react'
import { Link } from 'react-router-dom'

const SmallCard = (props) => {
    return (
        <div className={`items rounded-md m-2 border-x-4 border-slate-50 md:w-60 `}>
            <div className="container h-4 bg-slate-50">
            </div>
            <Link to={props.link}>
                <div className="relative bg-white">
                    {/* Images */}
                    <img src={props.exercise.gifUrl} loading="lazy" className="w-full" alt="" />
                </div>
            </Link>
            {/* Description */}
            <div className="container py-1 mt-1 bg-slate-50  capitalize">
                <h1 className="text-md text-center font-bold">{props.exercise.name}</h1>
            </div>
        </div>
        // <div>Hello</div>
    )
}

export default SmallCard