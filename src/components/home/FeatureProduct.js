import React from 'react'
import styled from 'styled-components'
import bedroom from './images/bedroom-416062_640.jpg'
const FeatureProduct = () => {
  return (
    <>
      <Wrapper>
            <div className='home-love d-flex justify-content-around gap-2 flex-wrap'>
                  <div>
                   <img src={bedroom} alt='bedroom'/>
                   <div>
                   <b>appartment Stare Miasto</b>
                     <p>berlin</p>
                     <p>starting from $ 34.6</p>
                     <p><button>4.5</button> exellent</p>

                   </div>
                     
                   </div>

                   <div>
                   <img src={bedroom} alt='bedroom'/>
                    <div>
                    <b>appartment Stare Miasto</b>
                     <p>berlin</p>
                     <p>starting from $ 34.6</p>
                     <p><button>4.5</button> exellent</p>
                    </div>
                   </div>

                   <div>
                   <img src={bedroom} alt='bedroom'/>
                     <div>
                     <b>appartment Stare Miasto</b>
                     <p>berlin</p>
                     <p>starting from $ 34.6</p>
                     <p><button>4.5</button> exellent</p>
                     </div>
                   </div>

                   <div>
                   <img src={bedroom} alt='bedroom'/>
                   <div>
                   <b>appartment Stare Miasto</b>
                     <p>berlin</p>
                     <p>starting from $ 34.6</p>
                     <p><button>4.5</button> exellent</p>
                   </div>
                   </div>
            </div>
        </Wrapper> 
    </>
  )
}

const Wrapper=styled.section`

 .home-love{
    img{
        width: 250px;
        
    }
    button{
        background-color: hsl(62, 72%, 54%);
        border: 0.5px solid black;
    }
 }

 @media screen and (max-width:500px) {
   .home-love{
      div{
         img{
            width: 90vw;
            height: auto;
         }

         
      }
   }
  }

`

export default FeatureProduct
