import React from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import SearchBar from "../Components/SearchBar"
import YellowHeader from '../Components/Utils/YellowHeader'
import Card from '../Components/Card'
import { fetchExerciseCategories } from '../functions/fetchExerciseCategories'

const Exercise = () => {

  const categories = fetchExerciseCategories();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  const fetchSearchedExercise =(text)=>{
    history.push(`/exercise/${text}`)
  }

  return (
    <>
      {/* search Bar */}
      <YellowHeader heading="Explore Workouts" className="my-14" />
      <SearchBar fetchSearch={fetchSearchedExercise} message="Explore Workouts" modalMessage="We provide details of more than 1300 different exercises. Search by exercise name,target muscle,equipments,body parts etc."/>
      <div className="container mx-auto flex flex-wrap  justify-around py-8">

        {categories
          .map((muscle, ind) => <Card key={ind} content={muscle.name} img={muscle.img} link={`/exercise/${muscle.name}`} />)}

      </div>

    </>
  )
}

export default Exercise