import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FaUserCircle, } from 'react-icons/fa'
import { FcCalendar } from 'react-icons/fc'

import Moment from 'react-moment'
import sanitizedHTML from 'sanitize-html'
import Comments from './Comments'

import * as categoriesService from '../../services/categoriesService'
import * as postsService from '../../services/postsService'

import './Posts.css'

const Posts = ({
    match
}) => {
    const regex = new RegExp('<[^>]+>','gm')
    
    const [category, setCategory] = useState({ })
    const [posts, setPosts] = useState([])

    useEffect(() =>
        categoriesService.getOne(match.params.id)
            .then(res => {
                setCategory(res)
                postsService.getAllByCategoryId(match.params.id)
                .then(setPosts)
            })
            .catch(console.log)
        , [match.params.id])

    return (
        <>
            <h1 className="text-primary">{category.name}</h1>
            {posts.length === 0 
            ? <h2 className="text-info"> Тhere are no posts yet!</h2> 
            : posts.map(x =>
                <div key={x._id} className="media-body mr-2 post-wrapper text-white">
                    <h4 className="media-heading"><Link to={`/posts/${x._id}`} className="text-white">{x.title}</Link></h4>
                    <p dangerouslySetInnerHTML={{
                        __html: `${sanitizedHTML(x.content).replace(regex, '').slice(0, 100)}...`
                    }}></p>
                    <ul className="list-inline list-unstyled text-right">
                        <li className="list-inline-item">
                            <FaUserCircle className="mr-1" />{x.creator.username}
                        </li>
                        <li className="list-inline-item">
                            <FcCalendar /><Moment local format="YYYY/MM/DD H:MM">{x.createdOn}</Moment>
                        </li>
                        < Comments postId={x._id} />
                    </ul>
                </div>
            )}
        </>
    )
}

export default Posts