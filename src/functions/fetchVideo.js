import axios from 'axios'

export const fetchVideo = async (params,setVideo) => {

    const options = {
        params: {
            type: 'v',
            sort: 'v'
        },
        headers: {
            'X-RapidAPI-Key': 'd4f3aeff85msha9f5fe3844e0ffdp1313a0jsnf130cb1b56f5',
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
    };
    console.log(params);
    axios.get(`https://youtube-search-and-download.p.rapidapi.com/search?query=${params}`,options)
    .then((response)=>{
        setVideo(response.data.contents);
    }).catch(error=>{
        console.error(error);
    })

}