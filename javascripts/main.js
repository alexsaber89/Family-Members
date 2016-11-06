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
