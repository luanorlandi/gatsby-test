import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import heroImage from '../assets/canoe_water_nature.jpg';

const Home = ({ t }) => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <h1 className="title">{t('heroTitle')}</h1>
            <h2 className="subtitle">{t('heroSubtitle')}</h2>
            <p>{t('heroDescription')}</p>
          </div>
          <div className="column is-6">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

Home.propTypes = {
  t: PropTypes.func,
};

export default translate('Home')(Home);
