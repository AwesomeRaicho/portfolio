import React from 'react'
import styled from 'styled-components';


const HomeHero = () => {
  return (
    <Wrapper>
      <div className='hero-back'>
        <div className="hero-container">
            <div className='hero-info'>
                <h1 className='hero-name'>Ricardo <br /> &ensp;&ensp; Araujo</h1>
                <p className='hero-message'>Hello, I am a web developer.</p>
                <div className='hero-btns'>
                  <button className='hero-btn'>Portfolio</button><button className='hero-btn'>About Me</button>
                </div>
            </div>
            <div className='hero-images'>
              <div className='portrait-container'>
                <img className='hero-portrait' src="/images/placeholder.jpg" alt="ricardo araujo" />
              </div>
            </div>
        </div>
      </div>
    </Wrapper>
    
  )
}


const Wrapper = styled.section`
.hero-back{
  overflow: hidden;
}

.hero-back::before{
  content: '';
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  opacity: .35;
  background-image: url('/images/hero-wallpaper.jpg');
  z-index: -2;
  background-position: center;
}



.hero-container{
  display: flex;
  height: 70vh;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: auto;
}

.hero-info{
  margin-right: auto;
  margin-left: 50px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}




.hero-name{
  margin: 0%;
  font-size: 80px;
  color: white;
  padding-left: 50px;
  font-family: 'Quicksand', sans-serif;
}

.hero-message{
  padding-left: 20%;
  margin: 0px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 200;
}

.hero-btns{
  text-align: center;
}


.hero-btn{
  border: transparent;
  background: transparent;
  margin: 15px;
  padding: 10px;
  background-color: #d7b700;
  border-radius: 50px;
  color: white;
  font-weight: 700;
  text-shadow: 0px 0px 8px gray;
  width: 100px;
}



// image side 

.hero-images{
  margin-right: 50px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.portrait-container{
  position: relative;
  box-sizing: border-box;
}

.portrait-container::before{
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
.portrait-container::after{
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

.hero-portrait{
  width: 300px;
  border: 10px solid white;
  border-radius: 10px;
  height: 300px;
  object-fit: cover;
  box-shadow: 4px 4px 8px black;
  z-index: 1;
}


`




export default HomeHero;