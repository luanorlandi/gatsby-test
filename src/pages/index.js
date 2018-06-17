import React from 'react';
import { FormattedMessage as Text } from 'react-intl';
import Link from 'gatsby-link';

import heroImage from '../assets/canoe_water_nature.jpg';

const IndexPage = () => (
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <h1 className="title"><Text id="heroTitle" /></h1>
            <h2 className="subtitle"><Text id="heroSubtitle" /></h2>
            <p><Text id="heroDescription" /></p>
          </div>
          <div className="column is-6">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
        <Link
          className="button"
          to="contact"
        >
          <Text id="contact" />
        </Link>
      </div>
    </div>
  </section>
);

export default IndexPage;
