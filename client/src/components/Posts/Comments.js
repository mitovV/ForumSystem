import { useState, useEffect } from 'react'
import { FcComments } from 'react-icons/fc'

import * as postsService from '../../services/postsService'
const Comments = ({postId}) => {
    const[length, setLength] = useState()

    useEffect(() => {
        postsService.getCommentsCount(postId)
        .then(setLength)
        .catch(console.log)

    }, [postId])
  return (
       <li className="list-inline-item">
    <FcComments /> {length} comments
</li>)
}

export default Comments