import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()
    return(
         <div className="h-100 flex  flex-col justify-center items-center gap-10  w-auto m-10">
            <form className=" h-auto flex flex-col gap-5 shadow-2xl w-auto p-10">
            <h1 className="text-center font-bold">Login</h1>

                <div className="shadow w-70">
                    <input type="text" placeholder="Enter User Name" className="w-70 p-2"  />
                </div>


                <div className="shadow">
                    <input type="password" placeholder="Enter Password " className="w-70 p-2"/>
                </div>
                <button type="submit" className="bg-gray-800 text-white rounded py-2 cursor-pointer">Login</button>
                <h1 className="text-center">Not a User? <span className="text-blue-600 underline cursor-pointer" onClick={()=>navigate('/signup')}>Sign Up now</span></h1>

            </form>
            
        </div>
    )
}

export default Login