import * as React from "react"
import NavBar from "../components/navbar"

const Layout = ({location,title,children}) => {
  return (
    <div className="global-wrapper">
      <NavBar title={title} />
      <main>{children}</main>
      <footer> © {new Date().getFullYear()}, hinomaruc </footer>
    </div>
  )
}

export default Layout
