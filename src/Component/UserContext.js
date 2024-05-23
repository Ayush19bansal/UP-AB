import React from 'react'
import {createContext,useContext,useState} from "react"

export const UserContextDemo=createContext();

function UserContext(props) {
    const[data,setdata]=useState(0);
 
  return (
    <UserContextDemo.Provider value={{data,setdata}}>
      {props.children}
    </UserContextDemo.Provider>
  )
}

export const Getctx=()=>{
    const ctx =useContext(UserContextDemo);
    return ctx
}

export default UserContext
