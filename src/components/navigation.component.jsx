import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import {FaRegTimesCircle, FaBars} from 'react-icons/fa';
import styled from 'styled-components';

const Navigation = () => {

    const [toggled, setToggled] = useState(false);

  return (
    <Wrapper>
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
    </Wrapper>
  )
}


const Wrapper = styled.section`
.navbar-container{
  background-color: black;
}

.navbar{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: auto;
    border-bottom: solid gray 1px;
    box-shadow: 0px 4px 8px gray;
    background-color: rgb(37, 37, 37);
    margin: 0%;
    padding: 0%;
    height: 7vh;
}

.nav-list{
    list-style: none;
    display: flex;
    margin-left: auto;
    margin-right: 30px;
    transition: 1500ms;
    margin-top: 0%;
    margin-bottom: 0%;
    padding: 0%;
}

.logo{
  margin-left: 0px;
  font-size: 30px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 900;
  color: white;
}

.logo-link{
  color: white;
}

.nav-item{
  margin: 5px;
  font-size: 20px;
  margin-right: 20px;
}

.link{
  text-decoration: none;
}

.nav-link{
  text-decoration: none;
  color: white;
}

.nav-toggler{
  border: none;
  background-color: #3D588A;
  margin-right: 30px;
  display: none;
}

.link-project-holder{
  width: 100%;
}

@media screen and (max-width: 700px){

.navbar{
    height: 7vh;

}

.nav-toggler{
  border: none;
  background-color: rgb(37, 37, 37);
  display: inline;
  margin-left: auto;
  margin-right: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
}

.nav-list{
  order: 3;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 0px;
  transition: all 200ms linear;
  width: 100%;
  margin: 0%;
  background-color: rgb(37, 37, 37);;
}
.display{
  height: 75px;
}

.project-container{
  margin: 0px;
}

.link{
  margin: auto;
  margin-top: 30px;
}
.logo{
  margin-left: 10px;
}

}



`




export default Navigation;