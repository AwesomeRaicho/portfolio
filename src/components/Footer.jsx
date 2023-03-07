import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { contacts } from '../project-data';


const Footer = () => {
  return (
    <Wrapper>
        <footer className='h-24 '>
            <div className='links-container'>
                {contacts.map((contact, index)=>{

                        if(contact.to === 'gmail'){
                            return <div key={index} className='bg-white p-2 m-2 rounded-full'>
                                <a href={`mailto: ${contact.link}`}>{contact.image}</a>
                            </div>
                        }

                        return(
                            <div key={index} className='bg-white p-2 m-2 rounded-full'>
                                <Link to={contact.link}>{contact.image}</Link>
                            </div>
                        ) 
                    })}
            </div>
        </footer>
    </Wrapper>
  )
}


export default Footer;

const Wrapper = styled.div`

margin-top: auto;
    
footer{
    background-color: #252525;
    
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: auto;

}

.links-container{
    display: flex;

}
`;