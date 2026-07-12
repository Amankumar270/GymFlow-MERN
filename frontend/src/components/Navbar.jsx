import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const isLoggedIn = localStorage.getItem("token");

    // 🌟 Smart Smooth Scroll Logic across multiple routes
    const handleScroll = (elementId) => {
        setMobileOpen(false);

        // If the user is currently somewhere else (like the Dashboard or Login pages)
        if (location.pathname !== "/") {
            navigate("/"); // Route them back to the homepage first
            setTimeout(() => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 150); // Small delay to guarantee components are completely mounted
        } else {
            // If already on the main landing page, scroll instantly
            const element = document.getElementById(elementId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav className="flex flex-col items-center w-full bg-white border-b border-zinc-200 sticky top-0 z-50">
            <div className="flex items-center justify-between p-4 md:px-24 lg:px-32 xl:px-40 md:py-4 w-full">
                {/* Clicking the GymFlow brand name scrolls cleanly to the top */}
                <span onClick={() => handleScroll("home")} className="font-bold text-zinc-900 text-lg cursor-pointer">GymFlow</span>
                
                <div id="menu" className={`${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'} max-md:fixed max-md:top-0 max-md:z-50 max-md:left-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-screen max-md:bg-white/95 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-7 text-sm font-medium`}>
                    
                    {/* 🌟 Scroll Navigation Triggers */}
                    <button onClick={() => handleScroll("home")} className="text-zinc-800 hover:text-zinc-600 cursor-pointer bg-transparent border-none font-medium text-sm">
                        Home
                    </button>
                    <button onClick={() => handleScroll("memberships")} className="text-zinc-800 hover:text-zinc-600 cursor-pointer bg-transparent border-none font-medium text-sm">
                        Memberships
                    </button>
                    <button onClick={() => handleScroll("reviews")} className="text-zinc-800 hover:text-zinc-600 cursor-pointer bg-transparent border-none font-medium text-sm">
                        Reviews
                    </button>
                    <button onClick={() => handleScroll("footer")} className="text-zinc-800 hover:text-zinc-600 cursor-pointer bg-transparent border-none font-medium text-sm">
                        Contact Us
                    </button>

                    {isLoggedIn ? (
                        <span onClick={() => { setMobileOpen(false); navigate('/dashboard'); }} className="md:hidden text-indigo-600 font-bold cursor-pointer">Dashboard</span>
                    ) : (
                        <span onClick={() => { setMobileOpen(false); navigate('/login'); }} className="md:hidden text-zinc-800 hover:text-zinc-600 cursor-pointer">Login</span>
                    )}

                    <button id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-zinc-900 text-white p-2 rounded-md aspect-square">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                        </svg>
                    </button>
                </div>

                {isLoggedIn ? (
                    <button className="hidden md:flex items-center bg-black hover:bg-gray-700 text-white px-6 py-2 rounded-sm text-sm transition cursor-pointer font-semibold" onClick={()=> navigate('/dashboard')}>
                        Dashboard
                    </button>
                ) : (
                    <button className="hidden md:flex items-center bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2 rounded-sm text-sm transition cursor-pointer" onClick={()=> navigate('/login')}>
                        Login
                    </button>
                )}

                <button id="open-menu" onClick={() => setMobileOpen(true)} className="md:hidden bg-zinc-900 text-white p-2 rounded-md aspect-square">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;