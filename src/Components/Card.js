import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {

    return (
        <>
            <div className="bg-white rounded-md h-[20rem] my-12 min-w-[20rem] max-w-[20rem]  lg:h-[35rem] lg:min-w-[35rem] lg:max-w-[35rem]  relative">
                <div className="h-full w-11/12">
                    <div className="w-full h-full relative group">
                        {/* Image */}
                        <Link to={props.link}>
                            <div className="w-[95%] h-[95%] relative z-10 overflow-hidden">
                                <img src={props.img} className="w-full h-full object-cover 
                                    group-hover:scale-105 transition-all" alt="" />
                            </div>
                        </Link>
                        {/* Overflow */}
                        <div className="absolute h-2/3 w-2/3 bg-yellow-400  bottom-0 right-0 group-hover:bg-yellow-500 transition-all"></div>
                    </div>
                    {/* Text */}

                </div>
                <div className={`uppercase absolute vertical top-0 h-full text-center right-1
                             ${(props.content !== undefined && props.content.length > 7) ? "tracking-[1rem]" : "tracking-[1.5rem]"} `}>
                    {props.content}
                </div>
            </div>

        </>
    )
}

export default Card