import { Navigate, useNavigate } from "react-router-dom"

function Signup(){
    const navigate = useNavigate();
    return(
        <div className="h-100 flex  flex-col justify-center items-center gap-10  w-auto m-10">
            <form className=" h-auto flex flex-col gap-5 shadow-2xl w-auto p-10">
            <h1 className="text-center font-bold">Sign Up</h1>

                <div className="shadow w-70">
                    {/* <label htmlFor="">Username:</label> */}
                    <input type="text" placeholder="Enter User Name" className="w-70 p-2"  />
                </div>

                <div className="shadow">
                    {/* <label htmlFor="">Email:</label> */}
                    <input type="email" placeholder="Enter email " className="w-70 p-2" />
                </div>

                <div className="shadow">
                    {/* <label htmlFor="">Passwprd:</label> */}
                    <input type="password" placeholder="Enter Password " className="w-70 p-2"/>
                </div>
                <button type="submit" className="bg-gray-800 text-white rounded py-2 cursor-pointer">SignUp</button>
                <h1 className="text-center">Already a User? <span className="text-blue-600 underline cursor-pointer" onClick={()=>navigate('/login')}>Login</span></h1>
                
            </form>
            
        </div>
    )
}

export default Signup