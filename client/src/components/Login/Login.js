import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'

import userContext from '../../contexts/userContext'

import * as authService from '../../services/authService'

import InputError from '../Shared/InputError'

const Login = ({
    history
}) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useContext(userContext)

    const onSubmitLoginHandler = (e) => {
        e.preventDefault()

        let username = e.target.username.value
        let password = e.target.password.value

        authService.login(username, password)
            .then(res => {
                if (res.message) {
                    setErrorMessage(res.message)
                }
                else {
                    setErrorMessage('')
                    setUser(res)
                    history.push('/')
                }
            })
            .catch(err => setErrorMessage(err.message))
    }

    return (
        <>
            <h1 className="text-primary">Log in</h1>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <section>
                        <form onSubmit={onSubmitLoginHandler}>
                            <h4 className="text-primary">Use a local account to log in.</h4>
                            <hr />
                            <InputError>{errorMessage}</InputError>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" id="username" name="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Log in</button>
                            </div>
                            <div className="form-group">
                                <p>
                                    <Link to="/users/register">Register as a new user</Link>
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Login