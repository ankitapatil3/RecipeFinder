
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Mainpage from './Component/Mainpage'
import Mealinfo from './Component/Mealinfo'
import Homepage from './Component/Homepage'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Footer from './Component/Footer'

function App() {
 

  return (
    <div className='bi'>
<Navbar/>

    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/mainpage" element={<Mainpage/>}></Route>
      <Route path="/:mealId" element={<Mealinfo/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    {/* <Mainpage/> */}
    </div>
  )
}

export default App
