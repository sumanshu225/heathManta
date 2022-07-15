import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalCard = (props) => {
    return (
        <>
            <div className="border-2 border-slate-500 mx-4 md:w-[35rem] flex rounded-2xl overflow-hidden 
                        bg-slate-50 hover:bg-slate-100">
                {/* Image */}
                <div className="w-2/5 rounded-lg  m-2">
                    <img className="w-full h-full border-2" loading="lazy" 
                    src={props.ele.gifUrl} alt="" />
                </div>
                {/* Info */}
                <div className="w-3/5 flex flex-col mb-4">
                    <h1 className="font-bold md:text-xl capitalize  text-center mt-6 mb-3">{props.ele.name}</h1>
                    <div className="flex flex-col items-center text-sm">
                        <div className="py-1 capitalize">
                            <span className="font-bold mr-2">Equipment : </span>
                            <span>{props.ele.equipment}</span>
                        </div>
                        <div className="py-1 capitalize">
                            <span className="font-bold mr-2">Body part : </span>
                            <span>{props.ele.bodyPart}</span>
                        </div>
                        <div className="py-1 capitalize">
                            <span className="font-bold mr-2">Target : </span>
                            <span>{props.ele.target}</span>
                        </div>
                    </div>
                <button className="bg-yellow-400 px-8 text-white font-bold py-1 w-fit mx-auto mt-4 
                hover:text-yellow-400 border-2 border-yellow-400 transition-all hover:bg-white">
                    <Link to={{pathname:`/exercise/${props.ele.target}/${props.ele.id}`, state : props.ele}}>

                    View Details
                    </Link>
                </button>
                </div>
            </div>
        </>
    )
}

export default HorizontalCard