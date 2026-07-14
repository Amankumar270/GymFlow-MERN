import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Signup(){
    const navigate = useNavigate();

    // 🌟 State to hold signup inputs (matching backend model fields)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    // 🌟 Track input changes dynamically
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
    }

    // 🌟 Handle signup form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents blank page refresh
        
        try {
            const url = "https://gym-flow-mern.vercel.app/api/auth/signup";
            const response = await axios.post(url, data);

            if (response.data.success) {
                alert(response.data.message); // Displays "Account created successfully!"
                navigate('/login'); // Sends user over to login form automatically
            } else {
                alert(response.data.message); // Displays "User already exists", etc.
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong with the server connection.");
        }
    }

    return(
        <div className="h-100 flex flex-col justify-center items-center gap-10 w-auto m-10">
            {/* 🌟 Attached the onSubmit action here */}
            <form onSubmit={handleSubmit} className="h-auto flex flex-col gap-5 shadow-2xl w-auto p-10 bg-white rounded-xl">
                <h1 className="text-center font-bold text-2xl text-gray-900">Sign Up</h1>

                {/* Name Input */}
                <div className="shadow w-70">
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Enter User Name" 
                        className="w-70 p-2 border border-gray-200 rounded"  
                        value={data.name}
                        onChange={handleChange}
                        required // 🌟 Blocks empty inputs
                    />
                </div>

                {/* Email Input */}
                <div className="shadow">
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Enter email" 
                        className="w-70 p-2 border border-gray-200 rounded" 
                        value={data.email}
                        onChange={handleChange}
                        required // 🌟 Blocks empty inputs
                    />
                </div>

                {/* Password Input */}
                <div className="shadow">
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Enter Password" 
                        className="w-70 p-2 border border-gray-200 rounded"
                        value={data.password}
                        onChange={handleChange}
                        required // 🌟 Blocks empty inputs
                    />
                </div>

                <button type="submit" className="bg-gray-800 hover:bg-indigo-600 transition text-white rounded py-2 cursor-pointer font-bold">
                    SignUp
                </button>
                
                <h1 className="text-center text-sm text-gray-600">
                    Already a User? <span className="text-blue-600 underline cursor-pointer font-medium" onClick={()=>navigate('/login')}>Login</span>
                </h1>
            </form>
        </div>
    )
}

export default Signup