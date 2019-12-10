import React from 'react';
import './list-view/list-view.css'

const ColorSwatch = (props) => {

  return (
    <div className="content-container">
        {props.currentColors.map(color => 
          <div className="swatches" style={{width: props.colorSwatchSize, height: props.colorSwatchSize}}>
            <div className="color-display" style={{backgroundColor: `#${color.hex}`}}>
            </div>
            <p className="color-name">#{color.hex}</p>
          </div>
        )}
        
    </div>
  )
}

export default ColorSwatch;