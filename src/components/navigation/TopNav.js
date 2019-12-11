import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo-symbol.svg';
import './top-nav.css'

const TopNav = (props) => {

  return (
    <div className="top-nav">
      <Logo id="logo" />
      <input id="search-button" type="text" placeholder="Search"></input>
    </div>
  )
}

export default TopNav;