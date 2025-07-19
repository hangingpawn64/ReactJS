import React from 'react'
import { NavLink } from 'react-router-dom' // --> link is basic one, NavLink allows us to define classes in them

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"> <li>Home</li> </NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>about</li></NavLink>
        <NavLink className={(e)=>{return e.isActive?"red":""}} to="/login"><li href="/login">login</li></NavLink>
      </nav>
      
    </div>
  )
}

export default Navbar
