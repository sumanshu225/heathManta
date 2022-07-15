const YellowHeader = (props) => {
    return (
        <div className={`relative w-fit mx-auto ${props.className}`}>
            <h1 className="text-4xl text-center font-semibold capitalize open-sans mb-5 xl:text-6xl">{props.heading}</h1>
            <div className="absolute h-1 w-1/2 rounded-full bg-yellow-500 -bottom-1/4 left-1/4 "></div>
        </div>
    )
}

export default YellowHeader