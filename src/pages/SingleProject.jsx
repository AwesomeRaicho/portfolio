import React, {useState, } from 'react';
import Projects from '../project-data';
import { useParams,Link } from 'react-router-dom';

import styled from 'styled-components';
import { GoEye } from "react-icons/go";
import {SiGithub} from "react-icons/si";

const SingleProject = () => {

  const {projectId} = useParams();

  const project = Projects.filter((project)=> {
    return project.id === Number(projectId);
  })
  const { description, name, imgs, url, github, icons } = project[0];


  const [mainImage, setMainImage] = useState(imgs[0]);

  const changeMain = (imgIndex) => {
    setMainImage(imgs[imgIndex])
  }

  return (
    <Wrapper>

      <div className="single-project-container">
        <div className="images-container">
          <div className='main-image-container'>
            <img src={`${mainImage}`} alt='project' className={`${mainImage === imgs[4]?  'main-image main-image-mobile': 'main-image'}`}/>
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


        <div className='project-information'>
          <h1 className='project-name'>{name}</h1>
          <div className="icons-container">
            {icons.map((icon)=>{
              return <div className="tech-icon" color={`${icon.color}`}>{icon.image}<div><h3 className='icon-name'>{icon.name}</h3></div></div>
            })}
          </div>
          
          <p>{description}</p>
          <div className='btns-container'>
            <Link to={url} className='link btn' ><GoEye className='icon'/> Preview</Link>
            <Link to={github} className='link btn'><SiGithub className='icon'/> Code</Link>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default SingleProject;

const Wrapper = styled.div`
.project-name{
  font-size: 40px;
}

.link{
  text-decoration: none;
}
.icon-name{
  font-size: 15px;
  margin: 0%;
  text-align: center;
}

.icons-container{
  display: flex;
  flex-wrap: wrap;
}

.tech-icon{
  font-size: 40px;
  background-color: #ffffff76;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

.single-project-container{
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  margin-top: 0%;
  border: 2px white solid;
  margin-top: 30px;
  border-radius: 25px;
  min-height: 600px;
  background-color: #24787c;
  
}

.project-information{
  color: white;
  width: 50%;
  border-radius: 25px;
  background-color: #24787c;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}

.btns-container{
  margin-top: auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: left;
}
.btn{
  border: transparent;
  background: transparent;
  margin: 15px;
  background-color: #e4d100;
  border-radius: 5px;
  color: white;
  text-shadow: 0px 0px 8px gray;
  width: 120px;
  font-size: 20px;
  border: solid 3px #e4d100;
  display: flex;
  justify-content: center;
  align-items: center;
}



.icon{
  margin-right: 10px;
}


// images

.images-container{
  width: 50%;
  padding: 20px;
  margin-top: 0%;
  max-height: 600px;
  display: flex;
  flex-direction: column;
}

.main-image-container{
  width: 100%;
  flex-grow: 1;
  border: solid 2px white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.main-image{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-image-mobile{
  object-fit: scale-down;
  max-height: 400px;
}

.images-previews{
  border-radius: 25px;
  display: flex;
  margin-top: 20px;
  padding: 5px;
  background-color: #24787c;
  border: solid 2px white;
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
  object-fit: cover;
  box-sizing: border-box;
  padding: 5px;
  position: absolute;
}
.active{
  border: solid 2px white;
  border-radius: 10px;
  box-sizing: border-box;
}



@media screen and (max-width: 950px){ //////////////// 950px

  .single-project-container{
  max-width: 1200px;
  margin: auto;
  display: flex;
  padding-top: 50px;
  margin: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.images-container{
  width: 80%;
  padding: 20px;
}
.project-information{
  color: white;
  width: 80%;
}
}


@media screen and (max-width: 500px){ //////////////// 950px

.single-project-container{
max-width: 1200px;
display: flex;
padding-top: 50px;

flex-direction: column;
justify-content: center;
align-items: center;
}
.images-container{
width: 90%;
padding: 0px;
}
.project-information{
color: white;
width: 90%;
}
}
`