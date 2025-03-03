import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Mealcard from './Mealcard'

function Mainpage() {
 const [data, setdata]=useState()
const[search,setsearch]=useState('')
const [msg,setmsg]= useState('')
  

//  useEffect(() => {
//     axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=cake")
//     .then((response) => {
//       setdata(response.data);
//       console.log(response.data);
//     });
//   }, []);

  // if (!data) return null;

  const handlemain=()=>{
    if(search==''){
      setmsg("Enter Your Favorite Recipe Name..")
    }else{
      axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res)=>{
        setdata(res.data.meals)
        console.log("mp:",res.data.meals);
      })
    }
   
  }

  const handlesearch=(e)=>{
   if(search ==''){
    setmsg()
   }
setsearch(e.target.value)
  }




  return (
    <div className='container'>
      <div className='csearchbtn'>
        <input type="text" name="" id="" placeholder='Enter Recipe Name' className='csearch' value={search} onChange={handlesearch} />
        <button className='cbtn'onClick={handlemain}>Search</button>
      </div>
  <div style={{backgroundColor:'white', color:"red",margin:"15px"}}>{msg}</div>
      <div>
      
<Mealcard details={data} msg={msg}/>
      </div>
    </div>
  )
}

export default Mainpage
