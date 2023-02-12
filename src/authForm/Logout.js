import React, { useContext, useEffect} from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { authContext, loadingContext } from '../component/Context';
import {logout} from '../authFunctions/authFunction';
import {BroadcastChannel} from 'broadcast-channel';


export const logoutChannel = new BroadcastChannel('logout');

const Logout = () => {
    const {isLoading, setIsLoading} = useContext(loadingContext);
    const user = useContext(authContext);
    const navigate = useNavigate();

    if(!logoutChannel.closed){
      logoutChannel.postMessage('Logout');
    }
    
    
    const logout2 = async ()=>{
      setIsLoading(true);
      await logout();
      user.setUser(null);
      setIsLoading(false);
      navigate('/', {replace:true});
    }
    
    useEffect(()=>{
        logout2();
        logoutChannel.close();
    },[])
      
    
  return (
    <div></div>
  )
}

export default Logout
