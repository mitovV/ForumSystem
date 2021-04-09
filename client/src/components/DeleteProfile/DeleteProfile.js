import { useContext } from 'react'

import userContext from '../../contexts/userContext'

import * as usersService from '../../services/usersService'

const DeleteProfile = ({
    history
}) => {
    const [user, setUser] = useContext(userContext)

    const onDeleteButtonHandler = () => {
        usersService.deleteProfile(user._id, user.token)
        .then( res => {
            setUser(null)
            history.push('/')
        })
    }

    return (
        <div className="row justify-content-center">
            <div className="col col-md-5">
                <h2 className="text-danger ">This will permanently remove your account, and this cannot be recovered!</h2>
                <button className="btn btn-danger" onClick={onDeleteButtonHandler}>Confirm</button>
            </div>
        </div>
    )
}

export default DeleteProfile