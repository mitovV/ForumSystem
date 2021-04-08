import { useContext, useEffect, useState } from 'react'

import userContext from '../../contexts/userContext'

import InputError from '../Shared/InputError'

import * as usersService from '../../services/usersService'

const UserDetails = () => {
    const [user] = useContext(userContext)
    const [userDetails, setUserDetails] = useState({})
    const [usernameMessage, setUsernameMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('')

    useEffect(() => {
        usersService
        .getByUsername(user.username)
        .then(setUserDetails)
    }, [])

    const onUsernameBlurHandler = (e) => {
        let username = e.target.value

        usersService.getByUsername(username).then(res => {            
            if (username.length < 2) {
                setUsernameMessage('Username must contain at least 2 characters.')
            }
            else if (res.length > 0){
                setUsernameMessage('Username already exists.')
            }
            else {
                setUsernameMessage('')
            }
        })
    }
    
    const onFormSubmitHandler = (e) =>  {
        e.preventDefault()
        let username = e.target.username.value
        let imageUrl = e.target.imageUrl.value

        console.log(username);
        console.log(imageUrl);
    }

    const onPasswordBlurHandler = (e) => {
        if (e.target.value.length < 5) {
            setPasswordMessage('Password must contain at least 5 characters.')
        }
        else {
            setPasswordMessage('')
        }
    }

    const onConfirmPasswordBlurHandler = (e) => {
        if (e.target.value.length < 5) {
            setConfirmPasswordMessage('Passwords mismatch')
        }
        else {
            setConfirmPasswordMessage('')
        }
    }

    return (
        <>
            <h4 className="center text-primary">Profile</h4>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <img className="responsive-img" src={userDetails.pictureUrl} width="300" alt="User" />
                    <form onSubmit={onFormSubmitHandler}>
                        <div className="input-field mt-2">
                            <label htmlFor="username">Usename</label>
                            <input id="username" name="usename" className="form-control" defaultValue={userDetails.username} onBlur={onUsernameBlurHandler}/>
                            <InputError>{usernameMessage}</InputError>
                        </div>
                        <div className="input-field">
                            <label htmlFor="imageUrl">Imgage URL</label>
                            <input id="imageUrl" name="imageUrl" className="form-control" defaultValue={userDetails.pictureUrl} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control" onBlur={onPasswordBlurHandler} />
                            <InputError>{passwordMessage}</InputError>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" onBlur={onConfirmPasswordBlurHandler}/>
                            <InputError>{confirmPasswordMessage}</InputError>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-info mt-2">Save</button>
                            <button type="button" className="btn btn-danger mt-2 ml-2">Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default UserDetails