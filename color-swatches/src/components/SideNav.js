import React from 'react';
import { Link } from 'react-router-dom';
import './side-nav.css'

const TopNav = (props) => {

  return (
    <div class="side-nav">
      <ul>
        <Link to="/details">Random Color</Link>
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

export default TopNav;
