import React from 'react';
import { FormattedMessage as Text } from 'react-intl';

import contactImage from '../assets/bench-carved-stones-cemetery.jpg';

const Contact = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <div className="field">
            <label className="label"><Text id="name" /></label>
            <div className="control">
              <input className="input" type="text" />
            </div>
          </div>

          <div className="field">
            <label className="label"><Text id="email" /></label>
            <div className="control">
              <input className="input" type="email" />
            </div>
          </div>

          <div className="field">
            <label className="label"><Text id="message" /></label>
            <div className="control">
              <textarea className="textarea" />
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link"><Text id="submit" /></button>
            </div>
          </div>

          <img src={contactImage} alt="Contact" />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
