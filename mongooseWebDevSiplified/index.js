// npm i --save-dev (package-name)  "it'll install the package as a devDepencies"

const mongoose = require('mongoose');
const User = require("./User");

// mongoose.connect('mongodb//localhost/testdb',
//     ()=>{
//         console.log('connected')
//     },
//     (err)=>{
//         console.log(err);
//     }
// )

/*--------- We can also use WithOut callBacks -----------*/
// Connecting.. with db
mongoose.connect('mongodb://localhost/testDb');

/*---- Method-3 [For-Saving-Data] into data-base By Using (Promises) ----*/
// const user = new User({
//     name: "promises",
//     age: 34
// });
// user.save().then(() => console.log("done... by promises.."));


runn();


// async function runn(){

//     /*--- Method-2 [For-Saving-Data] by 'User' [.create]-Method ---*/
//     // const user = await User.create({
//     //     name: "hamza",
//     //     age: 24
//     // })
    

//     /*--- Method-1 [For-Saving-Data] by 'User' Constructor ---*/
//     // const user = new User({
//     //     name: "hamza",
//     //     age: 23
//     // });
//     // await user.save();
// }
console.log(user);


