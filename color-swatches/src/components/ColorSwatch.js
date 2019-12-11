import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './list-view/list-view.css'
import { ifError } from 'assert';

const ColorSwatch = (props) => {

  return (
    <div className="content-container">
        {props.currentColors.map(color => 
          // <div className="swatches" style={{width: props.colorSwatchSize}}>
          <Link className="swatches" style={{width: props.colorSwatchWidth, height: props.colorSwatchHeight}} to={{ pathname: "/details", state: { comingFromSelected: true, colorSelected: color}}}>        
            <div className="color-display" style={{backgroundColor: `#${color}`}}>
            </div>
            <p className="color-name">#{color}</p>
          </Link>
          // </div>
        )}        
    </div>
  )
}

export default ColorSwatch;