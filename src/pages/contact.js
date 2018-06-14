import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import contactImage from '../assets/bench-carved-stones-cemetery.jpg';

const Contact = ({ t }) => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="field">
            <label className="label">{t('name')}</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>

          <div className="field">
            <label className="label">{t('email')}</label>
            <div className="control">
              <input className="input" type="email" />
            </div>
          </div>

          <div className="field">
            <label className="label">{t('message')}</label>
            <div className="control">
              <textarea className="textarea" />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">{t('submit')}</button>
            </div>
          </div>

          <img src={contactImage} alt="Hero" />
        </div>
      </div>
    </div>
  </section>
);

Contact.propTypes = {
  t: PropTypes.func,
};

export default translate('Contact')(Contact);
