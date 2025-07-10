import MainLayout from "../layout/MainLayout";
const Watchlist =()=>{
    return (
        <MainLayout>
            <div className="text-white p-6 ">
                <h1 className="text-4xl font-bold">Watchlist</h1>
                <p className="text-red-400 pt-2">Please login to see your watchlist</p>
            </div>
        </MainLayout>
    )
}
export default Watchlist;