(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function getFamilyMembers(apiKeys) {
  return new Promise((resolve,reject)=>{
    $.ajax({
      method: 'GET',
      url: `${apiKeys.databaseURL}/family.json`
    }).then((response)=>{
      let items = [];
      Object.keys(response).forEach(function(key){
        response[key].id = key;
        items.push(response[key]);
      });
      resolve(items);
      console.log("family members: ", items);
    },(error)=>{
      reject(error);
    });
  });
}

module.exports = getFamilyMembers;

},{}],2:[function(require,module,exports){
"use strict";

function getFirebaseCredentials() {
  return new Promise((resolve,reject)=>{
    $.ajax({
      method: 'GET',
      url: `apiKeys.json`
    }).then((response)=>{
      resolve(response);
    },(error)=>{
      reject(error);
    });
  });
}

module.exports = getFirebaseCredentials;

},{}],3:[function(require,module,exports){
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

},{"./getFamilyMembers":1,"./getFirebaseCredentials":2}]},{},[3]);
