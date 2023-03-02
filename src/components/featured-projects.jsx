import React from 'react';
import styled from 'styled-components';
import ProjectLink from '../components/project-link';
import Projects from '../project-data';




const FeaturedProjects = () => {

  const featuredProjects = Projects.filter((project)=>{
    return project.featured === true;
  })


  return (
    <Wrapper>
      <div className="section-center">
        <h2 className='section-title'>Featured Projects</h2>
        <div className="projects-container">
          {featuredProjects.map((project)=>{
            return <ProjectLink key={project.id} {...project} className='project-link'/>
          })}
        </div>

      </div>
    </Wrapper>
  )
}



const Wrapper = styled.section`

.section-center{
  max-width: 1200px;
  margin: auto;
}

.section-title{
  color: white;
  text-align: center;
  font-size: 43px;
}
.projects-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

`

export default FeaturedProjects;

