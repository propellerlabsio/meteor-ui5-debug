/**
 * @file package.js
 * @copyright PropellerLabs.com 2016
 * @license Apache-2.0
 *
 * @namespace meteor-ui5-debug
 * @description The Meteor UI5 Debug package
 */

/* globals Package */

Package.describe({
  name: 'propellerlabsio:meteor-ui5-debug',
  version: '0.1.1',
  summary: 'Debugging helper for building web apps using UI5.',
  git: 'https://github.com/propellerlabsio/meteor-ui5-debug',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom('1.4.0.1');
  api.use('ecmascript');

  // Add a convience web app connect handler to allow user to debug their
  // UI5 apps using the normal UI5 debug option as long as they build their apps
  // in the public/webapp folder.
  api.use('webapp', 'server');
  api.addFiles('server/ui5DebugHandler.js', 'server');
});
