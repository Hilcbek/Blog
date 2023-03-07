import React from 'react'
import {provider,auth} from '../config/firebase.jsx'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import {FcGoogle } from 'react-icons/fc'
export const Login = ({is_Auth,Auth}) => {
    let navigator = useNavigate();
    let SignIn = () => {
        signInWithPopup(auth,provider).then((result) => {
            localStorage.setItem('login',true)
            is_Auth(true)
            navigator("/")
        })
    }
  return (
    <div className='w-full flex items-center xs:justify-center xs:mt-60 sm:mt-0 h-full md:justify-start flex-col py-6'>
        <p className='xs:text-2xl md:text-4xl font-Nunito tracking-wide'>Login With Google</p>
        <button onClick={SignIn} className='flex items-center justify-center border-2 border-solid border-emerald-600 rounded-lg cursor-pointer my-5 w-fit p-3 font-semibold hover:bg-emerald-300 hover:text-white duration-500 text-emerald-600 xs:text-2xl md:text-3xl'><FcGoogle className='mr-3' />Sign In Google</button>
    </div>
  )
}
