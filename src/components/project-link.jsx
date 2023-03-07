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
                <h2 className='text-2xl px-3'>{name}</h2>
                <h4 className='italic px-3 my-1 text-gray-600'>{lenguage}</h4>
                <p className='px-3'>{`${description.substring(0, 100)}...`}</p>
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
    margin: 10px;
    width: 300px;
    background-color: white;
    position: relative;
    min-height: 400px;
    box-shadow: 2px 2px 8px gray;
}

.project-img{
  width: 100%;
  border-radius: 20px 20px 0px 0px ;
  height: 50%;
  object-fit: cover;
  border-bottom: 1px gray solid;
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