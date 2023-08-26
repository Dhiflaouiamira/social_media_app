import "./rightbar.css"
import React from "react"
export default function Rightbar() {
  return (
    <div className="rightbar">
       <div className="rightbarWarraper">
      
       <div className="BirthdayContainer">
       <img className="Birthdayimg"   src="assets/Birthday.png" alt=""/>
      
       <span className="BirthdayText">

          <b> dh amira </b> and <b>3 other person</b> have a Birthday today.
       </span>
       </div>


       <img className="rightbarAd"   src="assets/ad.png" alt=""/>
      
  <h4   className="rightbarTitle"> Online Friends</h4>
    <ul className="rightbarFriendList">
      <li className="rightbarFriend">
         <div   className="rightbarProfilImgcontainer"   >
     
          <h4 className="rightbarTitle">Online Friends</h4>
         </div>
   
       </li>


  </ul>




       </div>
       </div>

      
  )
}
