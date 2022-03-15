import React from 'react'
import './Pagination.css'


const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumber = []
    
    for (let i=1; i <= Math.ceil(totalItems/itemsPerPage); i++){
    pageNumber.push(i)
}

  return (
    <nav className='pagination-nav'>
        <ul>
            {pageNumber.map((num)=>(
                <li key={num} className='page-number'>
                    <a href='!#' className='page-link' onClick={()=>paginate(num)}>
                        {num}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination