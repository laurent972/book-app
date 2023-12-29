import Header from "../components/Header";
import Navigation from "../components/Navigation";

const DashboardLayout = ({children}) =>{
    return(

        <>
            <Header/>
            <main className="flex flex-col md:flex-row ">
                <div className="w-full md:w-1/6 p-2 border-r-1 border-gray-300">
                    <Navigation/>
                </div>
                <div className="w-full md:w-5/6 p-2 bg-slate-50">
                    {children}
                </div>
            </main>
           
        </>

    )
}

export default DashboardLayout;