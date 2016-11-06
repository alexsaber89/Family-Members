"use strict";

function deleteFamilyMember(apiKeys,itemID) {
  return new Promise((resolve,reject)=>{
  $.ajax({
    method: 'DELETE',
    url:`${apiKeys.databaseURL}/family/${itemID}.json`,
  }).then((response)=>{
    resolve(response);
  },(error)=>{
    reject(error);
  });
});
}

module.exports = deleteFamilyMember;
