import React from 'react';
import Search from '../assets/search.png'
import Heart from '../assets/heart.png'
import Cart from '../assets/cart.png'
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div className='navbar'>
     <div className='logo'>
     <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> <p> <span className='letter-O'>O</span>UT<span>land  </span><span className='letter-H'>H</span>ATS</p></Link>
          </div>
          
          <div className='flex-buttons'>
            <Link to='/'style={{ textDecoration: 'none', color: 'inherit' }}><p>Home</p></Link>
            <p>New</p>
            <p>Trend</p>
          </div>
          <div className='more-options'>
            <div><img src={Search}/></div>
            <Link to='/wishlist'><div><img src={Heart}/></div></Link>
            <div><img src={Cart}/></div>
            <Link to="/signUp"><button className='button-orange'>Sign Up</button></Link>
          </div>
    </div>
  );
}

export default NavBar;
