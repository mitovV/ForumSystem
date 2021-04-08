import { useEffect, useState, useContext } from 'react'
import Moment from 'react-moment'
import { FcCalendar } from 'react-icons/fc'

import sanitizedHTML from 'sanitize-html'

import userContext from '../../contexts/userContext'

import * as commentsService from '../../services/commentsService'
import PostDetails from '../PostDetails'
import { Link } from 'react-router-dom'

const Card = ({ post, showAddCommentForm }) => {
    const [comments, setComments] = useState([])
    const [user] = useContext(userContext)

    useEffect(() => {
        if (!post || !post._id) {
            return
        }
        if (!post.post) {
            commentsService.getCommentsByParentAndPostId(post._id)
                .then(res => {
                    setComments(res)
                })
        }
        else {
            commentsService.getCommentsByParentAndPostId(post.post, post._id)
                .then(setComments)
        }

    }, [post])
    return (
        <div className="container-fluid mt-100">
            <div className="row">
                <div className="col-md-12">
                    <div className="card mb-4 mt-2">
                        <div className="card-header">
                            <div className="media flex-wrap w-100 align-items-center">
                                <img src={post.creator.pictureUrl} width="40" className="d-block ui-w-40 rounded-circle" alt="user" />
                                <div className="media-body ml-3">
                                    {post.creator.username}
                                    <div className="text-muted small">
                                        <FcCalendar /><Moment local format="YYYY/MM/DD H:MM">{post.createdOn}</Moment>
                                    </div>
                                </div>
                                {!user ?
                                    ''
                                    : user._id === post.creator._id
                                        ?
                                        <div className="text-muted small ml-3">
                                            <div className="px-4 pt-3">
                                                <Link to={`/posts/${post._id}/delete`} type="button" className="btn btn-danger float-right ml-1">
                                                    Delete
                                                </Link>
                                                <Link to={`/posts/${post._id}/edit`} type="button" className="btn btn-warning float-right">
                                                    Edit
                                                </Link>
                                            </div>
                                        </div>
                                        : <div className="text-muted small ml-3">
                                            <div className="px-4 pt-3"> <button type="button" className="btn btn-primary float-right" onClick={() => showAddCommentForm(post._id)}>Answer</button> </div>
                                        </div>

                                }

                            </div>
                        </div>
                        <div className="card-body">
                            <article dangerouslySetInnerHTML={{
                                __html: sanitizedHTML(post.content, {
                                    allowedAttributes: {
                                        span: ["style"],
                                        a: ['href', 'data-*'],
                                        img: ['class', 'title', 'src']
                                    },
                                    allowedTags: [ 'img', 'p', 'span', 'div','address', 'article', 'aside', 'footer', 'header', 'h1', 'h2', 'h3', 'h4',
                                    'h5', 'h6', 'hgroup', 'main', 'nav', 'section', 'blockquote', 'dd',
                                    'dl', 'dt', 'figcaption', 'figure', 'hr', 'li', 'main', 'ol', 'p', 'pre',
                                    'ul', 'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'code', 'data', 'dfn',
                                    'em', 'i', 'kbd', 'mark', 'q', 'rb', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp',
                                    'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr', 'caption',
                                    'col', 'colgroup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr'],
                                })
                            }}>
                            </article>
                            {<PostDetails comments={comments} showAddCommentForm={showAddCommentForm} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card