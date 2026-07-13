import { assets } from "../assets/assets"

function Navbar(){
    return (
        <nav className="flex items-center justify-between shadow-md px-6 py-4">
            <div className="text-xl font-bold text-gray-800">Admin Panel for GymFlow</div>
            <div><img className="w-15 h-15 border-2 border-gray-800  rounded-full" src={assets.admin_image} alt="Admin Image  " /></div>
        </nav>
    )
}

export default Navbar