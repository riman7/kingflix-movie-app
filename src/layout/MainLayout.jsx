import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer  from "../components/footer"; 
import { useState } from "react";

const MainLayout = ({children}) =>{
    const [isOpen, setIsOpen] = useState(false);
    return(
            <div className="flex flex-1 min-h-screen">
                <aside 
                    className={`fixed md:sticky z-[9999] top-0 h-screen w-64 ${isOpen ? 'block' : 'hidden'} md:block`}>
                    <Sidebar/>
                </aside>
                <div className="min-h-screen w-full flex flex-col overflow-y-auto scroll-smooth">
                    <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
                    <main className="flex-1 pl-5 pr-2">{children}</main>
                    <Footer />
                </div>
            </div>
    )
};
export default MainLayout