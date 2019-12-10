import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './list-view/list-view.css'
import { ifError } from 'assert';

const ColorSwatch = (props) => {

  return (
    <div className="content-container">
        {props.currentColors.map(color => 
          <div className="swatches" style={{width: props.colorSwatchSize, height: props.colorSwatchSize}}>
          <Link to={{ pathname: "/details", state: { comingFromSelected: true, colorSelected: color}}} id="random-color-button">Random Color</Link>
            <div className="color-display" style={{backgroundColor: `#${color}`}}>
            </div>
            <p className="color-name">#{color}</p>
          </div>
        )}        
    </div>
  )
}

export default ColorSwatch;