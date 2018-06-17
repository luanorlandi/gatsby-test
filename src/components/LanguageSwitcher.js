import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage as Text } from 'react-intl';

const LanguageSwitcher = ({ langs }) => (
  <div className="navbar-item has-dropdown is-hoverable">
    <div className="navbar-link"><Text id="language" /></div>
    <div className="navbar-dropdown is-boxed">
      {langs.map(language => (
        <Link
          key={language.langKey}
          className="navbar-item is-uppercase"
          to={language.link}
        >
          <Text id={language.langKey} />
        </Link>
      ))}
    </div>
  </div>
);

LanguageSwitcher.propTypes = {
  langs: PropTypes.array,
};

export default LanguageSwitcher;
