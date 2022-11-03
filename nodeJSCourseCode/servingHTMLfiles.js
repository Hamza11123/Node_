// 'http' module 
const httpModule = require('http'); 

// using 'fs' module
const fs = require('fs');

// (fetching/getting/reading) the content through the [Given-File-Path]
const fileContent = fs.readFileSync('del.txt');

// using method '.createServer' from the 'http' module, & passing a call-back-function
// in-Which "request and response" variables are passed 
const server = httpModule.createServer((request, response)=>{

    // using method of 'response' Object '.writeHead' & passing "[Response-Code] and Object"
    response.writeHead(200, {'Content-type':'text/html'});

    // now, it's time to server the "Response" by using '.end' method from the "response" (Object)
    response.end(fileContent);
});

// now listening the Response With the help of ".listen(port, localHostIP, EmptyCallBackFunction);" method
server.listen(80, '127.0.0.1',  ()=>{
    console.log('listening on port 80');
}  );
