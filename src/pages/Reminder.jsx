import MainLayout from "../layout/MainLayout";
const Reminder =()=>{
    return (
        <MainLayout>
            <div className="text-white p-6">
                <h1 className="text-4xl font-bold">Reminder</h1>
                <p className="text-red-400 pt-2">Please login to enable reminders feature</p>
            </div>
        </MainLayout>
    )
}
export default Reminder;        