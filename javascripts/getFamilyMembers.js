"use strict";

function getFamilyMembers(apiKeys) {
  return new Promise((resolve,reject)=>{
    $.ajax({
      method: 'GET',
      url: `${apiKeys.databaseURL}/family.json`
    }).then((response)=>{
      console.log("getFamilyMembers response: ",response);
      let items = [];
      Object.keys(response).forEach(function(key){
        response[key].id = key;
        items.push(response[key]);
      });
      resolve(items);
      console.log("family member items: ", items);
    },(error)=>{
      reject(error);
    });
  });
}

module.exports = getFamilyMembers;
