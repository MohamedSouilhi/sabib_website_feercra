import React, { useState } from 'react';
import logo from '../images/logo.png';

function Navbar() {
    const [nav, setnav] = useState(false);

    const changeback = () => {
        if (window.scrollY <= 50) {
            setnav(true);
        } else {
            setnav(false);
        }
    };

    window.addEventListener('scroll', changeback);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <a href='main' className='logo'>
                <img src={logo} alt='' />
            </a>
            <input className='menu-btn' type='checkbox' id='menu-btn' />
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li>
                    <a href='main'>HOME</a>
                </li>
                <li>
                    <a href='features'>features</a>
                </li>
                <li>
                    <a href='presentaion'>Offer</a>
                </li>
                <li>
                    <a href='about'>About</a>
                </li>
                <li>
                    <a href='contact'>contact</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
