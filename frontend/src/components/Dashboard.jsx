import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUserCircle, FaDumbbell, FaCalendarAlt, FaCheckCircle, FaExclamationCircle, FaGift, FaTimesCircle } from "react-icons/fa";

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const url = "https://gym-flow-mern.vercel.app";

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            alert("Please log in to view your dashboard.");
            navigate("/login");
        } else {
            setUser(JSON.parse(storedUser));
        }
    }, [navigate]);

    // 🌟 Handle Opting Out of Membership
    const handleOptOut = async () => {
        const confirmCancel = window.confirm("Are you sure you want to opt out of your active membership plan?");
        if (!confirmCancel) return;

        try {
            const response = await axios.post(`${url}/api/auth/cancel-subscription`, {
                email: user.email
            });

            if (response.data.success) {
                alert("Membership cancelled successfully.");
                
                // Update local storage so changes reflect on page dynamically
                localStorage.setItem("user", JSON.stringify(response.data.user));
                setUser(response.data.user);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong while processing your cancellation.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        alert("Logged out successfully!");
        window.location.href = "/";
    };

    if (!user) return <div className="text-center mt-20 font-bold text-xl">Loading your fitness profile...</div>;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
                
                {/* Header Profile Section */}
                <div className="bg-gray-900 px-8 py-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <FaUserCircle className="text-6xl text-gray-400" />
                        <div>
                            <h1 className="text-3xl font-black tracking-tight">Welcome, {user.name}!</h1>
                            <p className="text-gray-400 text-sm mt-1">{user.email}</p>
                        </div>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 transition text-white font-bold py-2.5 px-6 rounded-xl cursor-pointer text-sm"
                    >
                        Logout Account
                    </button>
                </div>

                {/* Membership Details Section */}
                <div className="p-8">
                    <h2 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                        <FaDumbbell className="text-indigo-600" /> Your Active Subscriptions
                    </h2>

                    {user.membershipPlan ? (
                        <div>
                            <div className="border border-indigo-100 bg-indigo-50/50 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="bg-green-600 text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full font-bold">
                                            Current Status: Active
                                        </span>
                                        
                                        {/* 🌟 New Opt Out Button */}
                                        <button 
                                            onClick={handleOptOut}
                                            className="text-xs bg-red-50 hover:bg-red-100 border border-red-200 text-red-600 font-bold px-3 py-1 rounded-full transition flex items-center gap-1 cursor-pointer"
                                        >
                                            <FaTimesCircle /> Opt Out of Plan
                                        </button>
                                    </div>
                                    
                                    <h3 className="text-2xl font-black text-gray-900 mt-3">
                                        {user.membershipPlan}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-1 max-w-md">
                                        {user.membershipDescription || "Access to premium facilities and tracking logs."}
                                    </p>
                                </div>

                                <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 min-w-[200px]">
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                                        <FaCalendarAlt className="text-indigo-500" /> Renewal Date
                                    </div>
                                    <div className="text-lg font-extrabold text-gray-800 mt-1">Next Billing Cycle</div>
                                    <div className="text-sm text-green-600 font-semibold mt-0.5 flex items-center gap-1">
                                        <FaCheckCircle /> Managed Automatically
                                    </div>
                                </div>
                            </div>

                            {user.membershipYearlyPlan && (
                                <div className="mt-6 border border-amber-200 bg-amber-50 rounded-2xl p-4 flex items-center gap-3 text-amber-900">
                                    <FaGift className="text-2xl text-amber-600 flex-shrink-0" />
                                    <div>
                                        <p className="text-xs uppercase font-bold tracking-wider text-amber-700">12-Month Loyalty Advantage</p>
                                        <p className="text-sm font-semibold">{user.membershipYearlyPlan}</p>
                                    </div>
                                </div>
                            )}

                            <div className="mt-8">
                                <p className="font-extrabold text-gray-900 mb-4 text-sm tracking-wide uppercase">PLAN'S FACILITIES:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {user.membershipFacilities ? (
                                        user.membershipFacilities.split(',').map((facility, idx) => (
                                            <div key={idx} className="flex items-center text-sm font-medium text-gray-700">
                                                <span className="text-green-500 font-bold mr-2">✓</span> {facility.trim()}
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-sm text-gray-500 italic">Standard floor entry privileges included.</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="border border-dashed border-zinc-300 bg-zinc-50 rounded-2xl p-8 text-center flex flex-col items-center justify-center">
                            <FaExclamationCircle className="text-4xl text-zinc-400 mb-3" />
                            <h3 className="text-xl font-bold text-zinc-800">No Active Membership Plan</h3>
                            <p className="text-zinc-500 text-sm mt-1 mb-5 max-w-sm">
                                You haven't chosen a program yet. Select a fitness plan to unlock full dashboard privileges.
                            </p>
                            <button 
                                onClick={() => navigate("/products")}
                                className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-bold py-2.5 px-6 rounded-xl transition duration-200 cursor-pointer"
                            >
                                Browse Membership Tiers
                            </button>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}

export default Dashboard;