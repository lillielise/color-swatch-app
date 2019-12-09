import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsView from './components/detail-view/DetailView';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import './App.css';
import ListView from './components/list-view/ListView';


function App() {

  const colors = [
    {color: '1', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'red', hex: 'FF0000'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: '100', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: 'blue', hex: '0000FF'},
    {color: '100', hex: '0000FF'},
  ]
  
  
  return (
    <React.Fragment>
      <BrowserRouter>
        <TopNav />
        <SideNav />
        <Switch>
          {/* <Route exact path="/details" component={DetailsView} colors={colors} /> */}
          {/* <Route exact path="/details" render={(routeProps) => (<DetailsView {...routeProps} colors={colors}/>)} /> */}
          <Route exact path="/" component={ListView}/>
          <Route exact path="/details" render={(props) => <DetailsView {...props} colors={colors}/>} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
