import React from 'react'
import './Plan.css';
import {plansData} from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png"
const Plan = () => {
  return (
   <div className="plan-container" id='plan'>
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="program-header">
         <span className='stroke-text'>ready to start</span>
         <span>your journey</span>
         <span className='stroke-text'>now  with us</span>
      </div>

      <div className="plans">
         {
            plansData.map((plan,i)=>(
                <div className="plan" key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span> $ {plan.price}</span>
                    <div className="features">
                         {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                         ))}
                    </div>

                    <div>
                        <span>See More Benefits</span>
                    </div>
                    <button className='btn'>Join</button>
                </div>
               
            ))
         }
      </div>
   </div>
  )
}

export default Plan