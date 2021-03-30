import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import * as categoriesService from '../../services/categoriesService'

import { FaUserCircle, } from 'react-icons/fa'
import { FcComments, FcCalendar } from "react-icons/fc"
import Moment from 'react-moment';

const Post = ({
    match
}) => {
    const [category, setCategory] = useState({ posts: [] })

    useEffect(() =>
        categoriesService.getOne(match.params.id)
            .then(res => {
                setCategory(res)
            })
        , [match.params.id])

    return (
        <>
            <h1 className="text-primary">{category.name}</h1>
            {category.posts.length === 0 ? <h2 className="text-info"> Тhere are no posts yet!</h2> : category.posts.map(x =>
                <div key={x._id} className="media-body ml-2">
                    <h4 className="media-heading"><Link to={`/posts/${x._id}`} className="text-dark">{x.title}</Link></h4>
                    <p>{`${x.content.slice(0 ,100)}...` }</p>
                    <ul className="list-inline list-unstyled text-right">
                        <li className="list-inline-item">
                        <FaUserCircle/>{x.creator.username}
            </li>
                        <li className="list-inline-item">
                            <FcCalendar/><Moment local format="YYYY/MM/DD H:MM">{x.createdOn}</Moment>
            </li>
                        <li className="list-inline-item">
                            <FcComments /> {x.comments.length} comments
            </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Post