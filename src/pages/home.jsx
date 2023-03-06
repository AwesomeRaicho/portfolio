import React from 'react';
import HomeHero from '../components/homeHero'
import FeaturedProjects from '../components/featured-projects';
import AboutMe from '../components/AboutMe';
import TechnicalSkills from '../components/TechnicalSkills';
//import { useGlobalContext } from '../context';

const Home = () => {

  //const {projects} = useGlobalContext();

  return (
    <div className='home-container'>
      <HomeHero />
      <TechnicalSkills />
      <AboutMe />
      <FeaturedProjects />
    </div>
  )
};

export default Home;