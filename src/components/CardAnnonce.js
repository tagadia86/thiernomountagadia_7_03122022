import '../styles/cardannonce.css'


function CardAnnonce({annonceTitle, annonceCover}){

    return(
            <div className="annonce" >
                <img src={annonceCover} alt={annonceTitle} />
                <p>{annonceTitle}</p>
            </div>
    )
}

export default CardAnnonce