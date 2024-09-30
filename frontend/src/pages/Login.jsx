import React from 'react'

const Login = () => {
  return (
    <section className='max_padd_container flexCenter flex-col pt-32'>
        <div className='max-w-[555px] h-[600px] bg-white m-auto px-14 py-10'>
          <h1 className='h3'>Sign Up</h1>
          <div className='flex flex-col gap-4 mt-7'>
            <input type="text" placeholder='Your Name'  className='h-14 w-full bg-slate-900/5 pl-5 outline-none rounded-xl'/>
            <input type="text" placeholder='Email Address' className='h-14 w-full bg-slate-900/5 pl-5 outline-none rounded-xl'/>
            <input type="password" placeholder='Password' className='h-14 w-full bg-slate-900/5 pl-5 outline-none rounded-xl'/>
          </div>
          <button className='border bg-slate-900 text-white w-full p-3 rounded-md mt-5 mb-5'>Continue</button>
          <p className='font-bold text-black'>Already Have an account? <span className='text-secondary underline cursor-pointer'>Login</span></p>
          <div className='flex gap-3 mt-3'>
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        
        </div>
    </section>
  )
}

export default Login