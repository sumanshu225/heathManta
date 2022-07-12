import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchExerciseByMuscle } from '../functions/fetchExerciseByMuscle';

const ExerciseCateg = () => {

  const params = useParams().muscle;
  const [exercises, setexercises] = useState([,])

  useEffect(() => {
    setexercises(fetchExerciseByMuscle(params));
  }, [])



  return (
    <>
      <div>
        Hello
        <div className="flex flex-wrap">
          {exercises.map((ele) => {
            return (<div className="m-3 border-2 p-4" key={ele.id}>
              <p>{ele.name}</p>
              <p>{ele.bodyPart}</p>
              <p>{ele.bodyPart}</p>
              <p>{ele.equipment}</p>
              <Link to={{pathname:`/exercise/${ele.target}/${ele.id}`, state : ele}} className="text-blue-500" >
                View
              </Link>
              
            </div>)
          })}
        </div>

      </div>

    </>
  )
}

export default ExerciseCateg