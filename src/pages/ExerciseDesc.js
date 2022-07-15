import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { fetchSimilarExercises } from '../functions/fetchSimilarExercises';
import { fetchVideo } from '../functions/fetchVideo';

import ItemDesc from '../Components/ItemDesc';
import SmallCard from '../Components/Cards/SmallCard';


import OwlCarousel from 'react-owl-carousel';
import '../../node_modules/owl.carousel/dist/owl.carousel.min'
import '../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../node_modules/owl.carousel/dist/assets/owl.theme.default.css'
import YellowHeader from '../Components/Utils/YellowHeader';
import Ribbon from '../Components/Ribbon';
import YoutubeCard from '../Components/Cards/YoutubeCard';
import Loading from '../Components/Utils/Loading';
import NotFound from '../Components/Utils/NotFound';

const ExerciseDesc = () => {

    const [similarExercise, setsimilarExercise] = useState([])
    const [video, setVideo] = useState([])
    const [loading, setLoading] = useState(true)
    const location = useLocation()
    const exercise = location.state;

    useEffect(() => {
        window.scrollTo(0, 0)
        let temp = fetchSimilarExercises(exercise)
        setsimilarExercise(temp);
        fetchVideo(exercise.name, setVideo, setLoading);
    }, [exercise])

    return (
        <>
            {/* Showing Exercise Details */}
            <YellowHeader heading="Exercise details" className="mt-14" />
            <ItemDesc exercise={exercise} />
            {similarExercise.length > 0 &&
                <div>

                    <YellowHeader heading="similar Exercise" className="mb-24" />

                    <div className="container mx-auto p-3 bg-gray-300">
                        <OwlCarousel items={3} autoWidth={true} dots={true} dotsEach={true} dotData={true}>
                            {similarExercise.map((ele, ind) => {
                                return <SmallCard key={ind} exercise={ele} link={{ pathname: `/exercise/${ele.target}/${ele.id}`, state: ele }} />
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            }





            <div>
                <YellowHeader heading="Suggested Videos" className="lg:my-16 mt-14" />
                {loading === true && <Loading />}
                {/* Loading is complte but no result */}
                {(video.length === 0 && loading === false) && <NotFound />}

                <div className="mb-12 container mx-auto">

                    {video.length > 0 &&
                        <OwlCarousel items={3} margin={15} autoWidth={true} dots={true} dotsEach={true} dotData={true}>
                            {video.length > 0 && video.map((ele, ind) => {
                                return <YoutubeCard key={ind} text={ele.video.description} title={ele.video.title}
                                    id={ele.video.videoId} viewCount={ele.video.viewCountText} img={ele.video.thumbnails[0].url} />
                            })}

                        </OwlCarousel>
                    }
                </div>


            </div>


        </>
    )
}

export default ExerciseDesc
