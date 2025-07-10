import MainLayout from "../layout/MainLayout";
const Notification = () =>{
    return (
        <MainLayout>
            <div className="text-white p-6">
                <h1 className="text-4xl font-bold">Notification</h1>
                <p className="text-red-400 pt-2">Please login to see your notifications</p>
            </div>
        </MainLayout>

    )
}
export default Notification;