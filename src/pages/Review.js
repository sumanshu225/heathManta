import React, { useEffect, useState } from 'react'
import db from '../functions/Fire'
import { Link } from 'react-router-dom'
import YellowHeader from '../Components/Utils/YellowHeader'
import NotFound from '../Components/Utils/NotFound'
import Loading from '../Components/Utils/Loading'

const Review = () => {

  const [review, setReview] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    db.collection('Review').get().then((snapshot) => {
      let temp = []
      snapshot.docs.forEach((doc) => {
        if (doc.data().valid === true)
        temp.push(doc.data());
      })
      setReview(temp);
      setLoading(false);
    }).catch((e) => {
      console.log(e);
    })

  }, [])

  return (
    <>

      {loading === true && <Loading/>}



      {loading === false && 
      <YellowHeader heading="Reviews" className="my-14" />}
      {loading === false &&
       <div className='w-fit my-8 mx-auto'>
        <Link to='/submitreview'>
          <button className="bg-yellow-500 open-sans text-white px-4 py-1 font-bold capitalize" >
            Submit Your Review
          </button>
        </Link>
      </div>}
      {(review.length === 0 && loading === false) && <NotFound/>}
      <div className='container flex flex-wrap mx-auto justify-center md:min-h-[37rem] lg:min-h-[34rem]'>
        {review.length > 0 && review.map((ele, ind) => {
          return (<div className="m-4 p-4 border-2 bg-slate-200 hover:bg-slate-300 rounded h-fit border-black w-96 lg:w-[35rem]" key={ind}>
            <p className="font-bold open-sans">Rating - {ele.rating}/5</p>
            <p className="italic roboto-mono my-2">{ele.review}</p>
            <p className='text-right'>- {ele.name}</p>
            <p className='text-right italic text-gray-600'>Submitted on - {ele.date}</p>
          </div>)

        })}
      </div>
    </>
  )
}

export default Review