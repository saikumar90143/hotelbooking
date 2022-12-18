import React from "react";
import styled from "styled-components";
//photos
import bed from "./images/bed-1839184_640.jpg";
import villa1 from "./images/villa-1737168_640.jpg";
import villa2 from "./images/villa-4555818_640.jpg";
import resort from "./images/resort-4471852_640.jpg";
import house from "./images/house-1836070_640.jpg";
const Productlist = () => {
  return (
    <>
      <Wrapper>
        <div className="browse-type d-flex justify-content-around gap-2 flex-wrap ">
          <div>
            <img src={bed} alt="bed" />
            <div>
              <b>Hotels</b>
              <p>234 hotels</p>
            </div>
          </div>

          <div>
            <img src={resort} alt="resort" />
            <div>
              <b>resort</b>
              <p>612 resorts</p>
            </div>
          </div>

          <div>
            <img src={villa1} alt="villa" />
            <div>
              <b>Villa</b>
              <p>342 villas</p>
            </div>
          </div>
          <div>
            <img src={villa2} alt="appartment" />
            <div>
              
              <b>Appartments</b>
              <p>567 appartments</p>
            </div>
          </div>

          <div>
            <img src={house} alt="house" />
            <div>
              
              <b>Cabins</b>
              <p>612 cabins</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .browse-type {
    div {
      img {
        width:200px;
        height: 150px;
        border: 1px solid black;
        border-radius: 3px;
      }
    }
  }

  @media screen and (max-width:500px) {
   .browse-type{
      div{
         img{
            width: 90vw;
            height: auto;
         }

         
      }
   }
  }

  @media (840px < width < 1060px) {
   .browse-type{
      div{
         img{
            width: 300px;
            height: 250px;
         }

         
      }
   }
  }
`;

export default Productlist;
