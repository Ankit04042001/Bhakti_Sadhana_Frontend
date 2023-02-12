import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { authContext } from './component/Context';

export const RequireNotAuth = (props) =>{
    const user = useContext(authContext);
    const navigate = useNavigate();

    const findUser = async()=>{
        const res = await user.getUser();
        if(res.data.status){
            user.setUser(res.data.data.user);
            navigate('/');
        }
    }
    useEffect(()=>{
        if(user.user){
            console.log('user found');
            navigate('/', {replace:true});
        }else{
            findUser();
        }
    },[])
    return <>
        {props.children}
    </>
}

const RequireAuth = (props) => {
    const user = useContext(authContext);  
    const navigate = useNavigate();
    const location = useLocation();

    const findUser = async()=>{
        const res = await user.getUser();
        if(!res.data.status){
            navigate(props.url, {replace:true, state:location.pathname});
        }
    }
    

    useEffect(()=>{
        if(!user.user){
            findUser();                  // if we type url manually then initialize authContext manually.
        }
    },[]);
    
  return <>
        {props.children} 
  </>
}

export default RequireAuth