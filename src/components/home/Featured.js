import React from 'react'
import styled from 'styled-components'
// images
import london from './images/blue-hour-3848856_640.jpg'
import austin from './images/austin-texas-1756159_640.jpg'
import berlin from './images/hd-wallpaper-441853_640.jpg'
const Featured = () => {
  return (
    <>
        <Wrapper>
                  <h2 className='mt-5'>Featured</h2>
               <div className='featured row'>
                 <div className='col-4  col-lg-4 col-md-4 col-sm-4'>
                    <figure>
                    <img src={london} alt='london'/>
                    <figcaption>London</figcaption>
                    <small>156 properties</small>
                    </figure>
                   
                 </div>
                <div className='col-4 col-lg-4 col-md-4 col-sm-4'>
                <figure>
                    <img src={berlin} alt='london'/>
                    <figcaption>Berlin</figcaption>
                    <small>123 properties</small>
                    </figure>
                </div>
                <div className='col-4 col-lg-4 col-md-4 col-sm-4'>
                <figure>
                    <img src={austin} alt='london'/>
                    <figcaption>Austin</figcaption>
                    <small>98 properties</small>
                    </figure>
                </div>
               </div>
        </Wrapper>
    </>
  )
}

const Wrapper=styled.section`
  .featured{
   
    figure{
      position: relative;
        img{
          border-radius: 5px;
           display: block;
            width:min(300px,33vw);
          
        }
        figcaption{
          position: absolute;
         top: 60%;
          left: 10%;
          font-size: 1.5rem;
          font-weight: 600;
           color: white;
        }

        small{
          position: absolute;
         top: 80%;
          left: 10%;
          font-size: 1rem;
          font-weight: 600;
           color: white;
        }
        
    }
  
  }

  @media only screen and (max-width:500px) {
       .featured{
           display: block;
           div{
            width: 100%;
            figure{
              img{
                width: 100%;
              }
            }
           }
       }
  }
`

export default Featured
