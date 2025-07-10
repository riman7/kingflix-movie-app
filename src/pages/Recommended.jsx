import MainLayout from "../layout/MainLayout";
const Recommended =()=>{
    return (
        <MainLayout>
            <div className="text-white p-6">
                <h1 className="text-4xl font-bold">Recommended</h1>
                <p className="text-red-400 pt-2">Please login to see your recommended movies</p>
            </div>
        </MainLayout>
    )
}
export default Recommended; 