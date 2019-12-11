import React, { useState } from 'react';
import './Pagination.css';

const Pagination = (props) => {
  const pageNumbers = [];
  const pages = Math.ceil(props.totalColors / props.colorsPerPage);

  const [pageNumberSelected, setPageNumberSelected] = useState(1);

  for(let i = 0; i < pages; i++) {
    pageNumbers.push(i+1);
  }


  return (
    <nav>
      <ul id="page-numbers">
        {pageNumbers.map(number => (
          <li id={number} style={{'fontWeight': pageNumberSelected === number ? 'bold' : 'normal'}} className="page-number" key={number} onClick={() => {props.paginate(number); setPageNumberSelected(number)}}>
              {number} 
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;