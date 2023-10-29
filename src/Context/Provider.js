import React, { useEffect } from 'react'
import { useState,createContext,useContext } from 'react';
import { useNavigate } from "react-router-dom";
const userContext=createContext();
function Provider({children}) {
   const  [user,setUser]=useState();
   const navigate=useNavigate();
   useEffect(()=>{
         const fetch=async()=>{
          const userInfo= await JSON.parse(localStorage.getItem("UserInfo"));
          setUser(userInfo);
         }
         fetch();
         if(user){
            navigate("/");
         }
   },[])
  return (
    <userContext.Provider
             value={{user,setUser}}
    >
             {children} 
    </userContext.Provider>
  )
}
export const UserState=()=>{
    return useContext(userContext);
}

export default Provider