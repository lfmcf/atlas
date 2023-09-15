import React from 'react'

const pagination = ({ postserpage, data, setCurrentPage, currentPage }) => {

    const pageNumbers = [];
    const totalPosts = data.length;

    for (let i = 1; i <= Math.ceil(totalPosts / postserpage); i++) {
        pageNumbers.push(i)
    }

    const pagination = (pageNumbers) => {
        setcurrentpage(pageNumbers)
    }

    return (

        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className={currentPage === number ? 'page-item active' : 'page-item'}>
                    <button onClick={() => pagination(number)} className="page-link"> {number} </button>
                </li>
            ))}
        </ul>

    )

}

export default pagination;