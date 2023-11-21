import Link from "next/link";

const Navigation = () =>{
    return(
        <>
            <Link href="/">Accueil</Link>
            <Link href='/register'>Register</Link>
            <Link href='/login'>Login</Link>
          
        </>
       
    )
}

export default Navigation;