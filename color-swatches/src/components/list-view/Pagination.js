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
      <ul id="page-numbers">
        {pageNumbers.map(number => (
          <li class="page-number" key={number} onClick={() => props.paginate(number)}>
              {number} 
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;