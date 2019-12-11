import React, { useState } from 'react';
import ColorSwatch from '../ColorSwatch';
import { tsPropertySignature } from '@babel/types';


function DetailView(props) {

  const selectedColor = props.location.state.comingFromSelected ? [props.location.state.colorSelected] : [selectRandomColor()];

  function selectRandomColor() {
    const randomIndex = Math.floor(Math.random() * props.colors.length);
    return props.colors[randomIndex];
  }

  return (
    <div>
      <p></p>
      <ColorSwatch currentColors={selectedColor} colorSwatchWidth='400px' colorSwatchHeight='365px'/>
    </div>
  );
}

export default DetailView;