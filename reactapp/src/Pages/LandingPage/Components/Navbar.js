import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavbarStyles.css';
import icon from "../Assert/Image/icon.jpg";
import { FaBars, FaTimes } from 'react-icons/fa';
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={icon} alt="ok" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
            <Link to='/' className='nav-links'   id='button' onClick={closeMobileMenu}>
          
              Home
            </Link>
          </li>
          <li
            className='nav-item'>
            <Link
              to='/service'
              id='button'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Service
            </Link>
          </li>
          <li className='nav-item'>
            
            <Link
              to='/contact'
              id='button'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
           <li className='nav-item'>
      <Link
         to='/login'
       
        className='nav-links'
        id='button'
        onClick={closeMobileMenu}
      >
        Login
      </Link>
    </li>
          
    <li className='nav-item'>
      <Link
         to='/SignUpPage'
         id='button'
        className='nav-links'
        onClick={closeMobileMenu}
      >
        Signup
      </Link>
    </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
