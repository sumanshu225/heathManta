export const fetchSimilarExercises = (d) => {
    const data = JSON.parse(localStorage.getItem('exercise'));
    let temp = [];
    // console.log(d)

    for (var i = 0; i < data.length; i++) {

        if (data[i].target === d.target && data[i].equipment === d.equipment && data[i].id !== d.id) {
            temp.push(data[i]);
        }
    }

    return temp;
}