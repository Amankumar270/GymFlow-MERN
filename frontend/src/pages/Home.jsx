import Banner from "../components/Banner"
import Deals from "../components/Deals"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Products from "../components/Products"
import Review from "../components/Review"

function Home(){
    return(
        <div>
            {/* The gym announcement banner at the very top */}
            <Banner/>
            
            {/* 🌟 Home scroll target anchor */}
            <div id="home">
                <Hero/>
            </div>
            
            {/* 🌟 Memberships scroll target anchor */}
            <div id="memberships">
                <Products/>
            </div>
            
            <Deals/>
            
            {/* 🌟 Reviews scroll target anchor */}
            <div id="reviews">
                <Review/>
            </div>
            
            {/* 🌟 Footer / Contact Us scroll target anchor */}
            <div id="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Home;