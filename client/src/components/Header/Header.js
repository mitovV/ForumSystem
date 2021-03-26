import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <NavLink className="navbar-brand text-white" to="/">Forum System</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav justify-content-end">
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/users/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link text-white" to="/users/register">Register</NavLink>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Header