import React from 'react';
import './list-view/list-view.css'

const ColorSwatch = (props) => {

  return (
    <div class="content-container">
        {props.currentColors.map(color => 
          <div class="swatches" style={{width: props.colorSwatchSize, height: props.colorSwatchSize}}>
            <div class="color-display" style={{backgroundColor: `#${color.hex}`}}>
            </div>
            <p class="color-name">#{color.hex}</p>
          </div>
        )}
        
    </div>
  )
}

export default ColorSwatch;