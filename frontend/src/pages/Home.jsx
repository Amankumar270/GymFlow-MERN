import Banner from "../components/Banner"
import Deals from "../components/Deals"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Products from "../components/Products"
import Review from "../components/Review"

function Home(){
    return(
        <div>
            <Banner/>
            <Hero/>
            <Products/>
            <Deals/>
            <Review/>
            <Footer/>
        </div>
    )
}

export default Home