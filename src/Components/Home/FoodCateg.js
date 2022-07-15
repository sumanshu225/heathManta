import React from 'react'
import { Link } from 'react-router-dom'
import { fetchfoodcCategories } from '../../functions/fetchfoodcCategories'

import Card from '../Card'

import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/owl.carousel.min'
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css'
import YellowHeader from '../Utils/YellowHeader';

const FoodCateg = () => {

    const categories = fetchfoodcCategories();

    const compressUrl = (url) => {
        return url.toLowerCase().split(' ').join('%20');
    }


    return (
        <>
            <div className="py-10 lg:py-16 ">
                <YellowHeader heading="Explore Food"/>

                <div className="container mx-auto mt-10 lg:mt-20 bg-gray-100 p-5">

                    <OwlCarousel items={2} margin={30} autoWidth={true} dots={true} dotsEach={true} dotData={true}>
                        {categories
                            .map((food, ind) => <Card key={ind} content={food.name} img={food.img} link={`/food/${food.name}`} />)}
                    </OwlCarousel>

                </div>
            </div>

        </>
    )
}

export default FoodCateg