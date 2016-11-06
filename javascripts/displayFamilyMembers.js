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
