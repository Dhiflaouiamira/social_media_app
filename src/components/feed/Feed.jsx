import Share from "../share/Share"
import "./feed.css"
import React, { useEffect, useState } from "react"
import Post from "../post/Post"
import axios from "axios";

export default function Feed() {
   const  [posts,setPosts] = useState([]);

   useEffect(()=>{
    const fetchPost = async ()=>{
    const res = await axios.get("posts/timeline/64f326bcbaa438ff7f592129")
    setPosts(res.data)
    console.log(res)
    };
 
    fetchPost();

   },[]);

  return (
    <div  className="feed">
   <div  className="feedWrapper">
   <Share/>
   
   {posts.map((p)=>(
    <Post key={p.id} post={p}/>
   ))}
 
   </div>
    </div>
  )
}