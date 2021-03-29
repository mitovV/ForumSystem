import { useEffect, useState } from 'react'
import * as categoriesService from '../../services/categoriesService'

const Post = ({
    match
}) => {
    const [category, setCategory] = useState({})

    useEffect(() => 
        categoriesService.getOne(match.params.id)
        .then(res => res.json())
        .then(res => setCategory(res))
    )
console.log(category);
    return(
        <>
            <h1>{category.name}</h1>
              {category.posts.map(x => <div>x</div>)}
        </>
    )
}

export default Post