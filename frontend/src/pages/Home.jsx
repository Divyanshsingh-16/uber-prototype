import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className=' bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1688349268401-dbc63d0ab159?q=80&w=2452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-9  w-full  flex justify-between flex-col'>    
        <img  className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='bg-white py-5  pb-7 px-10'>
           <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
           <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded mt-'>Continue</Link>

        
      </div>

      </div>
    </div>
  )
}
export default Home;