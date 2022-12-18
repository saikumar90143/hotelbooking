import React, { useState } from 'react'
import {FaBed} from 'react-icons/fa'
import {MdFlight,MdLocalTaxi,MdOutlineEditCalendar,MdSupervisedUserCircle} from 'react-icons/md'
import {AiFillCar,AiOutlineLaptop} from 'react-icons/ai'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import { useNavigate } from 'react-router-dom'
const Header = ({type}) => {
    //  calnder

    const [dateopen,setDateopen]=useState(false)
   const [date, setDate] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
      }
    ]);

   //  destination
   const [dest,setDest]=useState('')

   //   optons
   const [optionsOpen,setOptionsOpen]=useState(false)
    const [options,setOptions]=useState({
      adult:1,
      children:0,
      room:1
    })

    const handleOption=(name,operation)=>{
       setOptions((prev)=>{
        return{
         ...prev,
         [name]:operation==='i'?options[name] +1:options[name] -1
        }

       })
    }

   //  handle search
const navigate=useNavigate()
   const handleSearch=()=>{
       navigate('/hotels', {state:{dest,date,options}})
   }
  
  return (
    <>
       <Wrapper className='container-fluid'>
         {/* header */}
           <div className='header-list d-flex justify-content-around  pt-5 g-2'>
              <div className='header-list-item mb-5'>
                 <span className='active'><FaBed/> Stay</span>
              </div>
              {/* flights */}
              <div className='header-list-item'>
                 <span><MdFlight/> Flights</span>
              </div>
              {/* car */}
              <div className='header-list-item'>
                 <span><AiFillCar/> Car Rentals</span>
              </div>
              {/* attractions */}
              <div className='header-list-item'>
                 <span><FaBed/> Attractions</span>
              </div>
              {/* taxi */}
              <div className='header-list-item'>
                 <span><MdLocalTaxi/> Taxis</span>
              </div>
             
           </div>

           {/* heading */}
          { type !=='list' && <>
           <h4 className='my-5'>A Life of Discounts? It's Genius.</h4>
              <p>Great rewards to your travels- unlock Instant savings of 10% more with a free DEMO booking account</p>
              <Button className='mb-5'>Sign in/Register</Button>

              {/* search */}
              <div className='search d-flex justify-content-around align-items-center w-100'>
               {/* search text */}
                  <div className='search-item text'>
                       <AiOutlineLaptop className='laptop'/>
                       <input type='search' placeholder='where you are going' onChange={(e)=>setDest(e.target.value)} />  
                  </div>

                  {/* search date */}

                  <div className='search-item calender'>
                     <MdOutlineEditCalendar/>
                       <span onClick={()=>setDateopen(!dateopen)}> {`${format(date[0].startDate," MM/dd/yy")} to ${format(date[0].endDate," MM/dd/yy")}`}</span>
                      {dateopen && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  minDate={new Date()}
  className='date'
/>}
                  </div>
                  {/* select persons */}
                  <div className='search-item person' >
                     <MdSupervisedUserCircle/>
                      <span onClick={()=>setOptionsOpen(!optionsOpen)}>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                      { optionsOpen && <div className='options d-flex justify-content-between flex-column gap-2' >
                        {/* adult */}
                           <div>
                              <span>adult</span>
                               <div className="d-flex justify-content-between gap-2">
                                 <Button onClick={()=>handleOption('adult','d')} disabled={options.adult <=1}>-</Button>
                                 <span>{options.adult}</span>
                                 <Button onClick={()=>handleOption('adult','i')}>+</Button>
                               </div>
                           </div>
                           {/* childern */}
                           <div>
                              <span>children</span>
                              <div className="d-flex justify-content-between gap-2">
                              <Button onClick={()=>handleOption('children','d')} disabled={options.children <=1}>-</Button>
                                 <span>{options.children}</span>
                                 <Button onClick={()=>handleOption('children','i')}>+</Button>
                               </div>
                           </div>
                           {/* room */}
                           <div>
                              <span>room</span>
                              <div className="d-flex justify-content-between gap-2">
                              <Button onClick={()=>handleOption('room','d')} disabled={options.room <=1}>-</Button>
                                 <span>{options.room}</span>
                                 <Button onClick={()=>handleOption('room','i')}>+</Button>
                               </div>
                           </div>
                           </div>}
                      
                  </div>
                  {/* search button */}
                  <div className='search-btn'>
                       <Button onClick={()=>handleSearch()}>SEARCH</Button>
                  </div>
              </div>
              
               </>}
       </Wrapper>
    </>
  )
}

const Wrapper=styled.section`
 background-color: rgb(17,32,139);
    height: max-content;
    color: white;
    position: relative;
   .header-list{
     cursor: pointer;

    .header-list-item{
       
        span{
            
            padding: 8px;
            font-size: 1.3rem;
        }

        .active{
            border: 2px solid white;
            border-radius: 30px;
        }
    }

  
   }

   /* search */

   .search{
     max-width: 1024px;
      height:60px;
      border: 2px solid yellowgreen;
      position: absolute;
      bottom: -30px;
      background-color: white;
       color: gray;

       .text input{
          border: none;
          outline: none;
          margin-left: 10px;
       }
      
      .options{
         position: absolute;
         top: 60px;
          border: 1px solid gray;
          border-radius: 5px;
          width: 200px;
           z-index: 2;
           background-color: whitesmoke;
           padding-block: 1rem;

      }
      .calender{
         
         z-index: 2;
         position: relative;
         .date{
            border: 1px solid gray;
            position: absolute;
            top: 50px;
            left: -80px;
           
      
   }
}
   }
   /* media screen */
   @media (max-width: 600px){
       .header-list{
        flex-direction: column;
        row-gap: 2rem;
        
      }

      .calender{
         display: none;
      }
     
      .search{
         flex-direction: column;
         border: none;
         row-gap: 1rem;
         .text{
            
            input{
               border-radius: 4px;

               width: 80vw;
               border: 1px solid rgb(17,32,139);
               &:focus{
                  border: 2px solid rgb(32,132,219);
               }
            }
            .laptop{
               display: none;
            }
         }
      }
   }

   @media (max-width: 720px){
      .search{
         .person{
          display: none;
         }
      }
     
   }
 
`

export default Header
