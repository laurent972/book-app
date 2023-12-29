import Link from "next/link";

const Navigation = () =>{
    return(
        <div className="flex flex-col pt-6 px-3">
            <Link href="/dashboard">Tablau de bord</Link>
            <Link href='/books'>Mes livres</Link>
        </div>
       
    )
}

export default Navigation;