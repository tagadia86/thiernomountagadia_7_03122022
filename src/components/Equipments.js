import { useState } from 'react'
import '../styles/equipments.css'

function Equipments({details}){

    const [frameClosed, setFrameClosed] = useState(true)

    function openDescription(){
        setFrameClosed(false)
    }
    function closeDescription(){
        setFrameClosed(true)
    }

    return frameClosed ? 
    (   
        <div className='title-button1' onClick={ () => openDescription() }>
            <p className='description__title1'> Équipements </p>
            <i class="fas fa-sharp fa-solid fa-chevron-down" ></i>
        </div>
        
    )
        :

        (   
            <div className="description1" onClick={ () => closeDescription() }>
                <div className='title-button1' >
                    <p className='description__title1'> Équipements </p>
                    <i class="fas fa-sharp fa-solid fa-chevron-up" ></i>
                </div>
                <ul className='equipments-list' >
                    {
                        details.logement.equipments.map( (equipment,index) => (<li key={`${index}-${equipment}`} > {details.logement.equipments[index]} </li>))
                    }
                </ul>
            </div>
        )

}

export default Equipments