import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
  const pageNumbers = [];
  const pages = Math.ceil(props.totalColors / props.colorsPerPage);

  for(let i = 0; i < pages; i++) {
    pageNumbers.push(i+1);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map(number => (
          <li key={number}>
            <p onClick={() => props.paginate(number)}>
              {number}
            </p> 
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;