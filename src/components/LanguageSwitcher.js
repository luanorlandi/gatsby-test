import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

class LanguageSwitcher extends Component {
  static propTypes = {
    i18n: PropTypes.object,
    t: PropTypes.func,
  }

  constructor(props) {
    super(props);
    const { i18n } = this.props;
    this.state = { language: i18n.language };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage = (lng) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  }

  renderLanguageChoice = ({ code, label }) =>
    (
      <a
        key={code}
        className="navbar-item is-uppercase"
        onClick={() => this.handleChangeLanguage(code)}
      >
        {label}
      </a>
    );

  render() {
    const { t } = this.props;
    const languages = [
      { code: 'en-US', label: t('en-US') },
      { code: 'pt-BR', label: t('pt-BR') },
    ];

    return (
      <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-link is-uppercase">{t(this.state.language)}</div>
        <div className="navbar-dropdown is-boxed">
          {languages.map(language => this.renderLanguageChoice(language))}
        </div>
      </div>
    );
  }
}

export default translate('LanguageSwitcher')(LanguageSwitcher);
