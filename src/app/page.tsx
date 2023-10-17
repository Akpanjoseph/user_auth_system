"use client"
import Link from 'next/link'
import { useState } from 'react'
import {AiOutlineEyeInvisible,AiOutlineEye} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { useDispatch } from 'react-redux';
import { AppDispatch } from './redux/store';
import { signUp } from './redux/Slice/authSlice';


export default function Home() {
  const [userData, setData] = useState<data>({
    username:'',
    email:'',
    password: ''
  })

  const [show,setShow] = useState(true)
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>()

  function submit(e:FormEvent){
    e.preventDefault()
    console.log(userData);
    dispatch(signUp(userData))
    
    toast.success('success')
    router.push('./routes/home')
  }

  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col">
      <h1 className='font-medium text-4xl my-4'>Signup</h1>

      <form className="shadow-lg border rounded-md  w-[35%] py-10 px-8" onSubmit={submit} >

        
        <div>
          <div className="border-b-2 border-gray-500 px-2">
          <input type="text" placeholder="Username " className="w-full outline-none py-4" value={userData.username} onChange={(e)=>setData({...userData,username:e.target.value})}/>
          </div>
        </div>


        <div className="my-2">
          <div className="border-b-2 border-gray-500 px-2">
          <input type="email" placeholder="Email " className="w-full outline-none py-4" value={userData.email} onChange={(e)=>setData({...userData,email:e.target.value})} />
          </div>
        </div>

        <div className="my-2  ">
          <div className="border-b-2 border-gray-500 px-2 flex items-center">
          <input type={show ? 'password' : 'text'} placeholder="Password " className="w-full outline-none py-4" value={userData.password} onChange={(e)=>setData({...userData,password:e.target.value})}  />
            {
                show ? <AiOutlineEye onClick={()=> setShow(!show)} /> : <AiOutlineEyeInvisible onClick={()=> setShow(!show)} />
            }
          </div>
        </div>


            <div className='flex justify-center my-4 mt-4'>
              <button className='bg-black text-white w-[60%] py-2 rounded-md'>Create Account</button>
            </div>
      </form>

      <div className='flex items-center space-x-2 my-4'>
        <p>Already have an account</p>
        <Link href={'/login'} className='underline font-bold  text-red-400'>Login</Link>
        <button> </button>
      </div>

      <ToastContainer />
    </div>
  )
}
