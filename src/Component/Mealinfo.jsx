import "../App.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
function Mealinfo() {
  const {mealId}=useParams()
  const[info,setinfo]=useState()
  console.log("info",mealId);
  useEffect(()=>{
    if(info!=''){
      axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res)=>{
        console.log("mi",res.data.meals);
        setinfo(res.data.meals[0])
        // console.log("mi",res.data.meals);
      })
    }
   
  },[])


  
  return (
    <div>
     { !info  ? 'data not found':
     <div className='minfo'>

      <div>Recipe Detail's of <span className='heads'>{info.strMeal}</span> </div>
      <img src={info.strMealThumb} alt="" className="infoimage" />
    
      <div> <span className='heads'> Belongs to ARea :</span> {info.strArea}</div>
      <div><span className='heads'>category :</span> {info.strCategory}</div>
     
     <div><span className='heads'> Instructions :</span></div>
     <div> {info.strInstructions}</div>
     <h1><span className='heads headv'>Video Tutorial </span></h1>
     <ReactPlayer url={info.strYoutube} controls={true} className="ytvideo"/>
      </div>}
    
    </div>
  )
}

export default Mealinfo
