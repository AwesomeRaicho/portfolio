import React from 'react'
import styled from 'styled-components';

const Error404 = () => {
  return (
    <Wrapper>
        <div className='Error-page-container'>
            <h1>404</h1>
            <p>Sorry, the page you were looking for is not here. Looks like you got lost in the vastness of the internet.</p>
        </div>
    </Wrapper>
  )
}


export default Error404;

const Wrapper = styled.div`

.Error-page-container{
    color: white;
}

`