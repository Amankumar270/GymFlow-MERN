import { useNavigate } from "react-router-dom";

function Hero(){
    const navigate = useNavigate();

    return(
        <header className='flex flex-col items-center justify-center relative border-zinc-200 border-b bg-white w-full'>
                
                {/* Visual grid guide lines background accent */}
                <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none flex justify-between px-4 md:px-24 lg:px-32 xl:px-40">
                    <div className="w-px bg-zinc-200/60"></div>
                    <div className="w-px bg-zinc-200/60"></div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 pl-2.5 pr-4 py-1.5 mt-24 rounded-full border border-zinc-200 z-10">
                    <div className="relative flex size-3.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75 animate-ping duration-300"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-zinc-600"></span>
                    </div>
                    <p className="text-sm text-zinc-600">Modern Fitness Management</p>
                </div>

                <h1 className="text-4xl md:text-[50px] text-center font-black text-zinc-900 max-w-2xl mt-6 px-4 leading-tight z-10">
                    Crush Your Goals, Manage Your Grind 
                </h1>
                <p className="text-sm md:text-base text-center max-w-md mt-4 px-4 text-zinc-500 z-10">
                    Flexible Gym Memberships at Best Prices
                </p>

                <div className='flex gap-4 mt-8 mb-24 z-10'>
                    <button className="border border-zinc-300 bg-zinc-900 text-white font-semibold px-8 text-sm py-3 rounded-xl hover:bg-zinc-800 transition duration-300 shadow-md cursor-pointer" onClick={()=>{navigate("/products")}}>
                        Explore Memberships
                    </button>
                </div>
            </header>
    )
}

export default Hero;