import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login(){
    const navigate = useNavigate()
    
    // 🌟 State to hold the email and password inputs
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    // 🌟 Track changes in the input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prev => ({ ...prev, [name]: value }))
    }

    // 🌟 Handle form submission to the backend API
    const handleSubmit = async (e) => {
        e.preventDefault(); // Stops the page from refreshing automatically
        
        try {
            const url = "https://gym-flow-mern-backend.vercel.app/api/auth/login";
            const response = await axios.post(url, data);

            if (response.data.success) {
                // Save the secure token and user details in localStorage
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                
                alert("Login Successful!");
                navigate("/"); // Redirect to your home page dashboard
                window.location.reload(); // Refresh to update your navbar profile state
            } else {
                alert(response.data.message); // Shows "Invalid password details", etc.
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong with the server connection.");
        }
    }

    return(
         <div className="h-100 flex flex-col justify-center items-center gap-10 w-auto m-10">
            {/* 🌟 Added onSubmit handler here */}
            <form onSubmit={handleSubmit} className="h-auto flex flex-col gap-5 shadow-2xl w-auto p-10 bg-white rounded-xl">
                <h1 className="text-center font-bold text-2xl text-gray-900">Login</h1>

                {/* 🌟 Email Input (Required to match your backend schema) */}
                <div className="shadow w-70">
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Enter Email Address" 
                        className="w-70 p-2 border border-gray-200 rounded"  
                        value={data.email}
                        onChange={handleChange}
                        required // 🌟 Prevents empty submission
                    />
                </div>

                {/* 🌟 Password Input */}
                <div className="shadow">
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Enter Password" 
                        className="w-70 p-2 border border-gray-200 rounded"
                        value={data.password}
                        onChange={handleChange}
                        required // 🌟 Prevents empty submission
                    />
                </div>

                <button type="submit" className="bg-gray-800 hover:bg-indigo-600 transition text-white rounded py-2 cursor-pointer font-bold">
                    Login
                </button>
                
                <h1 className="text-center text-sm text-gray-600">
                    Not a User? <span className="text-blue-600 underline cursor-pointer font-medium" onClick={()=>navigate('/signup')}>Sign Up now</span>
                </h1>
            </form>
        </div>
    )
}

export default Login