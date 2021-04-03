import Moment from 'react-moment'
import { FcCalendar } from "react-icons/fc"
import PostDetails from '../PostDetails'

const Card = ({ post, showAddCommentForm }) => {
    return (
        <div className="container-fluid mt-100">
            <div className="row">
                <div className="col-md-12"></div>
                <div className="card mb-4"></div>
                <div className="card-header">
                    <div className="media flex-wrap w-100 align-items-center">
                        <img src={post.creator.pictureUrl} width="50" className="d-block ui-w-40 rounded-circle" alt="user" />
                        <div className="ml-3">
                            {post.creator.username}
                        </div>
                        <div className="media-body text-right">
                            <FcCalendar /><Moment local format="YYYY/MM/DD H:MM">{post.createdOn}</Moment>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <article>
                        {post.content}
                    </article>
                    <div className="px-4 pt-3"> <button type="button" className="btn btn-primary float-right" onClick={showAddCommentForm}>Comment</button> </div>
                    <div className="clearfix"></div>
                </div>
                {post.comments.length > 0 ? <PostDetails post={post.comments} showAddCommentForm={showAddCommentForm}/> : null}
            </div>
        </div>
    )
}

export default Card