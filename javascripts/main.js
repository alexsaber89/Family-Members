"use strict";

let getFirebaseCredentials = require("./getFirebaseCredentials");
let getFamilyMembers = require("./getFamilyMembers");
let displayFamilyMembers = require("./displayFamilyMembers");

$(document).ready(function() {

  let apiKeys = "";

  getFirebaseCredentials().then(function(keys) {
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
  }).then(function() {
    return getFamilyMembers(apiKeys);
  }).then(function(familyMembers) {
    displayFamilyMembers(familyMembers);
  });

});
