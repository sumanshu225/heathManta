import React from 'react'

const BackDrop = (props) => {
  return (
    <>
      <div className={`bg-black absolute w-screen top-0 bottom-0 overflow-hidden  opacity-50 z-[500]
       ${props.visible?"":"hidden"}`} >

      </div>
    </>
  )
}

export default BackDrop