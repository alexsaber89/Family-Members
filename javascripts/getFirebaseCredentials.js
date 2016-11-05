"use strict";

function setFirebaseCredentials() {
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

module.exports = setFirebaseCredentials;
