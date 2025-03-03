import React from 'react'
import { NavLink , Link} from 'react-router-dom'
import "../App.css"
function Navbar() {
  return (
    <div className='nav' ><div >
   <NavLink to="/" className='logo'>RecipeWorld</NavLink> </div>
      
     <Link to="/mainpage" className='logo'> <div > Search</div></Link>  
    
      <Link to="/about" className='logo'> <div to="/about">About</div></Link>  
    </div>
  )
}

export default Navbar
