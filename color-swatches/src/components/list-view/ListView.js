import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import ColorSwatch from '../ColorSwatch';
import './list-view.css';

const colors = [
  {color: '1', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'red', hex: 'FF0000'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: '100', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: 'blue', hex: '0000FF'},
  {color: '100', hex: '0000FF'},
]

function ListView() {

  const [currentPage, setCurrentPage] = useState(1);
  const [colorsPerPage] = useState(12);

  useEffect(() => {
    
  }, [])

  const indexOfLastPost = currentPage * colorsPerPage;
  const indexOfFirstPost = indexOfLastPost - colorsPerPage;
  const currentColors = colors.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  console.log(indexOfLastPost, indexOfFirstPost, currentColors)

  return (
    <div className="App">
      <ColorSwatch 
      currentColors={currentColors}
      />
      <Pagination 
      colorsPerPage={colorsPerPage}
      totalColors={colors.length}
      paginate={paginate}
      />
    </div>
  );
}

export default ListView;