import { collection, getDocs,doc,deleteDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import {db } from '../config/firebase'

export const Home = () => {
    let [blogs,setBlog] = useState([])
    let moviesRef = collection(db,"posts")
    let getBlog = async () => {
        try{
          let data = await getDocs(moviesRef)
        setBlog(data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        })))
        }catch(err){
          console.error(err)
        }
    }
    useEffect(() => {
      getBlog()
    },[])
    let DeleteDocs = async (id) => {
        await deleteDoc(doc(db,"posts",id));
      getBlog()
    }
  return (
      <div className='w-full max-h-[87vh] overflow-scroll p-2 grid xs:grid-cols-1 md:grid-cols-2'>
        {
            blogs?.length > 0 ? (
              blogs.map((blog,idx) => (
                <div key={idx} className='p-3 shadow-lg shadow-slate-300 w-fit cursor-pointer bg-white m-2 rounded-lg'>
                    <h1 className='text-center xs:text-2xl sm:text-4xl my-3 underline text-emerald-500 font-light tracking-wider'>{blog.title}</h1>
                    <div className='w-full flex items-start justify-start'>
                      <h1>&nbsp;&nbsp;&nbsp;&nbsp;{blog.post}</h1>
                      <div className='flex items-center justify-center'>
                        <abbr title="Delete blog"><AiFillDelete onClick={() => DeleteDocs(blog.id)} className='text-3xl text-red-500 cursor-pointer mx-1' /></abbr>
                      </div>
                    </div>
                    <div className='w-11/12 mx-auto flex items-center justify-between mt-4 p-2'>
                      <p>Author :</p>
                      <h1 className='text-red-300 xs:text-md sm:text-2xl'>{blog.author.name}</h1>
                    </div>
                </div>
            ))
            ) : (
              <h1>No Blog Posted Yet :)</h1>
            )
        }
    </div>
  )
}
