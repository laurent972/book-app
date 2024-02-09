'use client'
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/initFireBase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/services/initFireBase";
import Image from "next/image";

import logo from '../../../public/assets/logo.svg';
import MessageSuccess from "./Success";



const Register = () =>{

    const [firstName,setFirstName] =  useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userId, setUserId] = useState('');
    const [errorFirstname,setErrorFirstname] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirm, setErrorConfirm] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [verifAccount, setVerifAccount] = useState('');
    const [displayConfirm, setDisplayConfirm] = useState(false);

    const message ={
        titre:'Bienvenue !',
        text:'Votre compte a bien été créé !',
        button : 'Je me connecte',
        url : '/login',

    }
   
    const register = async () => {
        console.log('toto');

       /* try{
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const userId = res.user.uid;
            console.log(res.user);
            await setDoc(doc(db, "users", userId), {
                email: email,
              }); 

           setDisplayConfirm(true) 
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            if(error.code == 'auth/email-already-exists' || error.code == 'auth/email-already-in-use' ){
                setVerifAccount('Ce compte existe déjà')
            }
            console.log(errorCode)
        }  */                   
      }
     
    const handleValidate = (e) =>{
        e.preventDefault();
        const firstNameRegex = /^[a-zA-Z\s-]+$/;
        const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

       if( firstName.length <= 0 || !firstNameRegex.test(firstName)){
            setErrorFirstname('La saisie est invalide');
            setIsValid(false);
        }else{
            setErrorFirstname('')
            setIsValid(true);
        }

        if( firstName.length <= 0 || !emailRegex.test(email)){
            setErrorEmail('email incorrect');
            setIsValid(false);
        }else{
            setErrorEmail('')
            setIsValid(true);
        }

        if(password.length <= 0  ){
            setErrorPassword('Mot de passe incorrect');
            setIsValid(false);
        }else{
            setErrorPassword('')
            setIsValid(true);
        }

        if(confirmPassword.length <= 0 || !password.match(confirmPassword) ){
            setErrorConfirm('Les mots de passe ne correspondent pas');
            setIsValid(false);
        }else{
            setErrorConfirm('')
            setIsValid(true);
        }

        if(isValid) register();
       
    }  

    //console.log(isValid);
    return(

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         <Image 
            src={logo}
            className="mx-auto"
            alt="Ma bibliothèque logo"
            loading = 'lazy'
            width="150px"
            height="80px"
        />

        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight ">
            S'enregistrer
          </h2>
        
        <form className="w-full max-w-lg" onSubmit={handleValidate}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6 md:mb-0">
                    <p>{verifAccount}</p>
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

                    { errorFirstname ? 
                         <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                         <p>{errorFirstname}</p> 
                         </div>
                    : '' }
                   
                    
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
                     {errorEmail ?  
                     <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <p>{errorEmail}</p>
                    </div>
                    : ''}
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Mot de passe
                    </label>
                    <input 
                        className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-password" 
                        type="password" 
                        placeholder="Mot de passe"
                        onChange={(e) => setPassword(e.target.value)}
                        
                    />
                    {errorPassword ? 
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <p>{errorPassword}</p>
                    </div>
                    : ''}
                     
                    <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-confirm-pass">
                        Confirmer mot de passe
                    </label>
                    <input 
                        className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="grid-confirm-pass" 
                        type="password" 
                        placeholder="Verification du mot de passe"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        
                    />
                    {errorConfirm ? 
                     <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                      <p>{errorConfirm}</p>
                    </div>
                    : ''}
                    <button 
                    type="submit" 
                    className="text-white bg-mid-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>

                </div>
                
              </div>
        </form>
        </div>
        {displayConfirm ?  <MessageSuccess message={message} /> : null}
       
    </div>

    )
}

export default Register;