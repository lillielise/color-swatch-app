import React from 'react';
import { Link } from 'react-router-dom';
import './color-swatch.css'

const ColorSwatch = (props) => {

  return (
    <div className="content-container">
        {props.currentColors.map((color,index) => 
          <Link key={index} id={props.detailsView ? 'swatch-detail-view' : ''} className="swatches" to={{ pathname: "/details", state: { comingFromSelected: true, colorSelected: color}}}>        
            <div className="color-display" style={{backgroundColor: `${color}`}}>
            </div>
            <p className="color-name">{color}</p>
          </Link>
        )}        
    </div>
  )
}

export default ColorSwatch;