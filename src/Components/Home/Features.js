import React from 'react'

const Features = (props) => {
  return (
    <div className="lg:h-[50rem] h-[25rem] relative">
      <img className="h-full w-full object-cover" loading="lazy" src={props.img} alt="" />
      <div className="absolute h-full w-full top-0 bg-black opacity-50"></div>
      <div className="absolute top-0 z-10 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-6xl mb-4 lg:mb-12 font-bold text-white text-center uppercase roboto">
          {props.heading}
        </h1>
        <p className="text-white text-center text-sm mx-4 lg:mx-40 lg:text-xl">
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default Features