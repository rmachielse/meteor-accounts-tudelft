Package.describe({
  summary: "TU Delft API and OAuth login service for Meteor Accounts"
});

Package.on_use(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('tudelft', ['client', 'server']);

  api.add_files('tudelft_login_button.css', 'client');
  
  api.add_files('tudelft.js');
});