import React from 'react'
import  {useNavigate} from 'react-router-dom' 
import ComWithRouter from './comWithRouter'
export default function Home() {
  const navigate =useNavigate() 
  const godetail=()=>{
    // navigate('/about/about2?id=123')
    // navigate('/about/about2/123')
    navigate('/about/about2',{state:{id:999}})
  }
  return (
    <div>Home
      <button onClick={godetail}>about2  去传参</button>
      <ComWithRouter/>
    </div>
  )
}
