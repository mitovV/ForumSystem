import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
            <h1 className="text-primary">Log in</h1>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <section>
                        <form id="account">
                            <h4 className="text-primary">Use a local account to log in.</h4>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input className="form-control" id="username" name="username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input className="form-control" id="password" name="password" />
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-primary">Log in</button>
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