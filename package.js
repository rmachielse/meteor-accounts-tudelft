Package.describe({
  summary: "TU Delft API and OAuth login service for Meteor Accounts",
  version: "0.0.6",
  git: "https://github.com/rmachielse/meteor-accounts-tudelft.git"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('tudelft', ['client', 'server']);

  api.addFiles('tudelft_login_button.css', 'client');
  
  api.addFiles('tudelft.js');
});