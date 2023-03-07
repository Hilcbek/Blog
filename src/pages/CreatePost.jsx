import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../config/firebase'

export const CreatePost = () => {
    let [title,setTitle] = useState('')
    let [post,setPost] = useState('')
    let [message,setMessage] = useState(false)
    let AddPost = async () => {
        await addDoc(collection(db,"posts"),{
            title : title,
            post : post,
            author : {name : auth?.currentUser?.displayName, id: auth?.currentUser.uid}
        }).then((res) => {
            setMessage(true);
            setTimeout(() => {
                setMessage(!message)
            },3000);
            <div className='text-red-400 text-5xl'>{message && `Inforamtion Added Successfully!!`}</div>
        })
        setTitle('')
        setPost('')
    }
  return (
    <div className='my-3 xs-auto xs:w-11/12 md:w-full mx-auto xl:pl-28 flex items-start justify-start flex-col'>
        <h1 className='xs:text-4xl md:text-7xl my-5 text-center block w-full font-Nunito text-emerald-600 underline text-light'>Add Blog</h1>
        <div className='flex items-start justify-start w-full flex-col my-3'>
            <label htmlFor="title" className='text-3xl'>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className=' ml-6 my-5 p-3 border-solid border-b-[1px] border-emerald-500 bg-transparent outline-none w-full' name="text" placeholder='Title...' id="" />
        </div>
        <div className='flex items-start justify-start flex-col w-full'>
            <label htmlFor="post" className='text-3xl'>Post</label>
            <textarea value={post} onChange={(e) => setPost(e.target.value)} name="area" id="" className='w-full resize-none ml-6 my-5 bg-transparent border-solid border-emerald-500 border-b-[1px] outline-none' placeholder='Post...'></textarea>
        </div>
        <button onClick={AddPost} className='p-2 text-emerald-500 my-3 border-solid border-[1px] border-emerald-500 hover:bg-emerald-500 cursor-pointer duration-500 hover:text-white mx-4 px-5 rounded-lg'>Submit</button>
    </div>
  )
}
