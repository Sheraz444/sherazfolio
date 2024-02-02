import React from 'react'
import Home from './Home'
import Mycontact from './Mycontact'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projectsmy from './Projectsmy'


const App = () => {
  return (
 <> 
 <BrowserRouter>
 <Routes>

  <Route path='/' element={<Home/>}  />
  <Route path= '/project' element={<Projectsmy/>}  />
  <Route path= '/contact' element={<Mycontact/>}  />
 </Routes>
 
 
 </BrowserRouter>

 
</>
  )
}

export default App