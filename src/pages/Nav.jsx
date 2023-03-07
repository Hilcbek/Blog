import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiUserCircle } from 'react-icons/hi'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { BiMenu } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { ImBlogger } from 'react-icons/im'
import Avatar from 'react-avatar'
export const Nav = ({Auth,is_Auth}) => {
    console.log(auth?.currentUser?.photoURL)
    let [show,setShow] = useState(false)
    let navigator = useNavigate()
    let SignOutFunc = () => {
        signOut(auth).then((res) => {
            is_Auth(false)
            localStorage.clear();
            navigator('/')
        })
    }
    let links = document.querySelectorAll('.links li')
    links.forEach(link => {
        link.addEventListener('click', () => {
            setShow(!show)
        })
    })
  return (
    <nav className='relative w-full bg-white mx-auto shadow-lg my-2 shadow-slate-300 p-6 rounded-lg flex items-center justify-between'>
        <ul className='flex items-center justify-center'>
            <Link to={'/'}>
                <li>
                    <h1 className={'xs:text-2xl sm:text-5xl ml-4 text-emerald-600'}>Blog Project</h1>
                </li>
            </Link>
        </ul>
        <ul className='md:flex xs:hidden items-center justify-center'>
            <li className='mx-5 cursor-pointer relative before:absolute before:bottom-0 before:content-[""] before:h-1 before:w-0 before:hover:w-full duration-500 before:bg-emerald-600 before:left-0 before:rounded-lg'>
                <Link to={"/"} >Home</Link>
            </li>
            <li className='mx-5 cursor-pointer relative before:absolute before:bottom-0 before:content-[""] before:h-1 before:w-0 before:hover:w-full duration-500 before:bg-emerald-600 before:left-0 before:rounded-lg'>
                <Link to={"/CreatePost"} >New Blog</Link>
            </li>
            {!Auth ? <li className='mx-5 cursor-pointer bg-slate-600 rounded-full p-1'>
                <Link to={"/Login"} ><abbr title="Login"><HiUserCircle className='text-4xl text-white' /></abbr></Link>
            </li> : <li onClick={SignOutFunc} className='flex items-center justify-center mx-5 cursor-pointer rounded-full p-1'><Link to={"/Login"} ><abbr title="Login"><div className='w-[53px] h-[53px] rounded-full border-2 flex items-center justify-center border-solid border-emerald-700'><Avatar src={auth?.currentUser?.photoURL} className={'rounded-full'} size={45} alt="" /></div></abbr></Link></li>}
        </ul>
        <div onClick={() => setShow(!show)} className='p-2 hover:bg-slate-200 xs:flex md:hidden items-center justify-center rounded-full'>
            <BiMenu className='text-3xl cursor-pointer' />
        </div>
        <ul className={`links ${show ? 'scale-100' : 'scale-0'} xs:flex md:hidden absolute origin-top right-0 top-24 bg-white z-10 xs:w-full xs:py-5 sm:py-0 sm:w-4/12 items-start justify-start flex-col`}>
                <Link to={"/"} className={'mx-auto hover:bg-slate-200  w-11/12  p-2  rounded-lg m-1 flex items-center justify-start'} ><AiFillHome className='mr-2' />Home</Link>
                <Link to={"/CreatePost"} className={'mx-auto hover:bg-slate-200  w-11/12  p-2  rounded-lg flex items-center justify-start'} ><ImBlogger  className='mr-2'/>New Blog</Link>
                {!Auth ? <li className='mx-auto m-1 cursor-pointer bg-slate-600 w-11/12 rounded-full p-1'>
                <Link to={"/Login"} ><abbr title="Login"><HiUserCircle className='text-4xl text-white' /></abbr></Link>
            </li> : <li onClick={SignOutFunc} className='mx-auto flex items-center justify-center m-1 w-11/12 cursor-pointer rounded-full p-1'><Link to={"/Login"} ><abbr title="Login"><div className='w-[53px] h-[53px] flex items-center justify-center rounded-full border-2 border-solid border-emerald-700'><Avatar src={auth?.currentUser?.photoURL} className={'rounded-full'} size={45} alt="" /></div></abbr></Link></li>}
        </ul>
    </nav>
  )
}
