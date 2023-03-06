import React, { createContext, useEffect, useState } from 'react';
import { getUser } from '../authFunctions/authFunction';


export const authContext = createContext();
export const loadingContext = createContext();

const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null);


    useEffect(()=>{
        getUser().then((res)=>{
           if(res.data.status){
                setUser(res.data.data.first_name);
           }else{
            console.log('not authenticated');
           }
        });
        
    },[user]);



  return (
    <authContext.Provider value={{user, setUser, getUser}}>
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
