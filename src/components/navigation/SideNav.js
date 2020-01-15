import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'

const SideNav = props => {

  // TODO: https://www.cs.rit.edu/~ncs/color/t_convert.html
  // TODO: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  return (
    <div className="side-nav">
      <ul id="side-nav-list">
        <Link
          to={{ pathname: '/details', state: { comingFromSelected: false } }}
          id="random-color-button"
        >
          Random Color
        </Link>
        <Link
          to={{ pathname: '/', state: { comingFromFamilies: 'red' } }}
          className="side-nav-button"
        >
          Red
        </Link>
        <Link
          to={{ pathname: '/', state: { comingFromFamilies: 'orange' } }}
          className="side-nav-button"
        >
          Orange
        </Link>
        <Link
          to={{ pathname: '/', state: { comingFromFamilies: 'yellow' } }}
          className="side-nav-button"
        >
          Yellow
        </Link>
        <Link
          to={{ pathname: '/', state: { comingFromFamilies: 'green' } }}
          className="side-nav-button"
        >
          Green
        </Link>
        <Link
          to={{ pathname: '/', state: { comingFromFamilies: 'blue' } }}
          className="side-nav-button"
        >
          Blue
        </Link>
        <Link
          to={{ pathname: '/', state: { comingFromFamilies: 'purple' } }}
          className="side-nav-button"
        >
          Purple
        </Link>
        <Link
          to={{ pathname: '/', state: { comingFromFamilies: 'brown' } }}
          className="side-nav-button"
        >
          Brown
        </Link>
        <Link
          to={{ pathname: '/', state: { comingFromFamilies: 'gray' } }}
          className="side-nav-button"
        >
          Gray
        </Link>
      </ul>
    </div>
  )
}

export default SideNav
