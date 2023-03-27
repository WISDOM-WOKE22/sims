import './navbar.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='navbar-wrapper'>
        <div className='logo-container'>
            <h3>SIMS</h3>
        </div>
        <div className='menu-items'>
            <li>
              <NavLink className='link' to='/about_us'>
                About Us
              </NavLink>
              </li>
            <li>
              <NavLink className='link' to='/equipment_list'>
                List
              </NavLink>
              </li>
        </div>
        <div className='start-button G-button'>
          <NavLink to='/weight-control'>
            <button>Get Started</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}
