import axios from 'axios'

export const fetchData = async () => {

    const options = {
        headers: {
            'X-RapidAPI-Key': 'd4f3aeff85msha9f5fe3844e0ffdp1313a0jsnf130cb1b56f5',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };


    if (localStorage.getItem('exercise') == null) {
        axios.all([
            axios.get('https://exercisedb.p.rapidapi.com/exercises', options),
            // axios.get('https://exercisedb.p.rapidapi.com/exercises/targetList',options)
        ]).then(axios.spread((exercise) => {
            localStorage.setItem('exercise', JSON.stringify(exercise.data));
            // localStorage.setItem('bodyparts', JSON.stringify(bodyparts.data));
            console.log(exercise.data);
            // console.log(bodyparts.data);
        })).catch((error) => {
            console.log(error)
        })
    }
}