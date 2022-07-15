import React from 'react'

const Modal = (props) => {
    return (
        <>
            <div className={`absolute h-[22rem] w-[90%]  md:h-[26rem] md:w-[30rem] bg-white 
                        //   z-[999999] top-1/4 left-[5%]  lg:top-1/3 md:left-1/4 lg:left-[40%] 
                          ${props.visible ? "" : "hidden"} flex flex-col justify-evenly rounded-2xl`}>

                <h1 className="text-center text-3xl lg:text-5xl">{props.heading}</h1>
                <p className="text-md lg:text-lg px-4 text-gray-600 text-center">
                    {props.message}
                </p>
                <button className="bg-yellow-500 hover:bg-white hover:text-yellow-500 uppercase p-4 mx-8 text-white
                    border-2 border-yellow-500 transition-all" onClick={() => { props.hideModal() }}>
                    OK
                </button>
            </div>

        </>
    )

}

export default Modal