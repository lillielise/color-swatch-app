import React from 'react'
import { ReactComponent as Logo } from '../../assets/logo-symbol.svg'
import './TopNav.css'
import { history } from '../../App'

const TopNav = props => {
  function validateColor(color) {
    let regex = /^#(?:[0-9a-fA-F]{6})$/
    return regex.test(color)
  }

  function handleChange(event) {
    const searchValue = event.target.value
    let newColors = []
    props.originalColors.forEach(color => {
      if (color.includes(searchValue)) {
        newColors.push(color)
      }
    })
    props.callback(newColors)
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      const color = event.target.value
      console.log(color)

      if (validateColor(color) === true) {
        history.push({
          pathname: '/details',
          state: {
            comingFromSelected: true,
            colorSelected: color,
          },
        })
      } else {
        alert('Please Enter a Valid Hex Code example: #03badd')
      }
      // props.histroy.push("/path")
      // return <Redirect to='/details' />
    }
  }

  return (
    <div className="top-nav">
      <h1>Color Swatches</h1>
      <input
        id="search-button"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></input>
    </div>
  )
}

export default TopNav
