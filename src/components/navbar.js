import * as React from "react"
import { Link } from "gatsby"

const NavBar = ({location, title}) => {
  return (

    <nav className="navbar">
      <Link to="/">{title}</Link>
      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/">HOME</Link>
        </li>
        <li className="navbar__li">
          <Link to="/About">ABOUT</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
