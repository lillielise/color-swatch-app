import React, { useState } from 'react'
import Pagination from '../pagination/Pagination'
import ColorSwatch from '../color-swatch/ColorSwatch'
import { Link } from 'react-router-dom'
import './ColorFamilies.css'

function ColorFamilies(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [colorsPerPage] = useState(12);
  const indexOfLastPost = currentPage * colorsPerPage;
  const indexOfFirstPost = indexOfLastPost - colorsPerPage;
  let currentColors = props.colors;
  let allColors = props.colors;
//   let currentColors = ["#ff0000", "#ff0000", "#ff0000"];
//   let allColors = ["#ff0000", "#ff0000", "#ff0000"];

  // TODO: CONVERT HEX TO RGB
  // https://www.thecolorapi.com/docs

  // TODO: DETERMINE COLOR FAMILY
  // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
      <ColorSwatch currentColors={currentColors} />
        <Link id="clear-button" to="/">
            Clear
        </Link>
      <Pagination
        colorsPerPage={colorsPerPage}
        totalColors={allColors.length}
        paginate={paginate}
      />
    </div>
  )
}

export default ColorFamilies
