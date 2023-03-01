import React from 'react'
import styled from 'styled-components';

const About = () => {

  
  return (
    <Wrapper>
      <div className='about-container'>

          <section>
            <div className='image-container'>
              <div className='image-border'>
                <img className='image' src="/images/placeholder.jpg" alt="ricardo araujo" />
              </div>
            </div>
            <div className='text-container'>
              <h1 className='text-title'>About me</h1>
              <p  className='text'>I am a developer with a passion for programming. I thrive on the challenge of solving complex problems and am driven to create efficient and effective solutions that meet the unique needs of each situation. I enjoy taking on challenges and constantly expanding my knowledge to stay up-to-date with the latest technologies. My focus is on delivering high-quality work and growing professionally as a developer.</p>
            </div>
          </section>


          <section>
            <div className='text-container'>
                <h1  className='text-title'>Favorite pastimes</h1>
                <ul>
                  <li className='lists'>Family</li>
                  <li className='lists'>Coding</li>
                  <li className='lists'>Guitar</li>
                  <li className='lists'>Video games</li>

                </ul>
            </div>
            <div className='image-container'>
              <div className="image-border">
                <img className='image' src="/images/miPicGuitar.jpg" alt="ricardo araujo" />
              </div>
            </div>
          </section>
      </div>
    </Wrapper>
  )
}

export default About;



const Wrapper = styled.div`

section{
  max-width: 1200px;
  margin: auto;
  margin-top: 50px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container{
  display: flex;
  width: 50%;
  padding: 50px;
}
.text-container{
  width: 50%;
  color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.image{
  width: 100%;
  max-width: 500px;
}

.image-border{
  position: relative;
}

.image-border::before{
  content: '';
  position: absolute;
  border: solid 2px gold;
  width: 100%;
  box-sizing: border-box;
  top: -5%;
  left: -5%;
  height: 100%;
  z-index: -1;
}
.image-border::after{
  content: '';
  position: absolute;
  border: 2px gray solid;
  width: 100%;
  box-sizing: border-box;
  top: 5%;
  left: 5%;
  height: 100%;
  z-index: -1;
}

.text-title{
  font-size: 45px;
  text-align: center;
}
.text{
  font-size: 17px;
}

.lists{
  font-size: 20px;
}

@media screen and (max-width: 950px){ //////////////// 950px
section{
  flex-direction: column;

}
.image-container{
  display: flex;
  width: 70%;
  padding: 0px;
  justify-content: center;
}
.text-container{
  width: 75%;
  color: white;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-title{
  font-size: 40px;
  text-align: center;
}
}

@media screen and (max-width: 650px){//////////////// 650px

}
`
