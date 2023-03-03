import React,{useState} from 'react'
import styled from 'styled-components';
import { aboutMePics } from '../utils/data';
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
const About = () => {

  const [pic, setPic] = useState(0)
  
  const handleText = (num) => {
    setPic(num);
  }
  const slideImg = (num) => {
    setPic(num)
    if(num>2){
      setPic(0)
    }
    if(num<0){
      setPic(2)
    }
  }
  
  return (
    <Wrapper>
      
        <section className='aboutme-section'>
          <h1 className='section-name'>About Me</h1>
          <div className='aboutme-content'>
            <div className='information'>
              <button type='button' className={`${aboutMePics[pic] === aboutMePics[0]? 'passion active':'passion'}`} onClick={()=>{handleText(0)}}>
                <h2>Software Development</h2>
                <p  className='text'>I am a developer with a passion for programming. I thrive on the challenge of solving complex problems and am driven to create efficient and effective solutions that meet the unique needs of each situation. I enjoy taking on challenges and constantly expanding my knowledge to stay up-to-date with the latest technologies. My focus is on delivering high-quality work and growing professionally as a developer.</p>
              </button>
              <button type='button' className={`${aboutMePics[pic] === aboutMePics[1]? 'passion active':'passion'}`} onClick={()=>{handleText(1)}}>
                <h2>Playing Guitar</h2>
                <p>Playing guitar brings me joy and allows me to express my creativity through music, I love experimenting with different sounds techniques and genres, I enjoy listening to Blues, Rock and Metal.</p>
              </button>
              <button type='button' className={`${aboutMePics[pic] === aboutMePics[2]? 'passion active':'passion'}`} onClick={()=>{handleText(2)}}>
                <h2>Playing Videogames</h2>
                <p>I enjoy playing video games as they offer a unique form of entertainment that allows me to immerse myself in different worlds and stories, my passion for software stems from this activity, ever sense I saw the making of DVD that was included in the God of War 2 (2007), I new I wanted to be a programmer.</p>
              </button>
            </div>
            <div className='images'>
              <div className="pic-container">
                <img className='pic1' src={aboutMePics[pic]} alt="ricardo araujo" />

              </div>
              <div className="btn-containers">
                <button type='button' className='slide-btn' onClick={()=>{slideImg(pic-1)}}><AiOutlineArrowLeft/></button><button type='button' className='slide-btn' onClick={()=>{slideImg(pic+1)}}><AiOutlineArrowRight/></button>
              </div>
                
            </div>
          </div>

        </section>

    </Wrapper>
  )
}

export default About;

const Wrapper = styled.div`
.section-name{
  color: white;
  text-align: center;
  font-size: 50px;
  margin-bottom: 0%;
}
.aboutme-section{
  display: flex;
  flex-direction: column;
  
  height: auto;
}

.aboutme-content{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
.information{
  width: 50%;
  max-width: 600px;
  padding: 20px;
}
.information h2{
  text-align: center;
}
.images{
  width: 50%; 
  max-width: 600px;
  margin: 20px;
  position: relative;
}

.pic-container{
  width: 100%;
  height: 350px;
  display: flex;
}
.pic1{
  max-height: 350px;
  width: 100%;
  object-fit: scale-down;
  object-position: center;
}

.passion{
  margin: 10px;
  background-color: transparent;
  color: white;
  border: 1px solid gray;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  font-size: 15px;
  box-sizing: border-box;
}
.active{
  background-color: #24787c;
  border: solid 2px white;
}

.btn-containers{
  display: flex;
  justify-content: center;
}
.slide-btn{
  display: flex;
  padding: 10px;
  font-size: 25px;
  margin: 20px;
  font-weight: 700;
  background-color: #ffffff2b;
  color: white;
  border-radius: 10px;
  border: solid 2px white;
  margin-bottom: 0%;
  margin-top: 1.5%;
}

@media screen and (max-width: 950px){ //////////////// 950px
.section-name{
  color: white;
  text-align: center;
  font-size: 40px;
}
.aboutme-section{
  height: auto;
  display: flex;
  flex-direction: column;
}
.aboutme-content{
  flex-direction: column;
}
.information{
  width: 100%;
  padding: 0%;
  margin: 0%;
}
.images{
  width: 90%;
  max-width: 600px;
  position: relative;
}



}

@media screen and (max-width: 650px){//////////////// 650px

}
`








