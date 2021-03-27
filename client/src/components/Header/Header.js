import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-primary border-bottom box-shadow mb-3">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/" >Forum System</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/users/details">Hello Pesho!</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link text-white" to="/users/logout">Logout</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/users/register">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/users/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Header