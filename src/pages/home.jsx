import React from 'react';
//import ProjectLink from '../components/project-link';
import HomeHero from '../components/homeHero'
import FeaturedProjects from '../components/featured-projects';

//import { useGlobalContext } from '../context';

const Home = () => {

  //const {projects} = useGlobalContext();

  return (
    <div className='home-container'>
      <HomeHero/>
      <FeaturedProjects/>
    </div>
  )
};

export default Home;