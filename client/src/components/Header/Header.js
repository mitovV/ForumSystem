import { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'

import userContext from '../../contexts/userContext'

import './Header.css'

const Header = () => {
  const [user] = useContext(userContext)

  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3" style={{backgroundImage : 'url(/header.jpg)'}}>
      <div className="container">
        <Link className="navbar-brand text-white" to="/" >Forum System</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-end">
          <ul className="navbar-nav">
            {user ?
              <>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/users/details">Hello {user.username}!</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/users/logout">Logout</NavLink>
                </li>
              </> :
              <>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/users/register">Register</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/users/login">Login</NavLink>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header