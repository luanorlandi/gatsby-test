import React from 'react';
import { renderToString } from 'react-dom/server';
import i18n from './src/js/i18n';

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.loadNamespaces(['common'], () => {
    replaceBodyHTMLString(bodyComponent);
  });
};
