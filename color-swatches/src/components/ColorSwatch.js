import React from 'react';
import './list-view/list-view.css'

const ColorSwatch = (props) => {

  return (
    <div class="container">
        {props.currentColors.map(color => 
          <div class="swatches">
            <div class="color-display" style={{backgroundColor: `#${color.hex}`}}>
              {color.hex}
            </div>
            <p class="color-name">{color.color}</p>
          </div>
        )}
    </div>
  )
}

export default ColorSwatch;