// Modules: the Code Already Writen By Other! For Convience :)
// like  as we add the BootStrap JavaScript Library To Use Their CSS :)

console.log("Hello tut 2 in Node ");

// using "fs" Module
const fs = require("fs");

let text = fs.readFileSync("del.txt", "utf-8");   // using the method     
// console.log(text);

text = text.replace("del", "node"); // Manipulating The Data, with The STRING Method, which replaces the SubString with the Given String 

console.log("Creating a new File!");
fs.writeFileSync("createdFile.txt", text); // first argument is file-path, and second one is the "Data" (what to put?)



