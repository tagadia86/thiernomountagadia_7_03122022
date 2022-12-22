import '../styles/footer.css'
import footerLogo from '../assets/logo_footer.png'

function Footer(){


return(
    <div className='footer' >
        
        <img src={footerLogo} alt='logo du footer' />
        <div>
            <p>&#169;</p>
            <p>2020 Kasa. All rights reserved</p>
        </div>

    </div>

)

    
}
export default Footer