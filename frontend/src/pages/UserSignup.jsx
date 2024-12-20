import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {

  const [email, setEmail] = useState((''))
  const [password, setPassword] = useState((''))
  const [firstName, setfirstName] = useState('') 
  const [lastName, setLastName] = useState('');
  const [userData,setuserData]= useState({
    fullName : {
      firstName:firstName,
      lastName:lastName,

    },
    email : email,
    password:password

  })
  
 const submitHandler =(e)=>{
    e.preventDefault();
    setEmail('')
    setLastName('')
    setPassword('')
    setfirstName('')
    
 }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img  className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
<form onSubmit={(e)=>{
  submitHandler(e)}} >
<h3 className='text-lg text-left font-medium mb-1 '>Enter your Full name </h3>
<div>
  <input 
required
value={firstName}
onChange={(e)=>{
 setfirstName(e.target.value) 
}}

 className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
  type="text" 
  placeholder='Enter your first name'
  />
  <input 
required
value={lastName}
onChange={(e)=>{
   setLastName(e.target.value) 
}}

 className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
  type="text" 
  placeholder='Enter your last name'
  />
  </div>
<h3 className='text-lg text-left font-medium mb-2 '>what's your email? </h3>
<input 
required
value={email}
onChange={(e)=>{
 setEmail(e.target.value) 
}}

 className='bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
  type="email" 
  placeholder='enteryourEmail.com'
  />
<h3 className='text-lg text-left font-medium mb-2'>Enter your password</h3>
<input
 required 
 value={password}
onChange={(e)=>{
 setPassword(e.target.value) 
}}


 className='bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base'
  type="password" 
  placeholder='Enter your password'
  />
<button className='bg-[#111] text-white font-semibold mt-4 mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base '>Sign Up</button>
<p className='text-center'>Already have a account ? <Link  to='/login'className='text-blue-600' >Login here</Link> </p>
</form>
      </div>

      <div>
      <p className='text-[10px] leading-tight'> This site is procted by reCAPTCHA and the <span className='underline'>Google privacy and policy</span> and <span className='underline'>Terms of service  apply</span></p>
      </div>
     
    </div>
  )
}

export default UserSignup