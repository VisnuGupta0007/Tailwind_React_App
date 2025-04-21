import React from 'react'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About'
import Home from './Home'
import Card from './Card'
import Card2 from './Card2'






function App() {
  return (
    <>



      <BrowserRouter>
        <Home />


        <Routes>

          <Route path='/Home' element={<Card />} />
          {/* <Route path='/' element={<Card2 />} /> */}
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/About' element={<About />} />
          <Route path='/dynamic/:id' element={<Contact />} />
          

        </Routes>
        <Card2/>

        <Footer />

      </BrowserRouter>
    </>


  )
}

export default App

// useParams():- if we put any number in the search engine like number..http://localhost:5173/Register/2,9,3,4,5, etc. So, that number we have to apss in useparams().
// useNavigate():- by the this function we can do navigate the whole page.. 