import Star from '../assets/star.svg'
import StarGrey from '../assets/star-grey.svg'
import '../styles/star.css'

function Stars({note}){

    function createArray(l){
        const arrayStars = [l]
        for (let index = 0; index < l; index++) { /*[1,2,3,4,5]*/
            arrayStars[index] = index+1;
            console.log(arrayStars);
        }
       
        return arrayStars
    }

    
       
        return  note == 5 ? (        
            <div>
                {createArray(note).map(star => <span key={star}> <img src={Star} /> </span> )} 
                {/*<FontAwesomeIcon icon = "fa-regular fa-star"/> */}
            </div>)

                :
        (
            <div>
            {createArray(note).map(star => <span key={star}> <img src={Star} /> </span> )}
            {createArray(5-note).map(star => <span key={star}> <img src={StarGrey} /> </span> )}
        </div>
        )



}

export default Stars