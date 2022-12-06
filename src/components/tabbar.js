import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import './tabbar.css'
export default function Tabbar() {
  return (
    <div>
        {/* <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/login'>Login</Link> */}

  <p>
  
  <NavLink to='/home'  className={({isActive})=>isActive?'mylinkactive':''}>home</NavLink>
  <NavLink to='/login'  className={({isActive})=>isActive?'mylinkactive':''}>Login</NavLink>
  <NavLink to='/about'  className={({isActive})=>isActive?'mylinkactive':''}>about</NavLink>
  </p>
       
    </div>
  )
}
