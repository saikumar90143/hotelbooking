import React, { useState } from "react";
import styled from "styled-components";
import Header from "./header/Header";
import Nav from "./Nav";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Button } from "react-bootstrap";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
// images
import bed from "./home/images/bed-1839184_640.jpg";
import villa1 from "./home/images/villa-1737168_640.jpg";
import villa2 from "./home/images/villa-4555818_640.jpg";
import resort from "./home/images/resort-4471852_640.jpg";
import house from "./home/images/house-1836070_640.jpg";
import bedroom from "./home/images/bedroom-416062_640.jpg";

const Hotelpage = () => {
  
  const photos=[
    {src:bed},
    {src:villa1},
    {src:villa2},
    {src:resort},
    {src:house},
    {src:bedroom}
  ]
  const [slideOpen,setSlideOpen]=useState(false)
   const [slideView,setSlideView]=useState('')
  const handleSlide=(i)=>{
       setSlideView(i)
       setSlideOpen(true)
  }

  const handleMove=(direction)=>{
         let newSlideView;
         if(direction==='L'){
          newSlideView=slideView ===0?5:slideView-1
         }else{
          newSlideView=slideView ===5?0:slideView+1
         }
         setSlideView(newSlideView)
  }
  return (
    <>
      <Wrapper>
        <Nav />
        <Header type={"list"} />
        {slideOpen && <div className="slide">
          <AiFillCloseCircle className="close" onClick={()=>setSlideOpen(false)}/>
          <BsFillArrowLeftCircleFill  className="icon" onClick={()=>handleMove('L')}/>
          <div className="slider-img">
                       <img src={photos[slideView].src} alt=''/>
                       </div>
                       <BsFillArrowRightCircleFill className="icon"  onClick={()=>handleMove('R')}/>
          </div>}
        <div className="hotel-page container mt-2">
       
          <div className="d-flex justify-content-between">
            <div className="hotel-details text-start">
              <h5>Tower Street Apartments</h5>
              <span>
                <HiOutlineLocationMarker /> S Basztowa, Old Town,33-232
                Karkow,poland
              </span>
              <h6 className="text-primary">
                Excellent Location - 500m from center
              </h6>
              <p className="text-success">
                Book a stay over $114 this property and get a free airport taxi
              </p>
            </div>
            {/* booking */}
            <div className="hotel-booking">
              <Button>Reserve or Book Now</Button>
            </div>
          </div>

          {/* hotel images */}
          <div className="hotel-images">
            <div>
              {photos.map((image,i)=>{
                return <div key={i}>
                   <img src={image.src} alt="" onClick={()=>handleSlide(i)} />
                   </div>
              })}
              
            </div>

           
          </div>

          {/* content */}
          <div className="hotel-content mt-3">
            <div className="hotel-info">
              <b>Stay in the heart of karkow</b>
              <p>
                locacated a 5-minute walk from St, Florian's Gate in karkow,
                Tower street apartments has accomdations with air conditioning
                and free Wifi. The units come with hardwood floors and feature
                fully equiped kitchenette with a microwave, a flat screen TV,
                and a coffee machine. Popular points of intrest near the
                apartment includes cloth,Hall,Main market square and town Hall
                Towewr. The nearest airpot is John Paul international
                aairport.16km away from the hotel and the property offers am
                paid airpot shuttle service..
              </p>
            </div>

            {/* price */}
            <div className="price-info">
              <h6>Perfect for a 9-night stay!</h6>
              <p>
                Located in the real heart of Karkow, this property has an excellent location score of 5 star rating!.
              </p>
              <br/>
              <p className="d-inline-flex"><b>$945</b> (9 nights)</p><br/>
              <Button>Reserve or Book Now</Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`

.slide{
      position: sticky;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .close{
        position: absolute;
        top: 0.5rem;
        right: 6rem;
        font-size:2rem ;
      }
      .icon{
        font-size: 3rem;
        color: gray;
      }
      .slider-img{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          margin-top:2.5rem;
          width: 90%;
          height: 90vh;
        }
      }
      
    }
  .hotel-page {
   
   
    .hotel-images {
    
      /* grid-auto-flow: row; */
      div {
        display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

      gap: 1.5rem;
      grid-template-rows: auto;
        img {
          width: 350px;
          height: 300px;
        }
      }
    }

    /* hotel content */
    .hotel-content{
        display: flex;
        justify-content: space-between;
        column-gap: 1.5rem;
        flex-wrap: wrap;
       text-align: justify;
    }

    .hotel-info{
        flex: 1 1 70%;
    }

    .price-info{
        flex: 1 1 30%;
        background-color: skyblue;
        padding: 2px;
        border-radius: 5px;
        text-align: center;
        p{
            width: 80%;
        }
    }
  }

  @media (max-width:760px) {
    .hotel-page{
    .hotel-images{
      div{
        img{
          width: 80vw;
        }
      }
    }
  }
}
`;
export default Hotelpage;
