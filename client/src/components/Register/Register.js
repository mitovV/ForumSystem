import { useState } from 'react'
import InputError from '../Shared/InputError'

import * as authService from '../../services/authService'

const Register = ({
    history
}) => {
    const [usernameMessage, setUsernameMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('')

    const onUsernameBlurHandler = (e) => {
        if (e.target.value.length < 2) {
            setUsernameMessage('Username must contain at least 2 characters.')
        }
        else {
            setUsernameMessage('')
        }
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

    const onRegisterSubmitFromHandler = (e) => {
        e.preventDefault()

        let username = e.target.username.value
        let imageUrl = e.target.imageUrl.value
        let password = e.target.password.value
        let confirmPassword = e.target.confirmPassword.value

        if (username.length < 2) {
            setUsernameMessage('Username must contain at least 2 characters.')
        }
        else {
            setUsernameMessage('')
        }

        if (password.length < 5) {
            setPasswordMessage('Password must contain at least 5 characters.')
        }

        else {
            setPasswordMessage('')
        }

        if (confirmPassword !== password || confirmPassword.length === 0) {
           return setConfirmPasswordMessage('Passwords mismatch')
        }
        else {
            setConfirmPasswordMessage('')
        }

        if (!usernameMessage && !passwordMessage && !confirmPasswordMessage) {
            authService.register(username, password, imageUrl)
                .then(console.log)
                .catch(res => console.log(res.json()))
        }
    }

    return (
        <>
            <h1 className="text-primary">Register</h1>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form onSubmit={onRegisterSubmitFromHandler}>
                        <h4 className="text-primary">Create a new account.</h4>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" className="form-control" onBlur={onUsernameBlurHandler} />
                            <InputError>{usernameMessage}</InputError>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl">Image URL</label>
                            <input id="imageUrl" name="imageUrl" className="form-control" placeholder="Optional" />
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
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register