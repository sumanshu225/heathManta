import axios from 'axios'
import { ApiKey } from './ApiKey';

export const fetchData = async () => {

    const options = {
        headers: {
            'X-RapidAPI-Key': ApiKey(),
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    };


    if (localStorage.getItem('exercise') == null) {
        axios.all([
            axios.get('https://exercisedb.p.rapidapi.com/exercises', options),
        ]).then(axios.spread((exercise) => {
            localStorage.setItem('exercise', JSON.stringify(exercise.data));
        })).catch((error) => {
            alert('Maxium Api Call Limit Reached for Today')
        })
    }
}