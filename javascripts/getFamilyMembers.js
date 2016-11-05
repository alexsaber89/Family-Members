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