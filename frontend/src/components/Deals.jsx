function Deals () {
    return (
        /* 
          Change: Changed rigid w-6xl to max-w-6xl + w-11/12 so it shrinks elegantly.
          Change: Scaled padding dynamically (p-6 on mobile, p-10 on larger screens).
        */
        <div className="max-w-6xl w-11/12 mt-12 bg-gray-200 p-6 md:p-10 mx-auto text-center rounded-2xl">   
            {/* Change: Set text base to 2xl/3xl scaling dynamically up to 4xl */}
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl my-2 text-gray-800">
                Today's Deal
            </h2>
            
            {/* Change: Fixed text overflow by scaling from 3xl on mobile up to 6xl on desktop */}
            <p className="font-bold text-3xl sm:text-4xl md:text-6xl my-4 text-red-600 tracking-tight leading-tight">
                Up to 30% Off on Annual Pass
            </p>
            
            {/* Change: Scaled description text cleanly */}
            <p className="font-medium text-base sm:text-lg md:text-xl my-2 text-gray-600 max-w-2xl mx-auto">
                Lock in your fitness goals with our best yearly subscription rates.
            </p>
        </div>  
    )
}

export default Deals;