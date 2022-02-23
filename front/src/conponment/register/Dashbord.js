import React from 'react'
import Profile from "./Profile"
const Dashbord = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div>
        {user.isAdmin?"YES":
        <Profile/>}
    </div>
  )
}

export default Dashbord