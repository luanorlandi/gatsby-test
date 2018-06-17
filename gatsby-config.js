const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    languages,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
      },
    },
  ],
  pathPrefix: '/gatsby-test',
};
