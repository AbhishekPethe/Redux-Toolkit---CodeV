import React, { useState } from 'react'

import {useSelector , useDispatch } from "react-redux"
import { post } from './postsSlice'


const Posts = () => {
    const posts = useSelector((state) => state)
    const dispatch = useDispatch()

    const [newItem, setnewItem] = useState({
        title: '',
        content : ''
    })

    const handleChange = (event) => {
        const {name} = event.target
        setnewItem((prev) => {
            return {
                ...prev,
                [name] : event.target.value
            }
        })
    }
   
    console.log(posts);
    return (
        <div className='flex flex-col justify-center items-center'>

            <div className='flex flex-col gap-6'>
                <p className='text-3xl font-semibold'>Add NEW post</p>
                <form action="">

                <input className="border-2 border-black" type="text" id="Title" name="title" value={newItem.title} onChange={handleChange} />
                <input className="border-2 border-black" type="text" name="content" value={newItem.content}
                    onChange={(e) => setnewItem((prev) => {
                        return {
                            ...prev,
                            content : e.target.value
                        }
                    })} />
                
                    </form>
                 <button
                onClick={() => dispatch(post(newItem))}
            >Click to add</button>
                
            </div>

            {
                posts.posts.map((each , i) => {
                    return (
                        <div key={i} className='flex flex-col gap-2 border-2 border-black rounded-md'>
                            <p>{each.title}</p>
                            <p>{each.content}</p>

                        </div>
                    )
                })
            }
           
        </div>
    )
}

export default Posts