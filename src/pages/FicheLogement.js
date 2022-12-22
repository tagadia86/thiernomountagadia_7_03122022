
import Carrousel from "../components/Carrousel"
import DescriptionEquipements from "../components/DescriptionEquipements"
import DetailsLogement from "../components/DetailsLogement"
import Footer from "../components/Footer"
import Header from "../components/Header"
import '../styles/fichelogement.css'


function FicheLogement(logement){

   console.log('données')
   console.log(logement.logement.pictures)

    return(
        <div className="fichelogement" >
            <Header/>
            <Carrousel pictures={logement.logement.pictures} />
            <DetailsLogement details={logement} />
            <DescriptionEquipements details={logement} />
            <span className="footer-position">
                <Footer/>
            </span>
        </div>
    )

}
export default FicheLogement