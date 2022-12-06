import React from 'react'
import Login from './login'
export default function RouterAuth({children}) {

    const token = localStorage.getItem('token')

    if(token){
        return  children
    } else {
    return <Login/>
    }
  
}
