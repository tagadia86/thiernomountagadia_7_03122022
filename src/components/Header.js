import '../styles/header.css'
import logo from '../assets/LOGO.png'
import { Link } from 'react-router-dom'

function Header(){

    return(
        <div className='header-wrapper' >
            <Link to='/' >
                <img  src={logo} alt="logo du site" />
            </Link>
            
            <div>
                <Link to='/' className='navlink'>
                    <a className='accueil-titles'>Accueil</a>
                </Link>

                <Link to='/a-propos' className='navlink marge-gauche'>
                    <a className='accueil-titles'>A propos</a>
                </Link>
                
            </div>
        </div>
    )

}

export default Header