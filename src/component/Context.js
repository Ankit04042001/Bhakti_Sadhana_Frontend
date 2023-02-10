import React, { createContext, useEffect, useState } from 'react';
import { getUser, login, logout } from '../authFunctions/authFunction';


export const authContext = createContext();
export const loadingContext = createContext();

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(()=>{
        getUser().then((res)=>{
           if(res.data.status){
                setUser(res.data.data.first_name);
                setIsAuthenticated(true);
           }else{
            console.log('not authenticated');
           }
        });
        
    },[]);

    const login2 = async (email, password)=>{
        const res = await login(email, password);
        if(res.data.status){
            setUser(res.data.data.first_name);
            setIsAuthenticated(true);
            return {status : res.data.status, message : res.data.message}
        }else{
            return {status : res.data.status, message : res.data.message}
        }
    
    }

    const logout2 = async ()=>{
        if(isAuthenticated){
            const res = await logout();
            if(res.data.status){
                console.log('logout Successfully');
                setUser(null);
                setIsAuthenticated(false);
            }
        
        }
    }

  return (
    <authContext.Provider value={{user, logout2, login2}}>
        {props.children}
    </authContext.Provider>
  )
}

export default AuthContextProvider





export const LoadingContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);
  return (
    <loadingContext.Provider value={{isLoading, setIsLoading}}>
        {props.children}
    </loadingContext.Provider>
  )
}
