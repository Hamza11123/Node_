 // getting-started.js (https://mongoosejs.com/docs/)
const mongoose = require('mongoose'); // it's a layer between data-base & node-js, it helps the Node-js to connect with [mongo-db Data-Base]

main().catch(eror => console.log(eror));

// putting the [location/path/url] of the DATABASE from which we wanna connect with Node-js
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser:true, useUnifiedTopology:true});
}

// creating connection... with the database.. 
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection-error: cant connect'));
db.once('open', function(){
    // we're connected..!
    console.log('connected :)'); // if the promise resolves, it's logged into the console.
});

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const kittySchema = new mongoose.Schema({ // structure of the data
  name: String,
  aage: Number
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function speak() {  // creating a method in the 'kittySchema' Obj
  const greeting = `this method '.speak()' prints this.. ${this.name} ${this.aage}`
  console.log(greeting);
};

// A model is a class with which we construct documents, basically ek schema ko model mein compile hona parta h.. further process k liyee..!
const Kitten = mongoose.model('Kitten', kittySchema); // Model banny k baad koi bhi changes data mein practically possible nhi hn..!, & "is Ny kitten Name Ki [Collection] Khud Banadi h..to write Documents in it"


// Creating "hamzaSilence" (named-Object) With The Help of a (Kitten)(Constructor) putting the values in the fields & logging into console..
const hamzaSilence = new Kitten({
  name: 'hamzaSilence ka Naam', 
  aage: 44 
});
console.log(hamzaSilence.name, hamzaSilence.aage); // 'Silence'
console.log(hamzaSilence.speak());
