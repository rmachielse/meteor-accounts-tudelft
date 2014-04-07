Accounts.oauth.registerService('tudelft');

if (!Accounts.tudelft) {
  Accounts.tudelft = {};
}

if (Meteor.isClient) {
  Meteor.loginWithTudelft = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Tudelft.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.tudelft'],
    forOtherUsers: ['services.tudelft.student_id']
  });
}