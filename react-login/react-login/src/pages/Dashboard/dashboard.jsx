import { Link } from "react-router-dom"

function Dashboard() {
    return (
        <div className="flex flex-col items-center justify-center h-screen font-primary">
            <h1 className=" cursor-default text-4xl p-5">Dashboard</h1>
            <Link to="/login" className="cursor-pointer bg-black hover:bg-gray-800 text-white p-2 rounded-2xl w-3xs mt-4 mt-10">
                Logout
            </Link>
        </div>
    )
} 

export default Dashboard;