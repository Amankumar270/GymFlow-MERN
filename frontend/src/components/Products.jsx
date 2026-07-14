import { useEffect, useState } from "react"
import axios from "axios"
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"

function Products(){
    const navigate = useNavigate()
    const [list, setList] = useState([])
    const url = "https://gym-flow-mern.vercel.app";

    async function fetchData(){
        const response = await axios.get(`${url}/api/product/list`)
        if(response.data.success){
            setList(response.data.data)
        }
    }

    useEffect(() => {
        fetchData()
    }, []) 

    // 🌟 Handle selection of the plan with fake-payment update integration
    // 🌟 Update this function inside your Products.jsx file:
const handleSelectPlan = async (membership) => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
        alert("Please log in first to purchase a fitness membership plan!");
        navigate('/login');
        return;
    }

    const userObj = JSON.parse(storedUser);

    try {
        const response = await axios.post(`${url}/api/auth/subscribe`, {
            email: userObj.email,
            planName: membership.title // Still updates the user model on backend
        });

        if (response.data.success) {
            alert(`🎉 Activation Successful! ${response.data.message}`);
            
            // 🌟 COMBINE user details with the full product information so dashboard can read it instantly!
            const fullUserData = {
                ...response.data.user,
                membershipDescription: membership.description,
                membershipFacilities: membership.facilities,
                membershipYearlyPlan: membership.yearlyPlan
            };
            
            localStorage.setItem("user", JSON.stringify(fullUserData));
            navigate("/dashboard");
        } else {
            alert(response.data.message);
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong with the checkout connection.");
    }
};

    return(
        <div className="mt-12 bg-gray-50 min-h-screen py-6">
            <div className="text-center">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
                    Choose Your Fitness Journey
                </h2>
                <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">
                    Explore our collection of certified training programs and premium club membership plans.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-12 max-w-7xl mx-auto">
                {
                    list.map((membership, index) => {
                        return (
                            <div 
                                key={index} 
                                className="w-full bg-white border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 p-8 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-full h-48 overflow-hidden rounded-2xl mb-6 shadow-sm">
                                        <img 
                                            src={`${url}/images/` + membership.image} 
                                            alt={membership.title} 
                                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                        />
                                    </div>

                                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{membership.title}</h3>
                                    <p className="text-sm text-gray-600 mb-6 line-clamp-3">{membership.description}</p>
                                    
                                    <div className="flex items-baseline text-indigo-600 mb-6 font-bold">
                                        <span className="text-sm self-start mt-2"><FaIndianRupeeSign /></span>
                                        <span className="text-5xl font-black tracking-tight">{membership.price}</span>
                                        <span className="ml-1 text-base font-normal text-gray-500">/month</span>
                                    </div>

                                    <div className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium px-4 py-3 rounded-2xl mb-6">
                                        <span className="font-bold">🎁 Annual Offer:</span> {membership.yearlyPlan}
                                    </div>

                                    <p className="font-bold text-gray-900 mb-3 text-sm tracking-wide uppercase">Included Facilities:</p>
                                    <ul className="space-y-2.5 mb-8">
                                        {membership.facilities && membership.facilities.split(',').map((facility, fIndex) => (
                                            <li key={fIndex} className="flex items-center text-gray-700 text-sm font-medium">
                                                <span className="text-green-500 font-bold mr-2 text-base">✓</span> {facility.trim()}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* 🌟 Handled interactive dynamic subscription selection here */}
                                <button 
                                    className="w-full bg-gray-900 hover:bg-indigo-600 text-white font-bold py-4 px-4 rounded-2xl shadow-md transition-all duration-200 cursor-pointer text-center tracking-wide" 
                                    onClick={() => handleSelectPlan(membership)}
                                >
                                    Select This Plan
                                </button>
                            </div> 
                        )
                    })
                }    
            </div>
        </div>
    )
}

export default Products;