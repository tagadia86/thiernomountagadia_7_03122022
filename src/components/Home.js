import annonces from '../datas/datas.json';
import CardAnnonce from './CardAnnonce';
import '../styles/home.css'
import { Link } from 'react-router-dom';


function Home ({setLogement}){

    function handleClickOnImage({annonce}){
      
        console.log(annonce);
        setLogement(annonce);
        
    }


    return(

        <div className='annonces-wrapper'>
            <ul>
            {
                annonces.map(annonce => (


                    <Link to='/fichelogement' onClick={() => handleClickOnImage({annonce}) } >
                        <li key={annonce.id}> <CardAnnonce annonceTitle={annonce.title} annonceCover={annonce.cover} /> </li>
                    </Link>
                          
                    ) 
                    )
            }
            </ul>
        </div>
    )
}
export default Home

                    

                     