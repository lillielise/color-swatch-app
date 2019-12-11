import React from 'react';
import ColorSwatch from '../color-swatch/ColorSwatch';


function DetailView(props) {

  const selectedColor = props.location.state.comingFromSelected ? [props.location.state.colorSelected] : [selectRandomColor()];

  function selectRandomColor() {
    const randomIndex = Math.floor(Math.random() * props.colors.length);
    return props.colors[randomIndex];
  }

  return (
    <div>
      <p></p>
      <ColorSwatch id="swatch-detail-view" detailsView={true} currentColors={selectedColor}/>
    </div>
  );
}

export default DetailView;