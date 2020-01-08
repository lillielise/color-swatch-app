import React from 'react'
import { useHistory } from "react-router"
import { Redirect } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo-symbol.svg'
import './TopNav.css'
import {history} from '../../App'

const TopNav = props => {

  function handleKeyPress(event) {
    // let history = useHistory();
    if(event.key === 'Enter') {
      const color = event.target.value;
      console.log(color);
      history.push({
        pathname:'/details',
        state: { 
          comingFromSelected: true,
          colorSelected: color, 
        }
    });
      // props.histroy.push("/path")
      // return <Redirect to='/details' />
    }
  }

  function handleChange(event) {
    console.log()
  }
  return (
    <div className="top-nav">
      <Logo id="logo" />
      <input id="search-button" type="text" placeholder="Search" onChange={handleChange} onKeyPress={handleKeyPress}></input>
    </div>
  )
}

export default TopNav
