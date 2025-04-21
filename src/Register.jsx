import React from 'react'

function Register() {
  return (
   <main className=' flex justify-center p-5'>
    <div className=' bg-slate-500 p-5'>
        <div className='register flex flex-col bg-white items-center p-7 capitalize text-black'>
          <h1 className=' text-black text-3xl font-extrabold p-3'>register</h1>
            <input type="text" name="" id="" placeholder='   First name ' className='registerInp'/><br />
            <input type="text" name="" id="" placeholder='   Last name' className='registerInp'/><br />
            <input type="email" name="" id="" placeholder='   email' className='registerInp'/><br />
            <input type="password" name="" id="" placeholder='   password' className='registerInp'/><br />
            <div className=' flex  gap-5'>
            <button className='btn btn-outline'>cancel</button>
            <button className='btn btn-primary'>register</button>
            <p></p>
            </div>
        </div>
        </div>
   </main>
  )
}

export default Register