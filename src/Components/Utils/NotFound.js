import React from 'react'
import notfound from '../../images/notfound.svg'

const NotFound = () => {
    return (
        <>
            <div className="container relative mx-auto my-14 flex flex-col justify-center items-center">
                <h1 className="absolute top-10 roboto-mono md:text-4xl text-2xl">No results found</h1>
                <img src={notfound} alt="" />
            </div>

        </>
    )
}

export default NotFound