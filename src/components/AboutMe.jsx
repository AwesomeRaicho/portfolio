import React,{useState} from 'react'
import styled from 'styled-components';
import { aboutMePics } from '../utils/data';
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {BsSkipStart} from "react-icons/bs";

const AboutMe = () => {

    const [pic, setPic] = useState(0)
  
    const handleClick = (num) => {
      setPic(num);
    }
    const slideButton = (num) => {
        if(num > 2){
            setPic(0);
        } else if(num < 0 ){
            setPic(2);
        } else {
            setPic(num);
        }


    }



  return (
<Wrapper>
        <h2 className=' my-10 text-4xl text-center text-white pt-10 lg:text-6xl lg:my-16'>About Me</h2>

        <div className='container flex flex-col overflow-hidden lg:flex-row m-auto rounded-xl lg:my-20'>
            {/* // first column  */}
            <div className='flex items-center relative w-full lg:w-1/2 border-4 border-gray-50 border-r-0 overflow-hidden '>
                <div className='absolute z-50 top-2 left-1/3'>
                    <button type='button'><AiOutlineArrowLeft size={'35px'} color='white' className='mx-6 mt-2' onClick={()=>slideButton(pic-1)}/></button>
                    <button type='button'><AiOutlineArrowRight size={'35px'} color='white' className='mx-6 mt-2' onClick={()=>slideButton(pic+1)}/></button>
                </div>
                <div className={`passions pt-14 ${pic === 0 ? 'transform1': pic === 1 ? 'transform2': pic === 2? 'transform3': null} duration-200 `}>
                        <div className='passion' onClick={()=>{handleClick(0)}}>
                            <h2 className='text-2xl m-5 text-center '>Software Development</h2>
                            <p className='p-2 text-base select-none'>I love programming and tackling tough problems. I strive for efficient and effective solutions that meet unique needs. I'm always expanding my knowledge to stay current with technology and delivering high-quality work to grow as a developer..</p>
                        </div>

                        <div className='passion' onClick={()=>{handleClick(1)}}>
                            <h2  className='text-2xl m-5 text-center'>Playing Guitar</h2>
                            <p className='p-2 text-base select-none'>Playing guitar brings me joy and allows me to express my creativity through music, I love experimenting with different sounds techniques and genres, I enjoy listening to Blues, Rock and Metal.</p>
                        </div>

                        <div className='passion' onClick={()=>{handleClick(2)}}>
                            <h2  className='text-2xl m-5 text-center'>Playing Videogames</h2>
                            <p className='p-2 text-base select-none'>I enjoy playing video games as they offer a unique form of entertainment that allows me to immerse myself in different worlds and stories, my passion for software stems from this activity, ever sense I saw the making of DVD that was included in the God of War 2 (2007), I new I wanted to be a programmer.</p>
                        </div>

                        <div className='border-4 border-gray-600 rounded-full hover:scale-125 duration-200 ml-6' onClick={()=>{handleClick(0)}}>
                        <BsSkipStart fontSize={'50px '}/>
                        </div>
                </div>
                
            </div>
            {/* // first column end */}
            

            {/* // second column */}
                <div className='w-full lg:w-1/2 flex justify-center lg:items-center bg-gray-50'>
                    <img src={aboutMePics[pic]} alt="ricardo araujo" className='h-96 object-scale-down lg:m-10'/>
                </div>

        </div>
</Wrapper>
  )
}


export default AboutMe;


const Wrapper = styled.section`



    .passions{
        display: flex;
        width: 100%;
        align-items: center;
    }

    .transform1{
        transform: translate(-0%);
    }
    .transform2{
        transform: translate(-65%);
    }
    .transform3{
        transform: translate(-140%);
    }

    .passion{
        width: 70%;
        flex-shrink: 0;
        margin: 3%;
        border-radius: 5px;
        padding: 10px;
        background-color: #F5F5F5;
        box-shadow: 2px 2px 8px gray;
    }
    .passion:hover{
        transform: scale(1.05);
        cursor: pointer;
        transition: 200ms;
    }

`;