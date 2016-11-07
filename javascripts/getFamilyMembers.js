"use strict";

function getFamilyMembers(apiKeys) {
  return new Promise((resolve,reject)=>{
    $.ajax({
      method: 'GET',
      url: `${apiKeys.databaseURL}/family.json`
    }).then((response)=>{
      let items = [];
      if (response) {
        Object.keys(response).forEach(function(key){
          if (response[key]) {
            response[key].id = key;
            items.push(response[key]);
          } else {
            console.log("null object");
          }
        });
        } else {
          console.log("null data returned");
        }
      resolve(items);
    },(error)=>{
      reject(error);
    });
  });
}

module.exports = getFamilyMembers;
