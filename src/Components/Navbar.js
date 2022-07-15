import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <div className="bg-slate-50 flex lg:justify-around justify-between px-4  shadow-inner 
                        border-b-4 border-yellow-500 sticky py-2 top-0 h-20 w-screen lg:h-24  z-[100]">
            <Link to='/home' className="cursor-pointer">
                <img src={logo} className="h-full" />
            </Link>

            <div className="relative open-sans  flex justify-center items-center space-x-3 md:space-x-4 
            lg:space-x-8 lg:text-xl">
                <NavLink to='/home' activeClassName="font-bold active" className="group text-yellow-500 relative">
                    <div >Home</div>
                    <div className="absolute rounded-full activeline h-1 bg-neon-orange transition-all"></div>
                </NavLink>
                <NavLink to='/exercise' activeClassName="font-bold active" className="group text-yellow-500 relative">
                    <div >Exercise</div>
                    <div className="absolute rounded-full activeline h-1 bg-neon-orange transition-all"></div>
                </NavLink>
                <NavLink to='/food' activeClassName="font-bold active" className="group text-yellow-500 relative">
                    <div >Food</div>
                    <div className="absolute rounded-full activeline h-1 bg-neon-orange transition-all"></div>
                </NavLink>
                <NavLink to='/review' activeClassName="font-bold active" className="group text-xl text-neon-orange px-1">
                    <div ><i className="fas fa-edit"></i></div>
                </NavLink>
    
            </div>
        </div>
    )
}

export default Navbar