import React, {  useState} from 'react'
import db from '../functions/Fire'
import { useHistory } from 'react-router-dom'

const SubmitReview = () => {

  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const history = useHistory();


  const nameHandler = (event)=>{
    setName(event.target.value);
  }

  const reviewHandler = (event)=>{
    setReview(event.target.value);
  }

  const ratingHandler = (event)=>{
    setRating(event.target.value);
  }

  const submitHandler = (e)=>{
    e.preventDefault();
    db.collection('Review').add({
      name : name,
      review : review,
      rating : parseInt(rating)
    }).finally(()=>{
      console.log("done")
      history.replace('/review')
    })
  }

  return (
    <>
      <h1>Submit Review</h1>
      <form className="space-x-4 space-y-4" >
        <br/>
        <label htmlFor="name">Name</label>
        <input className="border-2" type="text" id="name" onChange={nameHandler}/>
        <br/>
        <label htmlFor="review">Review</label>
        <textarea className="border-2" type="text" id="review" onChange={reviewHandler}/>
        <br/>
        <label htmlFor="rating">Rating</label>
        <input className="border-2" type="text" id="rating" onChange={ratingHandler}/>
        <br/>
        <button onClick={submitHandler} className="bg-blue-600 p-4" >Submit</button>
      </form>
    
    </>
  )
}

export default SubmitReview