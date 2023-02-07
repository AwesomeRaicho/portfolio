import React from 'react';
import { Link } from 'react-router-dom';

const ProjectLink = (item) => {

    console.log(item) 
    const {name, lenguage, wip, description, url, img} = item

  return (      
        <Link to={url} target={'_blank'} className='link'>
            <div className='project-container'>
                <img src={img} alt={name} className='project-img'/>
                <h2>{name}</h2>
                <h4>{lenguage}</h4>
                <p>{description}</p>
                {wip && <i>Work in progress</i>  }

            </div>
        </Link>
  )
}

export default ProjectLink;