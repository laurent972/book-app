'use client'

import { auth } from "@/services/initFireBase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/services/initFireBase";
import ResetPassword from "../components/ResetPassword";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";



const resetPassword = () =>{

    const handleResetPassword = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
    
        try {
          await sendPasswordResetEmail(auth, email);
          alert("Un email de réinitialisation de mot de passe a été envoyé à l'adresse " + email);
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
          alert("Erreur : " + errorMessage);
        }
      };


    return(
        <div className="flex items-center justify-center h-screen">
        <form onSubmit={handleResetPassword} className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                required
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                type="submit"
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded"
              >
                Réinitialiser le mot de passe
              </button>
            </div>
          </div>
        </form>
      </div>
    )
}

export default resetPassword;