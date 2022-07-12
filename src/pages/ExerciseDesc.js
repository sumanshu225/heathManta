import React, { useEffect, useState } from 'react'
import {useLocation } from 'react-router-dom'

import { fetchSimilarExercises } from '../functions/fetchSimilarExercises';
import { fetchVideo } from '../functions/fetchVideo';

const ExerciseDesc = () => {

    const [similarExercise, setsimilarExercise] = useState([])
    const [video, setVideo] = useState([])
    const location = useLocation()
    const exercise = location.state;
    
    console.log("Hello" + location.state.name);
    useEffect(() => {
        let temp = fetchSimilarExercises(exercise)
        setsimilarExercise(temp);
        fetchVideo(exercise.name, setVideo);
        console.log(video);
    }, [])

    return (
        <>
            <div>
                <p className="space-x-4 space-y-4"> {exercise.name} </p>
                <p className="space-x-4 space-y-4"> {exercise.target} </p>
                <p className="space-x-4 space-y-4"> {exercise.bodypart} </p>
                <p className="space-x-4 space-y-4"> {exercise.equipment} </p>
                <div className="flex flex-wrap">

                    {similarExercise.map((ele,ind) => {
                        return (<div className="m-3 border-2 p-4" key={ind}>
                            <p>{ele.name}</p>
                            <p>{ele.bodyPart}</p>
                            <p>{ele.bodyPart}</p>
                            <p>{ele.equipment}</p>
                        </div>)
                    })}

                </div>

                <div>
                    {video.length == 0 && <div className="m-8 p-8 text-2xl">Loading...</div>}
                    {video.length > 0 && video.map((ele,ind) => {
                        return (<div className="m-8 p-4 border-2" key={ind}>
                            <a href={`https://www.youtube.com/watch?v=${ele.video.videoId}`} 
                                target="_blank" rel ="noreferrer" >
                                {ele.video.description}
                            </a>
                            <p>{ele.video.viewCountText}</p>
                        </div>)
                    })}

                </div>

            </div>
        </>
    )
}

export default ExerciseDesc
