import React, { useEffect, useState } from 'react';
import ColorSwatch from '../ColorSwatch';


function DetailView(props) {

  // if coming from random
  function selectRandomColor() {
    const randomIndex = Math.floor(Math.random() * props.colors.length);
    return props.colors[randomIndex];
  }
  const selectedColor = [selectRandomColor()];


  // if coming from selecting color then display color
  
  return (
    <div>
      <ColorSwatch currentColors={selectedColor} colorSwatchSize='400px'/>
    </div>
  );
}

export default DetailView;