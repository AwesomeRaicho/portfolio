import React from 'react';
import ProjectLink from '../components/project-link';
import HomeHero from '../components/homeHero'

import { useGlobalContext } from '../context';

const Home = () => {

  const {projects} = useGlobalContext();

  return (
    <div className='home-container'>
      <HomeHero/>

    </div>
  )
};

export default Home;