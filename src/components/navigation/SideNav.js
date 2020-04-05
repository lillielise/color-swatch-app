import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'

const SideNav = props => {
  // TODO: https://www.cs.rit.edu/~ncs/color/t_convert.html
  // TODO: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
  return (
    <>
      <div className="side-nav">
        <ul className="side-nav-list">
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
            id="random-color-button"
          >
            Random Color
          </Link>
        </ul>
      </div>

      <div className="side-nav-mobile">
        <ul className="side-nav-list">
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
            id="random-color-button"
          >
            Random Color
          </Link>
        </ul>
      </div>
    </>
  )
}

export default SideNav
