import React from 'react';
import { Link } from 'react-router-dom';
import './list-view/list-view.css'

const ColorSwatch = (props) => {

  return (
    <div className="content-container">
        {props.currentColors.map(color => 
          <Link id={props.detailsView ? 'swatch-detail-view' : ''} className="swatches" to={{ pathname: "/details", state: { comingFromSelected: true, colorSelected: color}}}>        
            <div className="color-display" style={{backgroundColor: `${color}`}}>
            </div>
            <p className="color-name">{color}</p>
          </Link>
        )}        
    </div>
  )
}

export default ColorSwatch;