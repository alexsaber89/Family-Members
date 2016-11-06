(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function addFamilyMember(apiKeys,newItem) {
  return new Promise((resolve,reject)=>{
    $.ajax({
      method: 'POST',
      url: `${apiKeys.databaseURL}/family.json`,
      data:JSON.stringify(newItem),
      dataType:'json'
    }).then((response)=>{
      console.log("response from POST: ",response);
      resolve(response);
    },(error)=>{
      reject(error);
    });
  });
}

module.exports = addFamilyMember;

},{}],2:[function(require,module,exports){
"use strict";

function displayFamilyMembers(familyMembers) {
  $("#family-members-container").html("");
  familyMembers.forEach(function(member) {
    let skills = "Enjoys ";
    member.skills.forEach(function(skill, index, array) {
      if (index !== array.length - 1) {
        skills += `${skill}, `;
      } else {
        skills += `and ${skill}.`;
      }
    });
    let familyMember =`<div class="col-xs-12 family-member-container" fbid="${member.id}">`;
    familyMember +=`<button class="btn btn-danger col-xs-1 delete">Delete</button>`;
    familyMember += `<p class="col-xs-11">${member.name} (${member.age}, ${member.gender}).  ${skills}</p>`;
    familyMember += '</div>';
    $("#family-members-container").append(familyMember);
  });
}

module.exports = displayFamilyMembers;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

let getFirebaseCredentials = require("./getFirebaseCredentials");
let getFamilyMembers = require("./getFamilyMembers");
let displayFamilyMembers = require("./displayFamilyMembers");
let addFamilyMember = require("./addFamilyMembers");

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

  $("#add-btn").on("click", function() {
    let newFamilyMember = {};
    newFamilyMember.name = $("#name-input").val();
    newFamilyMember.age = $("#age-input").val();
    newFamilyMember.gender = $("#gender-input").val();
    let skillsString = $("#skills-input").val();
    let skillsArray = skillsString.split(',');
    newFamilyMember.skills = skillsArray;
    addFamilyMember(apiKeys,newFamilyMember).then(function() {
      return getFamilyMembers(apiKeys);
    }).then(function(familyMembers) {
      displayFamilyMembers(familyMembers);
    });
  });

  // $("#family-members-container").on("click",".delete",function() {
  //   let itemID = $(this).data("fbid");
  //   FbAPI.deleteTodo(apiKeys,itemID).then(function() {
  //     displayFamilyMembers(familyMembers);
  //   });
  // });

});

},{"./addFamilyMembers":1,"./displayFamilyMembers":2,"./getFamilyMembers":3,"./getFirebaseCredentials":4}]},{},[5]);
