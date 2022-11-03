// Synchronus or Blocking: -> "-line By line Exectution"

// Asynchronus or Non-Blocking: -> 
/* "-line by line execution not guaranteed"
   "-callbacks will fire" */

// importing "fs" Module
const fs = require('fs');
fs.readFile("del.txt", 'utf-8', (err, data)=>{
    console.log(err, data);
    // it can't find the file then, the error-text is Stored in the 'err', else 'data' "asynchronusly"
});




