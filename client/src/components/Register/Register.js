const Register = () => {
    return (
        <>
            <h1 className="text-primary">Register</h1>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form>
                        <h4 className="text-primary">Create a new account.</h4>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input id="username" name="username" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input id="confirmPassword" name="confirmPassword" className="form-control" />
                        </div>
                        <button type="button" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register