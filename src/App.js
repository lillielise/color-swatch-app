import React, { useState } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import DetailsView from './components/detail-view/DetailView'
import TopNav from './components/navigation/TopNav'
import SideNav from './components/navigation/SideNav'
import ListView from './components/list-view/ListView'
import generateHexColors from './util/generateHexColors'
import './App.css'
import createHistory from 'history/createBrowserHistory'
export const history = createHistory()
// import rootReducer from './store/reducers'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// const store = createStore(rootReducer)

function App() {
  const [originalColors, setOriginalColors] = useState(generateHexColors())
  const [colors, setColors] = useState(originalColors)

  function colorInput(newColors) {
    setColors(newColors)
  }

  return (
    <div id="main-container">
      <BrowserRouter>
        <Router history={history}>
          <TopNav callback={colorInput} originalColors={originalColors} />
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
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
