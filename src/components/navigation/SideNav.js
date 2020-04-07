import React from 'react'
import { Link } from 'react-router-dom'
import './SideNav.css'
import { history } from '../../App'

const SideNav = props => {
  function updateColors(colorFamily) {
    props.callback(eval(`props.originalColorObject.${colorFamily}`))
  }

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
            onClick={() => updateColors('red')}
            to={{ pathname: '/', state: { comingFromSelected: false } }}
          >
            Red
          </Link>
          <Link
            onClick={() => updateColors('yellow')}
            to={{ pathname: '/', state: { comingFromSelected: false } }}
          >
            Yellow
          </Link>
          <Link
            onClick={() => updateColors('green')}
            to={{ pathname: '/', state: { comingFromSelected: false } }}
          >
            Green
          </Link>
          <Link
            onClick={() => updateColors('cyan')}
            to={{ pathname: '/', state: { comingFromSelected: false } }}
          >
            Cyan
          </Link>
          <Link
            onClick={() => updateColors('blue')}
            to={{ pathname: '/', state: { comingFromSelected: false } }}
          >
            Blue
          </Link>
          <Link
            onClick={() => updateColors('magenta')}
            to={{ pathname: '/', state: { comingFromSelected: false } }}
          >
            Magenta
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
