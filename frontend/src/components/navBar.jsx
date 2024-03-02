import React from 'react';
import Search from '../assets/search.png'
import Heart from '../assets/heart.png'
import Cart from '../assets/cart.png'


function NavBar() {
  return (
    <div className='navbar'>
          <div className='logo'>
            <p> <span className='letter-O'>O</span>UT<span>land  </span><span className='letter-H'>H</span>ATS</p>
          </div>
          <div className='flex-buttons'>
            <p>Home</p>
            <p>New</p>
            <p>Trend</p>
          </div>
          <div className='more-options'>
            <div><img src={Search}/></div>
            <div><img src={Heart}/></div>
            <div><img src={Cart}/></div>
            <button className='button-orange'>Sign Up</button>
          </div>
    </div>
  );
}

export default NavBar;
