import React, { useContext } from 'react'
import { authContext } from './component/Context';
import { useNavigate } from 'react-router-dom';

export const RequireNotAuth = (props) =>{
    const user = useContext(authContext);
    const navigate = useNavigate();

    return <>
        {!user.user?props.children:navigate('/', {replace:true})}
    </>
}

const RequireAuth = (props) => {
    const user = useContext(authContext);  
    const navigate = useNavigate();  

    
  return <>
        {user.user?props.children:navigate('/', {replace:true})} 
  </>
}

export default RequireAuth