import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { FaCartShopping } from 'react-icons/fa6'
import NavLink from './NavLink'

const NavBar = () => {
  return (
     <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
      <div className= "container">
        {/* <a href="#">Home</a> */}
        <Link className="navbar-brand fw-bold text-uppercase" to="/">SHOPPIT</Link>
        <button
          className='navbar-toggler'
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="#navbarContent"
          aria-expanded="false"
          aria-label="Toogle navigation"
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarContent">
          <NavLink />
          <Link to="/cart" className={`btn btn-dark ns-3 rounded-pill position-relative ${styles.responsiveCart}`}>
            <FaCartShopping />
            <span
              className='position-absolute top-0 start-100 translate-middle badge rounded-pill '
              style={{fontSize : '0.82rem', padding:"0.5em 0.65em", backgroundColor:"#6050DC"}}
            >
              12
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
