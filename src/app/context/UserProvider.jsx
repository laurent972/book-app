'use client'
import { useContext, useState } from "react";
import UserContext from "./UserContext";


const UserProvider = ({ children }) => {
    let [user, setUser] = useState('toto');
    //let [auth, setAuth] = useState(false)

    return(
        <UserContext.Provider value={ {user,setUser} }>
            {children}
        </UserContext.Provider>    
    )
}

export default UserProvider;
 export function useUserContext(){
    return useContext(UserContext);
 }