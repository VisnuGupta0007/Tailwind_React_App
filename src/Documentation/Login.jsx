import React from 'react'

function Login() {
  return (
    <main className='loginCard flex justify-center p-5 '>
    <div className='login p-10 shadow-black '>
      <h1 className=' text-white capitalize text-center text-3xl font-extrabold p-2'>login</h1>
      <label htmlFor="" className=' text-white font-bold capitalize'>email</label><br />
        <input type="email" placeholder='Email' className=' inp bg-white p-5' /><br /><br />
        <label htmlFor="" className=' text-white font-bold capitalize'>password</label>
       <a> <input type="password" placeholder='Password'  className='inp bg-white p-5'/>
        <button type='submit' className='btn1 btn btn-primary '>Login</button></a>
        <p className=' text-center'>Don't have an account yet?<a href="" className=' text-blue-500'>Sign up.</a></p>
    </div>
    </main>
  )
}

export default Login