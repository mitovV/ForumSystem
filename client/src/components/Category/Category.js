import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as categoriesService from '../../services/categoriesService'

const Category = ({
    _id,
    pictureUrl,
    name,
}) => {

const [postsCount, setPostsCount] = useState(0)

useEffect(()=> {
    categoriesService
    .getPostsCount(_id)
    .then(setPostsCount)

}, [_id])

    return (
        <div className="col-md-4 media mb-2">
            <img src={pictureUrl} width="200" className="ml-5" alt={name} />
            <div className="media-body">
                <h5 className="mt-0">
                    <Link to={`categories/${_id}`}>
                      {name}({postsCount})
                    </Link>
                </h5>
                {name}
            </div>
        </div>
    )
}

export default Category