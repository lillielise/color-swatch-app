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
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Red
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Orange
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Yellow
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Green
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Blue
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Purple
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Brown
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Gray
          </Link>
        </ul>
      </div>

      <div className="side-nav-dropdown">
        Filter
        <ul className="side-nav-content-dropdown">
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
            id="random-color-button"
          >
            Random Color
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Red
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Orange
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Yellow
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Green
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Blue
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Purple
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Brown
          </Link>
          <Link
            to={{ pathname: '/details', state: { comingFromSelected: false } }}
          >
            Gray
          </Link>
        </ul>
      </div>
    </>
  )
}

export default SideNav
