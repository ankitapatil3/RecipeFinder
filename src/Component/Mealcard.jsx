import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Mealcard({details}) {
 
    // console.log("details"+details);
  return (
    <div className='mealcard' >
     <div  className='mmr'>
     {
      details ?  details.map((item,index)=>{
        return (
          <div  key={index}  className='mcard'>
           <div className='boxm'>
           <img src={item.strMealThumb} alt="" className='mcimg'/>
         <div className='recipeinfo'> {item.strMeal} &nbsp;</div>
         <NavLink to={`/${item.idMeal}`}>
         <button className='mbtn' >Recipe</button></NavLink>
          </div>
           </div>
        
        )
      }
        ):  <div className='msg'> "No  Recipes Found.  Try  searching for Something Else" </div> 
        // <div className='msg'>  </div>
     }
     </div>
     {/* {details.strMeal} */}
     
    
    </div>
  )
}

export default Mealcard
