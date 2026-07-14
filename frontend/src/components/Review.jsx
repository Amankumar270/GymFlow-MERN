function Review () {
    return (
        <>
            {/* Header section updated with responsive text bounds */}
            <div className="mt-16 px-4">
                <p className="text-3xl font-bold text-center text-gray-800">Customer Reviews</p>
                <p className="text-lg text-gray-500 text-center mt-2 max-w-xl mx-auto">
                    See what our active members say about their experience with GymFlow.
                </p>
            </div>

            {/* 
              🛠️ RESPONSIVE CONTAINER FIXED:
              - Changed flex to a dynamic responsive grid layout.
              - Replaced hardcoded left margins with clean mx-auto center alignment + horizontal padding.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto px-6 mb-16 justify-items-center">
                
                {/* Review Card 1 */}
                <div className="w-full max-w-sm flex flex-col items-center border border-gray-200 p-6 sm:p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <img className="h-20 w-20 rounded-full object-cover border-2 border-orange-500" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="userImage1" />
                    <h2 className="text-xl text-gray-900 font-semibold mt-3">Rohan Sharma</h2>
                    <div className="flex items-center justify-center mt-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
                            </svg>
                        ))}
                    </div>
                    <p className="text-center text-[14px] leading-relaxed mt-4 text-gray-500">
                        I was super skeptical about joining a new gym management portal online, but GymFlow completely blew me away. Booking sessions and tracking my membership status is incredibly smooth. The UI looks absolutely premium—not a single complicated layout. The check-in feature via my dashboard works perfectly on every single visit.
                    </p>
                </div>
        
                {/* Review Card 2 */}
                <div className="w-full max-w-sm flex flex-col items-center border border-gray-200 p-6 sm:p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <img className="h-20 w-20 rounded-full object-cover border-2 border-orange-500" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="userImage2" />
                    <h2 className="text-xl text-gray-900 font-semibold mt-3">Amit Verma</h2>
                    <div className="flex items-center justify-center mt-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
                            </svg>
                        ))}
                    </div>
                    <p className="text-center text-[14px] leading-relaxed mt-4 text-gray-500">
                        Signed up for the GymFlow Plus Tier in 'Active' status. There are so many advanced features included like custom trainer allocations, but once you navigate the portal for a day, you find it's very easy to use. The tracking metric dashboard is perfect, and the payment processing is lightning fast. Highly recommend if you want hassle-free workouts.
                    </p>
                </div>
            
                {/* Review Card 3 */}
                <div className="w-full max-w-sm flex flex-col items-center border border-gray-200 p-6 sm:p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <img className="h-20 w-20 rounded-full object-cover border-2 border-orange-500" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop" alt="userImage3" />
                    <h2 className="text-xl text-gray-900 font-semibold mt-3">Priya Patel</h2>
                    <div className="flex items-center justify-center mt-2 gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z" fill="#FF532E"/>
                            </svg>
                        ))}
                    </div>
                    <p className="text-center text-[14px] leading-relaxed mt-4 text-gray-500">
                        Got an annual VIP Executive package for my dad. It came neatly activated on his user profile with a premium digital welcome kit and free personal training vouchers. The portal functions perfectly, membership updates are crystal clear, and the customer support is fantastic. Great initiative to streamline fitness management!!
                    </p>
                </div>
            </div>
        </>
    )
}

export default Review;