"use strict";

function displayFamilyMembers(familyMembers) {
  $("#family-members-container").html("");
  familyMembers.forEach(function(member) {
    let familyMember =`<div class="col-xs-12 family-member-container">`;
    familyMember+=`<button class="btn btn-default col-xs-1 edit">Edit</button>`;
    familyMember+=`<button class="btn btn-danger col-xs-1 delete">Delete</button>`;
    familyMember+=`<p class="col-xs-10">${member.name} (${member.age}, ${member.gender})</p>`;
    familyMember+='</div>';
    $("#family-members-container").append(familyMember);
  });
}

module.exports = displayFamilyMembers;
