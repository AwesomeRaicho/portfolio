import React from 'react';
import HomeHero from '../components/homeHero'
import FeaturedProjects from '../components/featured-projects';
import AboutMe from '../components/AboutMe';
//import { useGlobalContext } from '../context';

const Home = () => {

  //const {projects} = useGlobalContext();

  return (
    <div className='home-container'>
      <HomeHero/>
      <AboutMe />
      <FeaturedProjects/>
    </div>
  )
};

export default Home;