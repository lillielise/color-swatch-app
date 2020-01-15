import React from 'react'
import './TopNav.css'
import {history} from '../../App'

const TopNav = props => {
  
  function validateColor(color) {
    let regex = /^#(?:[0-9a-fA-F]{6})$/;
    return regex.test(color);
  }

  function handleKeyPress(event) {
    if(event.key === 'Enter') {
      const color = event.target.value;
      console.log(color);

      if(validateColor(color) === true) {
        history.push({
          pathname:'/details',
          state: { 
            comingFromSelected: true,
            colorSelected: color, 
          }
        });
      } else {
        alert('Please Enter a Valid Hex Code example: #03badd')
      }
      // props.histroy.push("/path")
      // return <Redirect to='/details' />
    }
  }

  function handleChange(event) {
    console.log()
  }
  return (
    <div className="top-nav">
      <input id="search-button" type="text" placeholder="Search" onChange={handleChange} onKeyPress={handleKeyPress}></input>
    </div>
  )
}

export default TopNav
