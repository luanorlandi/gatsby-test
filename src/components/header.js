import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
      </Link>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/">Contact</Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-link">Language</div>
          <div className="navbar-dropdown is-boxed">
            <a className="navbar-item" href="/documentation/overview/start/">
              English
            </a>
            <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Português
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
