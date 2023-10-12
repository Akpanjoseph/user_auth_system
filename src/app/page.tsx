"use client"
import { useState } from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'

export default function Home() {

  const [show,setShow] = useState(true)

  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <h1 className='font-medium text-4xl my-4'>Signup</h1>

      <form className="shadow-lg border rounded-md  w-[35%] py-10 px-8" >

        <div>
          <div className="border-b-2 border-gray-500 px-2">
          <input type="text" placeholder="Username " className="w-full outline-none py-4"  />
          </div>
        </div>


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
              <button className='bg-black text-white w-[60%] py-2 rounded-md'>Create Account</button>
            </div>
      </form>

      
    </div>
  )
}
