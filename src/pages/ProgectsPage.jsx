import React from 'react';

import styled from 'styled-components';
import ProjectLink from '../components/project-link';
import Projects from '../project-data';

const ProgectsPage = () => {
  return (
    <Wrapper>
        <div className='projects-page-container'>
            <h1 className='title'>Projects</h1>
            <div className='projects-container'>
                {Projects.map((project)=>{
                    return <ProjectLink key={project.id} {...project}/>
                })}
            </div>
        </div>
    </Wrapper>
  )
}


export default ProgectsPage;


const Wrapper = styled.div`
.title{
    color: white;
    text-align: center;
    font-size: 50px;
}
.projects-container{
    max-width: 1200px;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
`;