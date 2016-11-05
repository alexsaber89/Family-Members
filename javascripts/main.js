"use strict";

let getFirebaseCredentials = require("./getFirebaseCredentials");

$(document).ready(function() {

  getFirebaseCredentials().then(function(keys) {
    let apiKeys = keys;
    console.log("api keys: ", apiKeys);
    firebase.initializeApp(apiKeys);
  });



});
