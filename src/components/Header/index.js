// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <ul className="header-list">
      <li className="list-item">Home</li>
      <li className="list-item">Products</li>
      <li className="list-item">Cart</li>
      <button type="button" className="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logout"
        />
        Logout
      </button>
    </ul>
  </div>
)
export default Header
