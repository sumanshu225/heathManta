export const fetchExerciseByMuscle = (params)=>{
    
    const data = JSON.parse(localStorage.getItem('exercise'));
    var exercise = new Array();
    for (var i = 0; i < data.length; i++) {
      if (data[i].bodyPart === params){
        exercise.push(data[i]);
        continue;
      }
      if (data[i].equipment === params){
        exercise.push(data[i]);
        continue;
      }
      if (data[i].name === params){
        exercise.push(data[i]);
        continue;
      }
      if (data[i].target === params){
        exercise.push(data[i]);
        continue
      }
    }
    
    return exercise;

}