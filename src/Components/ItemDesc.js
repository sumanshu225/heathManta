import React from 'react'

const ItemDesc = ({exercise}) => {
    return (
        <>
            <div className="container  md:mx-auto  my-20 flex flex-col md:flex-row justify-around">
                {/* Image */}
                <div className="lg:w-1/3 md:w-1/2">
                    <img src={exercise.gifUrl} className="w-full" alt="" />
                </div>
                <div className="lg:w-1/3 md:w-4/6 bg-slate-50 border-x-2 border-slate-100 md:px-14 
                            px-7  py-10 flex items-center">
                    <div className="bg-slate-50 md:px-2">
                        <h1 className="text-center text-2xl lg:text-3xl font-bold uppercase">{exercise.name}</h1>
                        <p className="md:px-4 py-7 lg:py-14 text-center capitalize  text-base">
                            {exercise.name} is an excellent exercise to target your {exercise.target}
                            muscle. Regualr training will help to develop your {exercise.bodypart}.
                            You will require {exercise.equipment} for this workout.
                        </p>
                    </div>
                </div>
                <div className=" hidden lg:w-1/3 lg:block">
                    <img src={exercise.gifUrl} className="scale-x-[-1] w-full" alt="" />
                </div>
            </div>
        </>
    )
}

export default ItemDesc