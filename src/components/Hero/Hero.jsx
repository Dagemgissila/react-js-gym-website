import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import {motion} from  'framer-motion';
const Hero = () => {
  const transition={
    type: 'spring',
    duratio: 3
  }
  return (
     <div className='hero' id='home'>
      <div className="blur hero-blur"></div>
       <div className='left-h'>
           <Header/>
           <div className="the-best-ad">
            <motion.div
              initial={{left: '228px'}}
              whileInView={{left:"10px"}}
              transition={{...transition,type:"tween"}}
            >
               
            </motion.div>
            <span>the best fitness club in town</span>
           </div>

           <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape  </span>
              <span>Yours</span>
              </div>

              <div>
                <span>
                  Ideal Body
                </span>
              </div>
              <div>
                <span>In here we will help 
                  you to shape and build your ideal body and live up your life to fullest</span>
              </div>
           </div>
            
            <div className="figures">
                <div>
                  <span>
                    +140
                  </span>
                  <span>expert coachs</span>
                  </div>
                <div>
                  <span>+978</span>
                  <span>members joined</span>
                  </div>
                <div>
                  <span>+50</span>
                  <span>fitness programs</span>
                  </div>
              </div>

              <div className='hero-buttons'>
                  <button className='btn'>Get Started</button>
                  <button className='btn'>Learn More</button>
              </div>
       </div>

       <div className='right-h'>
             <button className='btn'>Join now</button>

             <div className="heart-rate">
              <img src={Heart} />
              <span>Heart Rate</span>
              <span>116 bpm</span>
             </div>

             <img src={hero_image}  className="hero-image"/>
             <img src={hero_image_back} className='hero-image-back'/>

             <div className="calories">
              <img src={Calories} alt=''/>
                <div>
                <span>Calories Burnes</span>
              <span>220 kcal</span>
                </div>
             </div>
       </div>
     </div>
  )
}

export default Hero