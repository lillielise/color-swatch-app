import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsView from './components/detail-view/DetailView';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import './App.css';
import ListView from './components/list-view/ListView';

function App() {

  function generateHexColors() {
    const possibleHexValues = [0,1,2,3,4,5,5,7,8,9,'a', 'b', 'c', 'd', 'e', 'f'];
    const colorsArray = [];
    const numberOfColors = 100;
    while(colorsArray.length < numberOfColors) { 
      let hexCode = '#';
      while(hexCode.length < 7) {
        hexCode += possibleHexValues[Math.floor(Math.random() * possibleHexValues.length)];
      }
      if(!colorsArray.includes(hexCode)){
        colorsArray.push(hexCode);
      }
    }
    return colorsArray;
  }


  const [colors] = useState(generateHexColors());


  console.log(colors)
  
  return (
    <div id="main-container">
      <BrowserRouter>
        <TopNav />
        <SideNav />
        <Switch>
          <Route exact path="/" render={(props) => <ListView {...props} colors={colors}/>}/>
          <Route exact path="/details" render={(props) => <DetailsView {...props} colors={colors}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
