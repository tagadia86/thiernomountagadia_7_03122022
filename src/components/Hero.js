
import '../styles/hero.css'

function Hero({heroImg}){

    return(
        <div className='hero'>
            <img src={heroImg} alt='hero banner' />
        </div>
    )

}
export default Hero

