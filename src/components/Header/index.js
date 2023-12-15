import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
