import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ProjectLink = (props) => {

    const {name, lenguage, wip, description, imgs, id} = props;
  return (  
    <Wrapper className='link-container'>
        <Link to={`/projects/${id}`} className='link'>
            <div className='project-container'>
                <img src={imgs[0]} alt={name} className='project-img'/>
                <h2>{name}</h2>
                <h4>{lenguage}</h4>
                <p>{description}</p>
                <div className='working-project'>
                    {wip && <i >Work in progress</i>  }
                </div>
            </div>
        </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`



.link{
  text-decoration: none;
  display: flex;
  align-items: stretch;
  height: 100%;
}

.project-container{
    border: solid 1px gray;
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    color: white;
    background-color: g;
    position: relative;
    background-color: #1b1b1b;
    min-height: 400px;
}

.project-img{
  width: 100%;
  border-radius: 20px;
  height: 50%;
  object-fit: cover;
}

.working-project{
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  position: absolute;
  right: 5%;
  bottom: 1%;
  color: red;
  padding: 3px;
  border-radius: 50px;
}



`




export default ProjectLink;