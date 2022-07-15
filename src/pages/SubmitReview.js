import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import db from '../functions/Fire'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import YellowHeader from '../Components/Utils/YellowHeader'
import Modal from '../Components/Modal'
import BackDrop from '../Components/BackDrop'

const SubmitReview = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState('');
  const history = useHistory();

  const [modalVisibility, setModalVisibility] = useState(false);


  const showModal = () => {
    document.getElementById('root').classList.add('h-[90vh]')
    document.getElementById('root').classList.add('overflow-hidden')
    setModalVisibility(true)
  }
  const hideModal = () => {
    document.getElementById('root').classList.remove('h-[90vh]')
    document.getElementById('root').classList.remove('overflow-hidden')
    setModalVisibility(false);
    history.replace('/review')
  }


  const nameHandler = (event) => {
    setName(event.target.value);
  }

  const reviewHandler = (event) => {
    setReview(event.target.value);
  }

  const ratingHandler = (event) => {
    setRating(event.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    if (isNaN(rating) || rating > 5 || rating < 0) {
      alert('Inavaid Rating')
      console.log("Error")
      return
    }

    if (/[^a-zA-Z\s]/.test(name)) {
      alert('Inavalid Name')
      return
    }

    console.log("goood " + rating)
    today = mm + '/' + dd + '/' + yyyy;
    db.collection('Review').add({
      name: name,
      review: review,
      rating: parseInt(rating),
      date: today,
      valid: false
    }).then(() => {
      setName('')
      setRating('')
      setReview('')
      showModal()
      
    })
  }

  return (
    <>
      <YellowHeader heading="Submit Review" className="my-14" />

      {/* Modal */}
      {ReactDOM.createPortal(<Modal visible={modalVisibility} hideModal={hideModal} message="Your Review is Sucessfully Sumitted. Once the admin approves your review it wil be posted" />,
       document.getElementById('modal-root'))}
      {ReactDOM.createPortal(<BackDrop visible={modalVisibility} hideModal={hideModal} />, document.getElementById('backdrop-root'))}


      <div className="container mx-auto mb-24">
        <form className="bg-slate-100 border-2  shadow-md lg:w-1/2 mx-2 md:mx-auto rounded px-8 pt-6 pb-8 mb-4">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline" id="name" type="text"
              placeholder="Name" onChange={nameHandler}  value={name}/>
          </div>
          {/* Review */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="review">
              Review
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline" id="review"
              type="text" placeholder="Your Review" rows={10} onChange={reviewHandler} value={review}/>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
              Rating
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 
              leading-tight focus:outline-none focus:shadow-outline" id="rating" type="text"
              placeholder="Between 0 to 5" onChange={ratingHandler} value={rating} />
          </div>


          <div className="flex items-center justify-between">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 
                rounded focus:outline-none focus:shadow-outline" type="button" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </form>
      </div>


    </>
  )
}

export default SubmitReview