import "../styles/homepage.css"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Home from "../components/Home"
import homeHeroImg from '../assets/hero.png'

function HomePage({setLogement}){
    
    return(
        <div className="homepage">
            <Header/>
            <Hero heroImg={homeHeroImg} />
            <div className="hero-margin1">
                <Home setLogement={setLogement} />
            </div>
            <Footer/>
        </div>
    )

}
export default HomePage

