import React from 'react'
import Ribbon from '../Ribbon'

const url = "https://i.ytimg.com/vi/LVVdlwf1iyM/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBsSaSTsRa-qQNQQCbtMkkDHWbYcQ"


const YoutubeCard = (props) => {
    return (
        <>

            <div className="group border-2 my-24 w-[24rem] h-[38rem] rounded-lg overflow-hidden">
                <div className="overflow-hidden w-full h-3/4 relative">
                    <Ribbon message={props.viewCount} />
                    <img src={props.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-all" />
                </div>
                <div className="h-1/4 bg-slate-50 relative">
                    <h1 className="text-center text-lg bg-yellow-500 shadow-inner">
                        {props.title}
                    </h1>
                    <p className="text-sm p-2 ">
                        {props.text}
                    </p>
                    <a href={`https://youtube.com/watch?v=${props.id}`} target="_blank">
                        <button className="bg-red-600 px-4 py-2 text-white w-full absolute bottom-0">
                            View
                        </button>
                    </a >
                </div>
            </div>
        </>
    )
}

export default YoutubeCard