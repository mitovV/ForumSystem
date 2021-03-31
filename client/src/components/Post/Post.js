import { useEffect, useState } from 'react'

import Moment from 'react-moment'
import { FcCalendar } from "react-icons/fc"
import * as postService from '../../services/postsService'

const Post = ({
    match
}) => {
    const [post, setPost] = useState({
        title: '',
        creator: {},
        comments: []
    })

    useEffect(() =>
        postService.getById(match.params.id)
            .then(res => {
                setPost(res)
            })
        , [match.params.id])

    return (
        <>
            <h3>{post.title}</h3>
            <div className="container-fluid mt-100">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-4">
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
                                <div className="px-4 pt-3"> <button type="button" className="btn btn-primary float-right" onClick="showAddCommentForm(0)">Comment</button> </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post