import { useRoutes } from "react-router-dom";
import React from 'react'
import Redirect from '../components/redirect'
import RouterAuth from '../components/routerAuth'
export default function RouteConfig() {

    const route = useRoutes([
        {path:'/',element:<Redirect to='login'/>},
        {path:'/home',element:
        <RouterAuth> {lazyLoad('home')}</RouterAuth>
        
       },
        {path:'/about',element:lazyLoad('about'),
        children:[
            {path:'about1',element:lazyLoad('about1')},
            {path:'about2',element:lazyLoad('about2')}
        ]
    
       },
        {path:'/login',element:lazyLoad('login')},
    ])
  return (
    route
  )
}
const lazyLoad = (path)=>{
    const Com = React.lazy(()=>import(`../components/${path}`))
   return (
  
    <React.Suspense fallback={<span>加载中。。。。。</span>}>
  
      <Com/>
    </React.Suspense>
   )
  }

