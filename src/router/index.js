import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'

import Home from '../components/home'
import About1 from '../components/about1'
import About2 from '../components/about2'
import About from '../components/about'
import Login from '../components/login'

import Redirect from '../components/redirect'
import RouterAuth from '../components/routerAuth'
export default function RouterConfig() {
  return (
    <div>   
        <Routes>
          {/* 路由拦截 */}
            <Route path='/home' element={<RouterAuth><Home/></RouterAuth>}/>
            <Route path='/login' element={<Login/>}/>
            {/* 重定向 */}
            {/* <Route path='/' element={<Home/>}/> */}

            {/* 嵌套路由 */}
            <Route path='/about'   element={<About/>}>
              {/* index  用于匹配父级路径  当路径是/about 的时候，展示about2组件 */}
              <Route index  element={<About2/>}/>
               {/* <Route path='/about/about1' element={<About1/>}/> */}
               <Route path='about1'  element={<About1/>}/>
               <Route path='about2'  element={<About2/>}/>
               {/* 动态路由传参 */}
               {/* <Route path='about2/:id'  element={<About2/>}/> */}
              </Route>
              {/* 重定向2  */}
              {/* <Route path='*' element={<Navigate to='/login'/>}/> */}
              {/* 重定向3 未匹配到路径  自定义 redirect   404 */}
              {/* <Route path='*' element={<Redirect to='/home'/>}/> */}

        </Routes>
    </div>
  )
}
