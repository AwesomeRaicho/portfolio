import React from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navbar-contaioner'>
        <nav className='navbar'>
            <div className='logo'>
                <Link className='link' to={'/'}>RICARDO ARAUJO</Link>
            </div>
            <ul className='nav-list'>
                <li className='nav-item'>
                    <Link className='link' to={'/'}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='link' to={'/about'}>About</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation;