import { useState } from 'react'
import '../styles/description.css'

function Description({details}){

    const [frameClosed, setFrameClosed] = useState(true)

    function openDescription(){
        setFrameClosed(false)
    }
    function closeDescription(){
        setFrameClosed(true)
    }


    return frameClosed ? 
        (   
            <div className='title-button' onClick={ () => openDescription() }>
                <p className='description__title'> Description </p>
                <i class="fas fa-sharp fa-solid fa-chevron-down" ></i>
            </div>
            
        )
        :

        (   
            <div className="description" onClick={ () => closeDescription() }>
                <div className='title-button' >
                    <p className='description__title'> Description </p>
                    <i class="fas fa-sharp fa-solid fa-chevron-up" ></i>
                </div>
                <p className='description-text' >{details.logement.description}</p>
            </div>
        )

}

export default Description