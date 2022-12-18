import React from 'react'
import Nav from '../Nav'

import styled from 'styled-components'
import Header from '../header/Header'
import Featured from './Featured'
import Productlist from './Productlist'
import FeatureProduct from './FeatureProduct'

const Home = () => {
  return (
    <>
      <Wrapper>
            <Nav/>
            <Header/>
            <div className='container-fluid'>
            <Featured/>
            <h4>Browse by Property Type</h4>
            <Productlist/>
            <h4>Homes Guest Love</h4>
            <FeatureProduct/>
           </div>
        </Wrapper> 
    </>
  )
}

const Wrapper=styled.section`
  
 height: 100vh;


 .container{

 
 }
`

export default Home
