import React from 'react'
import { useNavigate,useLocation,useParams } from 'react-router-dom'
export default function WithRouter(Component) {
 
  return function(props){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const push =useNavigate()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const match =useParams()
    // const location =useLocation()  
    // const {push} = navigate
    return <Component {...props} history={{push,match}}/>
  }
}
