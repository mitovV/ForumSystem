import { Link } from 'react-router-dom'

const Category = (props) => {
    return (
        <div className="col-md-4 media">
            <img src={props.imageUrl} width="200" className="ml-5" alt={props.name} />
            <div className="media-body">
                <h5 className="mt-0">
                    <Link to={`categories/${props.id}`}>
                      {props.name}({props.posts.length})
                    </Link>
                </h5>
                {props.name}
            </div>
        </div>
    )
}

export default Category