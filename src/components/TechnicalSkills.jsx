import React from 'react'
import styled from 'styled-components';
import { icons } from '../project-data';

const TechnicalSkills = () => {


    const iconArray = [];

    const getArray = () =>{
        for(const prop in icons){
            iconArray.push(icons[prop])
        }
    };
    getArray();


  return (
    <Wrapper>
        <div className='bg-blue-800  pb-10'>
            <h1 className='text-4xl text-center font-bold text-white pt-10 lg:text-6xl'>Technical Skills</h1>
            <div className='flex flex-wrap justify-center items-center 0  mt-12'>
                {iconArray.map((tech, index)=>{
                    return <span className=' bg-gray-800 m-2 p-4 rounded-full' key={index}>{tech.image}</span>
                })}
            </div>
        </div>
    </Wrapper>
    
  )
}

export default TechnicalSkills;

const Wrapper = styled.section`




`; 