import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider } from 'react-intl';
import 'intl';

import Header from '../components/Header';
import './index.scss';

const TemplateWrapper = ({
  children,
  data,
  location,
  i18nMessages,
}) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider
      locale={langKey}
      messages={i18nMessages}
    >
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} langs={langsMenu} />
        <div>
          {children()}
        </div>
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
  location: PropTypes.object,
  i18nMessages: PropTypes.object,
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query Layout {
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
