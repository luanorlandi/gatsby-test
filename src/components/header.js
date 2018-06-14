import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import i18n from '../js/i18n';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Header = ({ siteTitle }) => (
  <nav className="navbar is-transparent">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">{siteTitle}</Link>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <Link className="navbar-item" to="/">Home</Link>
        <Link className="navbar-item" to="/contact">Contact</Link>
        <LanguageSwitcher i18n={i18n} />
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
