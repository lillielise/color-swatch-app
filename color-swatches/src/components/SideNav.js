import React from 'react';
import { Link } from 'react-router-dom';
import './side-nav.css'

const SideNav = (props) => {

  return (
    <div className="side-nav">
      <ul id="side-nav-list">
        <Link to={{ pathname: "/details", state: { comingFromSelected: false}}} id="random-color-button">Random Color</Link>
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
