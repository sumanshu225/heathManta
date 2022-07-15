import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, current, prev, next }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const prevpage = () => {
        if (current < pageNumbers.length)
            next();
    }

    const nextpage = () => {
        if (current>1)
            prev();
    }


    return (
        <nav>
            <ul className='pagination  flex w-fit mx-auto '>
                <li className=" py-1 px-3 mr-2 bg-yellow-500 text-white"
                    onClick={nextpage} >
                    <i className="fas fa-caret-left"></i>
                </li>


                {pageNumbers.map(number => (
                    <li key={number} onClick={() => paginate(number)}
                        className={` border border-slate-100 py-1 px-2 cursor-pointer hover:border-yellow-500 
                            ${current === number ? "border-yellow-500 text-white font-bold bg-yellow-500"
                                : "border-slate-100 hover:text-yellow-500 bg-slate-50"}`}>
                        <a  >
                            {number}
                        </a>
                    </li>
                ))}


                <li className=" py-1 px-3 ml-2 bg-yellow-500 text-white"
                    onClick={prevpage}>
                    <i className="fas fa-caret-right"></i>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;