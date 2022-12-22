import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/apropos.css'
import AproposHeroImg  from '../assets/Background.png'
import textes from '../datas/Apropos.json'
import AproposComponent from '../components/AproposComponent'
import HeroApropos from '../components/HeroApropos'

function Apropos(){

    return(

        <div className='apropos'>
            <Header/>
            <div className='hero-apropos'>
                <HeroApropos heroImg={AproposHeroImg} />
            </div>
            <div className='text-zones' >
                <AproposComponent details={textes[0].fiabilite} intitule={textes[0].title}/>
                <AproposComponent details={textes[1].respect} intitule={textes[1].title} />
                <AproposComponent details={textes[2].service} intitule={textes[2].title} />
                <AproposComponent details={textes[3].securite} intitule={textes[3].title} />
            </div>
            <span className="footer-position">
            <Footer />
            </span>
            
        </div>
    )

}

export default Apropos