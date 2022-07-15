import axios from "axios";
import { ApiKey } from './ApiKey';

export const fetchFood = async (params,setFood,setLoading)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': ApiKey(),
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    }

    const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${params}`
    axios.get(url,options).then((response)=>{
        setFood(response.data.hits);
        setLoading(false);
        console.log(response.data.hits)
    }).catch((err)=>{
        console.log(err);
    })

}