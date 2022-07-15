import React from 'react'
import logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className="container-fluid bg-slate-100 mt-3 py-8 bottom-0">
      <div className="logo px-2 text-center">
        <img src={logo} className="w-[14rem] md:w-28 mx-auto" alt="" />
      </div>

      {/* Images */}
      <div className="container md:mx-auto">
        <h1 className="text-center roboto-mono">
          <span className="text-xl px-2 ">&#128155;</span>
          <span className=" font-bold">Made with Love by Sumanshu</span>
          
          <span className="text-xl px-2 ">&#128155;</span>
        </h1>



      </div>
    </div>
  )
}

export default Footer