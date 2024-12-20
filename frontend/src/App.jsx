import { useContext, useState } from 'react'
import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from  './pages/Home';
import UserSignup from './pages/UserSignup';
import UserLogin from './pages/Userlogin';
import CaptainSignup from './pages/CaptainSignup';
import CaptainLogin from './pages/CaptainLogin'
import { UserDataContext } from './context/userContext';



function App() {

   const result = useContext(UserDataContext);
   console.log(result);
  const [count, setCount] = useState(0)

  return (
    <>
      <div >

        <Routes>
         
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<UserLogin/>} />
          <Route path='/signup' element={<UserSignup/>} />
          <Route path='/captain-login' element={<CaptainLogin/>} />
          <Route path='/captain-signup' element={<CaptainSignup/>} />
          

              </Routes>

      </div>
    </>
  )
}

export default App
