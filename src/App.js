import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import DetailsView from './components/detail-view/DetailView'
import TopNav from './components/navigation/TopNav'
import SideNav from './components/navigation/SideNav'
import ListView from './components/list-view/ListView'
import ColorFamilies from './components/color-families/ColorFamilies'
import generateHexColors from './util/generateHexColors'
import './App.css'
import createHistory from 'history/createBrowserHistory'
export const history = createHistory();

function App() {
  const [colors] = useState(generateHexColors())


  return (
    <div id="main-container">
      <BrowserRouter>
      <Router history={history}>
        <TopNav />
        <SideNav />
        <Switch>
          <Route
            exact
            path="/"
            render={props => <ListView {...props} colors={colors} />}
          />
          <Route
            exact
            path="/details"
            render={props => <DetailsView {...props} colors={colors} />}
          />
          <Route
            exact
            path="/color-families"
            render={props => <ColorFamilies {...props} colors={colors} />}
          />
        </Switch>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
