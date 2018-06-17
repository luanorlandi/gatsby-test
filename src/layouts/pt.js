import React from 'react';
import graphql from 'graphql';
import { addLocaleData } from 'react-intl';
import pt from 'react-intl/locale-data/pt';
import Layout from './index';
import 'intl/locale-data/jsonp/pt';
import messages from '../data/messages/pt';

addLocaleData(pt);

export default props => (
  <Layout
    {...props}
    i18nMessages={messages}
  />);

export const pageQuery = graphql`
  query LayoutPt {
    site {
      siteMetadata {
        title
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`;
