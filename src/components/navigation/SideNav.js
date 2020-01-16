import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'

const SideNav = props => {

  // TODO: https://www.cs.rit.edu/~ncs/color/t_convert.html
  // TODO: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

  const colorFamilies = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Brown', 'Gray', 'Dirt'];
  return (
    <div className="side-nav">
      <ul id="side-nav-list">
        <li>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
            id="random-color-button"
          >
            Random Color
          </Link>
        </li>
        {colorFamilies.map((color, index) => (
        <li key={index}>
          <Link
            to={{ pathname: '/color-families', state: { colorFamily: color } }}
            className="side-nav-button"
          >
            {color}
          </Link>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default SideNav
