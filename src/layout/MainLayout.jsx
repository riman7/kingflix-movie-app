import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer  from "../components/footer"; 

const MainLayout = ({children}) =>{
    return(
            <div className="flex flex-1 min-h-screen">
                <aside className="sticky top-0 h-screen w-64">
                    <Sidebar />
                </aside>
                <div className="min-h-screen flex flex-col overflow-y-auto scroll-smooth">
                    <Navbar />
                    <main className="flex-1 pl-5 pr-2">{children}</main>
                    <Footer />
                </div>
                
            </div>
            
        
    )
};
export default MainLayout