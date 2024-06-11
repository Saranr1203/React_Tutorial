import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='top'>
    <nav>
      <div>
        <img src={"https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"} alt="logo" height="100px"/>
      </div>
      <div>
        <li>
          <Link to="/home">
            <ul>Home</ul>
          </Link>
          <Link to="/profile">
            <ul>Profile</ul>
          </Link>
          <ul>Setting</ul>
        </li>
      </div>
    </nav>
    </div>
  )
}

export default Navbar