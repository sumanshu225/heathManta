import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import HorizontalCard from '../Components/Cards/HorizontalCard';
import NotFound from '../Components/Utils/NotFound'


import Pagination from '../Components/Pagination';
import YellowHeader from '../Components/Utils/YellowHeader';
import { fetchExerciseByMuscle } from '../functions/fetchExerciseByMuscle';

const ExerciseCateg = () => {

  const params = useParams().muscle;
  const [exercises, setexercises] = useState([,])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);


  useEffect(() => {
    window.scrollTo(0, 0)
    setexercises(fetchExerciseByMuscle(params));
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = exercises.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // decrease current page
  const prevpage = () => {
    setCurrentPage(currentPage - 1);
  }
  // decrease current page
  const nextpage = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <YellowHeader heading="Your Exercises" className="my-12 lg:my-16" />
      {exercises.length==0 && <NotFound/>}
      {exercises.length > 0 &&
        <div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={exercises.length}
            paginate={paginate}
            current={currentPage}
            prev={prevpage}
            next={nextpage}
          />
          <div className="container mx-auto min-h-[22rem]  space-y-4 lg:mt-20 my-14 flex flex-wrap justify-around">
            {currentPosts.map((ele, ind) => {
              return (<HorizontalCard ele={ele} key={ind} />)
            })}
          </div>
        </div>

      }
    </>
  )
}

export default ExerciseCateg