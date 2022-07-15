import React from 'react'
import Card from '../Card'

import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/owl.carousel.min'
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css'

import { fetchExerciseCategories } from '../../functions/fetchExerciseCategories';
import YellowHeader from '../Utils/YellowHeader';

const ExerCateg = () => {

    const categories = fetchExerciseCategories();


    return (
        <div className="py-10 lg:py-16 ">
            <YellowHeader heading="Explore Exercises" />

            <div className="container mx-auto mt-10 lg:mt-20 bg-gray-100 p-5">

                <OwlCarousel items={2} margin={30} autoWidth={true} dots={true} dotsEach={true} dotData={true}>
                    {categories
                        .map((muscle, ind) => <Card key={ind} content={muscle.name} img={muscle.img} link={`/exercise/${muscle.name}`}/>)}
                </OwlCarousel>

            </div>

        </div>
    )
}

export default ExerCateg