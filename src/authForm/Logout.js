import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { authContext } from '../component/Context';

const Logout = async () => {
    const user = useContext(authContext);
    const navigate = useNavigate();
    const logout = ()=>{
      user.logout2().then((res)=>{
        if(res.data.status){
          navigate('/')
        }
      });
    }

    logout();
  return (
    <div></div>
  )
}

export default Logout