import { useState } from 'react'
import '../styles/aproposcomponents.css'




function AproposComponent({details, intitule}){

    const [frameClosed, setFrameClosed] = useState(true)

    function openDescription(){
        setFrameClosed(false)
    }

    function closeDescription(){
        setFrameClosed(true)
    }

    return frameClosed ? 
    (   
        <div className='title-button2' onClick={ () => openDescription() }>
            <p > {intitule} </p>
            <i class="fas fa-sharp fa-solid fa-chevron-down" ></i>
        </div>
        
    )
    :

    (   
        <div className="description2" onClick={ () => closeDescription() }>
            <div className='title-button2' >
                <p > {intitule} </p>
                <i class="fas fa-sharp fa-solid fa-chevron-up" ></i>
            </div>
            <p className='description-text2' >{details}</p>
        </div>
    )

    /*return frameClosed ? 
        (   
            <div className='title-button2' >
                <p > {intitule} </p>
                <i class="fas fa-sharp fa-solid fa-chevron-down" onClick={ () => openDescription() }></i>
            </div>
            
        )
        :
        (   
            <div className="description2">
                <div className='title-button2' >
                    <p > {intitule} </p>
                    <i class="fas fa-sharp fa-solid fa-chevron-up"  onClick={ () => closeDescription() } ></i>
                </div>
                <p className='description-text2' >{details}</p>
            </div>
        )*/
    
}

export default AproposComponent