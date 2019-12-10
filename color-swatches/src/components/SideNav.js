import React from 'react';
import { Link } from 'react-router-dom';
import './side-nav.css'

const SideNav = (props) => {

  return (
    <div class="side-nav">
      <ul id="side-nav-list">
        <Link id="random-color-button" to="/details">Random Color</Link>
        <li>Red</li>
        <li>Orange</li>
        <li>Yellow</li>
        <li>Green</li>
        <li>Blue</li>
        <li>Purple</li>
        <li>Brown</li>
        <li>Gray</li>
      </ul>
    </div>
  )
}

export default SideNav;
