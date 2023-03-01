import React, {useState, } from 'react';
import Projects from '../project-data';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';


const SingleProject = () => {

  const {projectId} = useParams();

  const project = Projects.filter((project)=> {
    return project.id === Number(projectId);
  })
  const { imgs} = project[0];
// description, featured, id,

  const [mainImage, setMainImage] = useState(imgs[0]);

  const changeMain = (imgIndex) => {
    setMainImage(imgs[imgIndex])
  }

  return (
    <Wrapper>
      <div className="single-project-container">
        <div className="images-container">
          <div className='main-image-container'>
            <img src={`${mainImage}`} alt='project' className='main-image'/>
          </div>
          <div className='images-previews'>
            {imgs.map((image, index)=>{
              return (
                <span className='image-preview-container' key={index}>
                  <img src={`${image}`} alt={`preview-${index}`}  onClick={()=>{changeMain(index)}} className={`${mainImage === imgs[index]? 'image-preview active': 'image-preview'}`}/>
                </span>
              )
            })}
          </div>
        </div>
        <div className='project-information'>SingleProject, information</div>
      </div>
    </Wrapper>
  )
}

export default SingleProject;

const Wrapper = styled.div`
.single-project-container{
  border: solid 1px white;
  max-width: 1200px;
  margin: auto;
  display: flex;
}

.images-container{
  width: 50%;
  padding: 20px;
}

.main-image-container{
  width: 100%;
  height: 450px;
}

.main-image{
  width: 100%;
  height: 100%;
  object-fit: scale-down;
}

.images-previews{
  border: solid 1px white;
  display: flex;
  margin-top: 20px;
  padding: 5px;
}

.image-preview-container{
  width: 20%;
  position: relative;
  height: 70px;
  margin: 10px;
}

.image-preview{
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  box-sizing: border-box;
  padding: 5px;
}
.active{
  border: solid 2px #6363ff;
  border-radius: 10px;
  box-sizing: border-box;
}


`