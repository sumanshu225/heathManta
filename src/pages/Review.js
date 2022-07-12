import React, { useEffect, useState } from 'react'
import db from '../functions/Fire'
import { Link } from 'react-router-dom'


const Review = () => {

  const [review, setReview] = useState([])

  useEffect(() => {
    db.collection('Review').get().then((snapshot) => {
      let temp = []
      snapshot.docs.forEach((doc) => {
        temp.push(doc.data());
      })
      setReview(temp);
    }).catch((e) => {
      console.log(e);
    })

  }, [])

  return (
    <>
      <Link className="bg-green-500 block m-4 p-4" to='/submitreview'>
        Submit Review
      </Link>

      {review.length === 0 && <div className="m-6 p-6 text-2xl">Loading...</div>}
      {review.length > 0 && review.map((ele,ind) => {
        return (<div className="m-4 p-4 border-2 space-x-4 space-y-4" key ={ind}>
              <p>{ele.name}</p>
              <p>{ele.review}</p>
              <p>{ele.rating}</p>
        </div>)
      })}
    </>
  )
}

export default Review