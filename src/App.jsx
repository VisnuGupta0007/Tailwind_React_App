import React from 'react'
import Footer from './Footer'
import Login from './Documentation/Login'
import Register from './Documentation/Register'
import Contact from './Documentation/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About'
import Home from './Nav'
import Card from './Cards/Card'







function App() {
  return (
    <>



      <BrowserRouter>
        <Home />
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/dynamic/:id' element={<Contact />} />
        </Routes>
    
        <Footer />
      </BrowserRouter>
    </>


  )
}

export default App

// useParams():- if we put any number in the search engine like number..http://localhost:5173/Register/2,9,3,4,5, etc. So, that number we have to apss in useparams().
// useNavigate():- by the this function we can do navigate the whole page.. 
