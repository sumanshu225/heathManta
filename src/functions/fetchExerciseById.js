export const fetchExerciseByID = (id,setexercise) => {

    const data = JSON.parse(localStorage.getItem('exercise'));
    let d;
    for (var i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            d = data[i]
            setexercise({
                id: data[i].id,
                name: data[i].name,
                bodypart: data[i].bodyPart,
                target: data[i].target,
                equipment: data[i].equipment,
                img: data[i].gifUrl
            })
            break;
        }
    }

    return d;

}