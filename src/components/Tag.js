import '../styles/tag.css'

function Tag({tags}){


    

    return(
        <div className='tag-div'>
            <ul>
                {
                    tags.map (({tag},index) => (<li key={`${tag}-${index}`} className="tag" > {tags[index]} </li>) )
                }
            </ul>
        </div>
    )
}

export default Tag