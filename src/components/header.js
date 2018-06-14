import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { translate } from 'react-i18next';

import i18n from '../js/i18n';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Header = ({ siteTitle, t }) => (
  <nav className="navbar has-shadow is-spaced">
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
        <Link className="navbar-item" to="/">{t('home')}</Link>
        <Link className="navbar-item" to="/contact">{t('contact')}</Link>
        <LanguageSwitcher i18n={i18n} />
      </div>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  t: PropTypes.func,
};

export default translate('Header')(Header);
