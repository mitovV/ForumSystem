import { Link } from 'react-router-dom'

const Category = ({
    _id,
    pictureUrl,
    name,
    posts
}) => {
    return (
        <div className="col-md-4 media">
            <img src={pictureUrl} width="200" className="ml-5" alt={name} />
            <div className="media-body">
                <h5 className="mt-0">
                    <Link to={`categories/${_id}`}>
                      {name}({posts.length})
                    </Link>
                </h5>
                {name}
            </div>
        </div>
    )
}

export default Category