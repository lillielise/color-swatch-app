import React from 'react';
import { ReactComponent as Logo } from './logo-symbol.svg';
import './top-nav.css'

const TopNav = (props) => {

  return (
    <div class="top-nav">
      <Logo id="logo" />
    </div>
  )
}

export default TopNav;