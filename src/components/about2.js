import React from 'react'
import { useParams,useSearchParams,useLocation } from 'react-router-dom'
export default function About2() {
  // search  ? 传参  
  const [params,setSearchParams] = useSearchParams()
  const ID = params.get('id')
  console.log('id=====',ID)
// 动态路由参数

const params2= useParams()
console.log('params2===',params2)//{ID:123}
const ID2 = params.id

//state 参数
  // const  p3 = useLocation()
  // console.log('p3===',p3)  
  // const ID3 = p3.state.id
  return (
    <div>About2---</div>
  )
}
