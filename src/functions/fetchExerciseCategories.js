import back from '../images/back.jpg'
import cardio from '../images/cardio.jpg'
import chest from '../images/chest.jpg'
import lowerarms from '../images/lowerarms.jpg'
import lowerlegs from '../images/lowerlegs.jpg'
import neck from '../images/neck.jpg'
import shoulder from '../images/shoulder.jpg'
import upperarms from '../images/upperarms.jpg'
import upperlegs from '../images/upperlegs.jpg'
import waist from '../images/waist.jpg'



export const fetchExerciseCategories = () => {


    const img = [back, cardio, chest, lowerarms, lowerlegs, neck, shoulder, upperarms, upperlegs, waist];
    const categories = ["back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"];
    const data = []
    categories.map((ele,ind)=>data.push({
        name : ele,
        img : img[ind]
    }))

    return data
}