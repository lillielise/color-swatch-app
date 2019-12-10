import React, { useState } from 'react';
import ColorSwatch from '../ColorSwatch';
import { tsPropertySignature } from '@babel/types';


function DetailView(props) {

  const [selectedColor, setSelectedColor] = useState(props.location.state.comingFromSelected ? [props.location.state.colorSelected] : [selectRandomColor()]);
  //const [selectedColor, setSelectedColor] = useState([]);

  console.log('selected color!', selectedColor)

  // if coming from random
  function selectRandomColor() {
    const randomIndex = Math.floor(Math.random() * props.colors.length);
    return props.colors[randomIndex];
  }
  let selectedColorValue;

  if(props.location.state.comingFrom === 'random') {
    selectedColorValue = [selectRandomColor()];
    // setSelectedColor(selectedColorValue);
    //console.log(props.location.state.comingFrom, selectedColorValue)
  } else {
    // console.log(props.location.state.comingFrom);
    //setSelectedColor(selectedColorValue);
    // setSelectedColor([props.location.state.selectedColor]);
  }
  // if coming from selecting color then display color
  //selectedColor equals

  // const [selectedColor] = useState(selectedColorValue);


  return (
    <div>
      <p></p>
      <ColorSwatch currentColors={selectedColor} colorSwatchSize='400px'/>
    </div>
  );
}

export default DetailView;