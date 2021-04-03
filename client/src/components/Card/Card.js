import { useEffect, useState } from 'react'

import Moment from 'react-moment'
import { FcCalendar } from "react-icons/fc"

import * as commentsService from '../../services/commentsService'
import PostDetails from '../PostDetails'

const Card = ({ post, showAddCommentForm }) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        if(!post || !post._id){
            return 
        }
        if(!post.post){
            commentsService.getCommentsByParentAndPostId(post._id)
            .then(res => {
                setComments(res)
            })
        }
        else{
            commentsService.getCommentsByParentAndPostId(post.post, post._id)
            .then(setComments)
        }

    },[post])
    return (
        <div className="container-fluid mt-100">
        <div className="row">
            <div className="col-md-12">
                <div className="card mb-4 mt-2">
                    <div className="card-header">
                        <div className="media flex-wrap w-100 align-items-center">
                            <img src={post.creator.pictureUrl} width="50" className="d-block ui-w-40 rounded-circle" alt="user"/>
                            <div className="media-body ml-3">
                                   {post.creator.username}
                                <div className="text-muted small">
                                    <FcCalendar /><Moment local format="YYYY/MM/DD H:MM">{post.createdOn}</Moment>
                                </div>
                            </div>
                            <div className="text-muted small ml-3">
                                 {/* @if (this.User.Identity.IsAuthenticated) 
                                 {  */}
                                    <div className="px-4 pt-3"> <button type="button" className="btn btn-primary float-right" onClick={showAddCommentForm}>Answer</button> </div>
                                {/* } */}
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <article>
                             {post.content}
                        </article>
                         {<PostDetails comments={comments} showAddCommentForm={showAddCommentForm}/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card