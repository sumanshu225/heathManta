import axios from "axios";

export const fetchFood = async (params,setFood)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd4f3aeff85msha9f5fe3844e0ffdp1313a0jsnf130cb1b56f5',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    }

    const url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${params}`
    axios.get(url,options).then((response)=>{
        setFood(response.data.hits);
        console.log(response.data.hits)
    }).catch((err)=>{
        console.log(err);
    })

}