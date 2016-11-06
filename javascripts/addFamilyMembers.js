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
