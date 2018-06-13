import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import i18n from '../js/i18n';
import Header from '../components/header';
import LanguageSwitcher from '../components/LanguageSwitcher';
import './index.scss';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <LanguageSwitcher i18n={ i18n }/>
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
