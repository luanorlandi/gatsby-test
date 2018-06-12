import React, { Component } from "react";
import Link from 'gatsby-link';
import { translate } from "react-i18next";

class IndexPage extends Component {
  render() {
    const { t } = this.props;

    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="column is-8 is-offset-2">
              <h1 className="title">
                {t("heading")}
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
  }
}

export default translate("Home")(IndexPage);
