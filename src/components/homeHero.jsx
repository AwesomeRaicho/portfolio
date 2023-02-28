import React from 'react'
import styled from 'styled-components';


const HomeHero = () => {
  return (
    <Wrapper>
      <div className='hero-back'>
        <div className="hero-container">
            <div className='hero-info'>
                <h1 className='hero-name'>Ricardo Araujo</h1>
                <p className='hero-message'>Hello there, I am a web developer.</p>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 85vh;
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
  font-size: 70px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  width: 100%;
  margin-bottom: 30px;
}

.hero-message{
  text-align: center;
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
  z-index: 2;
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


@media screen and (max-width: 950px){ //////////////// 950px
  .hero-name{
  margin: 0%;
  font-size: 60px;
  color: white;
  padding-left: 0%;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
}

.hero-message{
  padding-left: 0%;
  margin: 0px;
  text-align: center;
}

.hero-btns{
  text-align: center;
}
.hero-portrait{
  width: 200px;
  height: 200px;
  border: 10px solid white;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 4px 4px 8px black;
  z-index: 1;
}


}

@media screen and (max-width: 650px){//////////////// 650px
  .hero-container{
    flex-direction: column;
    width: 100%;
    
  }

  .hero-name{
    margin: 0%;
    padding: 0%;

  }

  .hero-message{

  }

  .hero-info{
    margin: 0%;
    padding: 0%;
  }
  .hero-images{
    margin: 0%;
    padding: 0%;
    margin-top: 50px;
    display: none;
  }

  .hero-btns{
    margin-top: 30px;
  }
}
`




export default HomeHero;