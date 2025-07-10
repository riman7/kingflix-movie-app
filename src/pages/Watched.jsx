import MainLayout from "../layout/MainLayout";
const Watched =()=>{
    return (
        <MainLayout>
            <div className="text-white p-6">
                <h1 className="text-4xl font-bold">Watched</h1>
                <p className="text-red-400 pt-2">Please login to see your watched movies</p>
            </div>
        </MainLayout>
    )
}
export default Watched;