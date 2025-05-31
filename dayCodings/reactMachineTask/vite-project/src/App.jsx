import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Studenttable from './Studenttable'
import Createstudent from './Createstudent'
 

function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Studenttable/>}></Route>
    <Route path="/create" element={<Createstudent/>}></Route>
      
   </Routes>
   </BrowserRouter>
  )
}

export default App
