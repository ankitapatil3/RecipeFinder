import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Homepage() {
// const handleselect=()=>{
//     axios.get('https://dummyjson.com/recipes')
//     .then((res)=>{
//         console.log("dummyjson",res.data);
//     })
// }
// const handlemain=()=>{
//     axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
//     .then((res)=>{
//     //   setdata(res.data.meals)
//       console.log(res.data.meals);
//     })
//   }
  return (
    <div className='homemain'>


    <div className='hp' >
      <h1>Learn Cooking in Simple Way..</h1>
      <p>Discover a world delicious recipe and cuisines from across the globe from the Italian pasta to Indian curries, explore the tastes of world!</p>
      {/* <button onClick={handleselect}>click</button> */}
      {/* <button onClick={handlemain}>clickmeal</button> */}
 <NavLink to="/mainpage">  <button className='hpbtn' >Let's Get Started..</button></NavLink>
      <div className='quote'>"Good Food is the foundation of genuine happiness." - Auguste Escofier</div>
    </div>
    </div>
  )
}

export default Homepage
