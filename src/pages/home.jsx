import React from 'react';
//import ProjectLink from '../components/project-link';
import HomeHero from '../components/homeHero'
import FeaturedProjects from '../components/featured-projects';
import About from '../components/about';
//import { useGlobalContext } from '../context';

const Home = () => {

  //const {projects} = useGlobalContext();

  return (
    <div className='home-container'>
      <HomeHero/>
      <About />
      <FeaturedProjects/>
    </div>
  )
};

export default Home;