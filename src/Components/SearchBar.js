import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

import Modal from './Modal'
import BackDrop from './BackDrop'




const SearchBar = (props) => {

  const [modalVisibility, setModalVisibility] = useState(false);
  const searchText = useRef();


  const showModal = () => {
    document.getElementById('root').classList.add('h-[90vh]')
    document.getElementById('root').classList.add('overflow-hidden')
    setModalVisibility(true)
  }
  const hideModal = () => {
    document.getElementById('root').classList.remove('h-[90vh]')
    document.getElementById('root').classList.remove('overflow-hidden')
    setModalVisibility(false);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    let text = searchText.current.value
    props.fetchSearch(text);
  }

  return (
    <>
      <div className="container mx-auto my-4 py-6 border-y border-slate-200 bg-slate-50 lg:mt-20">

        {/* Modal */}
        {ReactDOM.createPortal(<Modal visible={modalVisibility} hideModal={hideModal} heading="Guide" message={props.modalMessage}/>
        , document.getElementById('modal-root'))}
        {ReactDOM.createPortal(<BackDrop visible={modalVisibility} hideModal={hideModal} />, document.getElementById('backdrop-root'))}


        <div className="flex container mx-auto justify-around lg:justify-around px-4">

          {/* Tooltip */}
          <button className="relative hover:text-yellow-500 text-3xl" onClick={showModal}>
            <i className="fas fa-info-circle"></i>
          </button>

          {/* Search */}
          <form>
            <div className="relative lg:w-[40rem] rounded-2xl overscroll-none">
              {/* Input */}
              <input type="text" className="border-2  py-1 px-4 
             w-full outline-none" ref={searchText} required placeholder={props.message} />

              {/* Submit Button */}
              <button className="absolute right-0 px-2 h-full my-auto bg-yellow-500 transition-all
               text-white hover:bg-white border-2 border-yellow-500 hover:text-yellow-500" 
               onClick={submitHandler}>
                Search
              </button>
            </div>
          </form>

        </div>
      </div>

    </>
  )
}

export default SearchBar