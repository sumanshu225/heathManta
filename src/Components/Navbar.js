import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="bg-white flex justify-around py-8">
            Logo
            <div className="">
                <ul className="flex space-x-8">
                    <li className="text-green-600">
                        <NavLink to='/home' activeClassName="font-bold">Home</NavLink>
                    </li>
                    <li className="text-green-600">
                        <NavLink to='/exercise' activeClassName="font-bold">Exercise</NavLink>
                    </li>
                    <li className="text-green-600">
                        <NavLink to='/food' activeClassName="font-bold">Food</NavLink>
                    </li>
                    <li className="text-green-600">
                        <NavLink to='/review' activeClassName="font-bold">Review</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar