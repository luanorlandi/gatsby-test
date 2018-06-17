import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { injectIntl, FormattedMessage as Text } from 'react-intl';

import LanguageSwitcher from './LanguageSwitcher';

const Header = ({ siteTitle, langs, intl }) => (
  <nav className="navbar has-shadow is-spaced">
    <div className="navbar-brand">
      <Link className="navbar-item" to={`/${intl.locale}`}>{siteTitle}</Link>
      <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span />
        <span />
        <span />
      </div>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <Link className="navbar-item" to={`/${intl.locale}`}><Text id="home" /></Link>
        <Link className="navbar-item" to={`/${intl.locale}/contact/`}><Text id="contact" /></Link>
        <LanguageSwitcher langs={langs} />
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  langs: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Header);
