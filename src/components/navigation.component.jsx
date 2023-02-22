import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import {FaRegTimesCircle, FaBars} from 'react-icons/fa';

const Navigation = () => {

    const [toggled, setToggled] = useState(false);

  return (
    <div className='navbar-contaioner'>
        <nav className='navbar'>
            <div className='logo'>
                <Link className='link logo-link' to={'/'}>RA</Link>
            </div>

            <ul className={`nav-list ${toggled && 'display'}`}>
                <li className='nav-item'>
                    <Link className='nav-link' to={'/'}>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to={'/about'}>About</Link>
                </li>
            </ul>

            <button type='button' className='nav-toggler' onClick={()=>setToggled(!toggled)}>{toggled ? <FaRegTimesCircle size='30px' color='white'/>:<FaBars size='30px' color='white'/>}</button>
        </nav>
    </div>
  )
}

export default Navigation;