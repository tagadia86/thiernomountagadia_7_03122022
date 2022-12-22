import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import '../styles/carrousel.css'

function Carrousel({pictures}){
    const[count, setCount] = useState(0)



    return(

        <div className="carrousel">
            <i class="fas fa-chevron-right"  onClick={() => count==pictures.length-1? setCount(0) : setCount(count+1)}></i>

            <i class="fas fa-chevron-left"   onClick={() => count <= 0 ? setCount(pictures.length-1) : setCount(count-1)}></i>
            
            <img src={pictures[count]} />
            <p>{count+1}/{pictures.length}</p>
            
        </div>
    )

}


export default Carrousel

