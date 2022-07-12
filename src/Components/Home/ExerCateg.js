import React from 'react'
import { Link } from 'react-router-dom'

const ExerCateg = () => {

    const categories = ['chest','abs', 'biceps', 'calves', 'delts', 'forearms', 'hamstrings', 'lats', 'upper back', 'triceps', 'cardiovascular system','quads']



    return (
        <div className="bg-cyan-300 h-56">
            This is Exercise Categories
            <ul className='flex space-x-8'>
                {categories
                    .map((muscle,ind)=><li key={ind} ><Link to={`/exercise/${muscle}`} >{muscle}</Link></li>)}
            </ul>
        </div>
    )
}

export default ExerCateg