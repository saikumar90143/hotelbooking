import React, { useState } from "react";
import Nav from "../Nav";
import styled from "styled-components";
import Header from "../header/Header";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import { useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import SearchItem from "./SearchItem";

const List = () => {

  const location=useLocation();


  const [dateopen,setDateopen]=useState(false)
  const [dest,setDest]=useState(location.state.dest)
  const [options,setOptions]=useState(location.state.options)
  const [date, setDate] = useState(location.state.date);

  
 
  return (
    <>
      <Wrapper>
        <Nav />
        <Header type={"list"} />
        <div className="list container-fluid mt-3">
          {/* search section */}
          <div className="search">
            <h4>Search</h4>
            <div className="city mb-2 ">
              <div>Destination</div>
              <input type="search" placeholder={dest} onChange={(e)=>setDest(e.target.value)} />
            </div>
            {/* checkin */}
            <div className="checkin">
                <div>Check in Date:</div>
              <span onClick={() => setDateopen(!dateopen)}>
              
                
                {`${format(date[0].startDate, " MM/dd/yy")} to ${format(
                  date[0].endDate,
                  " MM/dd/yy"
                )}`}
              </span>
              {dateopen && (
                <DateRange
                
                  onChange={(item) => setDate([item.selection])}
                 
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            {/* options */}

            <div className="options">
                 <label>Options</label>
                 <div className="min-price d-flex justify-content-between my-2">
                     <span>minPrice:</span>
                     <input type='text' placeholder="per night"/>
                 </div>
                 {/* max price */}
                 <div className="max-price d-flex justify-content-between mb-2">
                     <span>maxPrice:</span>
                     <input type='text' placeholder="per night"/>
                 </div>
                 {/* adult */}
                 <div className="adult d-flex justify-content-between mb-2">
                     <span>Adult:</span>
                     <input type='number' min='0' placeholder={options.adult} onChange={(e)=>setOptions(e.target.value)}/>
                 </div>

                 {/* children */}
                 <div className="children d-flex justify-content-between mb-2">
                     <span>children</span>
                     <input type='number' min='0' placeholder={options.children} onChange={(e)=>setOptions(e.target.value)}/>
                 </div>
                 {/* rooms */}
                 <div className="rooms d-flex justify-content-between mb-2">
                     <span>Rooms</span>
                     <input type='number' min='0' placeholder={options.room} onChange={(e)=>setOptions(e.target.value)}/>
                 </div>
            </div>
            {/* button */}
            <div>
              <Button className="w-100">SEARCH</Button>
            </div>
          </div>

          {/* product section */}
          <div className="product-section">
               <SearchItem/>
               <SearchItem/>
               <SearchItem/>
               <SearchItem/>
               <SearchItem/>
               <SearchItem/>
               <SearchItem/>


          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* align-items: center; */

    .search {
      background-color: rgb(231, 199, 19);
      position: sticky;
      height: max-content;
      top: 0;
      left: 0;
      flex:1 1 30%;
      /* city */
      .city{
        input{
          width: 80%;
          border: none;
          outline: none;
          padding: 2px 5px;
        }
      }
      /* checkin */
      .checkin{
        position: relative;
        span{
        letter-spacing: 2px;
        font-weight: 500;
          background-color: whitesmoke;
          padding: 2px;
          fill: black;
          color: black;
          

        }
        .date{
          color: red;
          position: absolute;
          top: 100%;
          left: 0;
        }
      }


      .options{
        div{
        
          input{
          width: 100px;
        }
      }
      }
    }

    .product-section {
      cursor: pointer;
      flex: 1 1 70%;
    }
  }

  @media (max-width:738px) {
    .search{
      display: none;
    }
}
`;
export default List;
