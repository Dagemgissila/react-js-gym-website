import React from 'react';
import './Testimonies.css';
import { useState } from 'react';
import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";

const Testimonies = () => {
    const [selected,setSelected]=useState(0);
    const tLenght=testimonialsData.length;

  return (
    <div className='Testimonials' id='testimonials'>
          <div className="left-t">
               <span>Testimonials</span>
               <span className='stroke-text'>What they</span>
               <span>say about us</span>
               <span>
                {testimonialsData[selected].review}
               </span>
                   <span>
                    
               <span style={{color :"var(--orange)"}}>
                {testimonialsData[selected].name}
               </span>
               -{testimonialsData[selected].status}
                   </span>
          </div>

          <div className='right-t'>
            <div></div>
            <div></div>
                    <img src={testimonialsData[selected].image} alt="" />

                    <div className='arrows'>
                          <img onClick={()=>{
                            selected === 0 ?
                              setSelected(tLenght - 1)
                              : setSelected((prev)=>prev-1)
                          }} src={leftArrow} alt="" />
                          <img 
                          onClick={()=>{ 
                             selected==tLenght-1?
                             setSelected(0): setSelected((prev)=>prev + 1)
                          }}
                          
                          src={RightArrow} alt="" />
                    </div>
          </div>
    </div>
  )
}

export default Testimonies