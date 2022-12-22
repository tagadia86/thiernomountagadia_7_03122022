import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/detailslogement.css'
import Stars from './Stars'
import Tag from './Tag';


function DetailsLogement({details}){

    var firstAndLastName = [2] ;
    firstAndLastName = details.logement.host.name.split(' ');
    return(
        <div className="detailslogement" >
            <div>
                <div>
                    <h1>{details.logement.title}</h1>
                    <p className='location' >{details.logement.location}</p>
                </div>
                <Tag tags={details.logement.tags} />
            </div>


            <div >
                <div className='host-details' >
                    <div>
                        <span> {firstAndLastName[0]} </span> 
                        <span>{firstAndLastName[1]}</span>
                        
                    </div>
                   <img src={details.logement.host.picture} />
                   
                </div>
                <Stars note={details.logement.rating} />
            </div>

        </div>
    )

}
export default DetailsLogement