import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import '../styles/notfound.css'


function NotFound(){

    return(
        <div className="notfound">
            <Header/>
            <div className="notfoundbody">
                <p>404</p>
                <p>Oups! La page que vous demandez n'éxiste pas.</p>
                <Link to='/' style={{ color: '#FF6060' }}>
                    <p className="retouraccueil">Retourner sur la page d'accueil</p>
                </Link>
            </div>
            <div className="footer-position">
                <Footer/>
            </div>
        </div>
    )

}

export default NotFound