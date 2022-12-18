import { Button } from 'react-bootstrap';
import React from 'react'
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <>
       <Wrapper className='container-fluid'>
        <div className='nav'>
          {/* logo */}
        <div className='logo ' >
           <NavLink to='/'>Explore</NavLink>
           </div>

       
{/*signup and login */}
        <div className='account-details ' >
        <NavLink to='/regester'>  <Button className='m-2'>Regester</Button></NavLink>
         <NavLink to='/login'> <Button className='m-2'>Login</Button></NavLink>
        </div>
        </div>
       </Wrapper>
    </>
  )
}

const Wrapper=styled.section`
     
  padding-left: 0rem;
  padding-right: 0rem;
  overflow: hidden;

   .nav{
    width: 100%;
   box-shadow: 0 0 2px gray;
.logo a{
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 1px;
}


   }
`
export default Nav
