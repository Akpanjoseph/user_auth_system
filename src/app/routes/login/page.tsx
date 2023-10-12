"use client"
import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function login() {

  const [show,setShow] = useState(true)

  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <h1 className='font-medium text-4xl my-4'>Welcome Back</h1>

      <form className="shadow-lg border rounded-md  w-[35%] py-10 px-8" >


        <div className="my-2">
          <div className="border-b-2 border-gray-500 px-2">
          <input type="email" placeholder="Email " className="w-full outline-none py-4"  />
          </div>
        </div>

        <div className="my-2  ">
          <div className="border-b-2 border-gray-500 px-2 flex items-center">
          <input type={show ? 'password' : 'text'} placeholder="Password " className="w-full outline-none py-4"  />
            {
                show ? <AiOutlineEye onClick={()=> setShow(!show)} /> : <AiOutlineEyeInvisible onClick={()=> setShow(!show)} />
            }
          </div>
        </div>


            <div className='flex justify-center my-4 mt-4'>
              <button className='bg-black text-white w-[60%] py-2 rounded-md'>Login</button>
            </div>
      </form>

      <div className='flex items-center space-x-2 my-4'>
        <p>Don't have an account</p>
        <Link href={'/'} className='underline font-bold  text-red-400'>Create Account</Link>
        <button> </button>
      </div>

      <ToastContainer />
    </div>
  )
}
