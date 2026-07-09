import { useState } from "react";
import { NavLink } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
function Hero(){
    const navigate = useNavigate()
    const [mobileOpen, setMobileOpen] = useState(false);
    return(
        <header className='flex flex-col items-center justify-center relative border-zinc-200 border-b'>
                <nav className="flex flex-col items-center w-full" >
                    <div className="flex items-center justify-between p-4 md:px-24 lg:px-32 xl:px-40 md:py-4 border-b border-zinc-200 w-full">
                        <NavLink to="/" className="font-bold">GymFlow</NavLink>
                        <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:fixed max-md:top-0 max-md:z-50 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-white/25 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-7 text-sm`}>
                            <NavLink to="#" onClick={() => setMobileOpen(false)} className="text-zinc-800 hover:text-zinc-600">Home</NavLink>
                            <NavLink to="/products" onClick={() => setMobileOpen(false)} className="text-zinc-800 hover:text-zinc-600">Memberships</NavLink>
                            <NavLink to="#" onClick={() => setMobileOpen(false)} className="text-zinc-800 hover:text-zinc-600">Pricing</NavLink>

                            <button id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md aspect-square font-medium transition">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                        <button className="hidden md:flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2.5 rounded-sm text-sm transition cursor-pointer group " onClick={()=> navigate('/login')}>
                            Login
                        </button>
                        <button id="open-menu" onClick={() => setMobileOpen(true)} className="md:hidden bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md aspect-square font-medium transition">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                            </svg>
                        </button>
                    </div>
                </nav>

                <div className="absolute top-4.5 left-0 right-0 bottom-0 pointer-events-none flex justify-between px-4 md:px-24 lg:px-32 xl:px-40">
                    <div className="w-px bg-zinc-200"></div>
                    <div className="w-px bg-zinc-200"></div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pl-2.5 pr-4 py-1.5 mt-30 rounded-full border border-zinc-200">
                    <div className="relative flex size-3.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75 animate-ping duration-300"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-zinc-600"></span>
                    </div>
                    <p className="text-sm text-zinc-600">Modern Fitness Management</p>
                </div>

                <h1 className="text-4xl md:text-[40px] text-center font-medium text-zinc-900 max-w-160 mt-5 px-4">
                    Crush Your Goals, Manage Your Grind 
                </h1>
                <p className="text-sm md:text-base text-center max-w-115 mt-3 px-4 text-zinc-500">
                   Flexible Gym Memberships at Best Prices
                </p>

                <div className='flex gap-4 mt-8'>
                    
                    <button className="border border-zinc-200 px-6 text-sm py-2.5 text-black rounded-sm hover:scale-105 transition duration-300 active:scale-100 cursor-pointer mb-31" onClick={()=>{navigate("/products")}}>
                        Explore Memberships
                    </button>
                </div>

                
            </header>
    )
}

export default Hero