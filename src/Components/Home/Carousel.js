import React from 'react'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import '../../../node_modules/owl.carousel/dist/owl.carousel.min'
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css'

import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'

const Carousel = () => {


    return (
        <div className="owl-theme2  relative lg:h-[50rem] md:h-[45] h-[30rem]">
            <OwlCarousel className="owl-theme lg:h-[50rem] md:h-[45] h-[30rem] absolute " items={1} loop dots={true} dotsEach={true} dotData={true}>

                {/* Item 1 */}
                <div className="item lg:h-[50rem] md:h-[45] h-[30rem]">
                    <div className="absolute opacity-50 bg-black lg:h-[50rem] md:h-[45] h-[30rem] w-full z-10"></div>
                    <img src={slider1} className="object-cover lg:h-[50rem] md:h-[45] h-[30rem] absolute" loading="lazy" />

                    {/* Text */}
                    <div className="lg:h-[50rem] md:h-[45] h-[30rem] w-full z-20 text-white absolute flex items-center justify-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-6xl text-center my-1 lg:my-3 uppercase roboto">
                                Commit to be Fit
                            </h1>
                            <p className="text-base md:text-lg lg:text-2xl text-center px-12 text-gray-300 open-sans">
                                Fitness is a state of health and well-being and an ability to perform daily activities.
                                <br />
                                Fitness is the key to stay healthy and happy throughout life.
                            </p>
                            <Link to="/exercise">
                                <button className="bg-transparent border-4 border-yellow-500 text-yellow-500  
                                                block mx-auto my-4 text-xl lg:text-4xl px-6 py-1 lg:px-12 lg:py-2 lg:mt-12
                                                hover:scale-105 transition-all roboto-mono">
                                    Explore
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="item lg:h-[50rem] md:h-[45] h-[30rem] ">
                    <div className="absolute opacity-50 bg-black lg:h-[50rem] md:h-[45] h-[30rem] w-full z-10"></div>
                    <img src={slider2} className="lg:h-[50rem] md:h-[45] h-[30rem] object-cover object-bottom absolute" loading="lazy" />


                    {/* Text */}
                    <div className="lg:h-[50rem] md:h-[45] h-[30rem] w-full z-20 text-white absolute flex items-center justify-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-6xl text-center my-1 lg:my-3 uppercase roboto">
                                To Get Tight, Eat Right!
                            </h1>
                            <p className="text-base md:text-lg lg:text-2xl text-center px-12 text-gray-300 open-sans">
                                Healthy food is a really important option in our life. We all want to lead a
                                life without facing any major issues. Only healthy food can do that for us. We all need to eat quality foods.
                            </p>
                            <Link to="/food">
                                <button className="bg-transparent border-4 border-neon-orange text-neon-orange  
                                                block mx-auto my-4 text-xl lg:text-4xl px-6 py-1 lg:px-12 lg:py-2 lg:mt-12
                                                hover:scale-105 transition-all roboto-mono">
                                    Explore
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>

            </OwlCarousel>
        </div>
    )
}

export default Carousel