import React from 'react';
import graphql from 'graphql';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import Layout from './index';
import 'intl/locale-data/jsonp/en';
import messages from '../data/messages/en';

addLocaleData(en);

export default props => (
  <Layout
    {...props}
    i18nMessages={messages}
  />);

export const pageQuery = graphql`
  query LayoutEn {
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
