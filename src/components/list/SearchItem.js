import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import styled from 'styled-components'
import bedroom from '../home/images/bedroom-416062_640.jpg'
const SearchItem = () => {

    const navigate=useNavigate();

    const Hotelpage=()=>{
        navigate('/hotelpage')
    }
  return (
    <>
       <Wrapper>
               <div className='container container-md container-lg d-flex flex-wrap mb-5' onClick={()=>Hotelpage()}>
                 {/* item */}
                  <div className='item-image flex-1'>
                        <img src={bedroom} alt="image"/>
                  </div>
                  {/* item details */}
                  <div className='item-details flex-3'>
                     {/* left */}
                     <div className='item-left'>
                       <h5>Tower Street Appatments</h5>
                       <p>500m from center</p>
                     <Button className='bg-success mb-3'>Free airpot taxi</Button>
                     <h6>Studio Apartment with Air conditioning</h6>
                     <small>Entire Studio . 1bathroom . 21m<sub>2</sub>.1 full bed</small>
                     <p className='text-success h6'>Free cancellation</p>
                     <small className='text-success'>you can cancel later,so lock in this great price</small>
                     </div>
                    {/* right */}
                     <div className='item-right'>
                        <div className='item-right-1'>
                        <p> Excellent</p>
                        <Button className='mx-5'>4.6</Button>
                        </div>
                        <div>
                            <p className='ms-5'>price: $112</p>
                            <p className='text-secondary'>includes taxes and fees</p>
                            <Button className='w-100'>See availability</Button>
                        </div>
                     </div>
                     
                  </div>
               </div>
       </Wrapper>
    </>
  )
}

const Wrapper=styled.section`
border: 1.5px solid gray;
margin:2px 0 2px 2px;
padding-top: 3px;
border-radius: 5px;
   div{
    
     .item-image{
         img{
            width: 220px;
            height: 100%;
         }
     }

     /* item details */
     .item-details{
        display: flex;
        justify-content: space-between;
        
        column-gap: 5rem;
          .item-left{
            text-align: justify;
          }
        /* item right */
        .item-right{
            
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .item-right-1{
                display: flex;
                justify-content: flex-end;
            }
        }
     }

   }

   /* media screen */
   @media (max-width:738px){
    div{
        .item-image{
          img{
            width:80vw;
            height: auto;
          }
        }
       }
   }

   @media (max-width:520px){
    div{

       .item-details{
        margin-top: 1rem;
       flex-wrap: wrap;

       .item-right{
        width: 80%;
        display: block;
        text-align: justify;
       }
       }
       }
   }

   @media (740px < width < 1120px){
       div{
        .item-image{
          img{
            width: min(800px,40vw);
            height: auto;
          }
        }
       }
   }
`;

export default SearchItem
