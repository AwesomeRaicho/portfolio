import React from 'react';
import styled from 'styled-components';
import ProjectLink from '../components/project-link';
import Projects from '../project-data';
import { Link } from 'react-router-dom';




const FeaturedProjects = () => {

  const featuredProjects = Projects.filter((project)=>{
    return project.featured === true;
  })


  return (
    <Wrapper>
      <section className="section-center">
        <h2 className='my-10 text-4xl text-center text-white pt-10 lg:text-6xl lg:my-16'>Featured Projects</h2>
        <div className="projects-container">
          {featuredProjects.map((project)=>{
            return <ProjectLink key={project.id} {...project} className='project-link'/>
          })}
        </div>
        <div className='btns-container'>
          <Link to={'/projects'} className='link btn'>All Projects</Link>  
        </div>
      </section>
    </Wrapper>
  )
}



const Wrapper = styled.section`

.section-center{
  max-width: 1200px;
  margin: auto;
  min-height: 600px;
}

.section-title{
  text-align: center;
}
.projects-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.btns-container{
  margin-top: 20px;
}

`

export default FeaturedProjects;

