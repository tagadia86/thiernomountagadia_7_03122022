import Description from "./Description"
import '../styles/description-equipement.css'
import Equipments from "./Equipments"


function DescriptionEquipements({details}){



    return(
        <div className="description-equipement" >
            <Description details={details} />
            <Equipments details={details} />
        </div>

    )

}

export default DescriptionEquipements