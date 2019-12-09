import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsView from './components/detail-view/DetailView';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import './App.css';
import ListView from './components/list-view/ListView';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <TopNav />
        <SideNav />
        <Switch>
          <Route exact path="/details" component={DetailsView} />
          <Route exact path="/" component={ListView} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
