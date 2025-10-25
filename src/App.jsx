import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About' 
import Html from './Pages/Html'
import Footer from './components/Footer'
const App = () => {
  return (
<>

<Navbar/>
<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/html' element={<Html/>}></Route>
</Routes>
<Footer/>

</>
  )
}

export default App