
import { db } from "@/services/initFireBase";
import { collection, query, getDocs, doc, addDoc  } from "firebase/firestore";

import Login from "./components/Login";


const users = collection(db, 'users')


const querySnapshot = await getDocs(collection(db, "users"));

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
}); 




export default function Home() {

  return (
      <>
       
          <Login />
         
      </>
  )
}
