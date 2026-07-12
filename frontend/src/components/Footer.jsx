import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    // 🌟 Coming Soon Alert Trigger
    const handleComingSoon = (e, featureName) => {
        if (e) e.preventDefault();
        alert(`🚧 ${featureName} feature is coming soon! Stay tuned.`);
    };

    return (
        <>
            <footer className='flex flex-col justify-end bg-black pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full mt-12'>
                <div className='w-full max-w-7xl mx-auto'>
                    <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">

                        {/* Brand Description */}
                        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col items-start text-left">
                            <p className="text-white font-bold text-xl">GymFlow</p>
                            <div className='w-full max-w-52 h-0.5 mt-8 bg-linear-to-r from-[#24212D] to-[#24212D]/0'></div>
                            <p className='text-sm text-white/60 mt-6 max-w-[350px] leading-relaxed'>
                                GymFlow is a growing management portal of premium, flexible fitness memberships. Every subscription tier undergoes an optimization check to deliver production-ready, high-performance training features straight to your member profile at unbeatable prices.
                            </p>
                        </div>

                        {/* 🌟 Social Links with Coming Soon Alerts */}
                        <div className="w-[45%] md:w-[45%] lg:w-[25%] flex flex-col items-start text-left">
                            <h3 className='text-sm text-white font-medium'>Social Links</h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <a href="#" onClick={(e) => handleComingSoon(e, "Twitter")} className='text-sm text-white/60 hover:text-white transition-colors'>Twitter</a>
                                <a href="#" onClick={(e) => handleComingSoon(e, "Instagram")} className='text-sm text-white/60 hover:text-white transition-colors'>Instagram</a>
                                <a href="#" onClick={(e) => handleComingSoon(e, "YouTube")} className='text-sm text-white/60 hover:text-white transition-colors'>Youtube</a>
                                <a href="#" onClick={(e) => handleComingSoon(e, "LinkedIn")} className='text-sm text-white/60 hover:text-white transition-colors'>Linkedin</a>
                            </div>
                        </div>

                        {/* 🌟 Subscribe with Coming Soon Form Handler */}
                        <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col items-start text-left mt-4 md:mt-0">
                            <h3 className='text-sm text-white font-medium'>Subscribe for news</h3>
                            <form 
                                onSubmit={(e) => handleComingSoon(e, "Newsletter Subscription")} 
                                className="flex items-center border gap-2 border-white/20 h-13 max-w-80 w-full rounded-full overflow-hidden mt-4"
                            >
                                <input 
                                    type="email" 
                                    placeholder="Enter your email.." 
                                    className="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-white/60 placeholder:text-xs" 
                                    required 
                                />
                                <button 
                                    type="submit" 
                                    className="bg-linear-to-b from-[#5623D8] to-[#7B53E2] hover:opacity-90 active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1.5 focus:outline-none"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                    </div>

                    <div className='w-full h-0.5 mt-16 mb-4 bg-linear-to-r from-[#24212D]/0 via-[#24212D] to-[#24212D]/0'></div>

                    {/* Bottom Utility Bar */}
                    <div className="flex flex-wrap sm:flex-row items-center justify-between gap-y-4 gap-x-2 relative z-10">
                        <p className='text-xs text-white/60'>© 2026 GymFlow</p>
                        <div className="flex items-center gap-6 text-right">
                            <a href='#' onClick={(e) => handleComingSoon(e, "Terms & Conditions")} className='text-xs text-white/60 hover:text-white transition-colors'>Terms & Conditions</a>
                            <div className='w-px h-4 bg-white/20'></div>
                            <a href='#' onClick={(e) => handleComingSoon(e, "Privacy Policy")} className='text-xs text-white/60 hover:text-white transition-colors'>Privacy Policy</a>
                        </div>
                    </div>

                    {/* Aesthetic Branding Footer Accent */}
                    <div className="w-full flex justify-center mt-6 md:mt-12 md:mb-[-0.5%]">
                        <h1 className="text-center font-extrabold tracking-tighter leading-[0.70] text-zinc-900 text-[clamp(4.5rem,19.5vw,25rem)] pointer-events-none select-none">
                            GymFlow
                        </h1>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;