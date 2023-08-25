import Share from "../share/Share"
import "./feed.css"
import React from "react"
import Post from "../post/post"
export default function Feed() {
  return (
    <div  className="feed">
   <div  className="feedWrapper">

   <Share/>
   <Post/>
   </div>
    </div>
  )
}
