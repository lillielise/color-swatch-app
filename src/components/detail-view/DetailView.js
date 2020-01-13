import React from 'react'
import { Link } from 'react-router-dom'
import ColorSwatch from '../color-swatch/ColorSwatch'
import './DetailView.css'

function DetailView(props) {

  const selectedColor = props.location.state.comingFromSelected
    ? [props.location.state.colorSelected]
    : [selectRandomColor()]

  function selectRandomColor() {
    const randomIndex = Math.floor(Math.random() * props.colors.length)
    return props.colors[randomIndex]
  }

  return (
    <div className="detail-view-container">
      <ColorSwatch
        id="swatch-detail-view"
        detailsView={true}
        currentColors={selectedColor}
      />
      <Link id="clear-button" to="/">
        Clear
      </Link>
    </div>
  )
}

export default DetailView
