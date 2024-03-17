'use client'
import {signInWithEmailAndPassword,onAuthStateChanged  } from "firebase/auth";
import { auth } from "@/services/initFireBase";
import { useState } from "react";

import Image from "next/image";

import logo from '../../../public/assets/logo.svg';
import UserContext from "../context/UserContext";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);


    const handleLogin = async(e) =>{
        
        e.preventDefault();
        try{
           await signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              setCurrentUser(user)
          })
        }catch(error){
            console.log(error);
            const errorCode = error.code;
            const errorMessage = error.message;
        }
       
    
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              console.log(uid);
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    }

  

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
            Se connecter 
          </h2>
        </div>

        <div className="mt-15 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleLogin} autoComplete='false'>
            <div>
              <label htmlFor="email" className="block text-base font-medium leading-6 ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  autoComplete="none"
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md border-0 p-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-base font-medium leading-6 ">
                  Password
                </label>
                <div className="text-sm">
                  <a href="/reset-password" className="font-semibold text-mid-blue hover:text-light-blue">
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  autoComplete="none"
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-mid-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-light-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Pas encore de compte ?{' '}
            <a href="/register" className="font-semibold leading-6 text-mid-blue hover:text-light-blue">
            s'enregistrer
            </a>
          </p>
        </div>
      </div>
    )
}

export default Login;