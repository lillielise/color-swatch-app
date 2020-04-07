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

function App(props) {
  const generatedColors = generateHexColors()
  const [originalHexColors] = useState(generatedColors[0])
  const [originalColorObject] = useState(generatedColors[1])
  const [colors, setColors] = useState(originalHexColors)

  function resetOriginalColors() {
    setColors(originalHexColors)
  }

  function colorInput(newColors) {
    setColors(newColors)
  }

  if (props.comingFromClear) {
    setColors(originalHexColors)
  }

  return (
    <div id="main-container">
      <BrowserRouter>
        <Router history={history}>
          <TopNav callback={colorInput} originalHexColors={originalHexColors} />
          <SideNav
            callback={colorInput}
            originalColorObject={originalColorObject}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={props => <ListView {...props} colors={colors} />}
            />
            <Route
              exact
              path="/details"
              render={props => (
                <DetailsView
                  {...props}
                  callback={resetOriginalColors}
                  colors={colors}
                />
              )}
            />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  )
}

export default App
