import React from 'react';
import logo from './assets/flower_two.png';
import './Navbar.css';



function Navbar() {

  return (
    <div className='nav-container'>
      <nav className='nav'>
        <img className='logo' src={logo} href="#"></img>
        <h2 className='nav-title'>Ms. Flower's Crochet</h2>

        <ul className='nav-menu'>
          <li className='navbar-items'><a>Home</a></li>
          <li className='navbar-items'><a>Shop</a></li>
          <li className='navbar-items'><a>About</a></li>
          <li className='navbar-items'><a>Contact Us</a></li>
        </ul>

      </nav>
    </div>
  )

}

export default Navbar;