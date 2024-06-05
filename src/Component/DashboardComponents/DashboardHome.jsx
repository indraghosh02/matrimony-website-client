import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useRole from '../../hooks/useRole';

const DashboardHome = () => {
    const { user, logOut } = useContext(AuthContext);
    const [role, isLoading] = useRole();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-md py-4 px-6">
                <div className="flex justify-between items-center">
                    {/* Header content can be added here if needed */}
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex flex-col justify-center items-center p-6">
                <div className="bg-blue-700 shadow-md rounded p-6 mt-[-100px] text-center">
                    {role === 'admin' && (
                        <div>
                            <h2 className="text-4xl font-semibold text-white">Welcome to Admin Dashboard Home</h2>
                            <h2 className=" text-gray-200 mt-4">Admin Email: {user?.email}</h2>
                            <p className="mt-4  text-slate-300">
                            Welcome to your dashboard! This is your central hub for managing tasks and monitoring critical data. Use the sidebar on the left to navigate through different sections.  Your actions are essential in ensuring the smooth operation of our system. To securely log out, click the "Log Out" button .
                            </p>
                            <button
                                className="bg-red-500 text-white mt-4 px-4 py-2 rounded"
                                onClick={logOut}
                            >
                                Log Out
                            </button>
                        </div>
                    )}
                    {role === 'user' &&
                    
                    <div>
                    <h2 className="text-4xl font-semibold text-white">Welcome to User Dashboard Home</h2>
                    <h2 className=" text-gray-200 mt-4">User Email: {user?.email}</h2>
                    <p className="mt-4  text-slate-300">
                    This is your central hub for accessing and managing your tasks and activities. Use the sidebar on the left to navigate through different sections. Your engagement is vital for our community's success. Should you need any assistance, don't hesitate to reach out to our support team. To securely log out, click the "Log Out" button. Thank you for your contribution and hard work!
                            </p>
                    <button
                        className="bg-red-500 text-white mt-4 px-4 py-2 rounded"
                        onClick={logOut}
                    >
                        Log Out
                    </button>
                </div>}
                </div>
            </main>
        </div>
    );
};

export default DashboardHome;
