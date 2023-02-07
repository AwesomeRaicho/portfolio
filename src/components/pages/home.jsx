import React from 'react';
import ProjectLink from './project-link';

import { useGlobalContext } from '../../context';

const Home = () => {

  const {projects} = useGlobalContext();

  return (
    <div className='home-container'>
        {projects.map((value, index)=>{

          return <ProjectLink key={index} {...value}/>
        })}
    </div>
  )
};

export default Home;