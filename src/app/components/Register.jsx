'use client'
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/initFireBase";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/services/initFireBase";





const Register = () =>{

    const [firstName,setFirstName] =  useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

   
    const register = () => {
       
        console.log(firstName,email,password, confirmPassword);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
           console.log(user.uid) 
            db.collection('users').setDoc(user.uid)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
        
      }
     
    const handleValidate = (e) =>{
        e.preventDefault();
        let isValid = true;
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
        register();

    }  


    return(
        
        <form className="w-full max-w-lg" onSubmit={handleValidate}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input 
                        className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-first-name" 
                        type="text"
                        placeholder="Prénom"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                        email
                    </label>
                    <input 
                        className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-email" 
                        type="email" 
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Mot de passe
                    </label>
                    <input 
                        className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-password" 
                        type="password" 
                        placeholder="******"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-confirm-pass">
                        Confirmer mot de passe
                    </label>
                    <input 
                        className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-confirm-pass" 
                        type="password" 
                        placeholder="******"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button 
                    type="submit" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               
                    >
                        Submit
                    </button>

                </div>
                
              </div>
        </form>


    )
}

export default Register;