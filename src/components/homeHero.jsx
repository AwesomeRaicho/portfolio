import React,{useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// This is the actual Hero you are looking at ;)
const HomeHero = () => {
  const background = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      background.current.style.backgroundPositionY = offset * +0.5 + 'px';
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <Wrapper>
      <div className='hero-back' >
        <div className="hero-back-filter"ref={background}></div>
        <div className="hero-container">
            <div className='hero-info'>
            <p className='hero-message1'><span className='obi-wan'>Hello there</span>, my name is</p>
                <h1 className='hero-name'>Ricardo Araujo</h1>
                <p className='hero-message'>and I'm a web developer.</p>
                <div className='hero-btns'>
                  <Link to={'/projects'} className='hero-btn link'>Projects</Link> 
                </div>
            </div>
        </div>
      </div>
    </Wrapper>
    
    )
  }
  export default HomeHero;
  

const Wrapper = styled.div`

.link{
  text-decoration: none;
}

.obi-wan{
  color: #d30000;
  font-weight: 900;
}

.hero-back{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  min-height: 600px;
  background-color: black;
}

.hero-back-filter{
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  opacity: .25;
  background-image: url('/images/background4thWall.PNG');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

}

.hero-container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  z-index: 2;
}

.hero-info{
  margin-right: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-name{
  margin: 0%;
  font-size: 100px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  text-align: center;
  width: 100%;
}

.hero-message1{
  text-align: center;
  margin: 0px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 200;
  font-size: 30px;
  margin-bottom: -10px;
}

.hero-message{
  text-align: center;
  margin: 0px;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight: 200;
  font-size: 30px;
  
  margin-bottom: 30px;
}

.hero-btns{
  text-align: center;
  text-decoration: none;
  margin-top: 25px;
}


.hero-btn{
  border: transparent;
  background: transparent;
  margin: 15px;
  padding: 7px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #e4d10086;
  border-radius: 30px;
  color: white;
  text-shadow: 0px 0px 8px gray;
  font-size: 25px;
  border: solid 3px #e4d100;
  text-shadow: 0px 0px 4px gray;
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
  .hero-back-filter{

  background-position: left;

}
  
  .hero-name{
  margin: 0%;
  font-size: 60px;
  padding-left: 0%;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  margin-bottom: 15px;
}

.hero-message1{
  padding-left: 0%;
  margin: 0px;
  text-align: center;
  font-size: 20px;
}

.hero-message{
  padding-left: 0%;
  margin: 0px;
  text-align: center;
  font-size: 20px;
}

.hero-btns{
  text-align: center;
}
.hero-btn{
  padding-top: 5px;
  font-size: 20px;
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
    //margin-top: 30px;
  }
}
`



