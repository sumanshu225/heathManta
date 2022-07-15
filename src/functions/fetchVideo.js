import axios from 'axios'
import { ApiKey } from './ApiKey';

export const fetchVideo = async (params,setVideo,setLoading) => {
    const searchparameter = params.replace(/ /g, '%20');
    const options = {
        params: {
            type: 'v',
            sort: 'v'
        },
        headers: {
            'X-RapidAPI-Key': ApiKey(),
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
    };
    axios.get(`https://youtube-search-and-download.p.rapidapi.com/search?query=${searchparameter}`,options)
    .then((response)=>{
        setVideo(response.data.contents);
        setLoading(false)
    }).catch(error=>{
        console.error(error);
    })

}