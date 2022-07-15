import  balanced  from '../images/balanced.jpg'
import  indian  from '../images/indian.jpg'
import  chicken  from '../images/chicken.jpg'
import  fish  from '../images/fish.jpg'
import  veg  from '../images/veg.jpg'
import  sugarfree  from '../images/sugarfree.jpg'
import  protein  from '../images/protein.jpg'
import  chinese  from '../images/chinese.jpg'


export const fetchfoodcCategories = ()=>{
    const categories = [
        {
            name: "balanced",
            img: balanced
        },
        {
            name: "sugar free",
            img: sugarfree
        },
        {
            name: "indian",
            img: indian
        },
        {
            name: "chinese",
            img: chinese
        },
        {
            name: "chicken",
            img: chicken
        },
        {
            name: "fish",
            img: fish
        },
        {
            name: "high protein",
            img: protein
        },
        {
            name: "veg",
            img: veg
        },
    ]

    return categories
}