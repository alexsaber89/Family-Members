"use strict";

let getFirebaseCredentials = require("./getFirebaseCredentials");
let getFamilyMembers = require("./getFamilyMembers");

$(document).ready(function() {

  let apiKeys = "";

  getFirebaseCredentials().then(function(keys) {
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
    getFamilyMembers(apiKeys);
  });

  

});
