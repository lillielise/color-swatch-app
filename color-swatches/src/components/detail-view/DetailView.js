import React, { useState } from 'react';
import ColorSwatch from '../ColorSwatch';
import { tsPropertySignature } from '@babel/types';


function DetailView(props) {

  // const [selectedColor, setSelectedColor] = useState(props.location.state.comingFromSelected ? [props.location.state.colorSelected] : [selectRandomColor()]);

  const [selectedColor, setSelectedColor] = useState([selectRandomColor()]);

  console.log('comingFromSelected', props.location.state.comingFromSelected,
  props.location.state.comingFromSelected ? [props.location.state.colorSelected] : [selectRandomColor()])


  // if coming from random
  function selectRandomColor() {
    const randomIndex = Math.floor(Math.random() * props.colors.length);
    return props.colors[randomIndex];
  }

  return (
    <div>
      <p></p>
      {/* <div style={{backgroundColor: }}></div> */}
      <ColorSwatch currentColors={selectedColor} colorSwatchWidth='400px' colorSwatchHeight='365px'/>
    </div>
  );
}



// class DetailView extends React.Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       selectedColor: this.props.location.state.comingFromSelected ? [this.props.location.state.colorSelected] : [this.selectRandomColor()]
//     }
//     // const [selectedColor] = useState(this.props.location.state.comingFromSelected ? [this.props.location.state.colorSelected] : [this.selectRandomColor()]);
//   }
  

//   selectRandomColor = () => {

//     const randomIndex = Math.floor(Math.random() * this.props.colors.length);
//     return this.props.colors[randomIndex];

//   }

//   render() {
   

//   // setSelectedColor(props.location.state.comingFromSelected ? [props.location.state.colorSelected] : [selectRandomColor()]);

//     console.log('comingFromSelected', this.props.location.state.comingFromSelected,
//     this.props.location.state.comingFromSelected ? [this.props.location.state.colorSelected] : [this.selectRandomColor()])


//   // if coming from random
    

//   return (
//     <div>
//       <p></p>
//       <ColorSwatch currentColors={this.state.selectedColor} colorSwatchWidth='400px' colorSwatchHeight='365px'/>
//     </div>
//   );



//   }
  
// }

export default DetailView;