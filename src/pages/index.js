import React from 'react';
import PropTypes from 'prop-types';

import { translate } from 'react-i18next';

const Home = (props) => {
  const { t } = props;

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="column is-8 is-offset-2">
            <h1 className="title">
              {t('heading')}
            </h1>
            <h2 className="subtitle">
              Lorem ipsum
            </h2>
            <p>
              Lorem ipsum dolor sit amet, non non platea eu, neque vel massa
              corporis quis, aliquip integer. Dolor in felis. Et bibendum orci
              justo, praesent eget feugiat at nibh pede, sodales consequat urna
              dolor, primis eget mi, egestas elit. Eget luctus ac in proin id ut.
              Orci vivamus, tempor nunc, quis duis dictum. Placerat vestibulum
              consequat consectetuer pellentesque. Ipsum eu pellentesque amet
              habitant id.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Home.propTypes = {
  t: PropTypes.func,
};

export default translate('Home')(Home);
