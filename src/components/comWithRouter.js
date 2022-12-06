import React from 'react'
import WithRouter from './withRouter'
function ComWithRouter(props) {
    const godetail=()=>{
        props.history.push('/about/about2',{state:{id:999}})
      }
  return (
    <div >withrouter 封装跳转

   <button onClick={godetail}>about2  去传参</button>


    </div>
  )
}


export default WithRouter(ComWithRouter)