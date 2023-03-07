import React, {useState, } from 'react';
import Projects from '../project-data';
import { useParams,Link } from 'react-router-dom';

import { GoEye } from "react-icons/go";
import {SiGithub} from "react-icons/si";

const SingleProject = () => {

  const {projectId} = useParams();


  const project = Projects.filter((project)=>{
    return project.id === Number(projectId);
  }); 

  
  const { description, name, imgs, url, github, icons } = project[0]; 

  const [mainImage, setMainImage] = useState(imgs[0]); 

  const changeMain = (imgIndex) => {
    setMainImage(imgs[imgIndex])
  }


  return (
    <section className='back'>
              <div className='container mx-auto  pt-6 flex align-center'>
                <Link to={'/projects'} className='link btn'>All Projects</Link>  
              </div>
      <div className='container mx-auto grid lg:grid-cols-2 border-2 border-gray-400'>

        <div className='p-4  flex flex-col gap-4'>

          <div className='flex justify-center h-96   '>
            <img src={mainImage} alt="preview" className='w-full max-h-96 object-scale-down' />
          </div>



          

          <div className='flex gap-3 h-24' >
            {imgs.map((image,index)=>{
              return <img src={image} key={index} alt={`preview-${index}`} onClick={()=>{changeMain(index)}} className={` w-1/6 object-cover p-1 flex-1 ${mainImage === imgs[index] && 'border'}`}/>
            })}
          </div>
          


        </div>

        <div className='bg-white p-6 flex flex-col gap-6'>
          <h1 className='text-4xl '>{name}</h1>
            <div className="flex gap-4 ">
              {icons.map((icon, index)=>{
                return <div className="text" key={index}>{icon.image}</div>
              })}
            </div>
            
            <p>{description}</p>
            <div className='flex mt-auto'>
              <Link to={url} className='link btn' ><GoEye className='icon'/> &nbsp;&nbsp;Preview</Link>
              <Link to={github} className='link btn'><SiGithub className='icon'/> &nbsp;&nbsp;Code</Link>
            </div>
          </div>
      </div>
    </section>
  )
}



export default SingleProject;