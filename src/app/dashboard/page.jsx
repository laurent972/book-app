'use client'
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useUserContext } from "../context/UserProvider";

const dashboard = () =>{

  const {user, setUser} = useUserContext();
  console.log({user});
    return(
       <>
         <h1>{user}</h1>
         <button onClick={()=> setUser('Jean Mich') }>Change the world</button>
       </>
               
         
    )
}

export default dashboard;