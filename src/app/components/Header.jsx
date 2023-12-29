
import Link from "next/link";
import SearchEngine from "./SearchEngine";

const Header = () =>{
    return(
        <>
        <header className="w-full p-2 border-b border-gray-300">
            <SearchEngine />
            <Link href='/register'>Register</Link>
            <Link href='/login'>Login</Link>
        </header>
        </>
    )
}

export default Header;